"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/layout/SectionLabel";

const activities = [
  {
    id: "photo",
    title: "Photo sessions",
    description:
      "Book a private session in the blooming field during peak season. Morning and golden-hour slots. Suitable for portraits, engagement shoots, and editorial work.",
    season: "June–July",
    duration: "1–2 hours",
    group: "1–4 people",
  },
  {
    id: "tour",
    title: "Farm tour",
    description:
      "A 1-hour guided walk through cultivation, care, and the distillery. See the lavender field up close, learn the production process, and take home a small bottle of hydrosol.",
    season: "June–August",
    duration: "1 hour",
    group: "Up to 10 people",
  },
  {
    id: "upick",
    title: "U-Pick",
    description:
      "Cut your own lavender bouquet during harvest season. We supply scissors and paper wrapping. A meditative and fragrant experience, best for families.",
    season: "July",
    duration: "Self-paced",
    group: "Any size",
  },
  {
    id: "workshop",
    title: "Distillation workshop",
    description:
      "Hands-on introduction to steam distillation. Load the still, watch the condensation, separate the oil. You take home the hydrosol from your own run.",
    season: "July",
    duration: "2 hours",
    group: "2–6 people",
  },
];

const calendar = [
  { month: "April–May", label: "Seedling season", active: false },
  { month: "June", label: "Early bloom — photo sessions open", active: true },
  { month: "July", label: "Peak bloom — all activities", active: true },
  { month: "August", label: "Late harvest — dried flowers", active: true },
  { month: "September+", label: "Off season", active: false },
];

const hours = [
  { days: "Monday–Friday", time: "09:00–17:00" },
  { days: "Saturday", time: "10:00–16:00" },
  { days: "Sunday", time: "By arrangement" },
];

export default function VisitPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        label="Agrotourism"
        title="Come to the field."
        subtitle="Walk through the lavender during bloom season. Farm tours, photo sessions, U-Pick and distillation workshops."
        gradientFrom="var(--tone-50)"
        gradientTo="var(--tone-200)"
      />

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-200) 0%, var(--tone-300) 100%)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <SectionLabel>Activities</SectionLabel>
          <h2
            className="mb-10 font-bold"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--tone-900)",
            }}
          >
            What to do here.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((a) => (
              <div key={a.id} id={a.id} className="scroll-mt-24">
                <GlassCard variant="feature" className="h-full">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--tone-900)" }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-muted-light)" }}
                  >
                    {a.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { k: "Season", v: a.season },
                      { k: "Duration", v: a.duration },
                      { k: "Group", v: a.group },
                    ].map(({ k, v }) => (
                      <span
                        key={k}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(95,61,196,0.08)",
                          border: "1px solid rgba(177,151,252,0.3)",
                          color: "var(--tone-700)",
                        }}
                      >
                        {k}: {v}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--tone-50)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <SectionLabel>Season calendar</SectionLabel>
            <h2
              className="mb-8 font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--tone-900)",
              }}
            >
              When to visit.
            </h2>
            <div className="flex flex-col gap-3">
              {calendar.map((c) => (
                <div
                  key={c.month}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl"
                  style={{
                    background: c.active ? "rgba(95,61,196,0.06)" : "transparent",
                    border: `1px solid ${c.active ? "rgba(177,151,252,0.3)" : "rgba(177,151,252,0.12)"}`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: c.active ? "var(--tone-600)" : "var(--tone-300)" }}
                  />
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: c.active ? "var(--tone-900)" : "var(--tone-500)" }}
                    >
                      {c.month}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: c.active ? "var(--tone-600)" : "var(--tone-400)" }}
                    >
                      {c.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Opening hours</SectionLabel>
            <h2
              className="mb-8 font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--tone-900)",
              }}
            >
              When we are here.
            </h2>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--rule-light)" }}
            >
              {hours.map((h, i) => (
                <div
                  key={h.days}
                  className="flex justify-between items-center px-6 py-4"
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
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-700) 0%, var(--tone-800) 100%)",
          padding: "80px 0",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <SectionLabel light>Book a visit</SectionLabel>
            <h2
              className="mb-6 font-bold"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--tone-50)",
              }}
            >
              Reserve your spot.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--tone-300)" }}>
              Fill in the form and we will get back to you within 24 hours to confirm availability and details.
            </p>
          </div>

          <div>
            {submitted ? (
              <div
                className="p-8 rounded-2xl text-center"
                style={{
                  background: "rgba(243,240,255,0.1)",
                  border: "1px solid rgba(177,151,252,0.25)",
                }}
              >
                <p className="text-lg font-semibold mb-2" style={{ color: "var(--tone-100)" }}>
                  Request received
                </p>
                <p className="text-sm" style={{ color: "var(--tone-400)" }}>
                  We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <GlassCard variant="testimonial">
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
                    { label: "Phone", type: "tel", placeholder: "+7 xxx xxx xx xx" },
                  ].map((field) => (
                    <div key={field.label} className="flex flex-col gap-1">
                      <label
                        className="text-xs font-semibold uppercase"
                        style={{ letterSpacing: "0.12em", color: "var(--tone-300)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="px-4 py-3 rounded-xl text-sm outline-none"
                        style={{
                          background: "rgba(243,240,255,0.08)",
                          border: "1px solid rgba(177,151,252,0.25)",
                          color: "var(--tone-50)",
                        }}
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-xs font-semibold uppercase"
                      style={{ letterSpacing: "0.12em", color: "var(--tone-300)" }}
                    >
                      Activity
                    </label>
                    <select
                      className="px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: "rgba(243,240,255,0.08)",
                        border: "1px solid rgba(177,151,252,0.25)",
                        color: "var(--tone-50)",
                      }}
                    >
                      <option value="">Select activity…</option>
                      {activities.map((a) => (
                        <option key={a.id} value={a.id} style={{ color: "var(--tone-900)" }}>
                          {a.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-xs font-semibold uppercase"
                      style={{ letterSpacing: "0.12em", color: "var(--tone-300)" }}
                    >
                      Preferred date
                    </label>
                    <input
                      type="date"
                      className="px-4 py-3 rounded-xl text-sm outline-none"
                      style={{
                        background: "rgba(243,240,255,0.08)",
                        border: "1px solid rgba(177,151,252,0.25)",
                        color: "var(--tone-50)",
                        colorScheme: "dark",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ background: "var(--tone-50)", color: "var(--tone-900)" }}
                  >
                    Send booking request
                  </button>
                </form>
              </GlassCard>
            )}
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
            Exact address provided on booking confirmation.
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
