"use client";

import { useState } from "react";
import SectionLabel from "@/components/layout/SectionLabel";
import LocationCard from "@/components/map/LocationCard";
import {
  LAVENDER_LOCATIONS,
  REGION_GROUPS,
  CATEGORY_FILTERS,
} from "@/data/lavender-locations";
import type { LavenderCategory } from "@/data/lavender-locations";

export default function MapContent() {
  const [activeCategory, setActiveCategory] = useState<LavenderCategory | "all">("all");

  const filteredLocations =
    activeCategory === "all"
      ? LAVENDER_LOCATIONS
      : LAVENDER_LOCATIONS.filter((loc) => loc.category === activeCategory);

  return (
    <section
      style={{
        background: "linear-gradient(180deg, var(--tone-50) 0%, var(--tone-100) 100%)",
        padding: "80px 0",
      }}
    >
      <div
        style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
        className="mx-auto"
      >
        <SectionLabel>Locations</SectionLabel>
        <h2
          className="mb-8 font-bold"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: "var(--tone-900)",
          }}
        >
          21 places to visit.
        </h2>

        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORY_FILTERS.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveCategory(filter.value)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={
                activeCategory === filter.value
                  ? {
                      background: "var(--tone-900)",
                      border: "1px solid var(--tone-900)",
                      color: "var(--tone-50)",
                    }
                  : {
                      background: "rgba(95,61,196,0.08)",
                      border: "1px solid rgba(177,151,252,0.3)",
                      color: "var(--tone-700)",
                    }
              }
            >
              {filter.emoji ? `${filter.emoji} ${filter.label}` : filter.label}
            </button>
          ))}
        </div>

        {REGION_GROUPS.map((region) => {
          const regionLocations = filteredLocations.filter(
            (loc) => loc.region === region
          );
          if (regionLocations.length === 0) return null;

          return (
            <div key={region} className="mb-12 last:mb-0">
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "var(--tone-900)" }}
              >
                {region}
                <span
                  className="ml-2 text-sm font-normal"
                  style={{ color: "var(--tone-400)" }}
                >
                  ({regionLocations.length})
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionLocations.map((location) => (
                  <LocationCard key={location.name} location={location} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
