'use client'

import { useEffect, useRef } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import SectionLabel from '@/components/layout/SectionLabel'
import Button from '@/components/ui/Button'

const products = [
  {
    title: 'Essential Oil',
    description:
      'Pure lavender essential oil, steam-distilled in small batches on our farm. Perfect for relaxation, aromatherapy, and natural home rituals.',
    meta: 'Available in 5 ml, 10 ml and 30 ml',
    href: '/products#oil',
  },
  {
    title: 'Lavender Hydrosol',
    description:
      'Light aromatic lavender water produced during distillation. Refreshing for skin, linen, and a calming home atmosphere.',
    meta: 'Available in 50 ml, 100 ml and 250 ml',
    href: '/products#hydrosol',
  },
  {
    title: 'Dried Lavender',
    description:
      'Naturally dried lavender bunches and buds. Perfect for home décor, bouquets, weddings, and creative projects.',
    meta: 'Available seasonally from June to August',
    href: '/products#dried-flowers',
  },
]

export default function ProductsSection() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.reveal')
    if (!cards) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay ?? '0'
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[linear-gradient(180deg,var(--tone-100)_0%,var(--tone-200)_100%)] py-20">
      <div className="container-mx">
        <SectionLabel>Our Products</SectionLabel>
        <h2 className="mb-4 text-section text-tone-900 max-w-135">
          <span className="font-bold">Bring the calm of lavender</span>{' '}
          <span className="font-light italic text-tone-600">
            into your day.
          </span>
        </h2>
        <p className="mb-10 max-w-lg text-sm leading-relaxed text-muted-light">
          Pure essential oil, aromatic hydrosol and dried flowers — crafted in
          small batches on our farm.
        </p>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={product.title} className="reveal" data-delay={i * 80}>
              <GlassCard variant="feature" className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-tone-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-tone-900">
                  {product.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-3 text-muted-light">
                  {product.description}
                </p>
                <p className="text-xs mb-6 text-tone-400">{product.meta}</p>
                <Button
                  variant="outline"
                  href={product.href}
                  className="self-start text-sm px-4 py-2"
                >
                  Learn more
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="solid" href="/products">
            View all products
          </Button>
        </div>
      </div>
    </section>
  )
}
