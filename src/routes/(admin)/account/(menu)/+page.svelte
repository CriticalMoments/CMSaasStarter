<script lang="ts">
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store';

	let adminSection: Writable<String> = getContext('adminSection');
	adminSection.set('home')


</script>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>
<div class="badge badge-warning gap-2">Non Functional Demo Content</div>
<p class="text-base mt-4 max-w-[420px]">
	This page is just a placeholder. 
	Replace this page with your app's content and functionality.
</p>
<p class="text-base mb-8 mt-3 max-w-[420px]">
	The billing and settings pages are functional demos. 
</p>

<div class="my-6">
	<div class="stats shadow w-[420px]">
	
		<div class="stat place-items-center">
		<div class="stat-title">Downloads</div>
		<div class="stat-value">31K</div>
		<div class="stat-desc">↗︎ 546 (2%)</div>
		</div>
		
		<div class="stat place-items-center">
		<div class="stat-title">Users</div>
		<div class="stat-value text-secondary">4,200</div>
		<div class="stat-desc">↗︎ 40 (2%)</div>
		</div>
	</div>
</div>
<div class="my-6">
	<div class="stats shadow w-[420px]">
		<div class="stat place-items-center">
		<div class="stat-title">New Registers</div>
		<div class="stat-value">1,200</div>
		<div class="stat-desc">↘︎ 90 (14%)</div>
		</div>
		
		<div class="stat place-items-center">
		<div class="stat-title">Churned Accounts</div>
		<div class="stat-value">42</div>
		<div class="stat-desc">↘︎ 6 (12%)</div>
		</div>
	</div>
</div>
<div class="my-6">
	<div class="stats shadow w-[420px]">
		<div class="stat place-items-center">
		<div class="stat-title text-success">Revenue</div>
		<div class="stat-value text-success">$4200</div>
		<div class="stat-desc">↗︎ $180 (4%)</div>
		</div>
		
		<div class="stat place-items-center">
		<div class="stat-title">New Subscribers</div>
		<div class="stat-value">16</div>
		<div class="stat-desc">↘︎ 1 (%7)</div>
		</div>
	</div>
</div>