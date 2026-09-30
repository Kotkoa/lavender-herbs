-- Set by stripe-webhook once Resend accepts the thank-you email; Stripe retries resend only while it is NULL.
ALTER TABLE public.donations ADD COLUMN thank_you_sent_at timestamptz;
