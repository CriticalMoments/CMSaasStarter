<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()
  let { session } = data
</script>

<svelte:head>
  <title>Delete Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  title="Delete Account"
  editable={true}
  dangerous={true}
  message="Deleting your account can not be undone. You are currently logged in as '{session
    ?.user?.email}'"
  saveButtonTitle="Delete Account"
  successTitle="Account queued for deletion"
  successBody="Your account will be deleted shortly."
  formTarget="/account/api?/deleteAccount"
  fields={[
    {
      id: "currentPassword",
      label: "Current Password",
      initialValue: "",
      inputType: "password",
    },
  ]}
/>
