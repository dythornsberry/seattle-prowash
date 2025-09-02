-- Remove the problematic RLS policy that allows public access to leads
DROP POLICY IF EXISTS "Admin can view all leads" ON public.leads;

-- The correct policy "Admins can view all leads" with has_role() check should remain
-- This ensures only authenticated admin users can view lead data