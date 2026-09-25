'use client'

import { useEffect, useState } from 'react'
import GlassCard from '@/components/ui/GlassCard'

const GOAL = 10000

const MILESTONES = [
  { position: 10, label: '1K' },
  { position: 25, label: '2.5K' },
  { position: 50, label: '5K' },
  { position: 75, label: '7.5K' },
  { position: 100, label: '10K' },
]

interface DonationProgressProps {
  totalBushes: number
  totalDonors: number
  isLoading: boolean
}

function useAnimatedValue({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let startTime: number
    const startValue = value

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(startValue + (target - startValue) * ease))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration])

  return value
}

export default function DonationProgress({ totalBushes, totalDonors, isLoading }: DonationProgressProps) {
  const animatedBushes = useAnimatedValue({ target: totalBushes })
  const animatedDonors = useAnimatedValue({ target: totalDonors })
  const percentage = Math.min((animatedBushes / GOAL) * 100, 100)

  if (isLoading) {
    return (
      <div className="h-40 flex items-center justify-center">
        <div className="text-muted-light">Loading progress...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="relative">
        <div
          className="w-full h-4 rounded-full overflow-hidden"
          style={{ background: 'rgba(243,240,255,0.3)' }}
          role="progressbar"
          aria-valuenow={totalBushes}
          aria-valuemin={0}
          aria-valuemax={GOAL}
          aria-label={`${totalBushes} of ${GOAL} lavender bushes on the field counter`}
        >
          <div
            className="h-full rounded-full transition-[width] duration-1000 ease-out"
            style={{
              width: `${percentage}%`,
              background: 'linear-gradient(90deg, var(--tone-400) 0%, var(--tone-600) 100%)',
            }}
          />
        </div>

        <div className="relative mt-2 h-6">
          {MILESTONES.map((milestone) => (
            <div
              key={milestone.label}
              className="absolute -translate-x-1/2 text-xs font-medium"
              style={{
                left: `${milestone.position}%`,
                color: percentage >= milestone.position ? 'var(--tone-700)' : 'var(--tone-300)',
              }}
            >
              {milestone.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <GlassCard variant="feature" className="text-center">
          <div className="text-3xl font-bold tabular-nums text-tone-900">
            {animatedBushes.toLocaleString()}
          </div>
          <div className="text-xs mt-1 uppercase tracking-[0.15em] text-muted-light">
            Bushes Added
          </div>
        </GlassCard>

        <GlassCard variant="feature" className="text-center">
          <div className="text-3xl font-bold tabular-nums text-tone-900">
            {percentage.toFixed(1)}%
          </div>
          <div className="text-xs mt-1 uppercase tracking-[0.15em] text-muted-light">
            Field Complete
          </div>
        </GlassCard>

        <GlassCard variant="feature" className="text-center">
          <div className="text-3xl font-bold tabular-nums text-tone-900">
            {animatedDonors.toLocaleString()}
          </div>
          <div className="text-xs mt-1 uppercase tracking-[0.15em] text-muted-light">
            Supporters
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
