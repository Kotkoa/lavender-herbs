'use client'

import { useEffect, useRef } from 'react'
import SectionLabel from '@/components/layout/SectionLabel'
import Button from '@/components/ui/Button'

const activities = [
  {
    icon: '📸',
    title: 'Photo Sessions',
    description:
      'Private photo shoots in the blooming lavender field. Peak season June–July.',
    href: '/visit#photo',
  },
  {
    icon: '🌿',
    title: 'Farm Tour',
    description:
      'Guided walk through the lavender field and distillation process.',
    href: '/visit#tour',
  },
  {
    icon: '✂️',
    title: 'U-Pick',
    description:
      'Harvest your own lavender bouquet during the blooming season.',
    href: '/visit#upick',
  },
]

export default function AgrotourismSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
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
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[linear-gradient(180deg,var(--tone-600)_0%,var(--tone-700)_100%)] py-20">
      <div
        ref={ref}
        className="container-mx"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal" data-delay="0">
              <SectionLabel light>Visit us</SectionLabel>
            </div>
            <h2
              className="reveal mb-6 font-bold text-section text-tone-50"
              data-delay="80"
            >
              Experience lavender in bloom.
            </h2>
            <p
              className="reveal mb-10 text-base leading-relaxed text-tone-200"
              data-delay="160"
            >
              Visit our lavender field during the blooming season and enjoy the
              scent, color and calm of the countryside. Open June — August.
            </p>

            <div className="flex flex-col gap-4">
              {activities.map((activity, i) => (
                <div
                  key={activity.title}
                  className="reveal flex gap-4 items-start"
                  data-delay={240 + i * 80}
                >
                  <span className="text-2xl mt-0.5">{activity.icon}</span>
                  <div>
                    <h3 className="font-semibold mb-1 text-tone-100">
                      {activity.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-tone-300">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10" data-delay="500">
              <Button
                href="/visit"
                variant="outline"
                className="border-tone-200 text-tone-100 hover:bg-tone-200 hover:text-tone-900"
              >
                Plan your visit
              </Button>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-3" data-delay="200">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`rounded-xl flex items-center justify-center text-xs bg-tone-50/10 border border-tone-50/15 text-tone-400 ${n === 1 ? 'aspect-[1/1.2] row-span-2' : 'aspect-square'}`}
              >
                Photo {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
