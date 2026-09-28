# Supabase setup

1. Create a Supabase project and run the SQL migration in
   `supabase/migrations/20260719000000_create_appointments.sql` with the SQL
   editor (or `supabase db push` if you use the Supabase CLI).
2. Copy `.env.example` values into `.env` using **Project Settings → API**:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - Publishable/anon key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
3. In **Authentication → Providers → Email**, enable email/password sign-ins.
   Enable Confirm email if staff accounts must verify their email before they
   can open the admin appointment page.
4. Create the initial staff account from the site registration page or from
   Supabase Authentication → Users.

The service-role key is used only inside route handlers. Keep it secret and
never prefix it with `NEXT_PUBLIC_`.
