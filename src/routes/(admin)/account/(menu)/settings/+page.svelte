<script lang="ts">
	import { enhance, applyAction } from '$app/forms'
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store';
	import ChangeEmail from './change_email/+page.svelte';
	import EditProfile from './edit_profile/+page.svelte';

	let adminSection: Writable<String> = getContext('adminSection');
	adminSection.set('settings')

	export let data
</script>

<svelte:head>
	<title>Settings</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<EditProfile data={data} editable={false}/>
<ChangeEmail data={data} editable={false}/>

<div class="card bg-base-200 shadow-xl p-6 mt-8 max-w-lg">
	<h2 class="text-xl font-bold mb-1">Password</h2>
	<div class="text-l">••••••••</div>
	<a href="/account/settings/change_password">
		<button class="btn btn-outline btn-sm mt-3 min-w-[145px]">
			Change Password
		</button>
	</a>
</div>