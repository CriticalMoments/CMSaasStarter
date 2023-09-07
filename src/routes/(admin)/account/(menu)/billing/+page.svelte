<script lang="ts">
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store'
	import SettingsModule from '../settings/settings_module.svelte'
    import PricingModule from '../../../../(marketing)/pricing/pricing_module.svelte'
    import { pricingPlans } from '../../../../(marketing)/pricing/pricing_plans';

	let adminSection: Writable<String> = getContext('adminSection')
	adminSection.set('billing')
	
    export let data

    // TODO real values from DB
    let currentPlanId = 'free'
    let isActivePaidCustomer = true
    let isExpiredCustomer = true 

    let currentPlanName = pricingPlans[currentPlanId]?.name
</script>

<svelte:head>
	<title>Billing</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Billing</h1>

{#if !isActivePaidCustomer}

    <div class="mt-12">
        <PricingModule
            currentPlanId={currentPlanId}
            callToAction='Select Plan'
            center={false}
            /> 
    </div>

    {#if isExpiredCustomer}
        <div class="mt-10">
            <a href="/account/billing/manage" class="link">View past invoices</a>
        </div>
    {/if}
{:else}
    <SettingsModule 
        data={data}
        title='Subscription'
        editable={false}
        fields={[
                {id: "plan", label: 'Current Plan', initialValue: currentPlanName},
            ]}
        editButtonTitle='Manage Subscripton'
        editLink="/account/billing/manage"
        />
{/if}


