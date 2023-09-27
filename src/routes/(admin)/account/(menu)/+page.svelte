<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "./settings/settings_module.svelte"
  import { fade } from "svelte/transition"

  let adminSection: Writable<String> = getContext("adminSection")
  adminSection.set("home")

  export let data

  let copied = false

  function copyApiKey() {
    navigator.clipboard.writeText(data.app?.api_key ?? "").then(
      () => {
        copied = true
        setTimeout(() => {
          copied = false
        }, 1200)
      },
      () => {
        alert("Copy not allowed by browser. Please copy the API key manually.")
      },
    )
  }
</script>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>

{#if data.app}
  <div class="card card-bordered p-6 pb-7 mt-8 max-w-xl flex flex-col shadow">
    <div class="text-xl font-bold mb-3 w-48 flex-none mb-6">App Details</div>
    <div>
      <div class="text-sm text-gray-500">App Name</div>
      <div class="text-lg mb-5 mt-1">{data.app.app_name}</div>
    </div>
    <div>
      <div class="text-sm text-gray-500">Bundle ID</div>
      <div class="text-lg mb-5 mt-1">{data.app.bundle_id}</div>
    </div>
    <div>
      <div class="text-sm text-gray-500">API Key</div>
      <div class="relative w-full mt-1">
        <input
          id="apiKeyInput"
          type="text"
          class="input input-bordered w-full"
          disabled
          value={data.app.api_key}
        />
        {#key copied}
          <button
            class="bg-base-100 rounded border border-gray-700 px-3 absolute right-1 top-1 bottom-1 uppercase font-bold text-sm {copied
              ? 'text-success'
              : ''}"
            on:click={copyApiKey}
            out:fade>{copied ? "Copied to clipboard" : "Copy"}</button
          >
        {/key}
      </div>
    </div>
    <a
      href="https://docs.criticalmoments.io/get-started"
      target="_blank"
      class="btn btn-primary btn-outline mt-8">Integration Guide</a
    >
  </div>
{:else}
  <SettingsModule
    data={{}}
    editable={true}
    title="Get Started"
    message="Register your app to generate an API key."
    saveButtonTitle="Next"
    formTarget="/account/api?/createApiKey"
    reloadOnSuccess={true}
    fields={[
      {
        id: "appName",
        label: "App Name",
        initialValue: "",
      },
      {
        id: "appstoreUrl",
        label: "App Store URL",
        initialValue: "",
        tooltip: "Optional if app is pre-release",
      },
      {
        id: "bundleId",
        label: "App Bundle ID",
        initialValue: "",
        autocomplete: "off",
        tooltip:
          "Important: this must match your app's Bundle ID or your API Key will not work",
      },
    ]}
  />
{/if}
