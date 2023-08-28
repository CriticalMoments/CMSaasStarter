<script lang="ts">
	import { enhance, applyAction } from '$app/forms'
	import { page } from '$app/stores';
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store';

	let adminSection: Writable<String> = getContext('adminSection');
	adminSection.set('settings')

	export let data
	export let form
	export let editable = true

	let { session, supabase, profile } = data
	
	const fieldError = (liveForm, name: String) => {
		let errors = liveForm?.errorFields ?? []
		return errors.includes(name)
	}

	let fullName: string = profile?.full_name ?? ''
	let companyName: string = profile?.company_name ?? ''
	let website: string = profile?.website ?? ''

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
                setTimeout(() => {
                    showSuccess = false
                }, 1500)
			}
		}
	}
</script>

<svelte:head>
	<title>Update Profile</title>
</svelte:head>

{#if editable}
<h1 class="text-2xl font-bold mb-6">Edit Profile</h1>
{/if}

<div class="card bg-base-200 shadow-xl p-6 max-w-lg">

{#if !editable}
	<h2 class="text-xl font-bold mb-1">Profile</h2>
{/if}

	<div>
 		<form
			class="form-widget flex flex-col"
			method="POST"
			action="/account/api?/updateProfile"
			use:enhance={handleSubmit}
		>

			<label for="fullName" >
				<span class="text-sm text-gray-500">Your Name</span>
			</label>
			<input id="fullName" name="fullName" type="text" disabled={!editable} placeholder="Your full name" class="{fieldError($page?.form, 'fullName') ? 'input-error' : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3" value={$page?.form?.fullName ?? fullName}/>

			<label for="companyName" >
				<span class="text-sm text-gray-500">Company Name</span>
			</label>
			<input id="companyName" name="companyName" type="text" disabled={!editable} placeholder="Company name" class="{fieldError($page?.form, 'companyName') ? 'input-error' : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3" value={$page?.form?.companyName ?? companyName}/>

			<label for="website" >
				<span class="text-sm text-gray-500">Company Website</span>
			</label>
			<input id="website" name="website" type="text" disabled={!editable} placeholder="Company website" class="{fieldError($page?.form, 'website') ? 'input-error' : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3" value={$page?.form?.website ?? website}/>

			{#if $page?.form?.errorMessage}
				<p class="text-red-700 text-sm font-bold mt-1">
					{$page?.form?.errorMessage} 
				</p>
			{/if}

{#if editable}
			<div class="{!showSuccess ? '' : 'hidden'}">
				<input
					type="submit"
					class="ml-auto btn btn-success btn-sm mt-3 min-w-[145px]"
					value={loading ? "..." : "Save"}
					disabled={loading}
				/>
			</div>
			<div class="{showSuccess ? '' : 'hidden'}">
				<button class="btn btn-success btn-sm mt-3 min-w-[145px]">
					Saved!
				</button>
			</div>
{:else}
			<a href="/account/settings/edit_profile">
				<button class="btn btn-outline btn-sm mt-3 min-w-[145px]">
					Edit Profile
				</button>
			</a>
{/if}
		</form>
	</div>
</div>
