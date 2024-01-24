# SaaS Starter

[![Build](https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/build.yml)
[![Format Check](https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/format.yml/badge.svg?branch=main)](https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/format.yml)
[![Linting](https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/linting.yml/badge.svg?branch=main)](https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/linting.yml)
[![License](https://img.shields.io/badge/License-MIT-brightgreen?labelColor=32383f)](https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE)

### SaaS Starter is an open source, fast, and free to host SaaS template / boilerplate

- [Feature Rich](#features): user auth, user dashboard, marketing site, blog engine, billing/subscriptions, pricing page, and more. 
- [Lightning Performance](#performance--best-practices): fast pre-rendered pages which score 100/100 on Google PageSpeed. 
- [Delighful Tech Stack](#tech-stack): tools you'll love working with, including SvelteKit, Tailwind, DaisyUI, Postgres, and Supabase. 
- Extensible: all the tools you need to make additional marketing pages, UI components, user dashboards, admin portals, database backends, API endpoints, and more.
- [Hosting](#suggested-hosting-stack): Our suggested hosting stack is free to host, cheap to scale, easy to manage, and includes automatic deployments.
- [MIT Open Source](https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE)
- [Fully Functional Demo](https://saasstarter.work)
- [Quick Start](#quick-start): Full docs from `git clone` to deployment.

Created by the folks at [Critical Moments](https://criticalmoments.io)! Check out our website site for an example depolyment of SaaS Starter. 

**Make mobile apps?** Improve conversion rates and ratings with [Critical Moments](https://criticalmoments.io).

## Demo 

You can explore all the features using our fully functional demo [saasstarter.work](https://saasstarter.work).

[![Try it Now](https://img.shields.io/badge/Try_it_Now-37a779?style=for-the-badge 'Try it Now')](https://saasstarter.work)

See [criticalmoments.io](https://criticalmoments.io) for an example of what’s possible after this template has design, content, and functionality added.

<a href="https://saasstarter.work">
<kbd>
<img width="500" alt="homepage" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/34944c09-df72-4ac2-9099-01d25d99911b">
</kbd>
<br>
<kbd>
<img width="200" alt="pricing page" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/c3cb2ab7-3739-473e-a1fe-f82a4a31e844">
</kbd><kbd>
<img width="200" alt="settings page" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/2d947c97-3cc7-4ff5-a5b1-7c8478b6f31a">
</kbd><kbd>
<img width="200" alt="payments portal" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/0c4749c3-0d29-4edc-ae87-d8a4eefea3c9">
</kbd>
</a>

## Features

Everything you need to get started for a SaaS company:

- User Authentication: Sign up, sign out, forgot password, email verification, and oAuth. Powered by Supabase Auth.
- Marketing Page with SEO optimization
- Blog engine with rich formatting, RSS and SEO optimization.
- User Dashboard with user profile, user settings, update email/password, billing, and more.
- Subscriptions powered by Stripe Checkout
- Pricing page
- Billing portal: self serve to change card, upgrade, cancel, or download receipts
- Onboarding flow after signup: collect user data, and select a payment plan
- Style toolkit: theming and UI components
- Responsive: designed for mobile and desktop.
- Extensible: all the tools you need to make additional marketing pages, UI components, admin portals, database backends, API endpoints, and more.

## Tech Stack

- Web Framework: SvelteKit
- CSS / Styling
  - Framework: TailwindCSS
  - Component library: DaisyUI
- Suggested Hosting Stack
  - Host + CDN: Cloudflare Pages 
  - Serverless compute: Cloudflare Workers
  - Authentication: Supabase Auth
  - Database: Supabase Postgres
- Payments
  - Stripe Checkout 
  - Stripe Portal

## Philosophy

- Delightful developer experience: a stack that’s fun and productive to work with (SvelteKit+DaisyUI). It includes all the dev tools you need our of the box including code formatting, linting, test framework, CI, live reloading as you edit, and more.
- Free: free tools are the origin of many great projects; a $200 template or $40/mo hosting bill is enough to stop great projects before they start. This boilerplate is 100% free. Our suggested hosting stack is free as well.
- Open Source: This template is open source with MIT Licensed. Being open has major advantages: 1) community support on bug fixes 2) see code/quality/style before choosing a template. 3) No surprises. 
- Minimal dependencies: we have a short list of dependencies (SvelteKit, Tailwind, DaisyUI, Supabase, Stripe, plus development tools like eslint). The app is as about close to a pure “SvelteKit+Tailwind” app that you can get. There’s no templating engine to learn, no template specific CMS, no module system. You’ll be learning transferable skills on some of the best web frameworks, not one off project-specific config systems.
- Hackable: It’s easy to add/remove/modify features to fit your needs. Swap out testing libraries, change formatting rules, change payment provider... you name it, you can build it.

## Suggested Hosting Stack

**There’s no cost for using this template**. The costs below reflect our suggested hosting stack.

- **$0/mo** — Supabase free tier, Cloudflare free tier. 
  - Pros: 
    - Free! 
    - Can scale to thousands of users. 
    - Unlimited static page requests. 
    - 100k serverless functions/day. 
  - Cons: 
    - Does not include database backups. The frugal among you could hook up pgdump backups on lambda/S3 for a few cents per month.
    - Will auto-pause your database when not in use for 7 days. 
  - Who it’s for: 
    - This tier is perfectly functional for a hobby project, or pre-revenue company (up to 50,000 monthly active users). It’s easy to scale up once revenue starts, but it’s also fine to keep at this scale indefinitely.
- **$30/mo** - Supabase Pro, Cloudfare [Workers Paid](https://www.cloudflare.com/plans/developer-platform/)
  - Pros: 
    - Database backups. 
    - Never pauses database. 
    - Over 1M serverless functions per day, with linear pricing for additional invocations.
  - Cons: 
    - none
  - Who it’s for: 
    - I suggest moving to this once you have paid customers or investors.

## Performance / Best Practices

The selected tech stack creates lightning fast websites.

 - Pre-rendering (static generation) for marketing pages, pricing and blog
 - Instant navigation: the best of CSR + SSR in one. SSR your first page for fastest possible initial load times. For subsequent pages, the content is pre-loaded and rendered with CSR, for instant rendering.
 - CDN optimized, for high edge-cache hit ratios
 - Edge-functions for dynamic APIs/pages
 - Svelte and Tailwind compile out unused HTML, CSS and JS at deploy time for smaller pages
 - Linting to find accessibility and syntax issues

The result is a perfect Google PageSpeed Insights score in all categories!

<img width="420" alt="Screenshot 2024-01-18 at 11 31 32 AM" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/46b5e960-2aa0-4fb5-acd7-4f84b380e1d0">

# Quick Start

### Get Started (Local Development)

To get started, fork and run this project!

```
## First fork the project on Github
git pull [Your Fork]
npm install
## Run the project locally in dev mode
npm run dev --
```

### Developer Environment

The repo includes [CI scripts](https://aws.amazon.com/devops/continuous-integration/) designed for [GitHub Actions](https://github.com/features/actions). These confirm you don’t break your [build](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/build.yml), you use [proper code formatting](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/format.yml), and [code linting passes](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/linting.yml). 

Installing a Svelte extension in your editor will help automatically apply formatting on-save, and show linting issues inline. The [VS Code svelte extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) is excellent. [Extensions for other editors are available here.](https://sveltesociety.dev/tools#editor-support)

To catch build, formatting and linting issues before you commit changes, we suggest the following local git hook. It will run before you commit, stop you from breaking the build, and show any issues that are found. Add the lines below to the git hook file at the location `.git/hooks/pre-commit`.

```
#!/bin/sh
set -e
npm run format_check
npm run lint
npm run build
```

Finally: if you find build, formatting or linting rules too tedious, you can disable enforcement by deleting the CI files (`.github/workflows/*`) and remove the git hook (`.git/hooks/pre-commit`).

### Setup Supabase

- Create a Supabase account
- Create a new Supabase project in the console
- Wait for the database to launch
- Create your user management tables in the database
  - Go to the [SQL Editor](https://supabase.com/dashboard/project/_/sql) page in the Dashboard.
  - Paste the SQL from `database_migration.sql` in this repo to create your user/profiles table and click run.
- Enable user signups in the [Supabase console](https://app.supabase.com/project/_/settings/auth): sometimes new signups are disabled by default in Supabase projects
- Go to the [API Settings](https://supabase.com/dashboard/project/_/settings/api) page in the Dashboard. Find your Project-URL (PUBLIC_SUPABASE_URL), anon (PUBLIC_SUPABASE_ANON_KEY) and service_role (PRIVATE_SUPABASE_SERVICE_ROLE).
  - For local development: create a `.env.local` file:
    ```
    PUBLIC_SUPABASE_URL=https://your-project.supabase.co
    PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    PRIVATE_SUPABASE_SERVICE_ROLE=your service_role secret
    ```
  - For production, add these two keys to your Cloudflare environment (see below). We suggest you encrypt your service role.
- Auth Callback
  - Set your default callback URL for auth in the Supabase Auth console. For example, for the demo page we added: `https://saasstarter.work/auth/callback` . Also add that same URL to the the “allowed redirect URL” list in the Supabase auth console further down the page. 
  - Add a link to the redirect URL allow list which allows parameters to your auth callback. For example we added the following for the demo page: `https://saasstarter.work/auth/callback?*`
  - Also add any local development URLs you want to use in testing to the list for your dev environment. For example, we added the following for local development: `http://localhost:5173/auth/callback` and `http://localhost:5173/auth/callback?*`.
  - Test that the "sign up" and "forgot password" emails link back to your domain correctly by checking the have a redirect_to parameter to your `yourdomain.com/auth/callback`. If they link to the base URL or another page, double check you have the config above set correctly.
- OAuth Logins
  - Decide which oauth logins you want to support, and set them up in the Supabase Auth console under “Auth Providers”. Be sure to provide them the Supabase callback URL. Also be sure to set any platform specific permissions/settings to retrieve their email as part of the login (for example, for Github it's under `Account Permissions > Email Address > Read Only Access`
  - Edit `oauthProviders` list in `/src/routes/(marketing)/login/login_conf.ts` with the list of providers you chose. If you don’t want any OAuth options, make this an empty array.
  - Test each provider to ensure you setup the client ID, client secret and callback correctly for each
- Auth Email SMTP
  - Supabase has a limit of 4 emails per hour on their development server. You should [Configure a Custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp) sending emails from your own domain.
  - Customize the email templates in the Supabase Auth console to include your product name and branding
- Test authentication
  - Open the `/login` page in your browser, and ensure you can sign up, confirm email, log in, and edit your account.

### Setup Stripe Billing

- Create a Stripe account
- Create a product and price Tiers
  - Create your [products](https://stripe.com/docs/api/products) and their [prices](https://stripe.com/docs/api/prices) in the Dashboard or with the Stripe CLI. 
  - SaaS Starter works best if you define each tier as a separate product (eg, `SaaS Starter Free`, `Saas Starter Pro`, `Saas Starter Enterprise`). Include a monthly and annual price for each product if you want to support multiple billing periods. 
  - You do not need to create a free plan in Stripe. The free plan is managed within the app.
- Setup your environment
  - Get your [Secret API](https://dashboard.stripe.com/test/apikeys) key, and add it as an environment variable PRIVATE_STRIPE_API_KEY (`.env.local` locally, and Cloudflare environment for prod). Be sure to use test keys for development, and keep your production/live keys secret and secure.
- Optional: theme your Stripe integration
  - Change the colors and fonts to match your brand [here](https://dashboard.stripe.com/settings/branding)
- Update your pricing plan data to align to your stripe data
  - See `/src/routes/(marketing)/pricing/pricing.js` and Fill in all fields for each plan. stripe_price_id and stripe_product_id should only be omitted on a single “free” plan. Multiple free plans are not supported.
    - The product in Stripe can contain several prices for the same product (annual, monthly, etc). The stripe_price_id you choose to put in this json will be the default we use for the checkout experience. However, if you have more prices configured for a product configured, the user can switch between them in the management portal.
  - Set the `defaultPlanId` to the plan the user will see as their “current plan” after signup, but before subscribing to a paid plan (typically “free”). It should align to the plan with no stripe_price_id. 
  - if you want an item highlighted on `/pricing`, specify  that plan ID in `/src/routes/(marketing)/pricing/+page.svelte`
- Update your portal configuration
  - Open [stripe portal config](https://dashboard.stripe.com/test/settings/billing/portal) and make the following changes
    - Disallow editing email under customer information (since we allow editing in primary portal)
    - Optional: setup a custom domain so Stripe pages use your own domain
- Repeat steps in production environment

### Deploy To Cloudflare

Cloudflare Pages and Workers is one of the most popular options for deploying SvelteKit and we recommend it. [Follow Cloudflare’s instructions](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/#deploy-with-cloudflare-pages) to deploy in a few clicks. Be sure to select “SvelteKit” as framework, and the rest of the defaults will work.

When prompted: add environment variables for your production environment (PUBLIC_SUPABASE_URL, 
PUBLIC_SUPABASE_ANON_KEY, PRIVATE_SUPABASE_SERVICE_ROLE, PRIVATE_STRIPE_API_KEY, and PUBLIC_SITE_NAME).

Optional: enable [Cloudflare Analytics](https://www.cloudflare.com/en-ca/application-services/products/analytics/) for usage metrics.

If you prefer another host you can explore alternatives: 
- [SvelteKit official adapters](https://kit.svelte.dev/docs/adapters) including Netlify, Vercel, and Node
- [Community adapters](https://sveltesociety.dev/components#adapters) including Github pages, AppEngine, Azure, and more
- [Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit) if you want one host for everything. Note: they do charge $10 a month for custom domains, unlike Cloudflare.

### Add your content!

After the steps above, you’ll have a working version like the demo page. However, it’s not branded, and doesn’t have your content. The following checklist helps you customize the template to make a SaaS homepage for your company.

- Set the PUBLIC_SITE_NAME to your company name in `.env.local` and your production environment. 
- Content
  - Add actual content for marketing homepage
  - Add actual content for your blog (or delete the blog) 
    - Update all fields in `src/routes/(markeing)/blog/posts.json`, and replace the post pages under `src/routes/(markeing)/blog/posts` to align to the urls from posts.json.
    - Alternatively remove the blog by removing the src/routes/(marketing)/blog directory, and remove any links to the blog in the header and footer. You can always bring it back later.
  - Add any pages you want on top of our boiler plate (about, terms of service, etc). Be sure to add links to them in the header, mobile menu header, and footer as appropriate (`src/routes/(marketing)/+layout.svelte`).
  - Note: if you add any dynamic content to the main marketing page, pricing page or blog, be sure to set `prerender = false` in the appropriate `+page.ts` file. These are currently pre-rendered and served as static assets for performance reasons, but that will break if you add server side rendering requirements.
- Update SEO content
  - Update title and meta description tags for every public page. We include generic ones using your site name (PUBLIC_SITE_NAME), but the more specific these are the better.
  - This done automatically for blog posts from `posts.json` metadata
- Style
  - Create a new DaisyUI Theme matching your brand or use one of the built in themes from DaisyUI (see `tailwind.config.js`)
  - Update the marketing page layout `src/routes/(marketing)/+layout.svelte`: customize design, delete unwanted pages from header and footer
  - Style: make it your own look and feel.
  - Update the favicon in the `/static/` directory
  - The Authentication UI should automatically update based on your DaisyUI style, but check out the login in pages, and further design tweaks can be made in `src/routes/(marketing)/login/login_config.ts` (see [Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui#customization) for options).
- Functionality
  - Add actual SaaS functionality!
  - Replace the admin dashboard with real content (`/src/routes/(admin)/account/+page.svelte`).
  - Add API endpoints and database tables as needed to deliver your SaaS product.

## Icons

Icons in the template are from [Solar Broken Line Icons Collection](https://www.svgrepo.com/collection/solar-broken-line-icons/) via CC Attribution License.

# Sponsor 

We hope you enjoy SaaS Starter! If you build mobile apps, please check out its sponsor/creator, [Critical Moments](https://criticalmoments.io). We can help improve your mobile app conversions, improve your app rating, and mitigate major bugs and outages.
