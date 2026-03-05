"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "@/components/layout/SectionLabel";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
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
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "var(--tone-300)",
        padding: "100px 0",
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
        className="mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal" data-delay="0">
              <SectionLabel>About the Farm</SectionLabel>
            </div>
            <h2
              className="reveal mb-6 font-bold"
              data-delay="80"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--tone-900)",
              }}
            >
              A small farm.{" "}
              <em style={{ fontStyle: "italic", fontWeight: 300 }}>
                An obsessive craft.
              </em>
            </h2>
            <blockquote
              className="reveal mb-8 text-2xl italic font-light leading-snug"
              data-delay="160"
              style={{
                color: "var(--tone-800)",
                borderLeft: "3px solid var(--tone-600)",
                paddingLeft: 24,
              }}
            >
              "The soil, the sun, the silence — everything ends up in the bottle."
            </blockquote>
            <p
              className="reveal text-base leading-relaxed mb-4"
              data-delay="240"
              style={{ color: "var(--tone-900)" }}
            >
              We grow English lavender on a 1,000 m² plot. Every step — from
              selecting cuttings in spring to distilling the harvest — happens
              on site. No intermediaries. No shortcuts.
            </p>
            <p
              className="reveal text-base leading-relaxed"
              data-delay="320"
              style={{ color: "var(--tone-800)" }}
            >
              Our focus is on{" "}
              <em>Lavandula angustifolia</em> and lavandin hybrids, grown
              without synthetic pesticides, harvested by hand at peak bloom.
            </p>
          </div>

          <div
            className="reveal rounded-2xl overflow-hidden"
            data-delay="200"
            style={{
              background: "rgba(95,61,196,0.15)",
              aspectRatio: "4/5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(177,151,252,0.3)",
            }}
          >
            <p
              className="text-center text-sm"
              style={{ color: "var(--tone-700)" }}
            >
              Photo from @lavender.herbs
              <br />
              <span style={{ fontSize: 11, color: "var(--tone-600)" }}>
                Replace in Phase 6
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
