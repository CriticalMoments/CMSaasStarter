<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { PUBLIC_SITE_NAME } from "$env/static/public"
</script>

<svelte:head>
  <title>Pricing</title>
  <meta name="description" content="Pricing details for {PUBLIC_SITE_NAME}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-6">
  <h1 class="text-3xl font-bold text-center">Pricing</h1>
  <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
    Totally free, scale to millions of users
  </h2>

  <div class="w-full my-8">
    <PricingModule callToAction="Get Started" highlightedPlanId="pro" />
  </div>
</div>
