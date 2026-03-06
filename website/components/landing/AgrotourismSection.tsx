'use client'

import { useEffect, useRef } from 'react'
import SectionLabel from '@/components/layout/SectionLabel'
import Button from '@/components/ui/Button'

const activities = [
  {
    title: 'Photos in bloom',
    description:
      'Photo sessions in the lavender field during peak bloom, especially in June and July.',
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
      'Gather your own lavender bouquet during the blooming season and bring a piece of the farm home with you.',
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
    <section className="bg-[linear-gradient(180deg,var(--tone-600)_0%,var(--tone-700)_100%)] py-20 overflow-hidden">
      <div ref={ref} className="container-mx">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          <div>
            <div className="reveal" data-delay="0">
              <SectionLabel light>Visit the farm</SectionLabel>
            </div>
            <h2
              className="reveal mb-6 font-bold text-section text-tone-50"
              data-delay="80"
            >
              A peaceful visit, surrounded by lavender.
            </h2>

            <p
              className="reveal mb-10 text-base leading-relaxed text-tone-200"
              data-delay="160"
            >
              Visit during the blooming season and enjoy the scent, colour, and
              calm of the countryside. Open from June to August.
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
                className="rounded-full border-tone-200 text-tone-100 hover:bg-tone-200 hover:text-tone-900"
              >
                Plan a visit
              </Button>
            </div>
          </div>

          <div
            className="reveal grid grid-cols-3 gap-3 -mr-9 md:-mr-[calc((100vw-var(--mx))/2+36px)]"
            data-delay="200"
          >
            <div className="flex flex-col gap-3">
              <div className="rounded-xl flex-[5.6] flex items-center justify-center text-xs bg-tone-50/10 border border-tone-50/15 text-tone-400">
                Photo 1
              </div>
              <div className="flex-2" />
              <div className="rounded-xl flex-[4.2] flex items-center justify-center text-xs bg-tone-50/10 border border-tone-50/15 text-tone-400">
                Photo 2
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl flex-3 flex items-center justify-center text-xs bg-tone-50/10 border border-tone-50/15 text-tone-400">
                Photo 3
              </div>
              <div className="rounded-xl flex-3 flex items-center justify-center text-xs bg-tone-50/10 border border-tone-50/15 text-tone-400">
                Photo 4
              </div>
              <div className="flex-2" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-l-xl rounded-r-none flex-3 flex items-center justify-center text-xs bg-tone-50/10 border border-tone-50/15 border-r-0 text-tone-400">
                Photo 5
              </div>
              <div className="rounded-l-xl rounded-r-none flex-2 flex items-center justify-center text-xs bg-tone-50/10 border border-tone-50/15 border-r-0 text-tone-400">
                Photo 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
