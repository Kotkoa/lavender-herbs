'use client'

import { useEffect, useRef } from 'react'
import SectionLabel from '@/components/layout/SectionLabel'
import Button from '@/components/ui/Button'

const activities = [
  {
    title: 'Photos in bloom',
    description:
      'Quiet photo sessions in the lavender field during peak bloom. Best enjoyed in June and July.',
    href: '/visit#photo',
  },
  {
    title: 'Guided farm walk',
    description:
      'A slow walk through the field with an introduction to how we grow, harvest, and distill lavender.',
    href: '/visit#tour',
  },
  {
    title: 'Pick your own bouquet',
    description:
      'Gather your own lavender bouquet during the blooming season and take a little of the field home with you.',
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
      <div ref={ref} className="container-mx">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal" data-delay="0">
              <SectionLabel light>Visit the farm</SectionLabel>
            </div>
            <h2
              className="reveal mb-6 font-bold text-section text-tone-50"
              data-delay="80"
            >
              A calm visit, surrounded by lavender.
            </h2>
            <p
              className="reveal mb-10 text-base leading-relaxed text-tone-200"
              data-delay="160"
            >
              Visit during the blooming season and enjoy the scent, colour, and
              quiet rhythm of the countryside. Open June to August.
            </p>

            <div className="flex flex-col gap-4">
              {activities.map((activity, i) => (
                <div
                  key={activity.title}
                  className="reveal flex items-start gap-4"
                  data-delay={240 + i * 80}
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-tone-200/70" />
                  <div>
                    <h3 className="mb-1 font-semibold text-tone-100">
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
                Plan a visit
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
