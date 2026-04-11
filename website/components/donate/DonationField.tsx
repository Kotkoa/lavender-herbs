'use client'

import { useMemo } from 'react'
import Image from 'next/image'

const COLS = 50
const ROWS = 20
const TOTAL_CELLS = COLS * ROWS
const BUSHES_PER_CELL = Math.ceil(10000 / TOTAL_CELLS)
const GOAL = 10000

interface DonationFieldProps {
  totalBushes: number
}

function generateGrid(): Array<{ left: number; top: number }> {
  const positions: Array<{ left: number; top: number }> = []
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      const left = col * 2 + 6
      const top = row * 8 + 4
      positions.push({ left, top })
    }
  }
  return positions
}

export default function DonationField({ totalBushes }: DonationFieldProps) {
  const filledCells = Math.min(Math.floor(totalBushes / BUSHES_PER_CELL), TOTAL_CELLS)
  const isComplete = totalBushes >= GOAL
  const gridPositions = useMemo(() => generateGrid(), [])

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-[rgba(177,151,252,0.2)]"
      style={{ aspectRatio: '2 / 1' }}
      aria-label={`Lavender field: ${totalBushes.toLocaleString()} of ${GOAL.toLocaleString()} bushes planted`}
    >
      <Image
        src="/images/bg-field.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {gridPositions.map((position, index) => {
        const isFilled = index < filledCells
        const isPartial = index === filledCells && totalBushes % BUSHES_PER_CELL > 0
        const partialOpacity = isPartial ? Math.max((totalBushes % BUSHES_PER_CELL) / BUSHES_PER_CELL, 0.6) : 0

        if (!isFilled && !isPartial) return null

        return (
          <div
            key={index}
            className={`absolute transition-opacity duration-700 ease-out ${isFilled ? 'animate-bush-sway' : ''}`}
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              width: '12%',
              opacity: isFilled ? 1 : partialOpacity,
              animationDelay: `${(index % COLS) * 0.12}s`,
              transform: 'translate(-50%, 0)',
            }}
          >
            <Image
              src="/images/bush.png"
              alt=""
              width={100}
              height={100}
              className="w-full h-auto drop-shadow-md"
            />
          </div>
        )
      })}

      {totalBushes === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-tone-50 text-lg font-medium opacity-60 backdrop-blur-[2px] px-4 py-2 rounded-xl">
            Plant the first bush...
          </p>
        </div>
      )}

      <div
        className="absolute bottom-3 right-3 md:bottom-4 md:right-4 px-3 py-1.5 rounded-lg text-sm font-bold tabular-nums backdrop-blur-sm"
        style={{
          background: 'rgba(243,240,255,0.85)',
          color: 'var(--tone-900)',
        }}
      >
        {totalBushes.toLocaleString()} / {GOAL.toLocaleString()}
      </div>

      {isComplete && (
        <div
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-tone-50 mb-2 drop-shadow-lg">
              Field Complete!
            </div>
            <div className="text-lg text-tone-100 drop-shadow">
              10,000 bushes planted. Thank you!
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
