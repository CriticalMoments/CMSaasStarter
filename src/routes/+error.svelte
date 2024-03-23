<script>
	import "../app.pcss";
	import { page } from "$app/stores";
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="min-h-[100vh]">
	<div class="text-center">
		<div class="max-w-lg">
			<h1 class="text-5xl font-bold">This is embarassing...</h1>
			<p class="py-6 text-2xl">
				There was an error: {$page?.error?.message}
			</p>
			<div>
				<Button href="/">Return Home</Button>
			</div>
		</div>
	</div>
</div>
