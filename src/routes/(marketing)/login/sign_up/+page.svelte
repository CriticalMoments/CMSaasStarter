<script lang="ts">
	import { Auth } from "@supabase/auth-ui-svelte";
	import { sharedAppearance, oauthProviders } from "../login_config";

	export let data;
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<h1 class="mb-6 text-2xl font-bold">Sign Up</h1>
<Auth
	supabaseClient={data.supabase}
	view="sign_up"
	redirectTo={`${data.url}/auth/callback`}
	showLinks={false}
	providers={oauthProviders}
	socialLayout="horizontal"
	appearance={sharedAppearance}
	additionalData={undefined}
/>
<div class="text-l mb-2 mt-4 text-slate-800">
	Have an account? <a class="underline" href="/login/sign_in">Sign in</a>.
</div>
