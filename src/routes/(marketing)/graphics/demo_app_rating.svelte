<script lang="ts">
  import { scale } from "svelte/transition"

  export let rating = 5
</script>

<div class="rounded-3xl bg-device-color flex flex-col w-48 h-32">
  <div
    class="w-48 h-24 text-xl flex flex-row place-content-center items-center gap-x-1 border-b-2 border-device-faux-content"
  >
    {#each Array(5) as _, i}
      {#if i + 1 <= rating}
        <div class="inline" in:scale={{ start: 8.0 }}>★</div>
      {:else}
        <div class="inline">☆</div>
      {/if}
    {/each}
  </div>
  <div class="mx-auto w-[2px] h-8 bg-device-faux-content"></div>
</div>
