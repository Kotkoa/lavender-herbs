'use client'

import GlassCard from '@/components/ui/GlassCard'
import { useCountUp } from '@/hooks/useCountUp'
import { DONATION_GOAL } from '@/lib/donation'

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

export default function DonationProgress({ totalBushes, totalDonors, isLoading }: DonationProgressProps) {
  const animatedBushes = Math.round(useCountUp(totalBushes, 1200))
  const animatedDonors = Math.round(useCountUp(totalDonors, 1200))
  const percentage = Math.min((animatedBushes / DONATION_GOAL) * 100, 100)

  if (isLoading) {
    return <div className="h-40 flex items-center justify-center"><div className="text-muted-light">Loading progress...</div></div>
  }

  const cards = [
    { value: animatedBushes.toLocaleString(), label: 'Bushes Added' },
    { value: `${percentage.toFixed(1)}%`, label: 'Field Complete' },
    { value: animatedDonors.toLocaleString(), label: 'Supporters' },
  ]

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: 'rgba(243,240,255,0.3)' }} role="progressbar" aria-valuenow={totalBushes} aria-valuemin={0} aria-valuemax={DONATION_GOAL} aria-label={`${totalBushes} of ${DONATION_GOAL} lavender bushes on the field counter`}>
          <div className="h-full rounded-full transition-[width] duration-1000 ease-out" style={{ width: `${percentage}%`, background: 'linear-gradient(90deg, var(--tone-400) 0%, var(--tone-600) 100%)' }} />
        </div>
        <div className="relative mt-2 h-6">
          {MILESTONES.map((milestone) => (
            <div key={milestone.label} className="absolute -translate-x-1/2 text-xs font-medium" style={{ left: `${milestone.position}%`, color: percentage >= milestone.position ? 'var(--tone-700)' : 'var(--tone-300)' }}>{milestone.label}</div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((card) => (
          <GlassCard key={card.label} variant="feature" className="text-center">
            <div className="text-3xl font-bold tabular-nums text-tone-900">{card.value}</div>
            <div className="text-xs mt-1 uppercase tracking-[0.15em] text-muted-light">{card.label}</div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
