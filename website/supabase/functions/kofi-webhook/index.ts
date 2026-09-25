import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

const VERIFICATION_TOKEN = Deno.env.get('KOFI_VERIFICATION_TOKEN')
if (!VERIFICATION_TOKEN) {
  throw new Error('KOFI_VERIFICATION_TOKEN is not set')
}

// Shop orders and commissions are purchases, not support for the field counter.
const COUNTED_TYPES: Record<string, true> = { Donation: true, Subscription: true }

// The counter is "€1 = 1 bush"; the Ko-fi page receives payments in EUR.
const COUNTED_CURRENCY = 'EUR'

// Ko-fi sends amounts as decimal strings, e.g. "3.00".
const AMOUNT_PATTERN = /^(\d+)(?:\.(\d{1,2}))?$/

interface KofiPayment {
  verification_token: string
  kofi_transaction_id: string
  type: string
  amount: string
  currency: string
  from_name: string | null
  is_public: boolean
}

function parsePayment(raw: FormDataEntryValue | null): KofiPayment | null {
  if (typeof raw !== 'string') return null
  try {
    return JSON.parse(raw) as KofiPayment
  } catch {
    return null
  }
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const form = await request.formData().catch(() => null)
  const payment = parsePayment(form?.get('data') ?? null)
  if (!payment) {
    return new Response('Missing or invalid data field', { status: 400 })
  }

  if (payment.verification_token !== VERIFICATION_TOKEN) {
    return new Response('Invalid verification token', { status: 401 })
  }

  if (Object.hasOwn(COUNTED_TYPES, payment.type)) {
    if (payment.currency !== COUNTED_CURRENCY) {
      console.warn('Skipping non-EUR Ko-fi payment:', payment.kofi_transaction_id, payment.currency)
      return new Response(JSON.stringify({ received: true, counted: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const amount = AMOUNT_PATTERN.exec(payment.amount ?? '')
    const euros = amount ? Number(amount[1]) : 0
    const cents = amount ? euros * 100 + Number((amount[2] ?? '').padEnd(2, '0')) : 0
    if (cents <= 0 || !Number.isSafeInteger(cents) || !payment.kofi_transaction_id) {
      return new Response('Invalid amount or transaction id', { status: 400 })
    }

    const { data: inserted, error } = await supabase.rpc('process_donation', {
      ext_id: payment.kofi_transaction_id,
      src: 'kofi',
      qty: Math.max(1, euros),
      cents,
      donor: payment.is_public ? payment.from_name : null,
    })

    if (error) {
      console.error('Failed to process Ko-fi payment:', error)
      return new Response('Database error', { status: 500 })
    }

    if (!inserted) {
      console.log('Duplicate Ko-fi webhook:', payment.kofi_transaction_id)
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
})
