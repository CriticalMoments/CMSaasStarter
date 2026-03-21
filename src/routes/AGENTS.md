# src/routes/ — ROUTING MAP

## OVERVIEW
SvelteKit filesystem routing. Route groups in parentheses (e.g. `(marketing)`) are organizational; they do **not** appear in the URL.

## STRUCTURE
```text
src/routes/
├── +layout.svelte               # app-wide CSS + top navigation progress bar
├── +error.svelte                # error boundary UI
├── (marketing)/                 # public pages (mostly prerendered)
└── (admin)/account/             # authenticated dashboard
```

## WHERE TO LOOK
- **Public pages**: `src/routes/(marketing)/...`
- **Authenticated area**: `src/routes/(admin)/account/...`
- **Endpoints**: `**/+server.{ts,js}` (RSS, sitemap, auth callback, search API)

Key endpoints in this repo:
- `src/routes/(marketing)/sitemap.xml/+server.ts`
- `src/routes/(marketing)/blog/rss.xml/+server.ts`
- `src/routes/(marketing)/search/api.json/+server.ts`
- `src/routes/(marketing)/auth/callback/+server.js`

## CONVENTIONS
- `+page.server.ts` / `+server.ts` are server-only; safe for private env vars.
- Several marketing routes set `export const prerender = true` for static generation.

When adding server-only features to a prerendered route, you may need to set `prerender = false` (otherwise build/prerender can break).

## CHANGE THESE (TEMPLATE USERS)
- Decide whether your product needs separate route groups (e.g. `(app)`, `(docs)`).
- Keep marketing routes prerendered unless you truly need per-request server data.
