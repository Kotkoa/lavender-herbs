import Stripe from 'https://esm.sh/stripe@22.6.2?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY')
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')

if (!stripeSecretKey || !webhookSecret) {
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
  if (session.payment_status !== 'paid' || session.currency !== 'eur') {
    return response({ received: true, counted: false })
  }

  try {
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1 })
    const quantity = lineItems.data[0]?.quantity
    const cents = session.amount_total

    if (!Number.isSafeInteger(quantity) || quantity <= 0 || !Number.isSafeInteger(cents) || cents <= 0) {
      console.error('Invalid Stripe Checkout session:', session.id)
      return new Response('Invalid Checkout session', { status: 500 })
    }

    const { data: inserted, error } = await supabase.rpc('process_donation', {
      ext_id: session.id,
      src: 'stripe',
      qty: quantity,
      cents,
      donor: session.customer_details?.name ?? null,
    })

    if (error) {
      console.error('Failed to process Stripe donation:', error)
      return new Response('Database error', { status: 500 })
    }

    if (!inserted) {
      console.log('Duplicate Stripe webhook:', session.id)
    }
  } catch (error) {
    console.error('Failed to process Stripe webhook:', error)
    return new Response('Webhook processing failed', { status: 500 })
  }

  return response({ received: true })
})
