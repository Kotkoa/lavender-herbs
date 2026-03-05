"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "@/components/layout/SectionLabel";
import Button from "@/components/ui/Button";

const activities = [
  {
    icon: "📸",
    title: "Photo Sessions",
    description:
      "Book a private session in the blooming field. Peak season: June–July.",
    href: "/visit#photo",
  },
  {
    icon: "🌿",
    title: "Farm Tour",
    description:
      "1-hour guided walk through cultivation and the distillery. Groups welcome.",
    href: "/visit#tour",
  },
  {
    icon: "✂️",
    title: "U-Pick",
    description:
      "Cut your own lavender bouquet. Available during harvest season.",
    href: "/visit#upick",
  },
];

export default function AgrotourismSection() {
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
        background: "linear-gradient(180deg, var(--tone-600) 0%, var(--tone-700) 100%)",
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
              <SectionLabel light>Visit us</SectionLabel>
            </div>
            <h2
              className="reveal mb-6 font-bold"
              data-delay="80"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--tone-50)",
              }}
            >
              Walk through the field.
            </h2>
            <p
              className="reveal mb-10 text-base leading-relaxed"
              data-delay="160"
              style={{ color: "var(--tone-200)" }}
            >
              Come during bloom season and experience the farm firsthand —
              the scent, the colour, the calm. Open June through August.
            </p>

            <div className="flex flex-col gap-4">
              {activities.map((activity, i) => (
                <div
                  key={activity.title}
                  className="reveal flex gap-4 items-start"
                  data-delay={240 + i * 80}
                >
                  <span className="text-2xl mt-0.5">{activity.icon}</span>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ color: "var(--tone-100)" }}
                    >
                      {activity.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--tone-300)" }}>
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10" data-delay="500">
              <Button
                href="/visit"
                variant="outline"
                className="border-[var(--tone-200)] text-[var(--tone-100)] hover:bg-[var(--tone-200)] hover:text-[var(--tone-900)]"
              >
                Plan your visit
              </Button>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-3" data-delay="200">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="rounded-xl flex items-center justify-center text-xs"
                style={{
                  aspectRatio: n === 1 ? "1/1.2" : "1/1",
                  background: "rgba(243,240,255,0.1)",
                  border: "1px solid rgba(243,240,255,0.15)",
                  color: "var(--tone-400)",
                  gridRow: n === 1 ? "span 2" : "auto",
                }}
              >
                Photo {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
