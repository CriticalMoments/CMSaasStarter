<script lang="ts">
    import "../../../../app.css"
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	const adminSectionStore = writable('');
	setContext('adminSection', adminSectionStore);
	let adminSection: String
	adminSectionStore.subscribe((value) => {
		adminSection = value
	})

</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<div class="drawer lg:drawer-open">
	<input id="admin-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<div class="navbar bg-base-100 lg:hidden">
			<div class="flex-1">
				<a class="btn btn-ghost normal-case text-xl" href="/">SaaS Starter</a>
			</div>
			<div class="flex-none">
				<div class="dropdown dropdown-end">
					<label for="admin-drawer" class="btn btn-ghost btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
					</label>
				</div>
			</div>
		</div>
		<slot />
	</div> 

	<div class="drawer-side">
	  <label for="admin-drawer" class="drawer-overlay"></label> 
	  <ul class="menu menu-lg p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li><div class="normal-case menu-title text-xl font-bold text-black" >SaaS Starter</div></li>
		<!-- Sidebar content here -->
		<li>
			<a class="{adminSection === 'home' ? 'active' : ''}">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>

				Home
			</a>
		</li>
		<li>
			<a class="{adminSection === 'billing' ? 'active' : ''}">
				<img class="h-5 w-5" alt="Billing Icon" src="/images/billing.svg">
				Billing
			</a>
		</li>
		<li>
			<a class="{adminSection === 'profile' ? 'active' : ''}">
				<img class="h-5 w-5" alt="Billing Icon" src="/images/profile.svg">
				Profile
			</a>
		</li>
		<li>
			<a class="{adminSection === 'settings' ? 'active' : ''}">
				<img class="h-5 w-5" alt="Billing Icon" src="/images/settings.svg">
				Settings
			</a>
		</li>

		<li class="mt-auto">
			<a href="/account/sign_out" data-sveltekit-preload-data="off" class="mt-auto text-base">Sign Out</a>
		</li>
	  </ul>
	
	</div>
</div>
