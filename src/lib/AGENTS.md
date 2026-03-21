# src/lib/ — SHARED UTILITIES

## OVERVIEW
Cross-cutting helpers used by routes: email, search indexing, and Supabase session helpers.

## WHERE TO LOOK
- **Email sending**: `mailer.ts`
  - Templates: `emails/welcome_email_{text,html}.hbs`
  - Setup docs: `/email_docs.md`
- **Search indexing**: `build_index.ts`
  - Build hook: `/vite.config.ts` (builds index after bundle)
  - Runtime API: `src/routes/(marketing)/search/api.json/+server.ts`
- **Session helper**: `load_helpers.ts` (used in login/account layouts)

## ENV VARS (USED HERE)
- `PRIVATE_RESEND_API_KEY`, `PRIVATE_ADMIN_EMAIL`, `PRIVATE_FROM_ADMIN_EMAIL` (email)
- Supabase/Stripe keys are imported by routes/hooks, not by most `src/lib/*` modules.

## CHANGE THESE (TEMPLATE USERS)
- Email templates + from/subject values (see `email_docs.md`).
- `build_index.ts` exclude list if you add pages you don’t want searchable.

## GOTCHAS
- Email is intentionally “optional”: if env vars are unset, sending is a no-op.
- In dev, `/search/api.json` can build the index on-demand; in prod it expects the prebuilt artifact.
- Search indexing only covers prerendered pages under `.svelte-kit/output/prerendered/pages`.

## ANTI-PATTERNS
- Don’t add heavyweight per-request work into `build_index.ts` pathways; it’s designed for build-time caching.
- Don’t enable email in production without customizing templates/subjects first (welcome email is included by default).
