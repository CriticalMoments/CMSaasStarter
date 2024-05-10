<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings/settings_module.svelte"
  import PricingModule from "../../../../(marketing)/pricing/pricing_module.svelte"
  import {
    pricingPlans,
    defaultPlanId,
  } from "../../../../(marketing)/pricing/pricing_plans"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("billing")

  export let data

  let currentPlanId = data.currentPlanId ?? defaultPlanId
  let currentPlanName = pricingPlans.find(
    (x) => x.id === data.currentPlanId,
  )?.name
</script>

<svelte:head>
  <title>Billing</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-2">
  {data.isActiveCustomer ? "Billing" : "Select a Plan"}
</h1>
<div>
  View our <a href="/pricing" target="_blank" class="link">pricing page</a> for details.
</div>

{#if !data.isActiveCustomer}
  <div class="mt-8">
    <PricingModule {currentPlanId} callToAction="Select Plan" center={false} />
  </div>

  {#if data.hasEverHadSubscription}
    <div class="mt-10">
      <a href="/account/billing/manage" class="link">View past invoices</a>
    </div>
  {/if}
{:else}
  <SettingsModule
    title="Subscription"
    editable={false}
    fields={[
      {
        id: "plan",
        label: "Current Plan",
        initialValue: currentPlanName || "",
      },
    ]}
    editButtonTitle="Manage Subscripton"
    editLink="/account/billing/manage"
  />
{/if}
