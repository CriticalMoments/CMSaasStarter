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
    class="lg:container mx-auto flex-grow flex flex-col lg:flex-row p-edge lg:items-end pb-8 gap-x-24 gap-y-8 place-content-end lg:place-content-center"
  >
    <div
      class="logoType text-4xl stdphone:text-5xl lg:text-6xl xl:text-7xl lg:pb-1.5 xl:pb-2.5"
    >
      Critical<br />Moments
    </div>
    <div
      class="text-xl stdphone:text-2xl md:text-4xl xl:text-5xl whitespace-nowrap"
    >
      <div class="header-line-height">Target the right users</div>
      <div class="header-line-height">at the right moment</div>
      <div class="header-line-height">
        <div class="inline-block header-line-height overflow-hidden">to</div>
        <div class="inline-block header-line-height overflow-hidden">
          {#each Array(2) as _}
            <div class="header-scroll-text">
              <div
                class="header-line-height font-bold text-transparent bg-clip-text retroFill"
              >
                Increase Conversion
              </div>
              <div
                class="header-line-height font-bold text-transparent bg-clip-text retroFill"
              >
                Improve App Ratings
              </div>
              <div
                class="header-line-height font-bold text-transparent bg-clip-text retroFill"
              >
                Make Bugs Disappear
              </div>
            </div>
          {/each}
        </div>
      </div>
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
        class="w-[252px] h-[240px] stdphone:w-[294px] stdphone:h-[280px] md:w-[420px] md:h-[400px] self-center md:self-end"
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

<style>
  .header-scroll-text {
    animation-duration: 18s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-name: slideup;
  }

  @keyframes slideup {
    0% {
      transform: translateY(0%);
    }
    2%,
    33% {
      transform: translateY(-33.333333%);
    }
    35%,
    67% {
      transform: translateY(-66.666666%);
    }
    69%,
    100% {
      transform: translateY(-100%);
    }
  }
</style>
