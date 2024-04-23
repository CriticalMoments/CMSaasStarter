## SaaS App that allows you to generate coloring sheets that can be printed in just a few seconds

- 🙋 Feature Rich: user auth, user dashboard, marketing site, blog engine, billing/subscriptions, pricing page, and more. 
- 🚀 Lightning Performance: fast pre-rendered pages which score 100/100 on Google PageSpeed. 
- 🤌 Delightful Developer Experience: tools you'll love working with, including SvelteKit, Tailwind, DaisyUI, Postgres, and Supabase. 

## Features

Everything you need to get started for a SaaS company:

- User Authentication: Sign up, sign out, forgot password, email verification, and oAuth. Powered by Supabase Auth.
- Marketing Page with SEO optimization
- Blog engine with rich formatting, RSS and SEO optimization.
- User Dashboard with user profile, user settings, update email/password, billing, and more.
- Subscriptions powered by Stripe Checkout
- Pricing page
- Contact-us form
- Billing portal: self serve to change card, upgrade, cancel, or download receipts
- Onboarding flow after signup: collect user data, and select a payment plan
- Style toolkit: theming and UI components
- Responsive: designed for mobile and desktop.
- Performance: 100/100 Google PageSpeed Insights score

<img width="420" alt="Screenshot 2024-01-18 at 11 31 32 AM" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/46b5e960-2aa0-4fb5-acd7-4f84b380e1d0">

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
- Emails
  - Resend

## Performance / Best Practices

The selected tech stack creates lightning fast websites.

 - Pre-rendering (static generation) for marketing pages, pricing and blog
 - Instant navigation: the best of CSR + SSR in one. SSR your first page for fastest possible initial load times. For subsequent pages, the content is pre-loaded and rendered with CSR, for instant rendering.
 - CDN optimized, for high edge-cache hit ratios
 - Edge-functions for dynamic APIs/pages
 - Svelte and Tailwind compile out unused HTML, CSS and JS at deploy time for smaller pages
 - Linting to find accessibility and syntax issues

## Icons

Homescreen Icons are from [Solar Broken Line Icons](https://www.svgrepo.com/collection/solar-broken-line-icons/) and [Solar Linear Icons](https://www.svgrepo.com/collection/solar-linear-icons) via CC Attribution License.
