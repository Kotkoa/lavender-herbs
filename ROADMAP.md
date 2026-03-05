# lavender-herbs — Website Build Roadmap

## Repository Identity

| | |
|---|---|
| **Name** | `lavender-herbs` |
| **Description** | Lavender farm website — essential oil, hydrosol, dried flowers & agrotourism. Built with Next.js & monochromatic violet design system. |
| **Tagline** | Pure lavender. From field to bottle. |
| **URL** | lavender-herbs.vercel.app → custom domain |
| **License** | MIT |
| **Topics** | `lavender` `nextjs` `tailwind` `farm` `agrotourism` `essential-oil` |
| **Instagram** | [@lavender.herbs](https://www.instagram.com/lavender.herbs/) |

---

## Tech Stack

| Package | Role |
|---|---|
| Next.js (latest) | App Router, TypeScript, `output: 'export'` for static hosting |
| Tailwind CSS v4 | Utility layer |
| CSS Custom Properties | Design tokens (tonal scale + semantic aliases) |
| `next/font/google` — Inter variable | Single typeface, weights 100–900 |
| framer-motion | Scroll reveals, spring hovers, entrance animations |
| react-hook-form + zod | All forms with validation |
| embla-carousel | Testimonials carousel |
| Formspree | Email delivery — static-compatible, no server required |
| @vercel/analytics | Page analytics |

---

## Design System — Tonal Scale

10-step violet/lavender palette. All hierarchy and emphasis emerge from tonal position alone. No additional accent colours.

| Token | Hex | Role |
|---|---|---|
| `--tone-50` | `#f3f0ff` | Hero bg · near-white lavender |
| `--tone-100` | `#e5dbff` | Features section start |
| `--tone-200` | `#d0bfff` | Features section end |
| `--tone-300` | `#b197fc` | About / depth statement bg |
| `--tone-400` | `#9775fa` | Icons · muted text on dark |
| `--tone-500` | `#845ef7` | Process section mid |
| `--tone-600` | `#7950f2` | Nav logo accent · hover states |
| `--tone-700` | `#7048e8` | Agrotourism / florists section start |
| `--tone-800` | `#6741d9` | Deep section end |
| `--tone-900` | `#5f3dc4` | Body text on light · CTA bg |
| `--tone-footer` | `#4c2fa8` | Footer bg (below scale) |

**Chromatic Crescendo rule:** Each section occupies a darker band as the visitor scrolls — mirroring walking deeper into a lavender field. The conversion moment (CTA) sits at the richest, most saturated point.

**Typography rule:** Inter variable font only. Weight mirrors tonal depth — 300–400 at lighter sections, 800–900 at deeper sections.

---

## Site Map

```
/                   Landing (7 sections + Nav + Footer)
/products           All products — oil · hydrosol · dried flowers · seedlings
/florists           For florists & wholesalers
/distillery         Lab / production process
/visit              Agrotourism + photo sessions
/about              About the farm
/contact            Contacts + map
```

---

## Implementation Phases

---

### Phase 0 — Project Init

- [ ] `npx create-next-app@latest lavender-herbs --typescript --app --tailwind --eslint`
- [ ] `next.config.ts` — set `output: 'export'` and `images: { unoptimized: true }` for GitHub Pages
- [ ] Add `.nvmrc` with current Node LTS version
- [ ] Create GitHub repository `lavender-herbs`, push initial commit with this ROADMAP

---

> ### ⏸ Decision Point — Phase 0
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

### Phase 1 — Design System

- [ ] **`styles/tokens.css`**
  - Tonal scale `--tone-50` through `--tone-footer` (all hex values from table above)
  - Semantic aliases: `--text-on-light: var(--tone-900)` · `--text-on-dark: var(--tone-50)` · `--text-muted-light: var(--tone-500)` · `--text-muted-dark: var(--tone-200)`
  - Rules: `--rule-light: rgba(95,61,196,.12)` · `--rule-dark: rgba(243,240,255,.14)`
  - Layout: `--nav-h: 68px` · `--mx: 1140px`
  - Easing: `--ease: cubic-bezier(.25,.1,.25,1)` · `--ease-out: cubic-bezier(.22,1,.36,1)`
  - Font: `--f: "Inter", system-ui, sans-serif`

- [ ] **`styles/animations.css`**
  - `@keyframes fadeUp` — `opacity:0; translateY(24px)` → `opacity:1; translateY(0)` · 0.85s ease-out
  - `@keyframes scaleStalk` — `scaleY(0.25) rotate(-1deg)` → `scaleY(1) rotate(1deg)` · per-bar timing via `--i`
  - `@keyframes ringPulse` — `scale(1)` → `scale(1.1)` at 50% + opacity fade · 6s infinite
  - `@keyframes scrollPulse` — `scaleY(1)` → `scaleY(1.3)` + opacity cycle · 2s ease-in-out infinite
  - `.reveal` class — `opacity:0; translateY(24px)` initial; JS Intersection Observer adds `.visible` to trigger fadeUp

- [ ] **`styles/globals.css`** — `@import` tokens + animations, CSS reset, base `body` styles

---

> ### ⏸ Decision Point — Phase 1
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

### Phase 2 — Global Components

- [ ] **`components/ui/Nav.tsx`**
  - Fixed, `68px` tall, `z-50`
  - Logo left: "Lavender·Herbs" — first letter in `tone-600`
  - Nav links: Products · Florists · Distillery · Visit · About · Contact
  - Right: pill button "Order" — `tone-700` outline, fills solid on hover
  - Scroll behaviour: past 48px → `rgba(243,240,255,0.88)` bg + `backdrop-filter: blur(20px) saturate(180%)` + bottom border `rgba(95,61,196,0.12)` + shadow

- [ ] **`components/ui/Footer.tsx`**
  - Background `#4c2fa8`
  - Brand column left (240px) + 4 link columns right (flex-between)
  - Columns: Products · For Florists · Visit · Contact
  - Column titles: `10px`, `letter-spacing: 0.2em`, uppercase, `tone-400`
  - Links: `13px`, `tone-400`, hover → `tone-100`
  - Social icons: 34×34px, `8px` radius, bordered
  - Bottom colophon: `11px` `tone-600`, dot separators `tone-700`

- [ ] **`components/ui/LavenderStalks.tsx`**
  - Props: `n` (bar count, default 64), `opacity` (default 0.18 for hero, 1 for icons)
  - Each bar sets `style={{ '--i': index }}` CSS custom property
  - Animation: `scaleY(0.25)→scaleY(1)` + `rotate(-1deg)→rotate(1deg)` · duration `calc(1.8s + var(--i) * 0.06s)` · delay `calc(var(--i) * 0.05s)` · `ease-in-out infinite`
  - Thin vertical bars (2–3px wide, rounded top)

- [ ] **`components/ui/GlassCard.tsx`**
  - Prop: `variant: 'feature' | 'testimonial' | 'pricing'`
  - Feature: `rgba(243,240,255,0.55)` bg · `1px solid rgba(177,151,252,0.3)` border · `backdrop-filter: blur(8px)`
  - Testimonial: `rgba(121,80,242,0.25)` bg
  - Pricing: `rgba(112,72,232,0.2)` bg
  - Hover (all): `translateY(-5px)` · bg lightens · border more saturated · shadow deepens

---

> ### ⏸ Decision Point — Phase 2
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

### Phase 3 — Landing Page

Build each as a component in `components/landing/`, then assemble in `app/page.tsx`.

- [ ] **`HeroSection.tsx`** — bg `tone-50`
  - 3-line stacked headline (demonstrates tonal weight principle):
    - Line 1: `"Pure lavender."` — color `tone-100`, weight `300` (barely visible)
    - Line 2: `"From field to bottle."` — color `tone-400`, weight `500` (mid)
    - Line 3: `"Grown with care."` — color `tone-800`, weight `800` (anchor)
  - Subtitle: `"We cultivate Lavandula angustifolia and lavandin for essential oil, hydrosol, dried flowers and agrotourism."`
  - 2 buttons: `"Explore Products"` (solid `tone-900`) · `"Visit the Farm"` (outline)
  - 3 animated counters: `1,000 m²` Plot size · `1.25%` Oil yield · `3` Varieties
  - 64× `LavenderStalks` at section base, opacity `0.18`
  - Scroll indicator arrow — `scrollPulse` animation
  - Entrance: `fadeUp` staggered 0.1s → 1.4s

- [ ] **`ProductsSection.tsx`** — gradient `tone-100` → `tone-200`
  - Section label: `"OUR PRODUCTS"` — 10px, weight 700, `letter-spacing: 0.22em`, uppercase
  - 3× `GlassCard` (feature variant) + 5-bar `LavenderStalks` icon each:
    - **Essential Oil** — `"100% pure Lavandula angustifolia steam-distilled essential oil. Yield: 12.5 g/kg raw material. Available in 5 ml, 10 ml, 30 ml."`
    - **Hydrosol** — `"Aromatic lavender water — a gentle by-product of distillation. Versatile for skin, room and linen. Available in 50 ml, 100 ml, 250 ml."`
    - **Dried Flowers** — `"Bunches, buds and loose stems for florists, home décor and wedding confetti. Seasonal availability June–August."`
  - Scroll reveal: stagger 80ms per card

- [ ] **`AboutSection.tsx`** — bg `tone-300`
  - Headline: `"A small farm. An obsessive craft."`
  - Body: `"We grow English lavender in [location]. Every step — from planting to distillation — happens on site. No intermediaries. No shortcuts."`
  - 2-col layout: left text block + right image placeholder (replace with Instagram photo in Phase 6)
  - Large italic pull-quote under the headline

- [ ] **`ProcessSection.tsx`** — gradient `tone-200` → `tone-500`
  - Section label: `"HOW IT'S MADE"`
  - 4 steps, vertical track, `1px solid rgba(177,151,252,0.25)` dividers between steps
  - Left column: large italic Roman numeral — `2.4rem`, weight `900`, per-step accent color
  - Right column: eyebrow label · title · `<hr>` · body text
  - Progress bar per step: `width: 0 → 100%`, 1.2s ease-out, triggered on scroll into view
  - Steps:
    - **I. Planting** — `"We select L. angustifolia cuttings in spring. Each plant spaced 60 cm apart for optimal airflow and essential oil concentration."`
    - **II. Care** — `"No synthetic pesticides. We rely on soil health, companion planting, and timed irrigation for robust aromatic yield."`
    - **III. Harvest** — `"Flowers cut at 50% bloom — peak oil content. Harvested by hand in early morning when volatile compounds are at their highest."`
    - **IV. Distillation** — `"Steam distillation: fresh biomass loaded into the still, steam carries volatile compounds, condensation separates oil from hydrosol. ~1.25% yield by mass."`
  - Stagger: 120ms per step

- [ ] **`TestimonialsSection.tsx`** — gradient `tone-500` → `tone-600`
  - Section label: `"WHAT PEOPLE SAY"`
  - embla-carousel, 3× `GlassCard` (testimonial variant)
  - Placeholder testimonials:
    - `"The essential oil quality is exceptional — clean, true-to-plant aroma. Already reordering."` — *Anna M., aromatherapist*
    - `"Beautiful dried lavender bunches for my wedding. Arrived perfectly packed, lasted for months."` — *Irina K., bride*
    - `"As a florist, the consistent quality and seasonal availability makes them my go-to supplier."` — *Elena V., florist*
  - Stagger: 100ms per card

- [ ] **`AgrotourismSection.tsx`** — gradient `tone-600` → `tone-700`
  - Section label: `"VISIT US"`
  - Headline: `"Walk through the field."`
  - 2-col layout: left text + right 3-image grid (Instagram photo placeholders)
  - 3 activity cards:
    - **Photo sessions** — `"Book a private session in the blooming field. Peak season: June–July."`
    - **Farm tour** — `"1-hour guided walk through cultivation and the distillery. Groups welcome."`
    - **U-Pick** — `"Cut your own lavender bouquet. Available during harvest season."`

- [ ] **`CTASection.tsx`** — bg `tone-900` (`#5f3dc4`)
  - 3 concentric circles (900px / 650px / 400px) centered, `ringPulse` animation staggered · `1px solid rgba(177,151,252,0.08)` border
  - Headline: `"Stay in bloom."`
  - Subtitle: `"Get seasonal updates, harvest dates, and early access to new products."`
  - Pill email input + `"Subscribe"` button (white filled)
  - Below form: WhatsApp · Telegram links — `tone-400` color, as trust indicators
  - Right: widget with 3 tighter rings + 12 animated stalks in `tone-400`

- [ ] **Assemble `app/page.tsx`** — import and render all 7 sections in sequence

---

> ### ⏸ Decision Point — Phase 3
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

### Phase 4 — Inner Pages

Each page uses `components/layout/PageHero.tsx` (full-bleed tonal hero with section label + headline) then content sections below.

- [ ] **`app/products/page.tsx`**
  - Hero: `"Our Products"` — gradient `tone-50` → `tone-100`
  - 4 anchored product sections:
    - **Essential Oil** — description, volumes (5/10/30 ml), applications, order CTA
    - **Hydrosol** — description, volumes (50/100/250 ml), uses
    - **Dried Flowers** — bunches / loose buds / stems, florist wholesale note
    - **Seedlings** — varieties (L. angustifolia, L. x intermedia), timing, conditions
  - Bottom CTA → `/contact`

- [ ] **`app/florists/page.tsx`**
  - Hero: `"For Florists & Designers"`
  - 3 USP blocks: Quality · Volume · Seasonal reliability
  - Assortment table: product · packaging sizes · minimum order
  - Working conditions: min order, delivery terms, invoice on request
  - Lead form: Name · Company · Email · Message

- [ ] **`app/distillery/page.tsx`**
  - Hero: `"From Field to Bottle"`
  - 4-step process (ProcessSection pattern, richer copy)
  - Data callouts: `1.25%` yield · `~100°C` steam · `~90 min` batch
  - Equipment photo placeholder
  - CTA → `/visit` (come see the distillery in person)

- [ ] **`app/visit/page.tsx`**
  - Hero: `"Come to the Field"`
  - 4 activity cards: photo session · farm tour · U-Pick · distillation workshop
  - Season calendar: June–August peak bloom
  - Hours table
  - Booking form (react-hook-form)
  - Google Maps embed placeholder (`<iframe>` with coordinates)

- [ ] **`app/about/page.tsx`**
  - Hero: `"About the Farm"`
  - Farm story paragraph (draw from `business_model/` content)
  - Variety comparison: L. angustifolia vs L. x intermedia — 2-col table
  - Science note: 1 paragraph from `literature_reviews/`, with citation
  - Sustainability: no synthetic pesticides · companion planting · soil health

- [ ] **`app/contact/page.tsx`**
  - Contact form: Name · Email · Phone · Message
  - Contact details block: phone · email · WhatsApp · Telegram
  - Address + Google Maps embed placeholder
  - Working hours table
  - Social links row

---

> ### ⏸ Decision Point — Phase 4
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

### Phase 5 — Forms & Email

- [ ] Define zod schemas for all 4 form types:
  - `contactSchema` — name, email, phone (optional), message
  - `newsletterSchema` — email only
  - `floristLeadSchema` — name, company, email, message
  - `bookingSchema` — name, email, phone, activity type, date, guests, message
- [ ] Wire react-hook-form to each schema
- [ ] Create Formspree account, set up 4 form endpoints
- [ ] Add env vars `NEXT_PUBLIC_FORMSPREE_CONTACT`, `NEXT_PUBLIC_FORMSPREE_NEWSLETTER`, etc. to `.env.local` and document in `.env.example`
- [ ] Handle success/error states in UI (inline feedback, no page reload)

---

> ### ⏸ Decision Point — Phase 5
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

### Phase 6 — Content & Media

- [ ] Download 10–15 best photos from [@lavender.herbs](https://www.instagram.com/lavender.herbs/) Instagram
  - Priority: hero field shot, distillery/still, close-up buds, people in field, product bottles
- [ ] Convert all to WebP (`cwebp` or Squoosh), optimize to <200 KB each
- [ ] Place in `public/images/` with semantic names: `hero-field.webp`, `distillery.webp`, `product-oil.webp`, `visit-photo.webp`, etc.
- [ ] Replace all `<div>` image placeholder blocks with `<Image>` components (`next/image`, `alt` required)
- [ ] Review and refine all placeholder copy — update with actual farm location, real story, accurate product details

---

> ### ⏸ Decision Point — Phase 6
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

### Phase 7 — i18n Prep (EN only now, ES later)

- [ ] Move all EN strings out of JSX into `content/en/` TypeScript constant files:
  - `content/en/landing.ts` — hero, products, about, process, testimonials, CTA copy
  - `content/en/products.ts`
  - `content/en/florists.ts`
  - `content/en/distillery.ts`
  - `content/en/visit.ts`
  - `content/en/about.ts`
  - `content/en/contact.ts`
  - `content/en/nav.ts` + `content/en/footer.ts`
- [ ] Components import strings from `content/en/*` (not hardcoded)

When adding ES (iteration 2):
- Install `next-intl`
- Convert `content/en/*.ts` → `messages/en.json` + `messages/es.json`
- Wrap routes in `app/[locale]/`
- No changes needed to components — already decoupled from strings

---

> ### ⏸ Decision Point — Phase 7
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

### Phase 8 — Deploy

- [ ] Create `.github/workflows/deploy.yml`:
  ```yaml
  on:
    push:
      branches: [main]
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
        - run: npm ci
        - run: npm run build
        - uses: peaceiris/actions-gh-pages@v4
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./out
  ```
- [ ] Enable GitHub Pages in repository Settings → Pages → Source: GitHub Actions
- [ ] Add `<Analytics />` from `@vercel/analytics/next` to `app/layout.tsx`
- [ ] Set up custom domain when ready (CNAME file in `public/`)

---

> ### ⏸ Decision Point — Phase 8
>
> - [ ] Continue manually
> - [ ] Delegate to agent
>
> Notes: ___

---

## Component Checklist

### `components/ui/`
- [ ] `Nav.tsx`
- [ ] `Footer.tsx`
- [ ] `LavenderStalks.tsx`
- [ ] `GlassCard.tsx`
- [ ] `Button.tsx`
- [ ] `ContactForm.tsx`

### `components/landing/`
- [ ] `HeroSection.tsx`
- [ ] `ProductsSection.tsx`
- [ ] `AboutSection.tsx`
- [ ] `ProcessSection.tsx`
- [ ] `TestimonialsSection.tsx`
- [ ] `AgrotourismSection.tsx`
- [ ] `CTASection.tsx`

### `components/layout/`
- [ ] `PageHero.tsx` — reused as hero on all inner pages
- [ ] `SectionLabel.tsx` — 10px uppercase tracking label, reused across sections

---

## File Structure

```
lavender-herbs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    ← Landing
│   ├── products/page.tsx
│   ├── florists/page.tsx
│   ├── distillery/page.tsx
│   ├── visit/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AgrotourismSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── LavenderStalks.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Button.tsx
│   │   └── ContactForm.tsx
│   └── layout/
│       ├── PageHero.tsx
│       └── SectionLabel.tsx
├── content/
│   └── en/                         ← EN strings as TS constants
├── styles/
│   ├── tokens.css
│   ├── animations.css
│   └── globals.css
├── public/
│   └── images/                     ← WebP photos from Instagram
├── .env.example
├── .github/
│   └── workflows/deploy.yml
└── ROADMAP.md
```

---

## Design Reference

All visual decisions derive from [site_research/lavender-tonal-style.md](site_research/lavender-tonal-style.md).

Reference sites analysed during planning:

| Site | File | Patterns used |
|---|---|---|
| Cotswold Lavender | [cotswoldlavender_architecture_brief.md](site_research/cotswoldlavender_architecture_brief.md) | Distillery page structure, testimonial layout, footer columns |
| Essenso | [essenso_architecture_brief.md](site_research/essenso_architecture_brief.md) | Agrotourism UX, contact-first product model, activity cards |
| Daisyshop | [daisyshop_site_architecture.md](site_research/daisyshop_site_architecture.md) | Florists/wholesale page patterns |
