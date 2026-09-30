import Stripe from 'https://esm.sh/stripe@22.6.2?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { renderThankYouEmail } from './thank-you-email.ts'

const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY')
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
const resendApiKey = Deno.env.get('RESEND_API_KEY')

if (!stripeSecretKey || !webhookSecret || !resendApiKey) {
  throw new Error('Stripe webhook secrets are not configured')
}

const stripe = new Stripe(stripeSecretKey, { apiVersion: '2026-08-26.dahlia' })
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

const COUNTED_EVENTS = new Set([
  'checkout.session.completed',
  'checkout.session.async_payment_succeeded',
])

// The Stripe account also receives Ko-fi payments; only sessions from the site's Payment Link count.
const SITE_PAYMENT_LINK = 'plink_1UJYUEEbCLGxJE3eJWIniNly'

function response(body: Record<string, boolean>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = await stripe.webhooks.constructEventAsync(
      await request.text(),
      signature,
      webhookSecret,
    )
  } catch {
    return new Response('Invalid signature', { status: 400 })
  }

  if (!COUNTED_EVENTS.has(event.type)) {
    return response({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const paymentLink = typeof session.payment_link === 'string' ? session.payment_link : session.payment_link?.id
  // With Adaptive Pricing the customer may pay in a local currency; the price itself stays in EUR.
  const conversion = session.currency_conversion
  const currency = conversion?.source_currency ?? session.currency
  if (paymentLink !== SITE_PAYMENT_LINK || session.payment_status !== 'paid' || currency !== 'eur') {
    return response({ received: true, counted: false })
  }

  try {
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1 })
    const quantity = lineItems.data[0]?.quantity
    const cents = conversion?.amount_total ?? session.amount_total

    if (typeof quantity !== 'number' || !Number.isSafeInteger(quantity) || quantity <= 0 ||
      typeof cents !== 'number' || !Number.isSafeInteger(cents) || cents <= 0) {
      console.error('Invalid Stripe Checkout session:', session.id)
      return new Response('Invalid Checkout session', { status: 500 })
    }

    const { data: inserted, error } = await supabase.rpc('process_donation', {
      ext_id: session.id,
      src: 'stripe',
      qty: quantity,
      cents,
      // Payer names stay in Stripe; the public counter needs no personal data.
      donor: null,
    })

    if (error) {
      console.error('Failed to process Stripe donation:', error)
      return new Response('Database error', { status: 500 })
    }

    if (!inserted) {
      console.log('Duplicate Stripe webhook:', session.id)
    }

    const email = session.customer_details?.email
    if (email) {
      const { data: donation, error: selectError } = await supabase
        .from('donations')
        .select('thank_you_sent_at')
        .eq('external_id', session.id)
        .single()
      if (selectError) {
        console.error('Failed to read thank-you status:', selectError)
        return new Response('Database error', { status: 500 })
      }

      if (!donation.thank_you_sent_at) {
        const { subject, html, text } = renderThankYouEmail({ name: session.customer_details?.name, bushes: quantity })
        const sent = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
            // Concurrent or post-crash retries of the same session send one email.
            'Idempotency-Key': `thank-you/${session.id}`,
          },
          body: JSON.stringify({
            from: 'Lavender Herbs <support@lavenderherbs.org>',
            to: [email],
            subject,
            html,
            text,
          }),
        })
        if (!sent.ok) {
          // A non-2xx response makes Stripe retry the webhook; the counter is already idempotent.
          console.error('Failed to send thank-you email:', sent.status, await sent.text())
          return new Response('Email sending failed', { status: 500 })
        }

        const { error: updateError } = await supabase
          .from('donations')
          .update({ thank_you_sent_at: new Date().toISOString() })
          .eq('external_id', session.id)
        if (updateError) {
          console.error('Failed to record thank-you email:', updateError)
          return new Response('Database error', { status: 500 })
        }
      }
    }
  } catch (error) {
    console.error('Failed to process Stripe webhook:', error)
    return new Response('Webhook processing failed', { status: 500 })
  }

  return response({ received: true })
})
