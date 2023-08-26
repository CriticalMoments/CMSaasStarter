<script lang="ts">
	import { enhance, applyAction } from '$app/forms'
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store';

	let adminSection: Writable<String> = getContext('adminSection');
	adminSection.set('profile')

	export let data
	export let form

	let { session, supabase, profile } = data
	
	let loading = false
	let fullName: string = profile?.full_name ?? ''
	let companyName: string = profile?.company_name ?? ''
	let website: string = profile?.website ?? ''

	const fieldError = (liveForm, name: String) => {
		let errors = liveForm?.errorFields ?? []
		return errors.includes(name)
	}

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

<div class="text-center content-center max-w-lg mx-auto min-h-[100vh] mb-12 flex items-center place-content-center">
	<div class="flex flex-col w-64 lg:w-80">
		<div>
			<h1 class="text-2xl font-bold mb-6">Edit Profile</h1>
			<form
				class="form-widget"
				method="POST"
				action="/account/api?/updateProfile"
				use:enhance={handleSubmit}
			>

				<div class="mt-4">
					<label for="Email" >
						<span class="text-l text-center">Email</span>
					</label>
					<input id="email" name="email" disabled type="text" class=" mt-1 input input-bordered w-full max-w-xs" value={session?.user.email}/>
				</div>

				<div class="mt-4">
					<label for="fullName" >
						<span class="text-l text-center">Your Name</span>
					</label>
					<input id="fullName" name="fullName" type="text" placeholder="Your full name" class="{fieldError(form, 'fullName') ? 'input-error' : ''} mt-1 input input-bordered w-full max-w-xs" value={form?.fullName ?? fullName}/>
				</div>

				<div class="mt-4">
					<label for="companyName" >
						<span class="text-l text-center">Company Name</span>
					</label>
					<input id="companyName" name="companyName" type="text" placeholder="Company name" class="{fieldError(form, 'companyName') ? 'input-error' : ''} mt-1 input input-bordered w-full max-w-xs" value={form?.companyName ?? companyName}/>
				</div>

				<div class="mt-4">
					<label for="website" >
						<span class="text-l text-center">Company Website</span>
					</label>
					<input id="website" name="website" type="text" placeholder="Company website" class="{fieldError(form, 'website') ? 'input-error' : ''} mt-1 input input-bordered w-full max-w-xs" value={form?.website ?? website}/>
				</div>

				{#if form?.errorMessage}
					<p class="text-red-700 text-sm font-bold text-center mt-3">
						{form?.errorMessage} 
					</p>
				{/if}
				<div class="mt-4 {!showSuccess ? '' : 'hidden'}">
					<input
						type="submit"
						class="btn btn-primary mt-3 btn-wide"
						value={loading ? "..." : "Save Profile"}
						disabled={loading}
					/>
				</div>
				<div class="mt-4 {showSuccess ? '' : 'hidden'}">
					<input
						type="submit"
						class="btn btn-success mt-3 btn-wide"
						value="Saved!"
					/>
				</div>
			</form>
		</div>
    </div>
</div>