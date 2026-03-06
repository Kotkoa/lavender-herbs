"use client";

import { useRef } from "react";

export default function CTASection() {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <section className="bg-tone-900 py-24 relative overflow-hidden">
      {[900, 650, 400].map((size, i) => (
        <div
          key={size}
          className="absolute top-1/2 left-1/2 rounded-full border border-[rgba(177,151,252,0.08)] animate-[ringPulse_6s_ease-in-out_infinite] pointer-events-none"
          style={{
            width: size,
            height: size,
            marginTop: -size / 2,
            marginLeft: -size / 2,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      <div className="container-mx relative z-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label text-tone-400">
              Newsletter
            </p>
            <h2 className="mb-4 font-bold text-cta text-tone-50 leading-[1.1]">
              Stay connected with the farm.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-tone-400">
              Get updates about blooming season, harvest dates and new lavender products.
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
                className="flex-1 px-5 py-3 rounded-full text-sm outline-none input-dark"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 bg-tone-50 text-tone-900 whitespace-nowrap"
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
                  className="text-sm text-tone-400 hover:text-tone-200 transition-colors duration-200"
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
                className="absolute rounded-full border border-[rgba(151,117,250,0.25)] animate-[ringPulse_4s_ease-in-out_infinite]"
                style={{
                  width: size,
                  height: size,
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
