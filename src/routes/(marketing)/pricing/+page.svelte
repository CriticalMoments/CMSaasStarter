<script>
    let plans = [
        {
            name: "Free",
            description: "A free plan to get you started!",
            price: "$0",
            priceIntervalName: "per month",
            callToAction: "Get Started",
            features: [
                "MIT Licence",
                "Fast Performance",
                "Stripe Integration"
            ]
        },
        {
            name: "Pro",
            description: "A plan to test the purchase experience. Try buying this with the fake credit card 4242424242424242.",
            price: "$5",
            priceIntervalName: "per month",
            callToAction: "Get Started",
            highlight: true,
            features: [
                "Everything in Free",
                "Support us with fake money",
                "Test the purchase experience"
            ]
        },
        {
            name: "Enterprise",
            description: "A plan to test the upgrade expereince. Try buying this with the fake credit card 4242424242424242.",
            price: "$15",
            priceIntervalName: "per month",
            callToAction: "Get Started",
            features: [
                "Everything in Pro",
                "Try the 'upgrade plan' UX",
                "Still actually free!"
            ]
        }
    ]
</script>

<svelte:head>
    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
</svelte:head>

<div class="min-h-[70vh]">
    <h1 class="text-2xl font-bold text-center my-6">Pricing</h1>

    <div class="w-full my-8 px-3">
        <div class="flex flex-col lg:flex-row gap-10 place-content-center flex-wrap">
            {#each plans as plan}
                <div class="flex-none card card-bordered {plan.highlight ? 'border-primary' : ''} shadow-xl flex-1 flex-grow min-w-[260px] max-w-[310px] p-6">
                    <div class="flex flex-col h-full">

                        <div class="text-xl font-bold">{plan.name}</div>
                        <p class="mt-2 text-sm text-gray-500 leading-relaxed">{ plan.description }</p>
                        <div class="mt-auto pt-4 text-sm text-gray-600">
                            Plan Includes:
                            <ul class="list-disc list-inside mt-2 space-y-1">
                            {#each plan.features as feature}
                                <li class="">{ feature }</li>
                            {/each}
                            <ul>
                        </div>
                        <div class="pt-8">
                            <span class="text-4xl font-bold">{plan.price}</span> 
                            <span class="text-gray-400">{plan.priceIntervalName}</span>
                            <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
                                <button class="btn btn-primary w-[80%] mx-auto">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

</div>