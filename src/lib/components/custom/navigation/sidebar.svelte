<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
	import { cn } from "$lib/utils.js";
	import { HomeIcon } from "lucide-svelte";
	import { cubicInOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";

	let className: string | null | undefined = undefined;
	export { className as class };

	let library: { href: string; title: string; icon: any }[] = [
		{ href: "/account", title: "Home", icon: HomeIcon },
	];

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut,
	});
</script>

<div class={cn("border-r pb-12", className)}>
	<div class="space-y-4 px-3 py-4">
		<!-- 
			Taken from the shadcn-svelte example
			https://github.com/huntabyte/shadcn-svelte/blob/main/apps/www/src/routes/examples/forms/(components)/sidebar-nav.svelte
		 -->
		<div class="space-y-1">
			{#each library as item}
				{@const isActive =
					$page.url.pathname === item.href ||
					($page.url.pathname.startsWith(item.href) &&
						item.href !== "/")}
				<div class="!my-42">
					<Button
						href={item.href}
						variant="ghost"
						class={cn(
							"relative flex w-full items-center justify-start hover:bg-transparent",
							!isActive && "hover:underline",
							isActive ? "text-black" : "text-black", // Active items are white, others are grey
						)}
						data-sveltekit-noscroll
					>
						{#if isActive}
							<div
								class="absolute inset-0 rounded-md bg-muted"
								in:send={{ key: "active-sidebar-tab" }}
								out:receive={{ key: "active-sidebar-tab" }}
							/>
						{/if}

						<div class="relative flex">
							<svelte:component
								this={item.icon}
								class={isActive
									? "mr-4 text-black"
									: "mr-4 text-black"}
							/>
							<span
								class={isActive ? "text-black" : "text-black"}
							>
								{item.title}
							</span>
						</div>
					</Button>
				</div>
			{/each}
		</div>
	</div>
</div>
