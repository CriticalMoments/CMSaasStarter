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
</script>

<svelte:head>
  <title>Critical Moments</title>
  <meta
    name="description"
    content="Critical moments improves mobile app conversions and increases your app rating"
  />
</svelte:head>

<div class="min-h-[80vh] flex flex-col">
  <div
    class="md:container mx-auto flex-grow flex flex-col md:flex-row p-edge md:items-end pb-8 gap-x-24 gap-y-8 place-content-end md:place-content-center"
  >
    <div class="logoType text-4xl stdphone:text-5xl md:text-6xl xl:text-7xl">
      Critical<br />Moments
    </div>
    <div
      class="text-xl stdphone:text-2xl md:text-4xl lg:text-5xl whitespace-nowrap"
      style="line-height:1.1;"
    >
      Target the right users<br />
      at the right moment <br />
      to
      <span class="font-bold text-transparent bg-clip-text retroFill">
        Increase Conversion
      </span>
    </div>
  </div>
  {#each ["bg-rc1", "bg-rc2", "bg-rc3", "bg-rc4", "bg-rc5"] as barColor, i}
    <div class="h-[3vh] relative {barColor}"></div>
    <div class="h-[3.25vh] sticky z-10 {barColor}" style="top:{i * 3}vh;"></div>
  {/each}
</div>

<div class="hero min-h-[80vh] bg-white">
  <div class="hero-content text-center py-12">
    <div class="max-w-lg">
      <div
        class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600 font-logo"
      >
        Critical Moments
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
