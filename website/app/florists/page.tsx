import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/layout/SectionLabel";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Florists — Lavender·Herbs",
  description:
    "Wholesale dried lavender, essential oil and hydrosol for florists, designers and small businesses.",
};

const usps = [
  {
    title: "Consistent quality",
    description:
      "Every batch is grown and processed on the same plot, same varieties, same methods. No variation from supplier to supplier.",
  },
  {
    title: "Seasonal reliability",
    description:
      "We plant, tend and harvest on a predictable annual cycle. Pre-orders from April ensure your allocation.",
  },
  {
    title: "Flexible volumes",
    description:
      "From single bunches to bulk 500 g buds. Invoice and packing list provided with every wholesale order.",
  },
];

const assortment = [
  { product: "Essential Oil", packaging: "5 ml · 10 ml · 30 ml", minOrder: "10 units" },
  { product: "Hydrosol", packaging: "50 ml · 100 ml · 250 ml", minOrder: "6 units" },
  {
    product: "Dried bunches (standard)",
    packaging: "150 g · paper-wrapped",
    minOrder: "10 bunches",
  },
  {
    product: "Dried bunches (small)",
    packaging: "50 g · paper-wrapped",
    minOrder: "20 bunches",
  },
  {
    product: "Loose buds",
    packaging: "500 g · kraft bag",
    minOrder: "2 bags",
  },
  {
    product: "Loose stems",
    packaging: "Bundles of 100 stems",
    minOrder: "1 bundle",
  },
];

export default function FloristsPage() {
  return (
    <>
      <PageHero
        label="For Florists"
        title="For florists & designers."
        subtitle="Wholesale lavender — consistent quality, predictable seasonal availability, flexible volumes."
        gradientFrom="var(--tone-50)"
        gradientTo="var(--tone-200)"
      />

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-200) 0%, var(--tone-100) 100%)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel>Why us</SectionLabel>
          <h2
            className="mb-12 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-900)",
            }}
          >
            Quality you can count on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usps.map((usp) => (
              <GlassCard key={usp.title} variant="feature">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--tone-900)" }}
                >
                  {usp.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted-light)" }}
                >
                  {usp.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--tone-50)",
          padding: "80px 0",
        }}
        id="assortment"
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel>Assortment</SectionLabel>
          <h2
            className="mb-10 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-900)",
            }}
          >
            What we offer.
          </h2>
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--rule-light)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--tone-100)" }}>
                  {["Product", "Packaging", "Minimum order"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-6 py-4 font-bold uppercase"
                      style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--tone-700)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {assortment.map((row, i) => (
                  <tr
                    key={row.product}
                    style={{
                      background: i % 2 === 0 ? "white" : "rgba(243,240,255,0.4)",
                      borderTop: "1px solid var(--rule-light)",
                    }}
                  >
                    <td className="px-6 py-4 font-medium" style={{ color: "var(--tone-900)" }}>
                      {row.product}
                    </td>
                    <td className="px-6 py-4" style={{ color: "var(--text-muted-light)" }}>
                      {row.packaging}
                    </td>
                    <td className="px-6 py-4" style={{ color: "var(--text-muted-light)" }}>
                      {row.minOrder}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-700) 0%, var(--tone-800) 100%)",
          padding: "80px 0",
        }}
        id="order"
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <SectionLabel light>Working conditions</SectionLabel>
            <h2
              className="mb-8 font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--tone-50)",
              }}
            >
              How to order.
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Send an enquiry via the form with product, volume, and desired date.",
                "We confirm availability and send a quote within 2 business days.",
                "Invoice issued on confirmation — payment before dispatch.",
                "Shipping within 5 business days of payment.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span
                    className="shrink-0 font-bold text-sm mt-0.5"
                    style={{
                      color: "var(--tone-400)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--tone-200)" }}>
                    {step}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <GlassCard variant="testimonial" className="flex flex-col gap-6">
              <h3
                className="text-lg font-bold"
                style={{ color: "var(--tone-50)" }}
              >
                Wholesale enquiry
              </h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Company", type: "text", placeholder: "Studio / shop name" },
                  { label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-1">
                    <label
                      className="text-xs font-semibold uppercase"
                      style={{ letterSpacing: "0.12em", color: "var(--tone-300)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: "rgba(243,240,255,0.08)",
                        border: "1px solid rgba(177,151,252,0.25)",
                        color: "var(--tone-50)",
                      }}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <label
                    className="text-xs font-semibold uppercase"
                    style={{ letterSpacing: "0.12em", color: "var(--tone-300)" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Products, volumes, timeline…"
                    className="px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{
                      background: "rgba(243,240,255,0.08)",
                      border: "1px solid rgba(177,151,252,0.25)",
                      color: "var(--tone-50)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: "var(--tone-50)", color: "var(--tone-900)" }}
                >
                  Send enquiry
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}
