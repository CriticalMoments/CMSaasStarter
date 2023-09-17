<script lang="ts">
  import DemoCode from "./demo_code.svelte"
  import DemoPhone from "./demo_phone.svelte"
  import DemoPageDots from "./demo_page_dots.svelte"
  import DemoSwipeCover from "./demo_swipe_cover.svelte"
  import { fly } from "svelte/transition"

  let steps = [
    {
      label: "Update Required",
      code: "// Major bug in specific\n// app version\napp_version == '3.2.1'\n\n// Very old app\napp_version < '2.0'",
    },
    {
      label: "We'll be right back!",
      code: "// Scheduled Maintance\nnow() > parseDate(...) &&\nnow() < parseDate(...)\n\n// Outage\ntrue",
    },
    {
      label: "OS Out of Date",
      code: "// Old OS\nos_version < '14.1'\n\n// OS with major bug\nos_version == '16.2.4'",
    },
    {
      label: "Issue with Dark Mode on iPad…",
      code: "// Precise targeting\ndevice_class == 'pad' &&\ndark_mode == true &&\napp_version < '3.2.1' &&\ncurrency_code == 'JPY' &&\nlow_data_mode &&\nnetwork_type == 'cellular'\nhas_watch && ...",
    },
  ]
  let phoneTitle: string
  let pageIndex: number = 0
  let direction: string
  let lastIndex = 0
  let lastAutoIndex: number = 0
  let code: string = ""
  let swipedLeft = false
  let swipedRight = false
  let interval: NodeJS.Timeout

  $: {
    // update index for scroll events
    if (swipedLeft) {
      direction = "left"
      pageIndex = (pageIndex - 1 + steps.length) % steps.length
      clearInterval(interval)
    }
    if (swipedRight) {
      direction = "right"
      pageIndex = (pageIndex + 1) % steps.length
      clearInterval(interval)
    }

    // determine direction for animation
    if (lastIndex != pageIndex) {
      if (!swipedLeft && !swipedRight) {
        // special case for swiping: should follow finger even if wrapping 4 -> 0
        direction = lastIndex < pageIndex ? "right" : "left"
      }
      lastIndex = pageIndex
    }

    // update content for index
    phoneTitle = steps[pageIndex].label
    code = steps[pageIndex].code
  }

  import { onMount, onDestroy } from "svelte"

  onMount(() => {
    interval = setInterval(() => {
      if (pageIndex != lastAutoIndex) {
        // User has starter interacting, stop animating
        clearInterval(interval)
        return
      }
      lastAutoIndex = (pageIndex + 1) % steps.length
      pageIndex = lastAutoIndex
    }, 6000)
  })

  onDestroy(() => {
    clearInterval(interval)
  })
</script>

<div class="pt-6 w-full h-full relative">
  {#key pageIndex}
    <span
      in:fly={{ x: direction == "right" ? 150.0 : -150.0 }}
      class="absolute top-6 bottom-0 right-0 left-0"
    >
      <span class="absolute right-0">
        <DemoCode bind:code />
      </span>
      <span class="absolute bottom-0 lg:bottom-7">
        <DemoPhone bind:title={phoneTitle} />
      </span>
    </span>
  {/key}
  <span class="absolute left-48 bottom-6 right-0 lg:left-0 lg:bottom-0">
    <DemoPageDots bind:index={pageIndex} count={steps.length} />
  </span>
  <span class="absolute top-0 bottom-12 right-0 left-0">
    <DemoSwipeCover bind:swipedLeft bind:swipedRight />
  </span>
</div>
