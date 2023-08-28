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