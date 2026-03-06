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
      { label: 'Farm Tour', href: '/visit#tour' },
      { label: 'Photo Sessions', href: '/visit#photo' },
      { label: 'U-Pick', href: '/visit#upick' },
      { label: 'Distillery', href: '/distillery' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact Us', href: '/contact' },
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
              Real lavender grown and crafted on our small farm. Essential oil,
              hydrosol, dried flowers and farm experiences.
            </p>
            <div className="flex gap-3 mt-6">
              {['IG', 'TG', 'WA'].map((icon) => (
                <div
                  key={icon}
                  className="flex items-center justify-center text-xs font-semibold rounded-lg w-8.5 h-8.5 border border-tone-500/35 text-tone-400"
                >
                  {icon}
                </div>
              ))}
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
            Pure lavender. From field to bottle.
          </p>
        </div>
      </div>
    </footer>
  )
}
