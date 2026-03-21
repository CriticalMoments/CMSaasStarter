# src/ — APP CORE

## OVERVIEW
Application entry plumbing: Supabase auth/session, shared types/config, and the SvelteKit route tree.

## STRUCTURE
```text
src/
├── hooks.server.ts          # event.locals.supabase + service role + safeGetSession
├── config.ts                # template knobs (name/base url/description, onboarding flag)
├── DatabaseDefinitions.ts   # generated-ish DB types used by Supabase client
├── lib/                     # cross-cutting utilities (mailer/search/load helpers)
└── routes/                  # filesystem routing
```

## WHERE TO LOOK
- **Auth/session**: `hooks.server.ts`
- **Branding/SEO defaults**: `config.ts`
- **DB typing**: `DatabaseDefinitions.ts`

Related typing glue:
- `app.d.ts`: defines `event.locals` types (supabase clients + session/user)
- `ambient.d.ts`: project ambient types

## CHANGE THESE (TEMPLATE USERS)
- `config.ts`: set your product name, canonical base URL, and description.
- `hooks.server.ts`: if you add custom `locals` or request-wide auth rules, do it here.

## CONVENTIONS / GOTCHAS
- `safeGetSession` is the “trusted” session getter: it calls `getSession()` and then `getUser()` to validate JWT.
- This repo uses a Supabase auth warning suppression shim in `hooks.server.ts` (see inline comment/link). Treat it as version-compat glue.

## ANTI-PATTERNS
- Don’t import `$env/static/private` from any module that can end up client-side.
- Don’t use the service role client for user-facing queries; prefer RLS via `event.locals.supabase`.
