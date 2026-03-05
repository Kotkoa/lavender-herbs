import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/layout/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Lavender·Herbs",
  description:
    "Essential oil, hydrosol, dried flowers and seedlings. Pure Lavandula angustifolia from field to bottle.",
};

const products = [
  {
    id: "oil",
    label: "Essential Oil",
    headline: "Steam-distilled purity.",
    description:
      "100% pure Lavandula angustifolia essential oil, cold-filled directly after distillation. No additives, no dilution. Yield: 12.5 g per kg of raw material — consistent across batches.",
    volumes: ["5 ml", "10 ml", "30 ml"],
    uses: [
      "Aromatherapy and diffusers",
      "Skin care formulations",
      "Bath and body products",
      "Natural perfumery",
    ],
    note: "Distillation records and batch certificates available on request.",
  },
  {
    id: "hydrosol",
    label: "Hydrosol",
    headline: "Gentle aromatic water.",
    description:
      "A natural by-product of steam distillation — lavender hydrosol carries the water-soluble aromatic compounds of the plant. Softer than essential oil, versatile for daily use.",
    volumes: ["50 ml", "100 ml", "250 ml"],
    uses: [
      "Facial toner and mist",
      "Linen and room spray",
      "Baby skincare",
      "Culinary flavouring",
    ],
    note: "Bottled within 24 hours of distillation. No preservatives.",
  },
  {
    id: "dried-flowers",
    label: "Dried Flowers",
    headline: "Field to arrangement.",
    description:
      "Hand-harvested at peak bloom and slow-dried to preserve colour and fragrance. Available as bunches, loose buds, and loose stems. Ideal for florists, home décor and wedding use.",
    volumes: ["Small bunch (50 g)", "Standard bunch (150 g)", "Bulk 500 g buds"],
    uses: [
      "Wedding bouquets and confetti",
      "Dried floral arrangements",
      "Sachets and potpourri",
      "Herbal infusions",
    ],
    note: "Seasonal availability: June–August. Pre-orders accepted from April.",
  },
  {
    id: "seedlings",
    label: "Seedlings",
    headline: "Start your own lavender.",
    description:
      "Rooted cuttings from mother plants grown on our plot. We propagate Lavandula angustifolia and L. × intermedia varieties. Plants are hardened off and ready for outdoor planting.",
    volumes: ["Single plant", "6-pack", "24-pack (wholesale)"],
    uses: [
      "Home garden planting",
      "Small farm establishment",
      "Balcony and terrace growing",
      "Gift with planting guide",
    ],
    note: "Available May–June. Contact us for variety availability and wholesale pricing.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Our Products"
        title="From the field, direct to you."
        subtitle="All products are grown and processed on our 1,000 m² plot. No intermediaries, no shortcuts."
      />

      <div
        style={{
          background: "linear-gradient(180deg, var(--tone-100) 0%, var(--tone-50) 100%)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto flex flex-col gap-20"
        >
          {products.map((product, i) => (
            <div
              key={product.id}
              id={product.id}
              className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <SectionLabel>{product.label}</SectionLabel>
                <h2
                  className="mb-4 font-bold"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    color: "var(--tone-900)",
                  }}
                >
                  {product.headline}
                </h2>
                <p
                  className="mb-6 text-base leading-relaxed"
                  style={{ color: "var(--text-muted-light)" }}
                >
                  {product.description}
                </p>
                <p
                  className="mb-8 text-sm italic"
                  style={{ color: "var(--tone-500)" }}
                >
                  {product.note}
                </p>
                <Button variant="solid" href="/contact">
                  Enquire
                </Button>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <GlassCard variant="feature">
                  <h3
                    className="text-sm font-bold uppercase mb-4"
                    style={{ letterSpacing: "0.15em", color: "var(--tone-600)" }}
                  >
                    Volumes
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.volumes.map((v) => (
                      <span
                        key={v}
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          background: "rgba(95,61,196,0.08)",
                          color: "var(--tone-800)",
                          border: "1px solid rgba(177,151,252,0.3)",
                        }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-sm font-bold uppercase mb-3"
                    style={{ letterSpacing: "0.15em", color: "var(--tone-600)" }}
                  >
                    Uses
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {product.uses.map((use) => (
                      <li
                        key={use}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--text-muted-light)" }}
                      >
                        <span style={{ color: "var(--tone-500)", marginTop: 2 }}>—</span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section
        style={{
          background: "var(--tone-900)",
          padding: "64px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto text-center"
        >
          <h2
            className="mb-4 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-50)",
            }}
          >
            Ready to order?
          </h2>
          <p
            className="mb-8 text-base"
            style={{ color: "var(--tone-400)" }}
          >
            Contact us for pricing, availability, and wholesale enquiries.
          </p>
          <Button
            variant="outline"
            href="/contact"
            className="border-[var(--tone-400)] text-[var(--tone-100)] hover:bg-[var(--tone-400)] hover:text-[var(--tone-900)]"
          >
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
