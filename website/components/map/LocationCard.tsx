import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { getCategoryEmoji, getCategoryLabel } from "@/data/lavender-locations";
import type { LavenderLocation } from "@/data/lavender-locations";

interface LocationCardProps {
  location: LavenderLocation;
}

export default function LocationCard({ location }: LocationCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;

  return (
    <GlassCard variant="feature" className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="px-3 py-1 rounded-full text-xs font-medium"
          style={{
            background: "rgba(95,61,196,0.08)",
            border: "1px solid rgba(177,151,252,0.3)",
            color: "var(--tone-700)",
          }}
        >
          {getCategoryEmoji(location.category)} {getCategoryLabel(location.category)}
        </span>
      </div>

      <h3
        className="text-lg font-bold mb-2"
        style={{ color: "var(--tone-900)" }}
      >
        {location.name}
      </h3>

      <p
        className="text-sm mb-1 font-medium"
        style={{ color: "var(--tone-700)" }}
      >
        {location.rating} ★ ({location.reviews.toLocaleString()} reviews)
      </p>

      <p
        className="text-sm leading-relaxed mb-4 flex-1"
        style={{ color: "var(--text-muted-light)" }}
      >
        {location.description}
      </p>

      <p
        className="text-xs mb-4"
        style={{ color: "var(--tone-400)" }}
      >
        {location.address}
      </p>

      <Button variant="pill-outline" href={mapsUrl} className="self-start text-xs">
        Open in Google Maps
      </Button>
    </GlassCard>
  );
}
