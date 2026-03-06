'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from './Button'

const links = [
  { href: '/products', label: 'Products' },
  { href: '/florists', label: 'Florists' },
  { href: '/distillery', label: 'Distillery' },
  { href: '/visit', label: 'Visit' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center h-nav transition-[background,box-shadow,border-color] duration-300 ease-(--ease) ${
        scrolled
          ? 'bg-tone-50/88 backdrop-blur-[20px] backdrop-saturate-180 border-b border-rule-light shadow-[0_2px_24px_rgba(95,61,196,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-mx w-full flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-tone-900"
        >
          <span className="text-tone-600">L</span>avender Herbs
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-tone-700 hover:text-tone-900 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button variant="pill-outline" href="/contact">
          Order
        </Button>
      </div>
    </header>
  )
}
