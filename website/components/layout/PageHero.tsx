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
      style={{ "--from": gradientFrom, "--to": gradientTo } as React.CSSProperties}
      className="bg-[linear-gradient(180deg,var(--from)_0%,var(--to)_100%)] pt-[calc(var(--nav-h)+72px)] pb-18"
    >
      <div className="container-mx">
        <p className="section-label text-tone-500 animate-fade-up-d1">
          {label}
        </p>
        <h1 className="font-bold text-cta text-tone-900 leading-[1.1] animate-fade-up-d25">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-light animate-fade-up-d4">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
