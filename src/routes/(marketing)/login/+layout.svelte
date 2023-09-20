<script lang="ts">
  let isEurope = false
  try {
    isEurope = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.startsWith("Europe/")
  } catch (e) {
  } finally {
  }
</script>

<div
  class="text-center content-center max-w-lg mx-auto min-h-[75vh] mb-12 flex items-center place-content-center"
>
  <div class="flex flex-col w-64 lg:w-80">
    <slot />
    <div class="mt-8 {isEurope ? 'block' : 'hidden'}">
      👋🇪🇺. Logging in uses 🍪s.
    </div>
  </div>
</div>
