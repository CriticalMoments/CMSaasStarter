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
		variables: {
			default: {
				colors: {
					brand: 'hsl(var(--p))',
					brandAccent: 'hsl(var(--pf))',
					inputText: 'hsl(var(--n))',
					brandButtonText: 'hsl(var(--pc))',
					messageText: 'hsl(var(--b))',
					dividerBackground: 'hsl(var(--n))',
					inputLabelText: 'hsl(var(--n))',
					defaultButtonText: 'hsl(var(--n))',
					anchorTextColor: 'hsl(var(--nc))',
				},
			},
        },
		className: {
			button: 'btn'
		}
	}
	let oauthProviders = ['github'] as Provider[]

	let currentSection = "choose_flow"

	function showSignUp() {
		currentSection = "sign_up"
	}
	function showSignIn() {
		currentSection = "sign_in"
	}
	function showForgotPassword() {
		currentSection = "forgot_password"
	}
</script>

<svelte:head>
	<title>Sign up / Sign in</title>
</svelte:head>

<div class="text-center content-center max-w-lg mx-auto min-h-[70vh] mb-12 flex items-center place-content-center">
	<div class="flex flex-col {currentSection == "choose_flow" ? '' : 'hidden'}">
		<h1 class="text-xl font-bold">Get Started</h1>
		<button class="btn btn-primary mt-3 btn-wide" on:click={showSignUp}>Sign Up</button>
		<h1 class="text-xl mt-6">Already have an account?</h1>
		<button class="btn btn-outline btn-primary mt-3 btn-wide" on:click={showSignIn}>Sign In</button>
	</div>
	<div class="flex flex-col w-64 lg:w-80 {currentSection == "sign_up" ? '' : 'hidden'}">
		<h1 class="text-2xl font-bold mb-6">Sign Up</h1>
		<Auth
			supabaseClient={data.supabase}
			view="sign_up"
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			providers={oauthProviders}
			socialLayout='horizontal'
			appearance={sharedAppearance}
			additionalData={undefined}
		/>
		<div class="text-l text-slate-800 mt-4 mb-2">Have an account? <a class="underline" on:click={showSignIn}>Sign in</a>.</div>
	</div>
	<div class="flex flex-col w-64 lg:w-80 {currentSection == "sign_in" ? '' : 'hidden'}">
		<h1 class="text-2xl font-bold mb-6">Sign In</h1>
		<Auth
			supabaseClient={data.supabase}
			view="sign_in"
			redirectTo={`${data.url}/auth/callback`}
			providers={oauthProviders}
			socialLayout='horizontal'
			showLinks={false}
			appearance={sharedAppearance}
			additionalData={undefined}
		/>
		<div class="text-l text-slate-800 mt-4"><a class="underline" on:click={showForgotPassword}>Forgot password?</a></div>
		<div class="text-l text-slate-800 mt-3">Don't have an account? <a class="underline" on:click={showSignUp}>Sign up</a>.</div>
	</div>
	<div class="flex flex-col w-64 lg:w-80 {currentSection == "forgot_password" ? '' : 'hidden'}">
		<h1 class="text-2xl font-bold mb-6">Forgot Password</h1>
		<Auth
			supabaseClient={data.supabase}
			view="forgotten_password"
			redirectTo={`${data.url}/auth/callback`}
			providers={oauthProviders}
			socialLayout='horizontal'
			showLinks={false}
			appearance={sharedAppearance}
			additionalData={undefined}
		/>
		<div class="text-l text-slate-800 mt-4">Remember your password? <a class="underline" on:click={showSignIn}>Sign in</a>.</div>
	</div>
</div>
