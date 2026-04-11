CREATE TABLE donation_stats (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  total_bushes integer NOT NULL DEFAULT 0 CHECK (total_bushes >= 0),
  total_donors integer NOT NULL DEFAULT 0 CHECK (total_donors >= 0),
  updated_at timestamptz NOT NULL DEFAULT now()
);
INSERT INTO donation_stats (id, total_bushes, total_donors) VALUES (1, 0, 0);
ALTER PUBLICATION supabase_realtime ADD TABLE donation_stats;

CREATE TABLE donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_session_id text UNIQUE NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  amount_cents integer NOT NULL CHECK (amount_cents > 0),
  donor_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Atomic, idempotent function: inserts donation + increments counter in one transaction
CREATE OR REPLACE FUNCTION process_donation(
  session_id text,
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
END;
$$;

-- RLS: public read on donation_stats, no public write
ALTER TABLE donation_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON donation_stats FOR SELECT USING (true);

-- No public policies on donations — only service_role can write
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Restrict RPC to service_role only (prevents counter manipulation via anon client)
REVOKE EXECUTE ON FUNCTION process_donation(text, integer, integer, text) FROM anon, authenticated;
GRANT EXECUTE ON FUNCTION process_donation(text, integer, integer, text) TO service_role;
