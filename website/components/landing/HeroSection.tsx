"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";

const stats = [
  { value: 1000, suffix: " m²", label: "Plot size", decimals: 0 },
  { value: 1.25, suffix: "%", label: "Oil yield", decimals: 2 },
  { value: 3, suffix: "", label: "Lavender varieties", decimals: 0 },
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

function StatCounter({ value, suffix, label, start, decimals }: { value: number; suffix: string; label: string; start: boolean; decimals: number }) {
  const count = useCounter(value, 1800, start);
  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();
  return (
    <div className="text-center">
      <div className="text-4xl font-bold tabular-nums text-tone-900">
        {formatted}
        {suffix}
      </div>
      <div className="text-sm mt-1 text-muted-light">
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
    <section className="bg-tone-50 pt-[calc(var(--nav-h)+80px)] pb-0 min-h-screen flex flex-col">
      <div className="container-mx w-full flex-1 flex flex-col justify-center">
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-tone-400 animate-fade-up-d1">
          Lavender Farm
        </div>

        <h1 className="mb-8 text-hero leading-[1.05] font-thin">
          <span className="block text-tone-300 font-light animate-fade-up-d3">
            Experience real lavender.
          </span>
          <span className="block text-tone-400 font-medium animate-fade-up-d6">
            Pure aroma from our field
          </span>
          <span className="block text-tone-800 font-extrabold animate-fade-up-d9">
            to your home.
          </span>
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-light animate-fade-up-d11">
          We grow premium lavender and craft small-batch essential oil, hydrosol
          and dried flowers — directly from our farm to you.
        </p>

        <div className="flex flex-wrap gap-4 mb-10 animate-fade-up-d13">
          <Button variant="solid" href="/products">
            Shop Lavender
          </Button>
          <Button variant="outline" href="/visit">
            Visit the Farm
          </Button>
        </div>

        <div
          ref={statsRef}
          className="flex flex-wrap gap-12 pb-10 animate-fade-up-d14"
        >
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} start={countersStarted} />
          ))}
        </div>
      </div>

    </section>
  );
}
