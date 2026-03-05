"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import LavenderStalks from "@/components/ui/LavenderStalks";

const stats = [
  { value: 1000, suffix: " m²", label: "Plot size" },
  { value: 1.25, suffix: "%", label: "Oil yield" },
  { value: 3, suffix: "", label: "Varieties" },
];

function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((target * ease).toFixed(target < 10 ? 2 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 1800, start);
  return (
    <div className="text-center">
      <div
        className="text-4xl font-bold tabular-nums"
        style={{ color: "var(--tone-900)" }}
      >
        {value < 10 ? count.toFixed(2) : Math.round(count).toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm mt-1" style={{ color: "var(--text-muted-light)" }}>
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "var(--tone-50)",
        paddingTop: "calc(var(--nav-h) + 80px)",
        paddingBottom: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
        className="mx-auto w-full flex-1 flex flex-col justify-center"
      >
        <div
          className="mb-4 text-xs font-bold uppercase tracking-[0.22em]"
          style={{
            color: "var(--tone-400)",
            animation: "fadeUp 0.85s var(--ease-out) 0.1s both",
          }}
        >
          Lavender Farm
        </div>

        <h1
          className="mb-8"
          style={{
            fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)",
            lineHeight: 1.05,
            fontWeight: 100,
          }}
        >
          <span
            style={{
              display: "block",
              color: "var(--tone-100)",
              fontWeight: 300,
              animation: "fadeUp 0.85s var(--ease-out) 0.3s both",
            }}
          >
            Pure lavender.
          </span>
          <span
            style={{
              display: "block",
              color: "var(--tone-400)",
              fontWeight: 500,
              animation: "fadeUp 0.85s var(--ease-out) 0.6s both",
            }}
          >
            From field to bottle.
          </span>
          <span
            style={{
              display: "block",
              color: "var(--tone-800)",
              fontWeight: 800,
              animation: "fadeUp 0.85s var(--ease-out) 0.9s both",
            }}
          >
            Grown with care.
          </span>
        </h1>

        <p
          className="mb-10 max-w-xl text-lg leading-relaxed"
          style={{
            color: "var(--text-muted-light)",
            animation: "fadeUp 0.85s var(--ease-out) 1.1s both",
          }}
        >
          We cultivate{" "}
          <em>Lavandula angustifolia</em> and lavandin for essential oil,
          hydrosol, dried flowers and agrotourism.
        </p>

        <div
          className="flex flex-wrap gap-4 mb-10"
          style={{ animation: "fadeUp 0.85s var(--ease-out) 1.3s both" }}
        >
          <Button variant="solid" href="/products">
            Explore Products
          </Button>
          <Button variant="outline" href="/visit">
            Visit the Farm
          </Button>
        </div>

        <div
          ref={statsRef}
          className="flex flex-wrap gap-12 pb-10"
          style={{ animation: "fadeUp 0.85s var(--ease-out) 1.4s both" }}
        >
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} start={countersStarted} />
          ))}
        </div>
      </div>

      <div className="w-full" style={{ animation: "fadeUp 0.85s var(--ease-out) 1.4s both" }}>
        <LavenderStalks n={64} opacity={0.18} className="w-full h-16" />
      </div>

      <div
        className="flex flex-col items-center pb-6 pt-2 gap-1"
        style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
      >
        <div className="w-px h-8" style={{ background: "var(--tone-300)" }} />
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
          <path d="M1 1l5 5 5-5" stroke="var(--tone-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
