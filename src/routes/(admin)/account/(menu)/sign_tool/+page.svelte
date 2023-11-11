<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SignConfigModule from "../../../../(marketing)/sign_config/sign_config_module.svelte"

  let adminSection: Writable<String> = getContext("adminSection")
  adminSection.set("sign_config")

  export let data
  let { session, profile } = data
</script>

<svelte:head>
  <title>Signing Tool</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-12">Signing Tool</h1>

<SignConfigModule centerContent={false} />
