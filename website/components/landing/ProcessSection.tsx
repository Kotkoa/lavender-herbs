"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "@/components/layout/SectionLabel";

const steps = [
  {
    numeral: "I",
    eyebrow: "Spring",
    title: "Planting",
    body: "We select Lavandula angustifolia cuttings in spring. Each plant spaced 60 cm apart for optimal airflow and essential oil concentration.",
    accent: "var(--tone-500)",
    text: "var(--tone-900)",
  },
  {
    numeral: "II",
    eyebrow: "Summer",
    title: "Care",
    body: "No synthetic pesticides. We rely on soil health, companion planting, and timed irrigation for robust aromatic yield.",
    accent: "var(--tone-600)",
    text: "var(--tone-900)",
  },
  {
    numeral: "III",
    eyebrow: "July",
    title: "Harvest",
    body: "Flowers cut at 50% bloom — peak oil content. Harvested by hand in early morning when volatile compounds are at their highest.",
    accent: "var(--tone-200)",
    text: "var(--tone-50)",
  },
  {
    numeral: "IV",
    eyebrow: "Same day",
    title: "Distillation",
    body: "Steam distillation: fresh biomass loaded into the still, steam carries volatile compounds, condensation separates oil from hydrosol. ~1.25% yield by mass.",
    accent: "var(--tone-100)",
    text: "var(--tone-50)",
  },
];

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const bar = barRef.current;
    if (!el || !bar) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 120}ms`;
          el.classList.add("visible");
          bar.style.width = "100%";
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="reveal grid gap-6 py-6"
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
          style={{ color: step.text }}
        >
          {step.title}
        </h3>
        <div
          ref={barRef}
          style={{
            height: 3,
            width: 0,
            background: step.accent,
            marginBottom: 16,
            transition: "width 1.2s ease-out",
            borderRadius: 2,
          }}
        />
        <p className="text-base leading-relaxed" style={{ color: step.text, opacity: 0.85 }}>
          {step.body}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
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
        <SectionLabel light>How it&apos;s made</SectionLabel>
        <h2
          className="mb-8 font-bold"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--tone-900)",
          }}
        >
          From seed to essence.
        </h2>
        <div>
          {steps.map((step, i) => (
            <ProcessStep key={step.numeral} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
