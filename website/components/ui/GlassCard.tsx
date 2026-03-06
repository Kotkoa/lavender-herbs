interface GlassCardProps {
  variant?: "feature" | "testimonial" | "pricing";
  className?: string;
  children: React.ReactNode;
}

const variantClasses = {
  feature:
    "bg-[rgba(243,240,255,0.55)] border border-[rgba(177,151,252,0.3)]",
  testimonial:
    "bg-[rgba(121,80,242,0.25)] border border-[rgba(177,151,252,0.2)]",
  pricing:
    "bg-[rgba(112,72,232,0.2)] border border-[rgba(177,151,252,0.2)]",
};

export default function GlassCard({
  variant = "feature",
  className = "",
  children,
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 backdrop-blur-sm transition-[transform,box-shadow,background] duration-300 ease-out hover:-translate-y-1.25 hover:shadow-xl ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
