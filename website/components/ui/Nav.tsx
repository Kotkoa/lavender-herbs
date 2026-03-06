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
      style={{
        height: 'var(--nav-h)',
        transition:
          'background 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s var(--ease)',
        background: scrolled ? 'rgba(243, 240, 255, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(95, 61, 196, 0.12)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(95, 61, 196, 0.06)' : 'none',
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center"
    >
      <div
        style={{ maxWidth: 'var(--mx)', padding: '0 36px' }}
        className="w-full mx-auto flex items-center justify-between"
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
          style={{ color: 'var(--tone-900)' }}
        >
          <span style={{ color: 'var(--tone-600)' }}>L</span>avender Herbs
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--tone-700)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--tone-900)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--tone-700)')
              }
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
