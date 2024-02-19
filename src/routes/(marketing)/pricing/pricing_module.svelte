<script lang="ts">
  import { pricingPlans } from "./pricing_plans"

  // Module context
  export let highlightedPlanId: string = ""
  export let callToAction: string
  export let currentPlanId: string = ""
  export let center = true

  type PlanFeatureRow = {
    name: string
    freeIncluded?: boolean
    proIncluded?: boolean
    freeString?: string
    proString?: string
    header?: boolean
  }

  const planFeatures: PlanFeatureRow[] = [
    {
      name: "Section 1",
      header: true,
    },
    {
      name: "Feature 1",
      freeIncluded: true,
      proIncluded: true,
    },
    {
      name: "Feature 2",
      freeIncluded: false,
      proIncluded: true,
    },
    {
      name: "Feature 3",
      freeString: "3",
      proString: "Unlimited",
    },
    {
      name: "Section 2",
      header: true,
    },
    {
      name: "Feature 4",
      freeIncluded: true,
      proIncluded: true,
    },
    {
      name: "Feature 5",
      freeIncluded: false,
      proIncluded: true,
    },
  ]
</script>

<div
  class="flex flex-col lg:flex-row gap-10 {center
    ? 'place-content-center'
    : ''} flex-wrap"
>
  {#each pricingPlans as plan}
    <div
      class="flex-none card card-bordered {plan.id === highlightedPlanId
        ? 'border-primary'
        : 'border-gray-200'} shadow-xl flex-1 flex-grow min-w-[260px] max-w-[310px] p-6"
    >
      <div class="flex flex-col h-full">
        <div class="text-xl font-bold">{plan.name}</div>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
          {plan.description}
        </p>
        <div class="mt-auto pt-4 text-sm text-gray-600">
          Plan Includes:
          <ul class="list-disc list-inside mt-2 space-y-1">
            {#each plan.features as feature}
              <li class="">{feature}</li>
            {/each}
            <ul></ul>
          </ul>
        </div>
        <div class="pt-8">
          <span class="text-4xl font-bold">{plan.price}</span>
          <span class="text-gray-400">{plan.priceIntervalName}</span>
          <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
            {#if plan.id === currentPlanId}
              <div
                class="btn btn-outline btn-success no-animation w-[80%] mx-auto cursor-default"
              >
                Current Plan
              </div>
            {:else}
              <a
                href={"/account/subscribe/" +
                  (plan?.stripe_price_id ?? "free_plan")}
                class="btn btn-primary w-[80%] mx-auto"
              >
                {callToAction}
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<h1 class="text-2xl font-bold text-center mt-24">Pricing FAQ</h1>
<div class="flex place-content-center">
  <div class="join join-vertical max-w-xl py-6 mx-auto">
    <div class="collapse collapse-arrow join-item border border-primary">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-medium">
        Is this template free to use?
      </div>
      <div class="collapse-content">
        <p>Yup! This template is free to use for any project.</p>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-primary">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-medium">
        Why does a free template have a pricing page?
      </div>
      <div class="collapse-content">
        <p>
          The pricing page is part of the boilerplate. It shows how the pricing
          page integrates into the billing portal and the Stripe Checkout flows.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-primary">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-medium">
        What license is the template under?
      </div>
      <div class="collapse-content">
        <p>The template is under the MIT license.</p>
      </div>
    </div>
    <div class="collapse collapse-arrow join-item border border-primary">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title text-lg font-medium">
        Can I try out purchase flows without real a credit card?
      </div>
      <div class="collapse-content">
        <p>
          Our demo page <a href="https://saasstarter.work" class="link"
            >SaasStarter.work</a
          > has a functional demo page, using Stripe's test environment.
        </p>
        <p class="mt-4">
          You can use the credit card number 4242 4242 4242 4242 with any future
          expiry date to test the payment and upgrade flows.
        </p>
      </div>
    </div>
  </div>
</div>

<svg style="display:none" version="2.0">
  <defs>
    <symbol
      id="checkcircle"
      viewBox="0 0 24 24"
      stroke-width="2"
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
      />
    </symbol>
  </defs>
</svg>

<svg style="display:none" version="2.0">
  <defs>
    <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
      />
    </symbol>
  </defs>
</svg>

<h1 class="text-2xl font-bold text-center mt-16">Plan Features</h1>
<h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
  Example feature table
</h2>

<div class="overflow-visible mx-auto max-w-xl mt-4">
  <table class="table">
    <thead
      class="text-lg sticky top-0 bg-base-100 bg-opacity-50 z-10 backdrop-blur"
    >
      <tr>
        <th></th>
        <th class="text-center">Free</th>
        <th class="text-center">Pro</th>
      </tr>
    </thead>
    <tbody>
      {#each planFeatures as feature}
        {#if feature.header}
          <tr class="bg-base-200 font-bold">
            <td colspan="3">{feature.name} </td>
          </tr>
        {:else}
          <tr class="relative">
            <td>{feature.name} </td>
            <td class="text-center">
              {#if feature.freeString}
                {feature.freeString}
              {:else if feature.freeIncluded}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 ml-2 inline text-success"
                >
                  <use href="#checkcircle" />
                </svg>
              {:else}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[26px] h-[26px] inline text-base-200"
                >
                  <use href="#nocircle" />
                </svg>
              {/if}
            </td>
            <td class="text-center">
              {#if feature.proString}
                {feature.proString}
              {:else if feature.proIncluded}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 ml-2 inline text-success"
                >
                  <use href="#checkcircle" />
                </svg>
              {:else}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[26px] h-[26px] inline text-base-200"
                >
                  <use href="#nocircle" />
                </svg>
              {/if}
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>
