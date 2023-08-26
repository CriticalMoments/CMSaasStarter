<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
	import { getContext } from 'svelte'
	import type { Writable } from 'svelte/store';

	let adminSection: Writable<String> = getContext('adminSection');
	adminSection.set('home')

	export let data
	export let form

	let { session, supabase, profile } = data
	$: ({ session, supabase, profile } = data)

	let profileForm: HTMLFormElement
	let loading = false
	let fullName: string = profile?.full_name ?? ''
	let companyName: string = profile?.company_name ?? ''
	let website: string = profile?.website ?? ''

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			update()
			loading = false
		}
	}
</script>

<div class="form-widget">
	<form
		class="form-widget"
		method="post"
		action="/account/api?/updateProfile"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>
		<div>
			<label for="email">Email</label>
			<input id="email" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<label for="fullName">Full Name</label>
			<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
		</div>

		<div>
			<label for="companyName">Company Name</label>
			<input id="companyName" name="companyName" type="text" value={form?.companyName ?? companyName} />
		</div>

		<div>
			<label for="website">Company Website</label>
			<input id="website" name="website" type="url" value={form?.website ?? website} />
		</div>

		<div>
			<input
				type="submit"
				class="button block primary"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>
	</form>

	<a href="/account/sign_out">Sign Out</a>
</div>