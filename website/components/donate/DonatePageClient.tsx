'use client'

import SectionLabel from '@/components/layout/SectionLabel'
import GlassCard from '@/components/ui/GlassCard'
import { useDonationCount } from '@/hooks/useDonationCount'
import DonationField from './DonationField'
import DonationControls from './DonationControls'
import DonationProgress from './DonationProgress'

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
          <SectionLabel>The Mission</SectionLabel>
          <h2 className="text-section font-bold text-tone-900 mt-2 mb-8">
            Help us fill the field.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <GlassCard variant="feature">
              <div className="text-lg font-bold text-tone-900 mb-2">10,000 bushes</div>
              <p className="text-sm text-muted-light leading-relaxed">
                The counter fills a picture of a 1,000 m&sup2; plot, one euro at a time.
              </p>
            </GlassCard>
            <GlassCard variant="feature">
              <div className="text-lg font-bold text-tone-900 mb-2">&euro;1 = 1 bush</div>
              <p className="text-sm text-muted-light leading-relaxed">
                Every euro tipped on Ko-fi adds one bush to the picture below. It is a public counter, not a planting promise.
              </p>
            </GlassCard>
            <GlassCard variant="feature">
              <div className="text-lg font-bold text-tone-900 mb-2">Voluntary tips</div>
              <p className="text-sm text-muted-light leading-relaxed">
                Tips are gifts with no rewards or obligations. They support Kotkoa&apos;s projects, lavender included.
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
          <SectionLabel>Support</SectionLabel>
          <h2 className="text-section font-bold text-tone-900 mt-2 mb-8">
            Leave a tip.
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
