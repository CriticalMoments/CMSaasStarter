<script lang="ts">
  export let swipedLeft = false
  export let swipedRight = false

  let scroller: HTMLElement

  let resetPosition = () => {
    if (scroller.scrollLeft != scroller.offsetWidth) {
      scroller.scrollLeft = scroller.offsetWidth
    }
  }

  let scrolled = () => {
    let left = scroller.scrollLeft
    let size = scroller.offsetWidth
    // 0.25 makes it respond faster. As soon as it crosses threshold
    if (left > 2 * size - size * 0.25) {
      swipedRight = true
    }
    if (left < size * 0.25) {
      swipedLeft = true
    }

    if (swipedRight || swipedLeft) {
      // reset and ignore for next half second
      resetPosition()
      setTimeout(() => {
        swipedLeft = false
        swipedRight = false
      }, 500)
    }
  }

  import { onMount } from "svelte"
  onMount(() => {
    resetPosition()
  })
</script>

<div
  class="flex flex-row flex-nowrap relative h-full invisible-scrollbar"
  style="
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: 
  x mandatory;
  scroll-snap-points-x: 
  scroll-behavior: smooth;
  scrollbar-width: none;
  scrollbar-height: none;
  -webkit-overflow-scrolling: touch;"
  on:scroll={scrolled}
  bind:this={scroller}
>
  {#each Array(3) as _, i}
    <div
      class="h-[100%] w-[100%] flex-none"
      style="scroll-snap-align: start;"
    ></div>
  {/each}
</div>

<style>
  .invisible-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
