<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { PUBLIC_SITE_NAME } from "$env/static/public"
  import BarsComponent from "../../bars_component.svelte"
</script>

<svelte:head>
  <title>Pricing</title>
  <meta name="description" content="Pricing details for {PUBLIC_SITE_NAME}" />
</svelte:head>

<div class="min-h-[70vh] py-8 px-6 flex flex-col place-content-center">
  <h1 class="font-header text-3xl md:text-5xl text-center">Pricing</h1>
  <h2 class="pt-2 text-xl md:text-2xl text-center text-slate-600 mt-1 pb-3">
    Real pricing coming soon!
  </h2>

  <div class="w-full my-8">
    <PricingModule callToAction="Get Started" highlightedPlanId="pro" />
  </div>
</div>
