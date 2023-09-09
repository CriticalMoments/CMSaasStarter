<script lang="ts">
    const features = [
      {
        name: "User Auth",
        link: "/login",
        description: "Sign up, sign out, and recover password"
      },
      {
        name: "Pricing Page",
        link: "/pricing",
        description: "Customizable and fast"
      },
      {
        name: "Blog",
        link: "/blog",
        description: "With rich formatting and RSS"
      },
      {
        name: "Stripe Checkout",
        link: "/pricing",
        description: "User friendly subscriptions"
      },
      {
        name: "Stripe Portal",
        link: "/account/billing",
        description: "Self-serve card change, receipts, upgrades and more"
      },
      {
        name: "User Settings",
        link: "/account/settings",
        description: "Update profile, email, password"
      },
      {
        name: "Performance",
        link: "https://pagespeed.web.dev",
        newPage: true,
        description: "Perfect 100/100 Google performance scores"
      },
      {
        name: "Responsive",
        description: "Works on mobile and desktop"
      }
    ]
</script>

<div class="hero min-h-[60vh] bg-base-200">
    <div class="hero-content text-center py-12">
      <div class="max-w-md">
        <div class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600">
          SaaS Starter Demo
        </div>
        <div class="my-6 text-xl">
          SaaS Starter is a SaaS marketing page template which is open source, fast and free to host.
        </div>
        <div class="my-6 text-xl">
          Built with <a href="https://kit.svelte.dev" class="link" target="_blank">SvelteKit</a>, <a href="https://supabase.com" class="link" target="_blank">Supabase</a>, and <a href="https://stripe.com" class="link" target="_blank">Stripe</a>
        </div>
        <div class="mt-10">
          <a href="https://github.com/CriticalMoments/CMSaasStarter">
              <button class="btn btn-primary btn-wide">★ us on Github</button>
          </a>
          <a href="https://github.com/CriticalMoments/CMSaasStarter/blob/main/README.md">
              <button class="btn btn-outline btn-primary btn-wide mt-3">Read the Docs</button>
          </a>
        </div>
      </div>
    </div>
</div>
<div class="min-h-[60vh]">
    <div class="py-20 px-7">
      <div class="max-w-lg mx-auto text-center">
        <div class="text-5xl font-bold">Explore the Demo</div>
        <div class="mt-6 text-xl">
          This is a fully functional demo page. Try it out!
        </div>
      </div>
    
        <div class="flex gap-6 mt-12 max-w-[800px] mx-auto place-content-center flex-wrap">
          {#each features as feature }
            <div class="card bg-base-200 w-[212px] min-h-[212px] flex-none">
              <div class="card-body items-center text-center">
                <h2 class="card-title">
                  {feature.name}
                </h2>
                <p class="text-sm">
                  {feature.description}
                </p>
                {#if feature.link}
                  <a href="{feature.link}" class="py-2" target="{feature.newPage ? '_blank' : ''}">
                    <div class="badge badge-primary min-w-[110px]">Try It</div>
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
          SaaS Started was created and sponsored by <a href="https://criticalmoments.io" class="link" target="_blank">Critical Moments</a> 
        </div>
        <div class="mt-6 text-xl">
          Our <a href="https://criticalmoments.io" class="link" target="_blank">webpage</a> is the best example of SaaS Starter with style and real content.
        </div>
        <div class="mt-6 text-large">
        <a href="https://criticalmoments.io" target="_blank">
            <button class="btn btn-primary btn-wide mt-3">See it in Action</button>
        </a>
        </div>
      </div>
    </div>
</div>