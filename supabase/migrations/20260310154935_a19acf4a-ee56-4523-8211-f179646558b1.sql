
-- Allow anonymous/public INSERT on leads (for quote form submissions)
-- Only allow setting safe fields; internal status fields must remain default (false)
CREATE POLICY "Allow public insert on leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  zapier_sent IS NOT DISTINCT FROM false
  AND email_sent IS NOT DISTINCT FROM false
);
