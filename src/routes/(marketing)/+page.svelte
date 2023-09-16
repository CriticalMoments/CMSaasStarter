<script lang="ts">
  import BarsComponent from "../bars_component.svelte"
  import DemoIncreaseConversion from "./graphics/demo_increase_conversion.svelte"
  import DemoIncreaseRating from "./graphics/demo_increase_rating.svelte"
  import DemoKillBugs from "./graphics/demo_kill_bugs.svelte"
  import DemoFlagList from "./graphics/demo_flag_list.svelte"

  const sections = [
    {
      title: "Increase Conversions",
      description:
        "Showing your upsell prompt at the right moment can increase conversion by 72%",
      background: "",
    },
    {
      title: "Improve App Ratings",
      description:
        "Showing your rating prompt at the right moment increases both the rating and number of ratings",
      background: "bg-[#F9AE40]",
    },
    {
      title: "Make Bugs Disappear",
      description:
        "Shit happens. Major Bugs. Outages. Dependencies break. Deprications. Announcements.\nTarget only the impacted users and resolve remotely without waiting for app updates.",
      background: "bg-[#E3543F]",
    },
    {
      title: "Smarter Feature Flags",
      description:
        "Super charge your feature flags, targeting over 30 live device conditions from app version to current battery level.\nUpdate any time from the cloud.",
      background: "",
    },
  ]

  const leads = [
    "Increase Conversion",
    "Improve App Ratings",
    "Make Bugs Disappear",
  ]
  let leadIndex = 0

  import { onMount, onDestroy } from "svelte"
  import { fade } from "svelte/transition"

  let interval: NodeJS.Timeout
  onMount(() => {
    interval = setInterval(() => {
      leadIndex = (leadIndex + 1) % leads.length
    }, 8000)
  })

  onDestroy(() => {
    clearInterval(interval)
  })
</script>

<svelte:head>
  <title>Critical Moments</title>
  <meta
    name="description"
    content="Critical moments improves mobile app conversions and increases your app rating"
  />
</svelte:head>

<div class="min-h-[80vh] flex flex-col">
  <div
    class="md:container mx-auto flex-grow flex flex-col md:flex-row p-edge md:items-end pb-8 gap-x-24 gap-y-8 place-content-end md:place-content-center"
  >
    <div class="logoType text-4xl stdphone:text-5xl md:text-6xl xl:text-7xl">
      Critical<br />Moments
    </div>
    <div
      class="text-xl stdphone:text-2xl md:text-4xl md:min-w-[420px] lg:text-5xl lg:min-w-[560px] whitespace-nowrap"
      style="line-height:1.1;"
    >
      Target the right users<br />
      at the right moment <br />
      to
      {#key leadIndex}
        <span class="font-bold text-transparent bg-clip-text retroFill" in:fade>
          {leads[leadIndex]}
        </span>
      {/key}
    </div>
  </div>
  <BarsComponent />
</div>

{#each sections as section, i}
  <div class="hero {section.background}">
    <div class="flex flex-col md:flex-row gap-x-24 p-edge {section.background}">
      <div
        class="flex-1 text-center md:text-left max-w-xl self-center pt-12 pb-6 md:py-12"
      >
        <div class="font-header text-2xl stdphone:text-3xl md:text-4xl py-4">
          {section.title}
        </div>
        {#each section.description.split("\n") as descriptionPart}
          <div class="text-lg stdphone:text-xl md:text-2xl py-3">
            {descriptionPart}
          </div>
        {/each}
      </div>
      <div
        class="w-[252px] h-[240px] stdphone:w-[294px] stdphone:h-[280px] md:w-[420px] md:h-[400px] self-center"
      >
        <div
          class="scale-[0.6] stdphone:scale-[0.7] md:transform-none w-[420px] h-[400px]"
          style="transform-origin: top left;"
        >
          {#if i === 0}
            <DemoIncreaseConversion />
          {:else if i === 1}
            <DemoIncreaseRating />
          {:else if i === 2}
            <DemoKillBugs />
          {:else if i === 3}
            <DemoFlagList />
          {/if}
        </div>
      </div>
    </div>
  </div>
{/each}
