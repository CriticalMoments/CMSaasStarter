<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "./settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  export let data
  let { session, profile } = data

  const settingsModules = [
    {
      title: "Profile",
      fields: [
        {
          id: "fullName",
          label: "Name",
          initialValue: profile?.full_name ?? "",
        },
        {
          id: "companyName",
          label: "Company Name",
          initialValue: profile?.company_name ?? "",
        },
        {
          id: "website",
          label: "Company Website",
          initialValue: profile?.website ?? "",
        },
      ],
      editButtonTitle: "Edit Profile",
      editLink: "/account/settings/edit_profile",
    },
    {
      title: "Email",
      fields: [{ id: "email", initialValue: session?.user?.email || "" }],
      editButtonTitle: "Change Email",
      editLink: "/account/settings/change_email",
    },
    {
      title: "Password",
      fields: [{ id: "password", initialValue: "••••••••••••••••" }],
      editButtonTitle: "Change Password",
      editLink: "/account/settings/change_password",
    },
    {
      title: "Email Subscription",
      fields: [
        {
          id: "subscriptionStatus",
          initialValue: profile?.unsubscribed ? "Unsubscribed" : "Subscribed",
        },
      ],
      editButtonTitle: "Change Subscription",
      editLink: "/account/settings/change_email_subscription",
    },
    {
      title: "Danger Zone",
      fields: [],
      editButtonTitle: "Delete Account",
      editLink: "/account/settings/delete_account",
      dangerous: true,
    },
  ]
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

{#each settingsModules as module}
  <SettingsModule
    title={module.title}
    editable={false}
    fields={module.fields}
    editButtonTitle={module.editButtonTitle}
    editLink={module.editLink}
    dangerous={module.dangerous}
  />
{/each}
