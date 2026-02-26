CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  services TEXT,
  details TEXT,
  source TEXT DEFAULT 'Website Quote Form',
  zapier_sent BOOLEAN DEFAULT false,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Allow edge functions (service role) to insert, no public access needed
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- No RLS policies = only service role can access (secure by default)