'use client'

import { useEffect, useRef, useState } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import SectionLabel from '@/components/layout/SectionLabel'

const testimonials = [
  {
    quote:
      'The essential oil quality is exceptional — clean, true lavender aroma. Already reordering.',
    author: 'Anna Müller',
    role: 'Aromatherapist, Germany',
  },
  {
    quote:
      'Beautiful dried lavender bunches for my wedding. Arrived perfectly packed and lasted for months.',
    author: 'Sarah Williams',
    role: 'Interior Designer, United Kingdom',
  },
  {
    quote:
      'As a florist, the consistent quality and seasonal availability make them my go-to supplier.',
    author: 'Marieke van Dijk',
    role: 'Florist, Netherlands',
  },
]

const stats = [
  { value: 500, suffix: '+', label: 'Happy customers' },
  { value: 1.25, suffix: '%', label: 'Essential oil yield' },
  { value: 4.9, suffix: '', label: 'Average rating' },
]

function StatCounter({
  value,
  suffix,
  label,
  start,
}: {
  value: number
  suffix: string
  label: string
  start: boolean
}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 1800, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((value * ease).toFixed(value < 10 ? 2 : 0)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, value])
  const formatted =
    value < 10 ? count.toFixed(1) : Math.round(count).toLocaleString()
  return (
    <div className="text-center">
      <div className="text-4xl font-bold tabular-nums text-tone-50">
        {formatted}
        {suffix}
      </div>
      <div className="text-[10px] mt-2 uppercase tracking-[0.15em] text-tone-300">
        {label}
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [countersStarted, setCountersStarted] = useState(false)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.reveal')
    if (!cards) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.transitionDelay = el.dataset.delay
              ? `${el.dataset.delay}ms`
              : '0ms'
            el.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersStarted(true)
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[linear-gradient(180deg,var(--tone-500)_0%,var(--tone-600)_100%)] py-20">
      <div className="container-mx">
        <SectionLabel light>What people say</SectionLabel>
        <h2 className="mb-8 text-section text-tone-50">
          <span className="font-bold">Loved by people</span>{' '}
          <span className="font-light text-tone-200">
            who appreciate real lavender.
          </span>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="reveal" data-delay={i * 100}>
              <GlassCard
                variant="testimonial"
                className="h-full flex flex-col"
              >
                <span className="text-3xl font-bold leading-none mb-4 text-tone-200">
                  &ldquo;
                </span>
                <blockquote className="text-sm leading-relaxed flex-1 mb-6 text-tone-100">
                  {t.quote}
                </blockquote>
                <footer>
                  <p className="font-semibold text-sm text-tone-50">
                    {t.author}
                  </p>
                  <p className="text-xs mt-0.5 text-tone-300">{t.role}</p>
                </footer>
              </GlassCard>
            </div>
          ))}
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
        >
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} start={countersStarted} />
          ))}
        </div>
      </div>
    </section>
  )
}
