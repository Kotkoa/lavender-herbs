import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'
import DonatePageClient from '@/components/donate/DonatePageClient'

export const metadata: Metadata = {
  title: 'Plant a Lavender Bush | Lavender Herbs',
  description:
    'Help us plant 10,000 lavender bushes. Each €1 donation plants one bush in our field.',
}

export default function DonatePage() {
  return (
    <>
      <PageHero
        label="Support"
        title="Plant a Lavender Bush."
        subtitle="Help us fill our 1,000 m² field with 10,000 lavender bushes. Each €1 plants one bush — watch the field grow in real time."
      />
      <DonatePageClient />
    </>
  )
}
