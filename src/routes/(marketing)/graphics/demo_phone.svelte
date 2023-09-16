<script lang="ts">
  import { slide, scale } from "svelte/transition"

  export let title = ""
  export let buttonColor = "bg-[#A1CE8C]"
  export let buttonLabel = ""
  export let buttonSize = "text-xl"
</script>

<div class="rounded-t-3xl bg-device-color flex flex-col p-2 w-48 h-72">
  {#if title}
    <div class="font-system text-center text-xl font-bold pt-6">{title}</div>
  {/if}
  <div class="grow flex flex-col gap-y-3 place-content-center">
    {#each Array(4) as _, index}
      <div class="h-1.5 mx-8 bg-device-faux-content"></div>
    {/each}
  </div>
  {#if buttonColor}
    <div
      class="rounded-xl {buttonColor} mx-6 h-8 mb-5 text-center text-white font-bold"
    >
      {#key buttonLabel}
        <div class="leading-8 {buttonSize}" in:scale>
          {buttonLabel}
        </div>
      {/key}
    </div>
  {/if}
</div>
