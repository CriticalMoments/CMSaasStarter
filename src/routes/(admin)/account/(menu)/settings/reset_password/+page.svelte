<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")
</script>

<svelte:head>
  <title>Reset Password</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  title="Reset Password"
  editable={true}
  saveButtonTitle="Reset Password"
  successTitle="Password Changed"
  successBody="On next sign in, use your new password."
  formTarget="/account/api?/updatePassword"
  fields={[
    {
      id: "newPassword1",
      label: "New Password",
      initialValue: "",
      inputType: "password",
    },
    {
      id: "newPassword2",
      label: "Confirm New Password",
      initialValue: "",
      inputType: "password",
    },
  ]}
/>
