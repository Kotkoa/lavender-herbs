'use client'

import Link from 'next/link'

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'Essential Oil', href: '/products#oil' },
      { label: 'Hydrosol', href: '/products#hydrosol' },
      { label: 'Dried Flowers', href: '/products#dried-flowers' },
      { label: 'Seedlings', href: '/products#seedlings' },
    ],
  },
  {
    title: 'For Florists',
    links: [
      { label: 'Wholesale', href: '/florists' },
      { label: 'Assortment', href: '/florists#assortment' },
      { label: 'Ordering', href: '/florists#order' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: 'Guided Farm Walk', href: '/visit#tour' },
      { label: 'Lavender Field Photos', href: '/visit#photo' },
      { label: 'Pick Your Own Bouquet', href: '/visit#upick' },
      { label: 'Distillery', href: '/distillery' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'About the Farm', href: '/about' },
      { label: 'Instagram', href: 'https://www.instagram.com/lavender.herbs/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-tone-footer pt-16 pb-8">
      <div className="container-mx">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 pb-12 border-b border-tone-50/10">
          <div className="md:w-60 shrink-0">
            <div className="text-lg font-bold mb-3 text-tone-50">
              <span className="text-tone-400">L</span>avender Herbs
            </div>
            <p className="text-sm leading-relaxed text-tone-200">
              Real lavender grown and crafted on our small farm in Spain.
              Essential oil, hydrosol, dried flowers, and quiet farm visits
              during the blooming season.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/lavender.herbs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tone-400 hover:text-tone-100 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/Kotkoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tone-400 hover:text-tone-100 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="section-label tracking-[0.2em] text-tone-400">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-tone-400 hover:text-tone-100 transition-colors duration-200"
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
          <p className="text-[11px] text-tone-600">
            © {new Date().getFullYear()} Lavender·Herbs
            <span className="text-tone-700 mx-2">·</span>
            All rights reserved
          </p>
          <p className="text-[11px] text-tone-600">
            Pure lavender, grown and crafted on our farm.
          </p>
        </div>
      </div>
    </footer>
  )
}
