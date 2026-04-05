interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p className={`section-label ${light ? "text-tone-400" : "text-tone-500"}`}>
      {children}
    </p>
  );
}
