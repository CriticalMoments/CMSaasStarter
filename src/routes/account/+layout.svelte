<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<div class="text-center content-center max-w-lg mx-auto min-h-[70vh] mb-12 flex items-center place-content-center">
	<div class="flex flex-col w-64 lg:w-80">
        <slot />
    </div>
</div>