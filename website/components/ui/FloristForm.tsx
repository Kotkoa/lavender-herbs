"use client";

import GlassCard from "./GlassCard";

export default function FloristForm() {
  return (
    <GlassCard variant="testimonial" className="flex flex-col gap-6">
      <h3
        className="text-lg font-bold"
        style={{ color: "var(--tone-50)" }}
      >
        Wholesale enquiry
      </h3>
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        {[
          { label: "Name", type: "text", placeholder: "Your name" },
          { label: "Company", type: "text", placeholder: "Studio / shop name" },
          { label: "Email", type: "email", placeholder: "your@email.com" },
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
            Message
          </label>
          <textarea
            rows={3}
            placeholder="Products, volumes, timeline…"
            className="px-4 py-3 rounded-xl text-sm outline-none resize-none"
            style={{
              background: "rgba(243,240,255,0.08)",
              border: "1px solid rgba(177,151,252,0.25)",
              color: "var(--tone-50)",
            }}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: "var(--tone-50)", color: "var(--tone-900)" }}
        >
          Send enquiry
        </button>
      </form>
    </GlassCard>
  );
}
