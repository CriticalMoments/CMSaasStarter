<script lang="ts">
	import SettingsModule from "../settings_module.svelte";
	import { getContext } from "svelte";
	import type { Writable } from "svelte/store";

	let adminSection: Writable<string> = getContext("adminSection");
	adminSection.set("settings");

	export let data;

	let { profile } = data;
</script>

<svelte:head>
	<title>Edit Profile</title>
</svelte:head>

<h1 class="mb-6 text-2xl font-bold">Settings</h1>

<SettingsModule
	editable={true}
	title="Edit Profile"
	successTitle="Saved Profile"
	formTarget="/account/api?/updateProfile"
	fields={[
		{
			id: "fullName",
			label: "Name",
			initialValue: profile?.full_name ?? "",
			placeholder: "John Doe",
			maxlength: 50,
		},
		{
			id: "companyName",
			label: "Company Name",
			initialValue: profile?.company_name ?? "",
			placeholder: "Doe Ltd.",
			maxlength: 50,
		},
		{
			id: "website",
			label: "Company Website",
			initialValue: profile?.website ?? "",
			placeholder: "you@example.com",
			maxlength: 50,
		},
	]}
/>
