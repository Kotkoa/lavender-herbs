"use client";

import { useEffect, useRef } from "react";
import GlassCard from "@/components/ui/GlassCard";
import LavenderStalks from "@/components/ui/LavenderStalks";
import SectionLabel from "@/components/layout/SectionLabel";
import Button from "@/components/ui/Button";

const products = [
  {
    title: "Essential Oil",
    description:
      "100% pure Lavandula angustifolia steam-distilled essential oil. Yield: 12.5 g/kg raw material. Available in 5 ml, 10 ml, 30 ml.",
    href: "/products#oil",
  },
  {
    title: "Hydrosol",
    description:
      "Aromatic lavender water — a gentle by-product of distillation. Versatile for skin, room and linen. Available in 50 ml, 100 ml, 250 ml.",
    href: "/products#hydrosol",
  },
  {
    title: "Dried Flowers",
    description:
      "Bunches, buds and loose stems for florists, home décor and wedding confetti. Seasonal availability June–August.",
    href: "/products#dried-flowers",
  },
];

export default function ProductsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".reveal");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.transitionDelay = `${delay}ms`;
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
        background: "linear-gradient(180deg, var(--tone-100) 0%, var(--tone-200) 100%)",
        padding: "100px 0",
      }}
    >
      <div
        style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
        className="mx-auto"
      >
        <SectionLabel>Our Products</SectionLabel>
        <h2
          className="mb-12 font-bold"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--tone-900)",
            maxWidth: 540,
          }}
        >
          From the field, direct to you.
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="reveal"
              data-delay={i * 80}
            >
              <GlassCard variant="feature" className="h-full flex flex-col">
                <div className="mb-4">
                  <LavenderStalks n={5} opacity={1} className="h-8" />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--tone-900)" }}
                >
                  {product.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "var(--text-muted-light)" }}
                >
                  {product.description}
                </p>
                <Button variant="outline" href={product.href} className="self-start text-sm px-4 py-2">
                  Learn more
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="solid" href="/products">
            View all products
          </Button>
        </div>
      </div>
    </section>
  );
}
