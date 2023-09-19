<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<String> = getContext("adminSection")
  adminSection.set("home")
</script>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>
<div class="alert alert-success max-w-lg my-16">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="stroke-current shrink-0 w-6 h-6"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path></svg
  >
  <div>
    <div class="font-bold">Coming Soon</div>
    <div class="my-2">Thanks for signing up!</div>
    <div class="my-2">
      Critical Moments is under development and is coming soon.
    </div>
    <div class="my-2">We will reach out when the V1 is ready.</div>
  </div>
</div>
