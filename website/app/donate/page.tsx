import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'
import DonatePageClient from '@/components/donate/DonatePageClient'

export const metadata: Metadata = {
  title: 'Grow the Lavender Field | Lavender Herbs',
  description:
    'Voluntary support payments via Stripe. Every €1 adds one lavender bush to the field counter.'
}

export default function DonatePage() {
  return (
    <>
      <PageHero
        label="Support"
        title="Grow the Lavender Field."
        subtitle="Support the field through Stripe: every €1 adds one bush to the counter, in real time."
      />
      <DonatePageClient />
    </>
  )
}
