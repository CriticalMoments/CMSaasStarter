<script lang="ts">
  export let code = ""
  export let animateChange = true
  let currentDisplayCode = ""

  let interval: NodeJS.Timeout | undefined

  // typing effect
  $: {
    if (!animateChange) {
      currentDisplayCode = code
    }

    // replace code if not shared prefix
    if (
      currentDisplayCode.length == 0 ||
      currentDisplayCode != code.substring(0, currentDisplayCode.length)
    ) {
      currentDisplayCode = ""
    }

    if (!interval) {
      interval = setInterval(() => {
        let nextLength = currentDisplayCode.length + 4
        currentDisplayCode = code.substring(
          0,
          Math.min(nextLength, code.length),
        )

        // Run until done
        if (currentDisplayCode.length >= code.length) {
          clearInterval(interval)
          interval = undefined
        }
      }, 50)
    }
  }
</script>

<div class="bg-stone-900 rounded-2xl p-5 w-60 min-h-[184px]">
  <pre><code class="text-green-500 text-xs">{currentDisplayCode}</code></pre>
</div>
