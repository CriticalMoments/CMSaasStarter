<script lang="ts">
  import SettingsModule from "../settings_module.svelte"
  export let data
  let { profile } = data
  let unsubscribed = profile?.unsubscribed
</script>

<svelte:head>
  <title>Change Email Subscription</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">
  {unsubscribed ? "Re-subscribe to Emails" : "Unsubscribe from Emails"}
</h1>

<SettingsModule
  editable={true}
  saveButtonTitle={unsubscribed
    ? "Re-subscribe"
    : "Unsubscribe from all emails"}
  successBody={unsubscribed
    ? "You have been re-subscribed to emails"
    : "You have been unsubscribed from all emails"}
  formTarget="/account/api?/toggleEmailSubscription"
  fields={[]}
/>
