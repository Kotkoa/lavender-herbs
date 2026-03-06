import Link from "next/link";

interface ButtonProps {
  variant?: "solid" | "outline" | "pill-outline";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "solid",
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer";

  const variants = {
    solid: "px-6 py-3 rounded-xl text-[var(--text-on-dark)] bg-[var(--tone-900)] hover:bg-[var(--tone-800)]",
    outline: "px-6 py-3 rounded-xl border border-[var(--tone-900)] text-[var(--tone-900)] hover:bg-[var(--tone-900)] hover:text-[var(--text-on-dark)]",
    "pill-outline": "px-6 py-2.5 rounded-full border border-[var(--tone-700)] text-[var(--tone-700)] text-sm hover:bg-[var(--tone-700)] hover:text-[var(--text-on-dark)]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
