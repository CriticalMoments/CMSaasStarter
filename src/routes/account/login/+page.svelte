<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
    import type { Provider } from '@supabase/supabase-js';

	export let data

	let { supabase } = data

	onMount(() => {
		supabase.auth.onAuthStateChange((event, _session) => {
			// Redirect to account after sucessful login
            if (event == "SIGNED_IN") {
                // Delay needed because order of callback not guaranteed.
                // Give the layout callback priority to update state or
                // we'll just bounch back to login when /account tries to load
                function goToAccount() {
                    goto('/account')
                }
                setTimeout(goToAccount, 1)
            }
		})
	})

	let sharedAppearance = {
		theme: ThemeSupa,
		style: {
			input: 'color: #555'
		}
	}
	let oauthProviders = ['github'] as Provider[]
</script>

<svelte:head>
	<title>Sign up / Sign in</title>
</svelte:head>

<h1>Sign In</h1>
<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<Auth
			supabaseClient={data.supabase}
			view="sign_in"
			redirectTo={`${data.url}/auth/callback`}
            providers={oauthProviders}
			showLinks={false}
			appearance={sharedAppearance}
			additionalData={undefined}
		/>
	</div>
</div>

<h1>Sign Up</h1>
<div class="row flex-center flex">
	<div class="col-6 form-widget">
		<Auth
			supabaseClient={data.supabase}
			view="sign_up"
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
            providers={oauthProviders}
			appearance={sharedAppearance}
			additionalData={undefined}
		/>
	</div>
</div>