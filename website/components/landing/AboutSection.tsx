'use client'

import { useEffect, useRef } from 'react'
import SectionLabel from '@/components/layout/SectionLabel'

export default function AboutSection() {
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
    <section className="bg-tone-300 py-20">
      <div
        ref={ref}
        className="container-mx"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal" data-delay="0">
              <SectionLabel>About the Farm</SectionLabel>
            </div>
            <h2
              className="reveal mb-6 font-bold text-section text-tone-900"
              data-delay="80"
            >
              A small lavender farm{' '}
              <em className="italic font-light">
                built with care.
              </em>
            </h2>
            <blockquote
              className="reveal mb-8 text-2xl italic font-light leading-snug text-tone-800 border-l-[3px] border-tone-600 pl-6"
              data-delay="160"
            >
              &ldquo;The soil, the sun and the slow rhythm of nature shape the
              aroma you experience.&rdquo;
            </blockquote>
            <p
              className="reveal text-base leading-relaxed mb-4 text-tone-900"
              data-delay="240"
            >
              Every bottle begins in our field. We grow English lavender on a
              small 1,000 m² farm and handle every step ourselves — from
              planting to distillation.
            </p>
            <p
              className="reveal text-base leading-relaxed text-tone-800"
              data-delay="320"
            >
              No shortcuts. No intermediaries. Just lavender, carefully grown
              and crafted.
            </p>
          </div>

          <div
            className="reveal rounded-2xl overflow-hidden bg-[rgba(95,61,196,0.15)] aspect-4/5 flex items-center justify-center border border-[rgba(177,151,252,0.3)]"
            data-delay="200"
          >
            <p className="text-center text-sm text-tone-700">
              Photo from @lavender.herbs
              <br />
              <span className="text-[11px] text-tone-600">
                Replace in Phase 6
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
