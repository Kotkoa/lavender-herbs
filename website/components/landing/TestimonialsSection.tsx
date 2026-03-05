"use client";

import { useEffect, useRef } from "react";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/layout/SectionLabel";

const testimonials = [
  {
    quote:
      "The essential oil quality is exceptional — clean, true-to-plant aroma. Already reordering.",
    author: "Anna M.",
    role: "Aromatherapist",
  },
  {
    quote:
      "Beautiful dried lavender bunches for my wedding. Arrived perfectly packed, lasted for months.",
    author: "Irina K.",
    role: "Bride",
  },
  {
    quote:
      "As a florist, the consistent quality and seasonal availability makes them my go-to supplier.",
    author: "Elena V.",
    role: "Florist",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".reveal");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = el.dataset.delay ? `${el.dataset.delay}ms` : "0ms";
            el.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(180deg, var(--tone-500) 0%, var(--tone-600) 100%)",
        padding: "80px 0",
      }}
    >
      <div
        style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
        className="mx-auto"
      >
        <SectionLabel light>What people say</SectionLabel>
        <h2
          className="mb-8 font-bold"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--tone-50)",
          }}
        >
          Grown for those who notice.
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <div key={i} className="reveal" data-delay={i * 100}>
              <GlassCard variant="testimonial" className="h-full flex flex-col">
                <blockquote
                  className="text-base leading-relaxed flex-1 mb-6 italic"
                  style={{ color: "var(--tone-50)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer>
                  <p className="font-semibold text-sm" style={{ color: "var(--tone-100)" }}>
                    {t.author}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--tone-300)" }}>
                    {t.role}
                  </p>
                </footer>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
