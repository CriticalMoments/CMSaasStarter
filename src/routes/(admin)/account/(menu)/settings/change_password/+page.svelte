<script lang="ts">
  import { page } from "$app/stores"
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<String> = getContext("adminSection")
  adminSection.set("settings")

  export let data
  let { session, supabase } = data

  let hasPassword = session?.user?.amr?.find((x) => x.method === "password")
    ? true
    : false

  let sendBtn: HTMLButtonElement
  let sentEmail = false
  let sendForgotPassword = () => {
    sendBtn.disabled = true
    sendBtn.textContent = "Sending..."
    let email = session?.user.email
    if (email) {
      supabase.auth
        .resetPasswordForEmail(email, {
          redirectTo: `${$page.url.origin}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`,
        })
        .then((d) => {
          sentEmail = d.error ? false : true
        })
    }
  }
</script>

<svelte:head>
  <title>Change Password</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

{#if hasPassword}
  <SettingsModule
    {data}
    title="Change Password"
    editable={true}
    saveButtonTitle="Change Password"
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
      {
        id: "currentPassword",
        label: "Current Password",
        initialValue: "",
        inputType: "password",
      },
    ]}
  />
{:else}
  <div class="alert max-w-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      /></svg
    >
    <div class="flex flex-col gap-y-4">
      <div class="font-bold">
        You currently do not use a password to log in.
      </div>
      <div>
        You use oAuth ("Sign in with Github" or similar). You can continue to
        use your account using only oAuth if you like!
      </div>
      <div>
        If you'd like to set a password to compliment your oAuth login, click
        the button below. It will send you an email at {session?.user?.email} which
        will allow you to set a password.
      </div>
      <button
        class="btn btn-outline btn-wide {sentEmail ? 'hidden' : ''}"
        bind:this={sendBtn}
        on:click={sendForgotPassword}
        >Send Set Password Email
      </button>
      <div class="success alert alert-success {sentEmail ? '' : 'hidden'}">
        Sent email! Please check your inbox and use the link to set your
        password.
      </div>
    </div>
  </div>
{/if}
