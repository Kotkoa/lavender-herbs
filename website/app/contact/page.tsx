"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/layout/SectionLabel";

const contactInfo = [
  { label: "Email", value: "hello@lavender-herbs.com", href: "mailto:hello@lavender-herbs.com" },
  { label: "WhatsApp", value: "Write on WhatsApp", href: "#" },
  { label: "Telegram", value: "@lavender_herbs", href: "#" },
  { label: "Instagram", value: "@lavender.herbs", href: "https://www.instagram.com/lavender.herbs/" },
];

const workingHours = [
  { days: "Monday–Friday", time: "09:00–17:00" },
  { days: "Saturday", time: "10:00–16:00" },
  { days: "Sunday", time: "By arrangement" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        label="Contact"
        title="Get in touch."
        subtitle="Questions about products, wholesale enquiries, or booking a farm visit — we read everything."
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
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <SectionLabel>Send a message</SectionLabel>
            <h2
              className="mb-8 font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--tone-900)",
              }}
            >
              We reply within 24 hours.
            </h2>

            {submitted ? (
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(95,61,196,0.06)",
                  border: "1px solid rgba(177,151,252,0.3)",
                }}
              >
                <p className="text-lg font-semibold mb-2" style={{ color: "var(--tone-900)" }}>
                  Message sent
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted-light)" }}>
                  We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                {[
                  { label: "Name", type: "text", placeholder: "Your name" },
                  { label: "Email", type: "email", placeholder: "your@email.com" },
                  { label: "Phone (optional)", type: "tel", placeholder: "+7 xxx xxx xx xx" },
                ].map((field) => (
                  <div key={field.label} className="flex flex-col gap-1">
                    <label
                      className="text-xs font-semibold uppercase"
                      style={{ letterSpacing: "0.12em", color: "var(--tone-500)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: "white",
                        border: "1px solid rgba(177,151,252,0.4)",
                        color: "var(--tone-900)",
                      }}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <label
                    className="text-xs font-semibold uppercase"
                    style={{ letterSpacing: "0.12em", color: "var(--tone-500)" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help?"
                    required
                    className="px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{
                      background: "white",
                      border: "1px solid rgba(177,151,252,0.4)",
                      color: "var(--tone-900)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 hover:opacity-90"
                  style={{ background: "var(--tone-900)", color: "var(--tone-50)" }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <SectionLabel>Contact details</SectionLabel>
              <div className="flex flex-col gap-3">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 py-3 px-4 rounded-xl transition-colors duration-200"
                    style={{
                      background: "rgba(243,240,255,0.6)",
                      border: "1px solid rgba(177,151,252,0.25)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(243,240,255,0.9)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "rgba(243,240,255,0.6)")
                    }
                  >
                    <div className="w-8 text-xs font-semibold uppercase" style={{ color: "var(--tone-500)" }}>
                      {c.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "var(--tone-800)" }}>
                      {c.value}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Working hours</SectionLabel>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--rule-light)" }}
              >
                {workingHours.map((h, i) => (
                  <div
                    key={h.days}
                    className="flex justify-between items-center px-5 py-3"
                    style={{
                      borderTop: i > 0 ? "1px solid var(--rule-light)" : "none",
                      background: i % 2 === 0 ? "white" : "rgba(243,240,255,0.4)",
                    }}
                  >
                    <p className="text-sm font-medium" style={{ color: "var(--tone-900)" }}>
                      {h.days}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-muted-light)" }}>
                      {h.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard variant="feature">
              <h3 className="font-semibold mb-3 text-sm" style={{ color: "var(--tone-900)" }}>
                For florists and wholesale
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted-light)" }}>
                Minimum orders, pricing, and packing details are on the Florists page.
              </p>
              <a
                href="/florists"
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: "var(--tone-600)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tone-800)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--tone-600)")}
              >
                Go to Florists page →
              </a>
            </GlassCard>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--tone-900)",
          padding: "64px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel light>Location</SectionLabel>
          <h2
            className="mb-4 font-bold"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--tone-50)",
            }}
          >
            Find us.
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--tone-400)" }}>
            Exact address provided after booking or on first order.
          </p>
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{
              height: 280,
              background: "rgba(243,240,255,0.05)",
              border: "1px solid rgba(177,151,252,0.15)",
              color: "var(--tone-500)",
              fontSize: 14,
            }}
          >
            Map — add Google Maps embed in Phase 6
          </div>
        </div>
      </section>
    </>
  );
}
