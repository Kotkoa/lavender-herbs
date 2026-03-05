"use client";

interface LavenderStalksProps {
  n?: number;
  opacity?: number;
  className?: string;
}

export default function LavenderStalks({
  n = 64,
  opacity = 0.18,
  className = "",
}: LavenderStalksProps) {
  return (
    <div
      className={`flex items-end justify-center gap-[3px] ${className}`}
      style={{ opacity }}
    >
      {Array.from({ length: n }).map((_, i) => (
        <div
          key={i}
          style={
            {
              "--i": i,
              animationDuration: `calc(1.8s + var(--i) * 0.06s)`,
              animationDelay: `calc(var(--i) * 0.05s)`,
              animationName: "scaleStalk",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            } as React.CSSProperties
          }
          className="w-[2px] rounded-t-full origin-bottom"
        >
          <div
            className="w-full rounded-t-full"
            style={{
              height: `${28 + Math.sin(i * 0.7) * 12}px`,
              background: "var(--tone-600)",
            }}
          />
          <div
            className="w-[5px] h-[8px] rounded-full -ml-[1.5px]"
            style={{ background: "var(--tone-500)" }}
          />
        </div>
      ))}
    </div>
  );
}
