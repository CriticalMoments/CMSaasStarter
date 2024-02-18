<script lang="ts">
  import SettingsModule from "../settings_module.svelte"
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  export let data

  let { session } = data
</script>

<svelte:head>
  <title>Change Email</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  title="Change Email"
  editable={true}
  successTitle="Email change initiated"
  successBody="You should recieve emails at both the old and new address to confirm the change. Please click the link in both emails to finalized the change. Until finalized, you must sign in with your current email."
  formTarget="/account/api?/updateEmail"
  fields={[
    {
      id: "email",
      label: "Email",
      initialValue: session?.user?.email ?? "",
      placeholder: "Email address",
    },
  ]}
/>
