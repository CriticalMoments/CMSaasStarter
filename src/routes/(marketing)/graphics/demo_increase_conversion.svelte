<script lang="ts">
  import DemoCode from "./demo_code.svelte"
  import DemoPhone from "./demo_phone.svelte"
  import DemoPageDots from "./demo_page_dots.svelte"

  let steps = [
    {
      label: "+3%",
      code: "app_launches > 6",
      size: "text-xl",
    },
    {
      label: "+12%",
      code: "app_launches > 6 &&\nkey_feature_use > 5",
      size: "text-xl",
    },
    {
      label: "+33%",
      code: "app_launches > 6 &&\nkey_feature_use > 5 &&\ninstall_date < now - 5d &&\nuser_distraction == low",
      size: "text-xl",
    },
    {
      label: "+72%",
      code: "app_launches > 6 &&\nkey_feature_use > 5 &&\ninstall_date < now - 5d &&\nuser_distraction == low &&\nbattery > 10% &&\nhas_wifi",
      size: "text-2xl",
    },
  ]
  let phoneButtonLabel: string
  let phoneButtonSize: string
  let pageIndex: number = 0
  let lastSetIndex: number = 0
  let code: string = ""

  $: {
    phoneButtonLabel = steps[pageIndex].label
    phoneButtonSize = steps[pageIndex].size
    code = steps[pageIndex].code
  }

  import { onMount, onDestroy } from "svelte"

  let interval: NodeJS.Timeout
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
  <span class="absolute right-0">
    <DemoCode bind:code />
  </span>
  <span class="absolute bottom-0">
    <DemoPhone
      title="Try Pro!"
      bind:buttonLabel={phoneButtonLabel}
      bind:buttonSize={phoneButtonSize}
    />
  </span>
  <span class="absolute left-48 bottom-6 right-0">
    <DemoPageDots bind:index={pageIndex} count={steps.length} />
  </span>
</div>
