interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className="mb-4 font-bold"
      style={{
        fontSize: 10,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: light ? "var(--tone-400)" : "var(--tone-500)",
      }}
    >
      {children}
    </p>
  );
}
