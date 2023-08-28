<script lang="ts">
	import { enhance, applyAction } from '$app/forms'
	import { page } from '$app/stores';
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store';

	let adminSection: Writable<String> = getContext('adminSection');
	adminSection.set('settings')

	export let data

	let { session, supabase, profile } = data
	
	const fieldError = (liveForm, name: String) => {
		let errors = liveForm?.errorFields ?? []
        console.log(errors)
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
	<title>Change Password</title>
</svelte:head>

<div class="card bg-base-200 shadow-xl p-6 mt-8 max-w-lg">

	<form
		class="form-widget flex flex-col"
		method="POST"
		action="/account/api?/updatePassword"
		use:enhance={handleSubmit}
	>

{#if !showSuccess} 
		<label for="newPassword1" >
			<span class="text-sm text-gray-500">New Password</span>
		</label>
		<input id="newPassword1" name="newPassword1" type="password" placeholder="New Password" class="{fieldError($page.form, 'newPassword1') ? 'input-error' : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3 {!showSuccess ? '' : 'hidden'}" value={$page?.form?.newPassword1 || ''}/>

		<label for="newPassword2" >
			<span class="text-sm text-gray-500">Confirm New Password</span>
		</label>
		<input id="newPassword2" name="newPassword2" type="password" placeholder="Confirm New Password" class="{fieldError($page.form, 'newPassword2') ? 'input-error' : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3 {!showSuccess ? '' : 'hidden'}" value={$page?.form?.newPassword2 || ''}/>

		<label for="currentPassword" >
			<span class="text-sm text-gray-500">Current Password</span>
		</label>
		<input id="currentPassword" name="currentPassword" type="password" placeholder="Current Password" class="{fieldError($page.form, 'currentPassword') ? 'input-error' : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3 {!showSuccess ? '' : 'hidden'}" value={$page?.form?.currentPassword || ''}/>

		{#if $page?.form?.errorMessage}
			<p class="text-red-700 text-sm font-bold mt-1">
				{$page?.form?.errorMessage} 
			</p>
		{/if}

		<div class="">
			<input
				type="submit"
				class="ml-auto btn btn-success btn-sm btn-outline mt-3 min-w-[145px]"
				value={loading ? "..." : "Change Password"}
				disabled={loading}
			/>
		</div>
{:else}
		<div class="{showSuccess ? '' : 'hidden'}">
			<div class="text-success font-bold text-l">Password Changed!</div>
		</div>
{/if}
	</form>
</div>