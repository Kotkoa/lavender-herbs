"use client";

import { useRef } from "react";
import LavenderStalks from "@/components/ui/LavenderStalks";

export default function CTASection() {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <section
      style={{
        background: "var(--tone-900)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[900, 650, 400].map((size, i) => (
        <div
          key={size}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: size,
            height: size,
            marginTop: -size / 2,
            marginLeft: -size / 2,
            borderRadius: "50%",
            border: "1px solid rgba(177,151,252,0.08)",
            animationName: "ringPulse",
            animationDuration: "6s",
            animationDelay: `${i * 1.5}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        style={{ maxWidth: "var(--mx)", padding: "0 36px", position: "relative", zIndex: 1 }}
        className="mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="mb-4 font-bold"
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--tone-400)",
              }}
            >
              Newsletter
            </p>
            <h2
              className="mb-4 font-bold"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
                color: "var(--tone-50)",
                lineHeight: 1.1,
              }}
            >
              Stay in bloom.
            </h2>
            <p
              className="mb-8 text-base leading-relaxed"
              style={{ color: "var(--tone-400)" }}
            >
              Get seasonal updates, harvest dates, and early access to new products.
            </p>

            <form
              className="flex gap-3 mb-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                ref={emailRef}
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3 rounded-full text-sm outline-none"
                style={{
                  background: "rgba(243,240,255,0.1)",
                  border: "1px solid rgba(177,151,252,0.25)",
                  color: "var(--tone-50)",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: "var(--tone-50)",
                  color: "var(--tone-900)",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </form>

            <div className="flex gap-6">
              {[
                { label: "WhatsApp", href: "#" },
                { label: "Telegram", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--tone-400)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--tone-200)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--tone-400)")}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center relative">
            {[120, 85, 50].map((size, i) => (
              <div
                key={size}
                style={{
                  position: "absolute",
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  border: "1px solid rgba(151,117,250,0.25)",
                  animationName: "ringPulse",
                  animationDuration: "4s",
                  animationDelay: `${i * 0.8}s`,
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                }}
              />
            ))}
            <LavenderStalks n={12} opacity={1} className="h-24 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
