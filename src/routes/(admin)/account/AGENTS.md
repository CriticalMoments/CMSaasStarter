# src/routes/(admin)/account/ — AUTHENTICATED DASHBOARD

## OVERVIEW
Authenticated account area: onboarding (create profile), settings, billing/subscriptions.

## STRUCTURE (HIGH SIGNAL)
```text
src/routes/(admin)/account/
├── +layout.server.ts            # provides session + cookies from hooks
├── +layout.ts                   # creates Supabase client + enforces redirects
├── +layout.svelte               # auth state change → invalidate("supabase:auth")
├── api/+page.server.ts          # server actions: profile/email/password/delete
├── create_profile/+page.svelte  # onboarding form (writes to profiles)
├── select_plan/+page.svelte     # uses PricingModule (demo)
├── (menu)/                      # sidebar + dashboard + billing + settings pages
├── subscribe/[slug]/+page.server.ts  # Stripe Checkout session creation
└── subscription_helpers.server.ts     # Stripe customer + subscription lookup
```

## WHERE TO LOOK
- **Auth enforcement**: `src/hooks.server.ts` (sets `locals.session/user` via `safeGetSession`)
- **Client/server Supabase wiring**: `+layout.ts` + `+layout.server.ts`
- **Replace the dashboard**: `(menu)/+page.svelte` (explicit placeholder)
- **Settings UI plumbing**: `(menu)/settings/settings_module.svelte`
- **Billing portal redirect**: `(menu)/billing/manage/+page.server.ts`

## CHANGE THESE (TEMPLATE USERS)
- Replace `(menu)/+page.svelte` with your actual product UI.
- Extend `profiles` fields:
  - DB: add migration(s)
  - UI: `create_profile/+page.svelte`, `(menu)/settings/edit_profile/+page.svelte`
  - Actions: `api/+page.server.ts`
- If your app needs teams/orgs, introduce a new table + RLS policies and adjust queries accordingly.

## GOTCHAS / SECURITY
- `api/+page.server.ts` uses service role for admin operations (e.g. delete user). Keep it server-only.
- Stripe logic here is synchronous API calls; there is **no webhook endpoint** to reconcile async subscription events.
