-- The counter row from 001 was missing in production, so process_donation updated nothing.
INSERT INTO public.donation_stats (id, total_bushes, total_donors) VALUES (1, 0, 0)
  ON CONFLICT (id) DO NOTHING;

-- Donations can now come from Ko-fi webhooks as well as Stripe Checkout.
ALTER TABLE public.donations RENAME COLUMN stripe_session_id TO external_id;
ALTER TABLE public.donations
  ADD COLUMN source text NOT NULL DEFAULT 'stripe' CHECK (source IN ('stripe', 'kofi'));
ALTER TABLE public.donations ALTER COLUMN source DROP DEFAULT;

DROP FUNCTION public.process_donation(text, integer, integer, text);

-- Atomic, idempotent: inserts donation + increments counter in one transaction
CREATE FUNCTION public.process_donation(
  ext_id text,
  src text,
  qty integer,
  cents integer,
  donor text DEFAULT NULL
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  inserted boolean;
BEGIN
  INSERT INTO public.donations (external_id, source, quantity, amount_cents, donor_name)
    VALUES (ext_id, src, qty, cents, donor)
    ON CONFLICT (external_id) DO NOTHING;

  GET DIAGNOSTICS inserted = ROW_COUNT;

  IF inserted THEN
    UPDATE public.donation_stats
    SET total_bushes = total_bushes + qty,
        total_donors = total_donors + 1,
        updated_at = now()
    WHERE id = 1;
  END IF;

  RETURN inserted;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.process_donation(text, text, integer, integer, text) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.process_donation(text, text, integer, integer, text) TO service_role;
