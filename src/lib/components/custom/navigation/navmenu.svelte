<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { MoonIcon, SunIcon } from "lucide-svelte";
	import { goto } from "$app/navigation";
	import { toggleMode } from "mode-watcher";
	import FeedbackPopover from "./feedback-popover.svelte";
	import type { PageData } from "../../../../routes/(admin)/account/(menu)/$types";
	export let data: PageData;

	let { supabase } = data;
	$: ({ supabase } = data);

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		goto("/auth", { invalidateAll: true });
	};

	// Info for the dropdown menu
	$: user = data.session?.user;
	$: name = user?.user_metadata?.full_name || "";
	$: email = user?.email || "";
	$: avatarUrl = user?.user_metadata?.avatar_url || "";
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<FeedbackPopover />

		<Button on:click={toggleMode} variant="ghost" size="icon" class="!ml-2">
			<SunIcon
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<MoonIcon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle dark or light mode</span>
		</Button>

		<Button
			variant="ghost"
			builders={[builder]}
			class="relative !mb-1 !ml-2 !mr-4 h-8 w-8 rounded-full"
		>
			<Avatar.Root class="h-8 w-8">
				<Avatar.Image src={avatarUrl} alt="@shadcn"></Avatar.Image>
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="end">
		<DropdownMenu.Label class="font-normal">
			<div class="flex flex-col space-y-1">
				<!-- Use user.email or a placeholder if user is not available -->
				<p class="text-sm font-medium leading-none">{name}</p>
				<p class="text-xs leading-none text-muted-foreground">
					{email}
				</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Item
			on:click={handleSignOut}
			class="hover:cursor-pointer"
		>
			Billing
		</DropdownMenu.Item>
		<DropdownMenu.Item
			on:click={handleSignOut}
			class="hover:cursor-pointer"
		>
			Account
		</DropdownMenu.Item>
		<!-- { href: "/account/settings", title: "Settings", icon: Settings }, -->

		<DropdownMenu.Separator />
		<DropdownMenu.Item
			on:click={handleSignOut}
			class="hover:cursor-pointer"
		>
			Log Out
			<!-- <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut> -->
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
