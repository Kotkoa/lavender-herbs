interface GlassCardProps {
  variant?: "feature" | "testimonial" | "pricing";
  className?: string;
  children: React.ReactNode;
}

const styles = {
  feature: {
    background: "rgba(243, 240, 255, 0.55)",
    border: "1px solid rgba(177, 151, 252, 0.3)",
  },
  testimonial: {
    background: "rgba(121, 80, 242, 0.25)",
    border: "1px solid rgba(177, 151, 252, 0.2)",
  },
  pricing: {
    background: "rgba(112, 72, 232, 0.2)",
    border: "1px solid rgba(177, 151, 252, 0.2)",
  },
};

export default function GlassCard({
  variant = "feature",
  className = "",
  children,
}: GlassCardProps) {
  return (
    <div
      style={{
        ...styles[variant],
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out), background 0.3s var(--ease-out)",
      }}
      className={`rounded-2xl p-6 hover:-translate-y-[5px] hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
