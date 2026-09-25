# Donation Page — Work Log

## 2026-09-25 — Restore direct Stripe Checkout

- Replaced the active Ko-fi path with a Stripe Payment Link CTA and restored `stripe-webhook`.
- Webhook processing now accepts only paid EUR Checkout Sessions, handles async-payment success, verifies signatures,
  and uses the existing idempotent Supabase RPC with `source = 'stripe'`.
- Site payments moved to the `Kotkoa Ko-fi` Stripe account: new Payment Link (€1 bush, quantity 1–10000, redirect
  back to `/donate`) and webhook endpoint; the webhook handles Adaptive Pricing via `currency_conversion`.

## 2026-09-25 — Switch to Ko-fi tips

The Stripe Payment Link path is replaced by voluntary tips on `ko-fi.com/kotkoa`; current architecture and
setup live in `CLAUDE.md` (Support System) and `PAYMENTS_PLAN.md`. Sections below describe the original Stripe build.

- Migration `002_kofi_source` applied: `donations.external_id` + `source`, new `process_donation(ext_id, src, qty, cents, donor)`,
  seeded the missing `donation_stats` row (the counter never incremented before), revoked the PUBLIC execute grant.
- Edge Function `kofi-webhook` deployed (fails closed until `KOFI_VERIFICATION_TOKEN` is set); counts only EUR
  `Donation`/`Subscription` with a strict decimal amount; `stripe-webhook` redeployed for the new RPC signature.
- Migration `003_cleanup_kofi_webhook_test` removed the Ko-fi test payload used to verify the webhook.
- `/donate` copy describes a public counter, not planting; CTA "Tip on Ko-fi"; `NEXT_PUBLIC_KOFI_URL` replaces `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`.

## Original Stripe build (history, superseded — see CLAUDE.md and PAYMENTS_PLAN.md)

Interactive crowdfunding page "Plant a Lavender Bush" for the lavender farm website.
Visitors pay EUR 1 per bush via Stripe Payment Link, goal is 10,000 bushes.
The field visualization fills with lavender bushes in real time via Supabase Realtime.

## Architecture

```
User clicks "Plant Now" -> Stripe Payment Link (client redirect)
  -> Payment completed
  -> Stripe webhook -> Supabase Edge Function (stripe-webhook)
  -> process_donation() RPC (atomic, idempotent)
  -> Supabase Realtime pushes update -> Frontend animates new bushes
```

- **Frontend:** Next.js 16 static export (GitHub Pages), no server-side API routes
- **Payments:** Stripe Payment Link (no @stripe/stripe-js needed)
- **Backend:** Supabase free tier — PostgreSQL + Realtime + Edge Functions (Deno)
- **Security:** RLS (public read on donation_stats), process_donation restricted to service_role

## Completed

- [x] Stripe account + product "Lavender Bush" EUR 1 (test mode)
- [x] Supabase project created, tables: donation_stats, donations
- [x] `app/donate/page.tsx` — static page shell with metadata + PageHero
- [x] `components/donate/DonatePageClient.tsx` — client orchestrator (4 sections)
- [x] `components/donate/DonationField.tsx` — interactive field (50x20 grid, bush.png)
- [x] `components/donate/DonationControls.tsx` — "Plant Now" button -> Stripe Payment Link
- [x] `components/donate/DonationProgress.tsx` — progress bar + stats (animated counters)
- [x] `hooks/useDonationCount.ts` — Supabase Realtime subscription
- [x] `lib/supabase.ts` — lazy-initialized Supabase client (SSG-safe)
- [x] `lib/stripe.ts` — Payment Link URL helper
- [x] `styles/animations.css` — bushGrow, bushSway keyframes + prefers-reduced-motion
- [x] Nav.tsx + HeroSection.tsx — "Shop Lavender" replaced with "Plant a Bush" -> /donate
- [x] `supabase/functions/stripe-webhook/index.ts` — Edge Function (written, not deployed)
- [x] `supabase/migrations/001_donation_schema.sql` — full schema with process_donation
- [x] GitHub Actions deploy.yml — env vars added for build step
- [x] 1-bush visibility bug fixed (grid offset + higher min opacity)
- [x] `yarn build` passes locally

## Known Issues

- **bush.png transparency** — current image has white/checkered background baked in (not true alpha). Replace with proper transparent PNG for better visual quality.
