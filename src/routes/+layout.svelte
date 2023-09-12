<script lang="ts">
  import "../app.css"
  import { afterNavigate, beforeNavigate } from "$app/navigation"
  import { quintOut } from "svelte/easing"
  import { slide } from "svelte/transition"

  let navigating = false
  beforeNavigate((_navigation) => {
    navigating = true
  })
  afterNavigate((_navigation) => {
    navigating = false
  })
</script>

{#if navigating}
  <!-- 
    Loading animation for next page since svelte doesn't show any indicator. 
     - delay 100 because most page loads are instant, and we don't want to flash 
     - long duration because we don't actually know how long it will take
     - quint easing so fast loads (>100ms and <1s) still see lots of progress
       while slow networks see it moving for the full 6 seconds
  -->
  <div
    class="fixed w-full top-0 right-0 left-0 h-1 z-50"
    in:slide={{ delay: 100, duration: 6000, axis: "x", easing: quintOut }}
  >
    <div class="h-1 bg-primary w-full" />
  </div>
{/if}
<slot />
