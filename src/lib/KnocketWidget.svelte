<script lang="ts">
  // Knocket — free live chat widget (https://trtc.io/solutions/knocket)
  // Opt-in: renders only when PUBLIC_KNOCKET_ID is set. Disabled by default.
  // Get your ID at https://trtc.io/solutions/knocket
  import { env } from "$env/dynamic/public"

  const knocketId = env.PUBLIC_KNOCKET_ID
</script>

<svelte:head>
  {#if knocketId}
    <script
      src={`https://trtc.io/knocket-sdk/sdk.js?identifier=${knocketId}`}
      async
    ></script>
  {/if}
</svelte:head>
