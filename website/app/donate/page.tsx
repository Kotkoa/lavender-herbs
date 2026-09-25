import type { Metadata } from 'next'
import PageHero from '@/components/layout/PageHero'
import DonatePageClient from '@/components/donate/DonatePageClient'
import { SITE_NAME } from '@/lib/site'

const TITLE = 'Grow the Lavender Field | Lavender Herbs'
const DESCRIPTION = 'Voluntary support payments via Stripe. Every €1 adds one lavender bush to the field counter.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/donate',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/donate',
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lavender field at sunset — Lavender·Herbs',
      },
    ],
  },
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
