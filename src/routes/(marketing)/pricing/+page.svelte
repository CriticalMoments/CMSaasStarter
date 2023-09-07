<script>
   import PricingModule from "./pricing_module.svelte";
</script>

<svelte:head>
	<title>Pricing</title>
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh]">
    <h1 class="text-3xl font-bold text-center">Pricing</h1>
    <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">Totally free, scale to millions of users</h2>

    <div class="w-full my-8 px-3">
        <PricingModule
            callToAction='Get Started'
            highlightedPlanId='pro'
            />
    </div>
</div>