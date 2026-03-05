interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  gradientFrom = "var(--tone-50)",
  gradientTo = "var(--tone-100)",
}: PageHeroProps) {
  return (
    <section
      style={{
        background: `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        paddingTop: "calc(var(--nav-h) + 72px)",
        paddingBottom: 72,
      }}
    >
      <div
        style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
        className="mx-auto"
      >
        <p
          className="mb-4 font-bold uppercase"
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            color: "var(--tone-500)",
            animation: "fadeUp 0.85s var(--ease-out) 0.1s both",
          }}
        >
          {label}
        </p>
        <h1
          className="font-bold"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
            color: "var(--tone-900)",
            lineHeight: 1.1,
            animation: "fadeUp 0.85s var(--ease-out) 0.25s both",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{
              color: "var(--text-muted-light)",
              animation: "fadeUp 0.85s var(--ease-out) 0.4s both",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
