<script lang="ts">
  export let height = 30
  let barColors = ["bg-rc1", "bg-rc2", "bg-rc3", "bg-rc4", "bg-rc5"]
  let barCount = barColors.length
  let halfBarCount = barCount * 2.0
  let halfBarHeight = height / halfBarCount
</script>

{#each barColors as barColor, i}
  <div class="relative {barColor}" style="height:{halfBarHeight}vh;">
    <!-- inner bar prevents any artifacts if rendering is off by subpixel amounts -->
    <div
      class="{barColor} absolute w-full"
      style="height:{halfBarHeight * 2 + 0.1}vh;"
    ></div>
  </div>
  <div
    class="sticky z-10 {barColor}"
    style="height:{halfBarHeight + 0.05}vh; top:{i * halfBarHeight}vh;"
  ></div>
{/each}
