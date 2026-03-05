import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/layout/SectionLabel";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Lavender·Herbs",
  description:
    "About the lavender farm — Lavandula angustifolia and lavandin cultivation, essential oil production, and sustainable growing practices.",
};

const varieties = [
  {
    name: "Lavandula angustifolia",
    common: "English lavender",
    origin: "Mediterranean mountains",
    oilContent: "1.0–1.5%",
    aroma: "Sweet, floral, camphoraceous",
    harvest: "June–July",
    use: "Essential oil, dried flowers, hydrosol",
    notes: "Cold-hardy, best oil quality, more delicate than lavandin.",
  },
  {
    name: "Lavandula × intermedia",
    common: "Lavandin",
    origin: "Hybrid (L. angustifolia × L. latifolia)",
    oilContent: "0.5–1.0%",
    aroma: "Stronger, more camphoraceous",
    harvest: "July–August",
    use: "Essential oil, dried flowers (larger bunches)",
    notes: "Higher biomass yield, sterile hybrid, propagated by cuttings only.",
  },
];

const values = [
  {
    title: "No synthetic pesticides",
    description:
      "We rely on soil health, companion planting, and natural pest management. Lavender is naturally pest-resistant; our job is to keep the soil alive.",
  },
  {
    title: "Same-day distillation",
    description:
      "Harvested material is distilled on the day of cutting. Delaying even hours reduces aromatic compound concentration in the oil.",
  },
  {
    title: "Small plot, full attention",
    description:
      "1,000 m² is small enough to manage without mechanisation. Every plant is hand-pruned, every row inspected. Scale is a deliberate choice.",
  },
  {
    title: "Transparent data",
    description:
      "We record every distillation batch — weight of input, weight of oil, duration, temperature. Data available to wholesale buyers on request.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About the farm"
        title="A small farm. An obsessive craft."
        subtitle="We grow Lavandula angustifolia on 1,000 m². Everything — from planting to distillation — happens on site."
        gradientFrom="var(--tone-50)"
        gradientTo="var(--tone-200)"
      />

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-200) 0%, var(--tone-300) 100%)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <SectionLabel>Our story</SectionLabel>
            <blockquote
              className="mb-8 text-2xl italic font-light leading-snug"
              style={{
                color: "var(--tone-800)",
                borderLeft: "3px solid var(--tone-600)",
                paddingLeft: 24,
              }}
            >
              &ldquo;The soil, the sun, the silence — everything ends up in the bottle.&rdquo;
            </blockquote>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--tone-900)" }}>
              We started with a single row of cuttings and a copper still. The first distillation produced less than we expected. The second was better. The third, better still. That is how it works.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--tone-800)" }}>
              The plot is 1,000 m². We grow two lavender species — <em>Lavandula angustifolia</em> for oil quality and lavandin for volume and dried flower size. Both are hand-harvested and steam-distilled on the same day.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--tone-800)" }}>
              We sell essential oil, hydrosol, dried flowers, and seedlings directly. No distributors, no retail markup, no substitution.
            </p>
          </div>
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{
              aspectRatio: "4/5",
              background: "rgba(95,61,196,0.12)",
              border: "1px solid rgba(177,151,252,0.3)",
              color: "var(--tone-700)",
              fontSize: 14,
              textAlign: "center",
            }}
          >
            Farm photo — Phase 6
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--tone-50)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel>Varieties</SectionLabel>
          <h2
            className="mb-10 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-900)",
            }}
          >
            What we grow.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {varieties.map((v) => (
              <GlassCard key={v.name} variant="feature">
                <p
                  className="text-xs font-bold uppercase mb-1"
                  style={{ letterSpacing: "0.15em", color: "var(--tone-500)" }}
                >
                  {v.common}
                </p>
                <h3
                  className="text-xl font-bold mb-1 italic"
                  style={{ color: "var(--tone-900)" }}
                >
                  {v.name}
                </h3>
                <div
                  className="mt-4 flex flex-col gap-2"
                  style={{ borderTop: "1px solid var(--rule-light)", paddingTop: 16 }}
                >
                  {[
                    { k: "Origin", v: v.origin },
                    { k: "Oil content", v: v.oilContent },
                    { k: "Aroma profile", v: v.aroma },
                    { k: "Harvest", v: v.harvest },
                    { k: "Primary use", v: v.use },
                  ].map(({ k, v: val }) => (
                    <div key={k} className="flex gap-3 text-sm">
                      <span className="w-28 shrink-0 font-medium" style={{ color: "var(--tone-600)" }}>
                        {k}
                      </span>
                      <span style={{ color: "var(--text-muted-light)" }}>{val}</span>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-4 text-xs italic"
                  style={{ color: "var(--tone-500)" }}
                >
                  {v.notes}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-100) 0%, var(--tone-200) 100%)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel>How we work</SectionLabel>
          <h2
            className="mb-10 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-900)",
            }}
          >
            Principles, not marketing.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val) => (
              <GlassCard key={val.title} variant="feature">
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--tone-900)" }}>
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted-light)" }}>
                  {val.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--tone-300)",
          padding: "64px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel>Science note</SectionLabel>
          <h2
            className="mb-6 font-bold"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--tone-900)",
            }}
          >
            What the research says.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <p className="text-base leading-relaxed" style={{ color: "var(--tone-900)" }}>
              Essential oil yield in <em>Lavandula angustifolia</em> varies by cultivar, harvest timing, and climate. Reported ranges: 0.8–1.5% in Teagasc trials (Ireland), 0.5–1.5% in Penn State Extension (USA), 1.0–2.0% in Land Use NZ commercial production data.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--tone-800)" }}>
              Aromatic compound concentration peaks at 50% flower opening. Harvest later and camphor increases relative to linalool — the compound associated with lavender&apos;s characteristic floral note. We harvest at the 50% point consistently.
            </p>
          </div>
          <p
            className="mt-6 text-xs"
            style={{ color: "var(--tone-700)" }}
          >
            Sources: Teagasc Agricultural Research (Ireland) · Penn State Extension · Land Use New Zealand · ВНИИМК distillation records
          </p>
        </div>
      </section>

      <section
        style={{
          background: "var(--tone-900)",
          padding: "64px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <h2
            className="mb-4 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-50)",
            }}
          >
            Come see for yourself.
          </h2>
          <p className="mb-8 text-base" style={{ color: "var(--tone-400)" }}>
            Farm visits open June–August. Or reach us any time by contact form.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              href="/visit"
              className="border-[var(--tone-400)] text-[var(--tone-100)] hover:bg-[var(--tone-400)] hover:text-[var(--tone-900)]"
            >
              Plan a visit
            </Button>
            <Button
              variant="outline"
              href="/contact"
              className="border-[var(--tone-700)] text-[var(--tone-400)] hover:bg-[var(--tone-700)] hover:text-[var(--tone-50)]"
            >
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
