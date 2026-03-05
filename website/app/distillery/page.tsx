import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/layout/SectionLabel";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distillery — Lavender·Herbs",
  description:
    "Steam distillation process — from harvested lavender to essential oil and hydrosol. On-site production.",
};

const steps = [
  {
    numeral: "I",
    eyebrow: "Morning harvest",
    title: "Cut at peak",
    body: "Flowers are harvested at 50% bloom — the point of maximum essential oil concentration. We cut by hand in the early morning, before heat accelerates volatilisation. Biomass goes straight to the still.",
    accent: "var(--tone-500)",
    textColor: "var(--tone-900)",
  },
  {
    numeral: "II",
    eyebrow: "Loading",
    title: "Fill the still",
    body: "Fresh lavender is packed loosely into the distillation vessel. Dense packing reduces steam penetration; too loose and efficiency drops. Experience determines the right density for each batch.",
    accent: "var(--tone-600)",
    textColor: "var(--tone-900)",
  },
  {
    numeral: "III",
    eyebrow: "~100°C · ~90 min",
    title: "Steam distillation",
    body: "Steam passes upward through the plant material, carrying volatile aromatic compounds. The vapour mixture travels through a condenser — cooled water causes it to return to liquid form.",
    accent: "var(--tone-200)",
    textColor: "var(--tone-50)",
  },
  {
    numeral: "IV",
    eyebrow: "Separation",
    title: "Oil and hydrosol",
    body: "Oil and water do not mix. In the Florentine flask, essential oil floats to the surface and is drawn off. The water fraction — carrying water-soluble aromatic compounds — becomes hydrosol. Yield: ~1.25% by mass.",
    accent: "var(--tone-100)",
    textColor: "var(--tone-50)",
  },
];

const dataPoints = [
  { value: "~1.25%", label: "Essential oil yield by mass" },
  { value: "12.5 g/kg", label: "Oil per kg of raw material" },
  { value: "~100°C", label: "Steam temperature" },
  { value: "~90 min", label: "Distillation batch time" },
];

export default function DistilleryPage() {
  return (
    <>
      <PageHero
        label="Production"
        title="From field to bottle."
        subtitle="Every batch distilled on-site. No outside processors, no storage delays."
        gradientFrom="var(--tone-50)"
        gradientTo="var(--tone-200)"
      />

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-200) 0%, var(--tone-500) 100%)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel light>Process</SectionLabel>
          <h2
            className="mb-12 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-900)",
            }}
          >
            How we distil.
          </h2>

          <div>
            {steps.map((step) => (
              <div
                key={step.numeral}
                className="grid gap-6 py-8"
                style={{
                  gridTemplateColumns: "100px 1fr",
                  borderBottom: "1px solid rgba(177,151,252,0.25)",
                }}
              >
                <div
                  className="text-right pr-6 italic"
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 900,
                    color: step.accent,
                    lineHeight: 1,
                  }}
                >
                  {step.numeral}
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase mb-2"
                    style={{ letterSpacing: "0.22em", color: step.accent }}
                  >
                    {step.eyebrow}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: step.textColor }}
                  >
                    {step.title}
                  </h3>
                  <div
                    style={{
                      height: 3,
                      width: "4rem",
                      background: step.accent,
                      marginBottom: 16,
                      borderRadius: 2,
                    }}
                  />
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: step.textColor, opacity: 0.85 }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-500) 0%, var(--tone-700) 100%)",
          padding: "64px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel light>By the numbers</SectionLabel>
          <h2
            className="mb-10 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-50)",
            }}
          >
            Measured, not estimated.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dataPoints.map((dp) => (
              <div
                key={dp.label}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(243,240,255,0.08)",
                  border: "1px solid rgba(177,151,252,0.2)",
                }}
              >
                <p
                  className="font-bold mb-2"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--tone-100)" }}
                >
                  {dp.value}
                </p>
                <p className="text-sm" style={{ color: "var(--tone-300)" }}>
                  {dp.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{ color: "var(--tone-400)" }}>
            Yield data based on our recorded distillation batches. Reference ranges: Teagasc 0.8–1.5%, Penn State Extension 0.5–1.5%.
          </p>
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
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <SectionLabel>Equipment</SectionLabel>
            <h2
              className="mb-6 font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--tone-900)",
              }}
            >
              Small batch, full control.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted-light)" }}>
              Our distillation unit is sized for the 1,000 m² plot — a small vessel that allows precise timing and temperature control for each batch. We distil on the same day as harvest.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted-light)" }}>
              No bulk storage of cut material. No waiting. The window between cutting and distilling is as short as physically possible.
            </p>
            <Button variant="solid" href="/visit">
              See it in person
            </Button>
          </div>
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{
              aspectRatio: "4/3",
              background: "rgba(95,61,196,0.08)",
              border: "1px solid rgba(177,151,252,0.3)",
              color: "var(--tone-600)",
              fontSize: 14,
            }}
          >
            Distillery photo — Phase 6
          </div>
        </div>
      </section>
    </>
  );
}
