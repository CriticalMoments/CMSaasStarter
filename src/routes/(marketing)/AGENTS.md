# src/routes/(marketing)/ — MARKETING + BLOG + LOGIN

## OVERVIEW
SEO-first public pages: homepage, pricing, blog (with RSS), sitemap, search, contact form, and login UI.

## WHERE TO LOOK
- **Header/footer + nav links**: `+layout.svelte`
- **Homepage**: `+page.svelte` (`prerender = true` in `+page.ts`)
- **Pricing**: `pricing/+page.svelte`, `pricing/pricing_plans.ts`, `pricing/pricing_module.svelte`
- **Blog index + config**: `blog/+page.svelte`, `blog/posts.ts`
- **Blog post SEO wrapper**: `blog/(posts)/+layout.svelte` (OG/Twitter tags)
- **RSS**: `blog/rss.xml/+server.ts`
- **Sitemap**: `sitemap.xml/+server.ts` (excludes admin group)
- **Search**: `search/+page.svelte`, `search/api.json/+server.ts`
- **Login flow**: `login/**`, `login/login_config.ts`, `auth/callback/+server.js`
- **Contact form**: `contact_us/+page.server.ts` (writes to DB + optional admin email)

## CHANGE THESE (MOST COMMON)
1. **Brand links + footer content**
   - `+layout.svelte` currently links to upstream GitHub and includes a sponsor block.

2. **SEO + copy**
   - `+page.svelte` (home), `pricing/+page.svelte`, `blog/posts.ts` (blog title/description).

3. **Pricing tiers**
   - `pricing/pricing_plans.ts`: set plan IDs and Stripe IDs.
   - `pricing/+page.svelte`: FAQ + feature table are demo placeholders.

4. **OAuth providers**
   - `login/login_config.ts`: `oauthProviders` list.

## GOTCHAS
- Blog posts are **Svelte pages**, not Markdown. Add a post by:
  1) adding an entry to `blog/posts.ts`, and
  2) creating the matching `blog/(posts)/<slug>/+page.svelte`.
- Search depends on pre-rendered HTML output; missing pages → rebuild (`npm run build`).
