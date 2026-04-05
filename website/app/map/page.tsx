import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import MapContent from "@/components/map/MapContent";

export const metadata: Metadata = {
  title: "Lavender Map of Spain | Lavender Herbs",
  description:
    "21 lavender fields, farms, distilleries and shops across Spain. Interactive map with locations, ratings and directions.",
};

export default function MapPage() {
  return (
    <>
      <PageHero
        label="Explore"
        title="Lavender Map of Spain."
        subtitle="21 lavender fields, farms and distilleries across Spain. Bloom season: late June — mid July."
      />

      <section
        style={{
          background: "linear-gradient(180deg, var(--tone-100) 0%, var(--tone-50) 100%)",
          padding: "0 0 80px",
        }}
      >
        <div
          style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
          className="mx-auto"
        >
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=15zhBIwk78g-bwl_CxFY3FaCN7a6AxyQ&ehbc=2E312F"
            width="100%"
            height="600"
            style={{ border: 0, borderRadius: 12 }}
            allowFullScreen
            loading="lazy"
            title="Lavender locations map of Spain"
          />
        </div>
      </section>

      <MapContent />
    </>
  );
}
