<script lang="ts">
  import { scale } from "svelte/transition"

  export let title = ""
  export let buttonColor = "bg-[#A1CE8C]"
  export let buttonLabel = ""
  export let buttonSize = "text-xl"
</script>

<div
  class="rounded-t-3xl lg:rounded-3xl bg-device-color flex flex-col p-2 w-[186px] lg:h-80"
>
  {#if title}
    <div
      class="font-system text-center text-xl font-bold pt-6 min-h-[92px] flex place-content-center"
    >
      <div class="self-center">
        {title}
      </div>
    </div>
  {/if}
  <div class="grow flex flex-col gap-y-3 mb-6 place-content-center">
    {#each Array(4) as _, index}
      <div class="h-1.5 mx-8 bg-device-faux-content"></div>
    {/each}
  </div>
  {#if buttonColor}
    <div
      class="rounded-xl {buttonColor} mx-6 h-8 mb-5 text-center text-white font-bold"
    >
      {#key buttonLabel}
        <div
          class="leading-8 {buttonSize}"
          in:scale={{ start: buttonSize != "text-base" ? 3.0 : 1.0 }}
          style="text-shadow: rgb(0,0,0,0.2) 0px 0px 2px;"
        >
          {buttonLabel}
        </div>
      {/key}
    </div>
  {/if}
</div>
