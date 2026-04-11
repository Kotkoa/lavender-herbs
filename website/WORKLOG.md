# Donation Page — Work Log

## Summary

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

## Remaining — User Actions

### 1. Add GitHub Repository Variables
In GitHub repo Settings -> Secrets and variables -> Actions -> Variables tab:
- `NEXT_PUBLIC_SUPABASE_URL` = `https://uiixexvzjpjfuyoigmdf.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (your anon key)
- `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` = `https://donate.stripe.com/bJe7sL49F7Rk0rTgVbffy00`

### 2. Apply Updated SQL Migration
Run in Supabase SQL Editor (project uiixexvzjpjfuyoigmdf):
```sql
DROP FUNCTION IF EXISTS increment_bushes(integer);

CREATE OR REPLACE FUNCTION process_donation(
  session_id text, qty integer, cents integer, donor text DEFAULT NULL
) RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE inserted boolean;
BEGIN
  INSERT INTO public.donations (stripe_session_id, quantity, amount_cents, donor_name)
    VALUES (session_id, qty, cents, donor)
    ON CONFLICT (stripe_session_id) DO NOTHING;
  GET DIAGNOSTICS inserted = ROW_COUNT;
  IF inserted THEN
    UPDATE public.donation_stats
    SET total_bushes = total_bushes + qty,
        total_donors = total_donors + 1,
        updated_at = now()
    WHERE id = 1;
  END IF;
  RETURN inserted;
END; $$;

ALTER TABLE donations ADD CONSTRAINT chk_quantity CHECK (quantity > 0);
ALTER TABLE donations ADD CONSTRAINT chk_amount CHECK (amount_cents > 0);
ALTER TABLE donation_stats ADD CONSTRAINT chk_bushes CHECK (total_bushes >= 0);
ALTER TABLE donation_stats ADD CONSTRAINT chk_donors CHECK (total_donors >= 0);

REVOKE EXECUTE ON FUNCTION process_donation(text, integer, integer, text) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION process_donation(text, integer, integer, text) TO service_role;
```

### 3. Deploy Edge Function
```bash
cd website
supabase link --project-ref uiixexvzjpjfuyoigmdf
supabase secrets set STRIPE_SECRET_KEY=sk_test_... STRIPE_WEBHOOK_SECRET=whsec_... SUPABASE_URL=https://uiixexvzjpjfuyoigmdf.supabase.co SUPABASE_SERVICE_ROLE_KEY=eyJ...
supabase functions deploy stripe-webhook --no-verify-jwt
```

### 4. Configure Stripe Webhook
In Stripe Dashboard -> Developers -> Webhooks:
- Endpoint URL: `https://uiixexvzjpjfuyoigmdf.supabase.co/functions/v1/stripe-webhook`
- Event: `checkout.session.completed`
- Copy Webhook Secret -> set via `supabase secrets set`

### 5. Reset Test Data
```sql
UPDATE donation_stats SET total_bushes = 0, total_donors = 0, updated_at = now() WHERE id = 1;
DELETE FROM donations;
```

### 6. End-to-End Test
1. Use Stripe test card (4242 4242 4242 4242) on /donate
2. Verify webhook fires -> donation recorded -> counter increments
3. Verify Realtime pushes update -> field shows new bush
4. Check mobile layout (375px, 768px, 1024px)

## Known Issues

- **bush.png transparency** — current image has white/checkered background baked in (not true alpha). Replace with proper transparent PNG for better visual quality.
