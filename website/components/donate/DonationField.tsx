'use client'

import Image from 'next/image'
import { BUSHES_PER_CELL, DONATION_GOAL, FIELD_CELLS, FIELD_COLS } from '@/lib/donation'

interface DonationFieldProps {
  totalBushes: number
}

const gridPositions = Array.from({ length: FIELD_CELLS }, (_, index) => ({
  left: (index % FIELD_COLS) * 2 + 6,
  top: Math.floor(index / FIELD_COLS) * 8 + 4,
}))

export default function DonationField({ totalBushes }: DonationFieldProps) {
  const filledCells = Math.min(Math.floor(totalBushes / BUSHES_PER_CELL), FIELD_CELLS)
  const partialOpacity = Math.max((totalBushes % BUSHES_PER_CELL) / BUSHES_PER_CELL, 0.6)
  const isComplete = totalBushes >= DONATION_GOAL

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[rgba(177,151,252,0.2)]" style={{ aspectRatio: '2 / 1' }} aria-label={`Lavender field counter: ${totalBushes.toLocaleString()} of ${DONATION_GOAL.toLocaleString()} bushes`}>
      <Image src="/images/bg-field.png" alt="" fill className="object-cover" priority />
      {gridPositions.slice(0, Math.min(filledCells + (totalBushes % BUSHES_PER_CELL > 0 ? 1 : 0), FIELD_CELLS)).map((position, index) => {
        const isFilled = index < filledCells
        const isPartial = index === filledCells && totalBushes % BUSHES_PER_CELL > 0
        return <div key={index} className={`absolute transition-opacity duration-700 ease-out ${isFilled ? 'animate-bush-sway' : ''}`} style={{ left: `${position.left}%`, top: `${position.top}%`, width: '12%', opacity: isFilled ? 1 : isPartial ? partialOpacity : 0, animationDelay: `${(index % FIELD_COLS) * 0.12}s`, transform: 'translate(-50%, 0)' }}><Image src="/images/bush.png" alt="" width={100} height={100} className="w-full h-auto drop-shadow-md" /></div>
      })}
      {totalBushes === 0 && <div className="absolute inset-0 flex items-center justify-center"><p className="text-tone-50 text-lg font-medium opacity-60 backdrop-blur-[2px] px-4 py-2 rounded-xl">Waiting for the first bush...</p></div>}
      <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 px-3 py-1.5 rounded-lg text-sm font-bold tabular-nums backdrop-blur-sm" style={{ background: 'rgba(243,240,255,0.85)', color: 'var(--tone-900)' }}>{totalBushes.toLocaleString()} / {DONATION_GOAL.toLocaleString()}</div>
      {isComplete && <div className="absolute inset-0 flex items-center justify-center"><div className="text-center"><div className="text-4xl md:text-5xl font-extrabold text-tone-50 mb-2 drop-shadow-lg">Field Complete!</div><div className="text-lg text-tone-100 drop-shadow">10,000 bushes on the counter. Thank you!</div></div></div>}
    </div>
  )
}
