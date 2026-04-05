'use client'

import { useEffect, useRef } from 'react'
import SectionLabel from '@/components/layout/SectionLabel'

const textMap: Record<string, string> = {
  'tone-50': 'text-tone-50',
  'tone-100': 'text-tone-100',
  'tone-200': 'text-tone-200',
  'tone-500': 'text-tone-500',
  'tone-600': 'text-tone-600',
  'tone-900': 'text-tone-900',
}

const bgMap: Record<string, string> = {
  'tone-100': 'bg-tone-100',
  'tone-200': 'bg-tone-200',
  'tone-500': 'bg-tone-500',
  'tone-600': 'bg-tone-600',
}

const steps = [
  {
    numeral: 'I',
    eyebrow: 'Spring',
    title: 'Planting',
    body: 'Lavender cuttings are planted in spring, giving each plant space to grow strong and develop its aroma.',
    accent: 'tone-500',
    text: 'tone-900',
  },
  {
    numeral: 'II',
    eyebrow: 'Summer',
    title: 'Care',
    body: 'Our lavender is grown without synthetic pesticides, supported by healthy soil, sunlight, and careful irrigation.',
    accent: 'tone-600',
    text: 'tone-900',
  },
  {
    numeral: 'III',
    eyebrow: 'July',
    title: 'Harvest',
    body: 'Lavender is harvested by hand at peak bloom, when aroma and essential oil levels are at their highest.',
    accent: 'tone-200',
    text: 'tone-50',
  },
  {
    numeral: 'IV',
    eyebrow: 'Same day',
    title: 'Distillation',
    body: 'Fresh lavender is distilled the same day to produce pure essential oil and aromatic hydrosol.',
    accent: 'tone-100',
    text: 'tone-50',
  },
]

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const bar = barRef.current
    if (!el || !bar) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 120}ms`
          el.classList.add('visible')
          bar.style.width = '100%'
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="reveal grid gap-6 py-6 grid-cols-[100px_1fr] border-b border-[rgba(177,151,252,0.25)]"
    >
      <div
        className={`text-right pr-6 italic text-[2.4rem] font-black leading-none ${textMap[step.accent]}`}
      >
        {step.numeral}
      </div>
      <div>
        <p
          className={`text-xs font-bold uppercase mb-2 tracking-[0.22em] ${textMap[step.accent]}`}
        >
          {step.eyebrow}
        </p>
        <h3 className={`text-2xl font-bold mb-3 ${textMap[step.text]}`}>
          {step.title}
        </h3>
        <div
          ref={barRef}
          className={`h-0.75 w-0 mb-4 rounded-sm transition-[width] duration-[1.2s] ease-out ${bgMap[step.accent]}`}
        />
        <p
          className={`text-base leading-relaxed opacity-85 ${textMap[step.text]}`}
        >
          {step.body}
        </p>
      </div>
    </div>
  )
}

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[linear-gradient(180deg,var(--tone-200)_0%,var(--tone-500)_100%)] py-20">
      <div className="container-mx">
        <SectionLabel light>How we grow and craft it</SectionLabel>
        <h2 className="mb-8 text-section text-tone-900">
          <span className="font-bold">Grown and crafted</span>{' '}
          <span className="font-light text-tone-700">on our farm</span>
        </h2>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-tone-700/85">
          From planting and harvesting to distillation, every step happens on our farm.
        </p>
        <div>
          {steps.map((step, i) => (
            <ProcessStep key={step.numeral} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
