'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import SectionLabel from '@/components/layout/SectionLabel'
import GlassCard from '@/components/ui/GlassCard'
import { useDonationCount } from '@/hooks/useDonationCount'
import DonationField from './DonationField'
import DonationControls from './DonationControls'
import DonationProgress from './DonationProgress'

function SuccessBanner() {
  const searchParams = useSearchParams()
  const isSuccess = searchParams.get('success') === 'true'
  const isCanceled = searchParams.get('canceled') === 'true'

  if (!isSuccess && !isCanceled) return null

  return (
    <div
      className="container-mx mb-8"
      role="status"
    >
      <div
        className="rounded-2xl p-6 text-center backdrop-blur-sm"
        style={{
          background: isSuccess
            ? 'rgba(72,187,120,0.15)'
            : 'rgba(243,240,255,0.5)',
          border: isSuccess
            ? '1px solid rgba(72,187,120,0.3)'
            : '1px solid rgba(177,151,252,0.2)',
        }}
      >
        {isSuccess ? (
          <>
            <div className="text-2xl font-bold text-tone-900 mb-1">
              Thank you for planting!
            </div>
            <div className="text-tone-700">
              Your lavender bushes are being added to the field.
            </div>
          </>
        ) : (
          <>
            <div className="text-lg font-semibold text-tone-700 mb-1">
              No worries
            </div>
            <div className="text-tone-500">
              Your bushes will be waiting when you&apos;re ready.
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function DonatePageClient() {
  const { totalBushes, totalDonors, isLoading } = useDonationCount()

  return (
    <>
      <section
        style={{
          background: 'linear-gradient(180deg, var(--tone-100) 0%, var(--tone-200) 100%)',
        }}
        className="py-16"
      >
        <div className="container-mx">
          <Suspense>
            <SuccessBanner />
          </Suspense>

          <SectionLabel>The Mission</SectionLabel>
          <h2 className="text-section font-bold text-tone-900 mt-2 mb-8">
            Help us fill the field.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <GlassCard variant="feature">
              <div className="text-lg font-bold text-tone-900 mb-2">1,000 m&sup2; field</div>
              <p className="text-sm text-muted-light leading-relaxed">
                Our plot is ready for planting. We need 10,000 lavender bushes to fill it completely.
              </p>
            </GlassCard>
            <GlassCard variant="feature">
              <div className="text-lg font-bold text-tone-900 mb-2">&euro;1 = 1 bush</div>
              <p className="text-sm text-muted-light leading-relaxed">
                Each euro plants one Lavandula angustifolia bush. Watch the field grow in real time.
              </p>
            </GlassCard>
            <GlassCard variant="feature">
              <div className="text-lg font-bold text-tone-900 mb-2">Real lavender</div>
              <p className="text-sm text-muted-light leading-relaxed">
                Your support creates a real field producing essential oil, hydrosol, and dried flowers.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--tone-200)',
        }}
        className="py-16"
      >
        <div className="container-mx">
          <SectionLabel>The Field</SectionLabel>
          <h2 className="text-section font-bold text-tone-900 mt-2 mb-8">
            Watch it grow.
          </h2>
          <DonationField totalBushes={totalBushes} />
        </div>
      </section>

      <section
        style={{
          background: 'linear-gradient(180deg, var(--tone-200) 0%, var(--tone-300) 100%)',
        }}
        className="py-16"
      >
        <div className="container-mx">
          <SectionLabel>Plant</SectionLabel>
          <h2 className="text-section font-bold text-tone-900 mt-2 mb-8">
            Choose your bushes.
          </h2>
          <DonationControls />
        </div>
      </section>

      <section
        style={{
          background: 'linear-gradient(180deg, var(--tone-300) 0%, var(--tone-500) 100%)',
        }}
        className="py-16"
      >
        <div className="container-mx">
          <SectionLabel light>Progress</SectionLabel>
          <h2 className="text-section font-bold text-tone-50 mt-2 mb-8">
            Our growing field.
          </h2>
          <DonationProgress
            totalBushes={totalBushes}
            totalDonors={totalDonors}
            isLoading={isLoading}
          />
        </div>
      </section>
    </>
  )
}
