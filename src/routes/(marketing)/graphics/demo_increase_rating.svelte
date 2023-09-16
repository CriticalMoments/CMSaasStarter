<script lang="ts">
  import DemoAppRating from "./demo_app_rating.svelte"
  import DemoCode from "./demo_code.svelte"
  import DemoPageDots from "./demo_page_dots.svelte"
  import DemoSwipeCover from "./demo_swipe_cover.svelte"

  let steps = [
    {
      rating: 3,
      code: "app_launches > 6",
    },
    {
      rating: 4,
      code: "after: key_feature_event\n\ncount(key_feature_use) > 5",
    },
    {
      rating: 5,
      code: "after: key_feature_event\n\nkey_feature.count > 5 &&\nuser_distraction == low &&\nbattery > 20%",
    },
  ]

  let appRating: number = 2
  let pageIndex: number = 0
  let lastSetIndex: number = 0
  let code: string = ""
  let swipedLeft = false
  let swipedRight = false
  let interval: NodeJS.Timeout

  $: {
    // update index for scroll events
    if (swipedLeft) {
      pageIndex = (pageIndex - 1 + steps.length) % steps.length
      clearInterval(interval)
    }
    if (swipedRight) {
      pageIndex = (pageIndex + 1) % steps.length
      clearInterval(interval)
    }
    // Update content for index
    appRating = steps[pageIndex].rating
    code = steps[pageIndex].code
  }

  import { onMount, onDestroy } from "svelte"

  onMount(() => {
    interval = setInterval(() => {
      if (pageIndex != lastSetIndex) {
        // User has starter interacting, stop animating
        clearInterval(interval)
        return
      }
      lastSetIndex = (pageIndex + 1) % steps.length
      pageIndex = lastSetIndex
    }, 4000)
  })

  onDestroy(() => {
    clearInterval(interval)
  })
</script>

<div class="pt-6 w-full h-full relative">
  <span class="absolute right-0 top-12">
    <DemoCode bind:code />
  </span>
  <span class="absolute bottom-0 top-44">
    <DemoAppRating bind:rating={appRating} />
  </span>
  <span class="absolute left-48 bottom-12 right-0">
    <DemoPageDots bind:index={pageIndex} count={steps.length} />
  </span>
  <span class="absolute top-0 bottom-20 right-0 left-0">
    <DemoSwipeCover bind:swipedLeft bind:swipedRight />
  </span>
</div>
