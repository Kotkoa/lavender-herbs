import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const BASE_URL = 'https://kotkoa.github.io/lavender-herbs'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Lavender·Herbs — Pure lavender from field to your home',
  description:
    'Essential oil, hydrosol, dried flowers and agrotourism. Lavandula angustifolia grown with care — from our sun‑drenched field to your home.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Lavender·Herbs',
    title: 'Lavender·Herbs — Pure lavender from field to your home',
    description:
      'Essential oil, hydrosol, dried flowers and agrotourism. Lavandula angustifolia grown with care — from our sun‑drenched field to your home.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lavender field at sunset — Lavender·Herbs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lavender·Herbs — Pure lavender from field to your home',
    description:
      'Essential oil, hydrosol, dried flowers and agrotourism. Lavandula angustifolia grown with care — from our sun‑drenched field to your home.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
