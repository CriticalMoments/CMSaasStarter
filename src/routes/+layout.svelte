<script lang="ts">
	import "../app.pcss";
	import { navigating } from "$app/stores";
	import { expoOut } from "svelte/easing";
	import { slide } from "svelte/transition";
</script>

{#if $navigating}
	<!-- Tailwind CSS styled loading animation for next page -->
	<div
		class="fixed left-0 right-0 top-0 z-50 h-1 bg-primary"
		in:slide={{ delay: 100, duration: 12000, easing: expoOut }}
	></div>
{/if}
<slot />
