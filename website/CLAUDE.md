# Lavender Website

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **React:** 19 with React Compiler enabled
- **Styling:** Tailwind CSS v4 + custom design tokens
- **TypeScript:** strict mode (noImplicitAny, noUnusedLocals, etc.)
- **Font:** Inter variable (weights 100-900)
- **Package manager:** yarn

## Commands

```bash
cd website
yarn dev          # dev server
yarn build        # production build
yarn lint         # ESLint
yarn check-types  # TypeScript type check
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx              # Root layout (Inter font, Nav, Footer)
│   ├── page.tsx                # Landing page (7 sections)
│   ├── globals.css             # Tailwind + token/animation imports
│   ├── _about/page.tsx         # (prefixed = draft/disabled routes)
│   ├── _contact/page.tsx
│   ├── _distillery/page.tsx
│   ├── _florists/page.tsx
│   ├── _products/page.tsx
│   └── _visit/page.tsx
├── components/
│   ├── landing/                # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AgrotourismSection.tsx
│   │   └── CTASection.tsx
│   ├── layout/
│   │   ├── PageHero.tsx
│   │   └── SectionLabel.tsx
│   └── ui/
│       ├── Nav.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── LavenderStalks.tsx
│       └── FloristForm.tsx
├── styles/
│   ├── tokens.css              # Design tokens (CSS custom properties)
│   └── animations.css          # Keyframe animations
├── next.config.ts              # reactCompiler: true
├── tsconfig.json               # strict, path alias @/*
└── postcss.config.mjs
```

## Design System — Lavender Tonal Style

Full spec: `site_research/lavender-tonal-style.md`

### Colour Scale

10-step monochromatic violet scale — all hierarchy from tonal position alone:

| Step | Hex       | Role examples                    |
|------|-----------|----------------------------------|
| 50   | `#f3f0ff` | Body bg, hero bg, text-on-dark   |
| 100  | `#e5dbff` | Light section bg                 |
| 200  | `#d0bfff` | Muted text on dark               |
| 300  | `#b197fc` | Feature card borders             |
| 400  | `#9775fa` | Mid accent                       |
| 500  | `#845ef7` | Muted text on light              |
| 600  | `#7950f2` | Process mid-tones                |
| 700  | `#7048e8` | Deep section bg                  |
| 800  | `#6741d9` | Pricing section                  |
| 900  | `#5f3dc4` | CTA bg, body text on light       |

Footer: `#4c2fa8`. CSS tokens defined in `styles/tokens.css`.

### Chromatic Crescendo

Sections progressively darken as user scrolls (50 -> 900). Conversion CTA sits at the richest saturation point.

### Typography

- Single typeface: Inter variable
- Weight mirrors tonal position (light sections = light weights, deep = heavy)
- Sizes use `clamp()` for fluid scaling
- Section labels: `10px`, weight 700, `letter-spacing: 0.22em`, uppercase

### Glass Cards

All cards use `rgba()` backgrounds + `backdrop-filter: blur(8px)`. On hover: `translateY(-5px)`, lighter bg, saturated border, deeper shadow.

### Lavender Stalk Motif

Animated vertical bars (CSS `scaleY` + `rotate`, staggered per element). Hero: 64 bars at opacity 0.18. Feature cards: 5-bar mini icon.

### Animations

- `fadeUp`: opacity 0 + translateY(24px) -> visible, `0.85s cubic-bezier(0.22,1,0.36,1)`
- `.reveal`: scroll-triggered entrance, staggered per group
- Stalk sway: infinite `scaleY` + `rotate` cycle

### Layout

- Max width: `1140px`, padding: `36px`
- Nav: `68px` height, fixed, transparent-to-glass on scroll
- Grids: 3-col -> 2-col (1024px) -> 1-col (768px)

## Support System (Stripe + Supabase)

Support page at `/donate` — "Grow the Lavender Field": voluntary support payments via Stripe Payment Link.
Every €1 adds one bush to the public field counter, goal 10,000. Payments carry no rewards or obligations — keep the
copy free of planting promises. Never call payments "loans" anywhere (Stripe prohibits lending services).

### Architecture

```
Stripe Payment Link -> Stripe Checkout
  -> Stripe webhook (`checkout.session.completed` / async payment success)
  -> Supabase Edge Function (stripe-webhook)
  -> process_donation(ext_id, `stripe`, qty, cents, donor) RPC (atomic, idempotent)
  -> Supabase Realtime -> frontend updates field visualization
```

### Key files

```
website/
├── app/donate/page.tsx                          # Static page shell
├── components/donate/
│   ├── DonatePageClient.tsx                     # Client orchestrator
│   ├── DonationField.tsx                        # Interactive field (50x20 grid, bush.png)
│   ├── DonationControls.tsx                     # Stripe Payment Link CTA
│   └── DonationProgress.tsx                     # Progress bar + stats
├── hooks/useDonationCount.ts                    # Supabase Realtime subscription
├── lib/supabase.ts                              # Lazy-initialized client (getSupabase())
├── lib/stripe.ts                                # Stripe Payment Link accessor
└── supabase/
    ├── functions/stripe-webhook/index.ts        # Deno Edge Function (Stripe)
    └── migrations/                              # 001 schema + RPC; 002/003 applied history; 004 donor names cleared
```

### External services

- **Supabase project:** `uiixexvzjpjfuyoigmdf` (separate org, free plan — pauses when idle; restore via dashboard/MCP)
- **Stripe:** `Kotkoa Lavender` (`acct_1UFxJlEbCLGxJE3e`) — Payment Link `plink_1UJYUEEbCLGxJE3eJWIniNly`,
  webhook `we_1UJYVqEbCLGxJE3eQLZRRwY5`; the same account also receives Ko-fi payouts
- **GitHub Variables:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
- **Supabase secrets:** `STRIPE_SECRET_KEY` (restricted key, Checkout Sessions read), `STRIPE_WEBHOOK_SECRET`

### Important notes

- `lib/supabase.ts` uses lazy init (`getSupabase()`) - required for static export SSG build
- Edge Functions deploy with `--no-verify-jwt` (Stripe webhooks carry no Supabase JWT)
- `stripe-webhook` counts only paid Checkout Sessions of the site Payment Link (`SITE_PAYMENT_LINK` constant — the
  account also receives Ko-fi payments) priced in EUR (Adaptive Pricing: uses `currency_conversion` source
  currency/amount) and ignores duplicate deliveries by Checkout Session ID
- Payer names stay in Stripe only: the webhook stores `donor_name = null`
- `supabase/` excluded from tsconfig (Deno runtime, different types)


## Conventions

- Path alias: `@/*` maps to project root (`@/components/...`, `@/styles/...`)
- Draft routes prefixed with `_` (Next.js ignores them)
- Components organized by role: `landing/`, `layout/`, `ui/`, `donate/`
- All code and comments in English
