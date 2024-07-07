<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import { pricingPlans, defaultPlanId } from "../../../(marketing)/pricing/pricing_plans";
  import ProContents from './components/proContents.svelte'; // Import the ProContents component

  let adminSection: Writable<string> = getContext("adminSection");
  adminSection.set("home");

  export let data;

  let currentPlanId = data.currentPlanId ?? defaultPlanId;
  
  // Variable to store the fetched external data
  let externalData = data.externalData;

</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>

<!-- Commented out alert for demo content
<div class="alert alert-error max-w-lg mt-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="stroke-current shrink-0 h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    /></svg
  >
  <div>
    <div class="font-bold">Demo Content</div>
    <div class="my-2">
      This page is just a placeholder. Replace this page with your app's content
      and functionality.
    </div>
    <div class="my-2">
      The <a href="/account/billing" class="link">billing</a> and
      <a href="/account/settings" class="link">settings</a> pages are functional
      demos.
    </div>
  </div>
</div> -->

{#if currentPlanId === "pro"}
  <p>Pro Version Contents</p>
  <ProContents {externalData}/>
{:else}
  <p>Free Version Contents</p>
{/if}



