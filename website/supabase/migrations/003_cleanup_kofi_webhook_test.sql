-- Removes the Ko-fi "Send single tip test" payload recorded while verifying kofi-webhook.
WITH d AS (
  DELETE FROM public.donations
  WHERE external_id = '00000000-1111-2222-3333-444444444444'
  RETURNING quantity
)
UPDATE public.donation_stats
SET total_bushes = total_bushes - (SELECT coalesce(sum(quantity), 0) FROM d),
    total_donors = total_donors - (SELECT count(*) FROM d),
    updated_at = now()
WHERE id = 1;
