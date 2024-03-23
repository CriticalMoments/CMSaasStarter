<script lang="ts">
	import { Auth } from "@supabase/auth-ui-svelte";
	import { sharedAppearance, oauthProviders } from "../login_config";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Button from "$lib/components/ui/button/button.svelte";

	export let data;
	let { supabase } = data;

	onMount(() => {
		supabase.auth.onAuthStateChange((event) => {
			// Redirect to account after sucessful login
			if (event == "SIGNED_IN") {
				// Delay needed because order of callback not guaranteed.
				// Give the layout callback priority to update state or
				// we'll just bounch back to login when /account tries to load
				setTimeout(() => {
					goto("/account");
				}, 1);
			}
		});
	});

	const handleSignIn = async () => {
		console.log("Sign in with Google", location.origin);
		await supabase.auth
			.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: `${data.url}/auth/callback`,
					queryParams: {
						access_type: "offline",
						prompt: "consent",
					},
				},
			})
			.catch((err) => {
				console.log("Login error", err);
				throw err;
			});
	};
</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

{#if $page.url.searchParams.get("verified") == "true"}
	<div role="alert" class="alert alert-success mb-5">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>Email verified! Please sign in.</span>
	</div>
{/if}
<h1 class="mb-6 text-2xl font-bold">Sign In</h1>

<Button
	variant="default"
	type="button"
	class="flex items-center justify-center"
	on:click={handleSignIn}
	>New Google Signin
</Button>
<Auth
	supabaseClient={data.supabase}
	view="sign_in"
	redirectTo={`${data.url}/auth/callback`}
	providers={oauthProviders}
	socialLayout="horizontal"
	showLinks={false}
	appearance={sharedAppearance}
	additionalData={undefined}
/>
<div class="text-l mt-3 text-slate-800">
	Don't have an account? <a class="underline" href="/login/sign_up">Sign up</a
	>.
</div>
<!-- redirectTo={`https://jsnmvywebfzrolwnzyax.supabase.co/auth/v1/callback`} -->
