<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  export let data

  let { profile } = data
</script>

<svelte:head>
  <title>Edit Newsletter</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  editable={true}
  title="Edit Newsletter Preferences"
  successTitle="Saved Newsletter Preferences"
  formTarget="/account/api?/updateNewsletterSubscription"
  fields={[
    {
      id: "newsletter_checkbox",
      label: "Newsletter subscription",
      initialValue: Boolean(profile?.newsletter_agreed_at),
      inputType: "checkbox",
    },
  ]}
/>
