<script lang="ts">
	import { enhance, applyAction } from '$app/forms'
	import { page } from '$app/stores';
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store';

	let adminSection: Writable<String> = getContext('adminSection');
	adminSection.set('settings')

	export let editable = true
	export let data

	let { session, supabase, profile } = data
	
	const fieldError = (liveForm, name: String) => {
		let errors = liveForm?.errorFields ?? []
		return errors.includes(name)
	}

	let loading = false
	let showSuccess = false

	const handleSubmit = () => {
		loading = true
		return async ({ update, result }) => {
			let response = await update({ reset: false });
			await applyAction(result);
			loading = false
            if (result.type === 'success') {
                showSuccess = true
            }
		}
	}
</script>

<svelte:head>
	<title>Change Email</title>
</svelte:head>

{#if editable}
<h1 class="text-2xl font-bold mb-6">Change Email</h1>
{/if}

<div class="card bg-base-200 shadow-xl p-6 mt-8 max-w-lg">

	<form
		class="form-widget flex flex-col"
		method="POST"
		action="/account/api?/updatePrimaryEmail"
		use:enhance={handleSubmit}
	>

		<label for="email" >
			<h2 class="text-xl font-bold mb-1">Primary Email</h2>
		</label>
		<input id="email" name="email" disabled={!editable} type="text" placeholder="Account Email" class="{fieldError($page.form, 'email') ? 'input-error' : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3 {!showSuccess ? '' : 'hidden'}" value={$page?.form?.email ?? session?.user?.email}/>

		{#if $page?.form?.errorMessage}
			<p class="text-red-700 text-sm font-bold mt-1">
				{$page?.form?.errorMessage} 
			</p>
		{/if}

{#if editable}
		<div class="{!showSuccess ? '' : 'hidden'}">
			<input
				type="submit"
				class="ml-auto btn btn-success btn-sm btn-outline mt-3 min-w-[145px]"
				value={loading ? "..." : "Save"}
				disabled={loading}
			/>
		</div>
		<div class="{showSuccess ? '' : 'hidden'}">
			<div class="text-success font-bold text-l">Email change initiated!</div>
			<div class="text-l">You should recieve emails at both the old and new address to confirm the change. Please click the link in <span class="font-bold">both</span> emails to finalized the change. Until finalized, you must sign in with your current email.</div>
		</div>
{:else}
			<a href="/account/settings/change_email">
				<button class="btn btn-outline btn-sm mt-3 min-w-[145px]">
					Change Email	
				</button>
			</a>
{/if}
	</form>
</div>