-- Payer names stay in Stripe only; the counter does not need personal data.
UPDATE public.donations SET donor_name = NULL WHERE donor_name IS NOT NULL;
