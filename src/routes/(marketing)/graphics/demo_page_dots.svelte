<script lang="ts">
  import { fade } from "svelte/transition"
  export let count = 5
  export let index = 0
</script>

<div class="flex flex-row gap-x-3 md:gap-x-2 place-content-center">
  {#each Array(count) as _, i}
    <button
      class="w-7 h-7 md:w-4 md:h-4 rounded-full border-2 border-slate-600 {index ===
      i
        ? 'bg-[#A1CE8C]'
        : ''}"
      style="transition: background-color 300ms linear;"
      aria-label="Step {i + 1}"
      on:click={() => {
        index = i
      }}
    ></button>
  {/each}
</div>
