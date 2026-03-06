'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import SectionLabel from '@/components/layout/SectionLabel'

const photos = [
  { src: '/images/bouquets-grid.png', alt: 'Fresh lavender bouquets laid out to dry' },
  { src: '/images/field-sunset.png', alt: 'Lavender field at sunset' },
  { src: '/images/harvest.png', alt: 'Harvesting lavender' },
  { src: '/images/distillery.png', alt: 'Copper still and essential oil bottles' },
  { src: '/images/bouquet-table.png', alt: 'Lavender bouquet on a table' },
  { src: '/images/lavender-closeup.png', alt: 'Lavender flowers closeup' },
  { src: '/images/oil-bottle.png', alt: 'Lavender essential oil bottle' },
  { src: '/images/dried-bouquets.png', alt: 'Dried lavender bouquets' },
  { src: '/images/evening-field.png', alt: 'Evening in the lavender field' },
  { src: '/images/wine-field.png', alt: 'Wine among lavender rows' },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((i) => (i + 1) % photos.length)
  }, [])

  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next])

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
    <section id="about" className="bg-tone-300 py-20">
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
            className="reveal relative rounded-2xl overflow-hidden aspect-4/5"
            data-delay="200"
          >
            {photos.map((photo, i) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={750}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === active ? 'bg-white w-4' : 'bg-white/50'}`}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
