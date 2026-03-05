import Link from "next/link";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Essential Oil", href: "/products#oil" },
      { label: "Hydrosol", href: "/products#hydrosol" },
      { label: "Dried Flowers", href: "/products#dried-flowers" },
      { label: "Seedlings", href: "/products#seedlings" },
    ],
  },
  {
    title: "For Florists",
    links: [
      { label: "Wholesale", href: "/florists" },
      { label: "Assortment", href: "/florists#assortment" },
      { label: "Ordering", href: "/florists#order" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Farm Tour", href: "/visit#tour" },
      { label: "Photo Sessions", href: "/visit#photo" },
      { label: "U-Pick", href: "/visit#upick" },
      { label: "Distillery", href: "/distillery" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "About the Farm", href: "/about" },
      { label: "Instagram", href: "https://www.instagram.com/lavender.herbs/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--tone-footer)" }} className="pt-16 pb-8">
      <div
        style={{ maxWidth: "var(--mx)", padding: "0 36px" }}
        className="mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 pb-12" style={{ borderBottom: "1px solid rgba(243,240,255,0.1)" }}>
          <div className="md:w-[240px] shrink-0">
            <div className="text-lg font-bold mb-3" style={{ color: "var(--tone-50)" }}>
              <span style={{ color: "var(--tone-400)" }}>L</span>avender·Herbs
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--tone-200)" }}>
              Pure lavender from field to bottle. Essential oil, hydrosol, dried flowers and agrotourism.
            </p>
            <div className="flex gap-3 mt-6">
              {["IG", "TG", "WA"].map((icon) => (
                <div
                  key={icon}
                  className="flex items-center justify-center text-xs font-semibold rounded-[8px]"
                  style={{
                    width: 34,
                    height: 34,
                    border: "1px solid rgba(151, 117, 250, 0.35)",
                    color: "var(--tone-400)",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p
                  className="mb-4 font-bold"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--tone-400)",
                  }}
                >
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] transition-colors duration-200"
                        style={{ color: "var(--tone-400)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--tone-100)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--tone-400)")}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: 11, color: "var(--tone-600)" }}>
            © {new Date().getFullYear()} Lavender·Herbs
            <span style={{ color: "var(--tone-700)" }} className="mx-2">·</span>
            All rights reserved
          </p>
          <p style={{ fontSize: 11, color: "var(--tone-600)" }}>
            Pure lavender. From field to bottle.
          </p>
        </div>
      </div>
    </footer>
  );
}
