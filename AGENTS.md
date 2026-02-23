# PROJECT KNOWLEDGE BASE

## OVERVIEW
SaaS template built with **SvelteKit (Svelte 5)** + **Tailwind v4** + **DaisyUI** + **Supabase (Auth + Postgres)** + **Stripe (Checkout + Customer Portal)**.

Two major route domains:
- **Marketing** (pre-rendered, SEO-first)
- **Account dashboard** (authenticated, server actions, billing)

## STRUCTURE
```text
./
├── src/
│   ├── hooks.server.ts                # Supabase clients + safeGetSession + locals
│   ├── config.ts                      # SITE NAME/URL/DESCRIPTION + onboarding flag
│   ├── lib/                           # mailer, search index, load helpers
│   └── routes/
│       ├── (marketing)/               # public pages: home, pricing, blog, login, search
│       └── (admin)/account/           # dashboard: profile/settings/billing/subscriptions
├── supabase/
│   └── migrations/                    # incremental DB changes (preferred after initial setup)
├── database_migration.sql             # one-shot initial schema for *new* Supabase projects
├── static/                            # favicons/images (served as-is)
└── .github/workflows/                 # CI: build/format/lint/check/test
```

## WHERE TO LOOK (TASK → FILES)
| Task | Location | Notes |
|------|----------|-------|
| Rename/brand the site | `src/config.ts`, `src/routes/(marketing)/+layout.svelte`, `static/` | Config drives SEO + sitemap origin.
| Marketing homepage copy/SEO | `src/routes/(marketing)/+page.svelte` | `prerender = true` (static).
| Pricing tiers + Stripe IDs | `src/routes/(marketing)/pricing/pricing_plans.ts` | Replace demo `price_...`/`prod_...`.
| Auth/session plumbing | `src/hooks.server.ts`, `src/routes/(marketing)/login/+layout.ts` | `safeGetSession` validates JWT via `getUser()`.
| OAuth providers + Auth UI theme | `src/routes/(marketing)/login/login_config.ts`, `src/app.css` | DaisyUI variables theme Supabase Auth UI.
| Dashboard (replace demo) | `src/routes/(admin)/account/(menu)/+page.svelte` | Explicit placeholder content.
| Account settings actions | `src/routes/(admin)/account/api/+page.server.ts` | Email/password/profile/delete actions.
| Billing flows | `src/routes/(admin)/account/subscription_helpers.server.ts`, `.../billing/manage/+page.server.ts`, `.../subscribe/[slug]/+page.server.ts` | Stripe Checkout + Portal. No webhook handler in this repo.
| Email sending + templates | `src/lib/mailer.ts`, `src/lib/emails/*.hbs`, `email_docs.md` | Disabled unless env vars set.
| Search index | `src/lib/build_index.ts`, `vite.config.ts`, `src/routes/(marketing)/search/**` | Index built at `vite build`.
| Database schema/RLS | `database_migration.sql`, `supabase/migrations/*` | RLS enabled on all included tables.
| CI commands | `package.json`, `checks.sh`, `.github/workflows/*.yml` | CI uses fake env vars.

## TEMPLATE CUSTOMIZATION ZONES (DON’T MISS)
1. **Brand + SEO**
   - `src/config.ts`: `WebsiteName`, `WebsiteBaseUrl`, `WebsiteDescription`.
   - `src/routes/(marketing)/**`: per-page `<title>` + `<meta name="description">`.
   - `src/routes/(marketing)/sitemap.xml/+server.ts`: uses `WebsiteBaseUrl`.

2. **Navigation + footer links (currently point to upstream + sponsor)**
   - `src/routes/(marketing)/+layout.svelte`: header/footer nav + GitHub link + sponsor block.

3. **Auth providers**
   - `src/routes/(marketing)/login/login_config.ts`: `oauthProviders` list.
   - Supabase Dashboard: redirect URLs + provider secrets.
   - `src/routes/(marketing)/auth/callback/+server.js`: auth code exchange/redirect.

4. **Pricing + subscriptions**
   - `src/routes/(marketing)/pricing/pricing_plans.ts`: plan IDs, descriptions, and Stripe `price`/`product` IDs.
   - `src/routes/(marketing)/pricing/+page.svelte`: FAQ + feature table are demo content.

5. **Replace demo dashboard with your product**
   - `src/routes/(admin)/account/(menu)/+page.svelte`: intentionally a placeholder.
   - Add your own app routes under `src/routes/(admin)/...` or new groups.

6. **Database model**
   - New projects: start with `database_migration.sql`.
   - Ongoing changes: add new files in `supabase/migrations/` (don’t keep editing the one-shot file).
   - Always enable RLS + add policies for new user-facing tables.

7. **Email (optional, easy to accidentally “turn on”)**
   - Setting `PRIVATE_RESEND_API_KEY` enables sending (see `email_docs.md`). Customize templates first.

## CONVENTIONS (PROJECT-SPECIFIC)
- **Marketing pages are pre-rendered** (`export const prerender = true` in several `+page.ts` / `+layout.ts`). If you add server-only/dynamic data, you must disable prerender for that route.
- **Search index is built during `vite build`** via a Vite plugin (`vite.config.ts`). In prod, `/search/api.json` is served from the built artifact.
- **Two Supabase clients**:
  - `event.locals.supabase`: SSR client for user-scoped queries (RLS enforced).
  - `event.locals.supabaseServiceRole`: service role client for privileged ops (bypasses RLS).

## ANTI-PATTERNS (THIS REPO)
- Don’t put **service role** keys anywhere client-accessible. Keep `$env/static/private` imports server-only.
- Billing customer creation uses **insert (not upsert)** for `stripe_customers` to avoid accidental overwrites.
- There is a known **temporary CSS hack** for Supabase Auth UI button styling in `src/app.css`.

## COMMANDS
```bash
# dev
npm run dev

# format / lint / types
npm run format
npm run lint
npm run check

# tests
npm run test
npm run test_run

# one-shot: mirrors CI locally
chmod +x ./checks.sh
./checks.sh
```

## NOTES
- CI workflows set fake Supabase/Stripe env vars; local dev needs `.env.local` from `.env.example`.
- Stripe integration here is Checkout + Portal; if you need strict subscription state sync, you’ll likely add **Stripe webhooks** as a new `+server.ts` endpoint.
