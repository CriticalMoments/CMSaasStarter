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
        "Increase your paid conversion rate by asking users when they are most likely to convert",
      background: "",
    },
    {
      title: "Improve App Ratings",
      description:
        "Increase your app rating and number of ratings by asking users to rate at the perfect moment",
      background: "bg-[#F9AE40]",
    },
    {
      title: "Make Bugs Disappear",
      description:
        "Shit happens. Major Bugs. Outages. Dependencies break. Deprications. Urgent announcements.\nTarget only the impacted users and resolve remotely without waiting for app updates.",
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
    class="lg:container mx-auto flex-grow flex flex-col lg:flex-row p-edge lg:items-end pb-8 gap-x-16 gap-y-6 md:gap-y-10 place-content-end lg:place-content-center"
  >
    <div class="lg:pb-3 xl:pb-5">
      <img
        src="/images/cm_logo.svg"
        class="logo-dark h-[63px] stdphone:h-[82px] md:h-[97px] lg:h-[114px] xl:h-[139px] aspect-[420/154]"
        alt="Critial Moments logo"
      />
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
  <div class="hero lg:min-h-[65vh] {section.background}">
    <div
      class="flex flex-col lg:flex-row gap-x-24 p-edge lg:p-6 {section.background}"
    >
      <div
        class="flex-1 text-center lg:text-left max-w-xl self-center pt-12 pb-6 lg:py-12"
      >
        <div class="font-header text-2xl stdphone:text-3xl md:text-4xl py-4">
          {section.title}
        </div>
        {#each section.description.split("\n") as descriptionPart}
          <div class="text-lg stdphone:text-xl md:text-2xl py-3 max-w-md">
            {descriptionPart}
          </div>
        {/each}
      </div>
      <div
        class="w-[252px] h-[240px] stdphone:w-[294px] stdphone:h-[280px] lg:w-[420px] lg:h-[400px] self-center lg:self-end lg:my-4"
      >
        <div
          class="scale-[0.6] stdphone:scale-[0.7] lg:transform-none w-[420px] h-[400px]"
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
    32% {
      transform: translateY(0%);
    }
    34% {
      transform: translateY(-33.333333%);
    }
    66% {
      transform: translateY(-33.333333%);
    }
    68% {
      transform: translateY(-66.666666%);
    }
    98% {
      transform: translateY(-66.666666%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
</style>
