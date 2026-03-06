# Lavender Herbs

> Experience real lavender. Pure aroma from our field to your home.

We grow premium lavender and craft small-batch essential oil, hydrosol and dried flowers — directly from our farm to you.

A website for a small lavender farm in Spain, built with a monochromatic violet design system that progressively darkens as you scroll — like walking deeper into a lavender field.

[Live Demo](https://kotkoa.github.io/lavender-herbs/) | [Instagram @lavender.herbs](https://www.instagram.com/lavender.herbs/)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript)
![Deploy](https://github.com/kotkoa/lavender-herbs/actions/workflows/deploy.yml/badge.svg)

---

## Design System

A 10-step monochromatic violet scale where all hierarchy emerges from tonal position alone — no additional accent colours.

```
tone-50  #f3f0ff  ░░░░░░░░░░  Hero background
tone-100 #e5dbff  ░░░░░░░░░   Light sections
tone-200 #d0bfff  ░░░░░░░░    Feature borders
tone-300 #b197fc  ░░░░░░░     About section
tone-400 #9775fa  ░░░░░░      Mid accent
tone-500 #845ef7  ░░░░░       Muted text
tone-600 #7950f2  ░░░░        Process tones
tone-700 #7048e8  ░░░         Deep sections
tone-800 #6741d9  ░░          Pricing
tone-900 #5f3dc4  ░           CTA / body text
```

**Chromatic Crescendo** — each section occupies a progressively darker band as the visitor scrolls. The conversion moment (CTA) sits at the richest saturation point.

**Typography** — Inter variable font only. Weight mirrors tonal depth: 300-400 at lighter sections, 800-900 at deeper sections. Sizes use `clamp()` for fluid scaling.

**Glass Cards** — `rgba()` backgrounds with `backdrop-filter: blur(8px)`. On hover: `translateY(-5px)`, lighter background, saturated border, deeper shadow.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | App Router, static export (`output: 'export'`) |
| **React 19** | With React Compiler enabled |
| **Tailwind CSS v4** | `@theme` + `@utility` directives, custom design tokens |
| **TypeScript** | Strict mode |
| **GitHub Actions** | CI/CD to GitHub Pages |

---

## Project Structure

```
├── website/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (Inter font, Nav, Footer)
│   │   ├── page.tsx                # Landing page (7 sections)
│   │   └── globals.css             # Tailwind + tokens + animations
│   ├── components/
│   │   ├── landing/                # HeroSection, ProductsSection, AboutSection,
│   │   │                           # ProcessSection, TestimonialsSection,
│   │   │                           # AgrotourismSection, CTASection
│   │   ├── layout/                 # PageHero, SectionLabel
│   │   └── ui/                     # Nav, Footer, Button, GlassCard, LavenderStalks
│   ├── styles/
│   │   ├── tokens.css              # CSS custom properties (tonal scale)
│   │   └── animations.css          # Keyframe animations
│   └── public/images/              # Farm photography
├── books/                          # Scientific papers on lavender cultivation
├── business_model/                 # Business plan & investor memo
├── distillation_analytics/         # Distillation data, Python analysis, reports
└── site_research/                  # Competitor analysis & style guides
```

---

## Landing Page Sections

The landing page flows through 7 sections, each occupying a progressively darker tonal band:

| Section | Tone | Content |
|---|---|---|
| **Hero** | 50 | *"Experience real lavender."* — animated counters: 1,000 m² field, 100% pure, 0 pesticides |
| **Products** | 100–200 | *"Bring the calm of lavender into your day."* — essential oil, hydrosol, dried flowers |
| **About** | 300 | *"A small lavender farm built with care."* — photo carousel with 10 farm images |
| **Process** | 200–500 | *"Grown and crafted on our farm."* — 4 steps: Planting → Care → Harvest → Distillation |
| **Testimonials** | 500–600 | *"Loved by people who appreciate real lavender."* — animated stat counters |
| **Agrotourism** | 600–700 | *"A peaceful visit, surrounded by lavender."* — photo grid, farm activities |
| **CTA** | 900 | *"Follow the season as it unfolds."* — pulsing ring animation, social links |

## Key Features

- **Chromatic Crescendo** — sections darken from `#f3f0ff` to `#5f3dc4` as the visitor scrolls
- **Scroll-triggered reveal** — IntersectionObserver-based entrance animations with staggered delays
- **Glassmorphism cards** — `rgba()` backgrounds + `backdrop-filter: blur(8px)`, hover lift effect
- **Animated lavender stalks** — CSS `scaleY` + `rotate` with per-element staggered timing
- **Photo carousel** — 10 farm photos, auto-advancing every 4s with crossfade and dot navigation
- **Responsive grid** — 3-col → 2-col → 1-col with full-bleed photo grids
- **Static export** — zero server runtime, auto-deployed to GitHub Pages via Actions

---

## Getting Started

```bash
cd website
yarn install
yarn dev          # http://localhost:3000
yarn build        # Static export to out/
yarn lint         # ESLint
yarn check-types  # TypeScript strict check
```

---

## Domain Context

This project is built around a real lavender farm cultivating *Lavandula angustifolia* (English lavender) on a 1,000 m² plot. The repository includes:

- **Distillation analytics** — Python analysis of steam distillation data (~1.25% essential oil yield)
- **Business model** — Financial projections with conservative/realistic/optimistic scenarios
- **Scientific literature** — Reviews of cultivation research papers
- **Competitor research** — Architecture analysis of reference lavender farm websites

---

## License

MIT
