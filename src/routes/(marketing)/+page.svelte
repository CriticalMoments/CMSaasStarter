<script lang="ts">
  const features = [
    {
      name: "User Auth",
      link: "/login",
      description: "Sign up, sign out, and recover password",
    },
    {
      name: "Pricing Page",
      link: "/pricing",
      description: "Customizable and fast",
    },
    {
      name: "Blog",
      link: "/blog",
      description: "Blog with rich formatting and RSS",
    },
    {
      name: "Stripe Checkout",
      link: "/pricing",
      description: "User friendly subscriptions",
    },
    {
      name: "Stripe Portal",
      link: "/account/billing",
      description: "Self-serve card change, receipts, upgrades and more",
    },
    {
      name: "User Settings",
      link: "/account/settings",
      description: "Update profile, email, password",
    },
    {
      name: "Performance",
      link: "https://pagespeed.web.dev/analysis/https-saasstarter-work/zyyrg32eaj?form_factor=mobile",
      newPage: true,
      description: "Perfect 100/100 Google performance scores",
    },
    {
      name: "Responsive",
      description: "Works on mobile and desktop",
    },
    {
      name: "Extensible",
      description:
        "All the tools you need to make APIs, marketing pages, admin portals, and more",
    },
  ]

  import { PUBLIC_SITE_NAME } from "$env/static/public"
</script>

<svelte:head>
  <title>{PUBLIC_SITE_NAME}</title>
  <meta name="description" content="Home page for {PUBLIC_SITE_NAME}" />
</svelte:head>

<div class="hero min-h-[60vh] bg-base-200">
  <div class="hero-content text-center py-12">
    <div class="max-w-lg">
      <div
        class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600"
      >
        SaaS Starter Demo
      </div>
      <div class="my-6 text-xl">
        SaaS marketing page template which is open source, fast and free to
        host.
      </div>

      <div class="mt-10">
        <a href="https://github.com/CriticalMoments/CMSaasStarter">
          <button class="btn btn-primary btn-wide">★ us on Github</button>
        </a>
        <a
          href="https://github.com/CriticalMoments/CMSaasStarter/blob/main/README.md"
        >
          <button class="btn btn-outline btn-primary btn-wide mt-3"
            >Read the Docs</button
          >
        </a>
      </div>
      <div class="mt-8 text-large">
        Built with <a href="https://kit.svelte.dev" class="link" target="_blank"
          >SvelteKit</a
        >,
        <a href="https://supabase.com" class="link" target="_blank">Supabase</a
        >,
        <a href="https://stripe.com" class="link" target="_blank">Stripe</a>,
        <a href="https://tailwindcss.com" class="link" target="_blank"
          >Tailwind</a
        >,
        <a href="https://daisyui.com" class="link" target="_blank">daisyUI</a>,
        and
        <a href="https://www.postgresql.org" class="link" target="_blank"
          >Postgres</a
        >
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div class="text-5xl font-bold">Explore the Demo</div>
      <div class="mt-6 text-xl">
        This is a fully functional demo page. Try it out!
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[800px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div class="card bg-base-200 w-[212px] min-h-[212px] flex-none shadow">
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <h2 class="card-title">
              {feature.name}
            </h2>
            <p class="text-sm">
              {feature.description}
            </p>
            {#if feature.link}
              <a
                href={feature.link}
                class="py-2"
                target={feature.newPage ? "_blank" : ""}
              >
                <button
                  class="btn btn-xs btn-outline rounded-full btn-primary min-w-[100px]"
                  >Try It</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="hero min-h-[60vh]">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-md">
      <div class="text-5xl font-bold mt-8">See it in Action</div>
      <div class="mt-6 text-xl">
        SaaS Started was created and sponsored by <a
          href="https://criticalmoments.io"
          class="link"
          target="_blank">Critical Moments</a
        >
      </div>
      <div class="mt-6 text-xl">
        Our <a href="https://criticalmoments.io" class="link" target="_blank"
          >webpage</a
        > is the best example of SaaS Starter with style and real content.
      </div>
      <div class="mt-6 text-large">
        <a href="https://criticalmoments.io" target="_blank">
          <button class="btn btn-primary btn-wide mt-3">See it in Action</button
          >
        </a>
      </div>
    </div>
  </div>
</div>
