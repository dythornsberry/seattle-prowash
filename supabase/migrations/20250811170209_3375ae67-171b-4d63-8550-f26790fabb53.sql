-- Tighten RLS on leads: restrict reads to admins only via role-based access
-- 1) Create role enum if not exists
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
  END IF;
END $$;

-- 2) Create user_roles table if not exists
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3) Security definer helper to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles ur
    WHERE ur.user_id = _user_id
      AND ur.role = _role
  );
$$;

-- 4) Ensure RLS enabled on leads
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 5) Replace overly permissive SELECT policy on leads
DO $$ BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'leads' AND policyname = 'Admin can view all leads' AND cmd = 'select'
  ) THEN
    DROP POLICY "Admin can view all leads" ON public.leads;
  END IF;
END $$;

-- 6) Create strict admin-only SELECT policy
CREATE POLICY "Admins can view all leads"
ON public.leads
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Keep existing INSERT policy (Anyone can submit leads) unchanged
