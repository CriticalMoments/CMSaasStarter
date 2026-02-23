# supabase/ — DATABASE + RLS

## OVERVIEW
Schema, policies, and migrations for the Supabase Postgres database.

## WHAT EXISTS
Files:
- `database_migration.sql`: one-shot schema for brand-new Supabase projects.
- `migrations/20240730010101_initial.sql`: initial schema + RLS + trigger + storage bucket.
- `migrations/20240731051052_add_unsubscribed_to_profiles.sql`: example incremental migration.

Core tables (public schema):
- `profiles` (user profile fields + `unsubscribed` flag)
- `stripe_customers` (maps app user → Stripe customer id)
- `contact_requests` (contact form submissions)

Security:
- RLS enabled on all included tables.
- `profiles` policies restrict select/insert/update to `auth.uid() = id`.
- `avatars` storage bucket with public read + open upload policy (adjust if you need stricter rules).

Trigger:
- `on_auth_user_created` inserts a row into `profiles` on new auth user.

## WHERE APP CODE TOUCHES THE DB
- User-scoped (RLS enforced): queries via `event.locals.supabase` from `src/hooks.server.ts`.
- Privileged (bypasses RLS): `event.locals.supabaseServiceRole` is used for:
  - `contact_requests` inserts (`src/routes/(marketing)/contact_us/+page.server.ts`)
  - Stripe customer mapping (`src/routes/(admin)/account/subscription_helpers.server.ts`)
  - admin user deletion (`src/routes/(admin)/account/api/+page.server.ts`)

## CHANGE THESE (TEMPLATE USERS)
Typical extensions:
- Add columns to `profiles` (preferences, roles, onboarding state)
- Add domain tables for your product (projects, documents, teams, etc.)

Safe workflow:
1. **New project**: run `database_migration.sql` once.
2. **After that**: create new incremental SQL files under `supabase/migrations/` and apply them in order.
3. Always:
   - enable RLS for new tables,
   - add policies,
   - avoid relying on the service role for normal user flows.
