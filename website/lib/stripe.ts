const PAYMENT_LINK_URL = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? ''

export function getCheckoutUrl(): string {
  return PAYMENT_LINK_URL
}
