<script lang="ts">
  import { onMount } from "svelte"
  export let data
  let { session, profile } = data

  onMount(() => {
    const script = document.createElement("script")
    script.src = "https://features.vote/widget/widget.js"
    script.setAttribute("slug", "paletteplay")
    script.setAttribute("color_mode", "light")
    script.setAttribute("user_id", session?.user?.id || "")
    script.setAttribute("user_email", session?.user?.email || "")
    script.setAttribute("user_name", profile?.full_name || "")
    script.setAttribute("img_url", "<Optional>")
    script.setAttribute("user_spend", "<Optional>")
    script.setAttribute(
      "onload",
      "window.loadVotingBoard('your-container-id-here')",
    )
    document.body.appendChild(script)
  })
</script>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-4">
  <div id="your-container-id-here"></div>
</div>
