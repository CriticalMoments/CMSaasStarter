<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Popover from "$lib/components/ui/popover";
	import { MessageCircleHeart, Send } from "lucide-svelte";
	import { Textarea } from "$lib/components/ui/textarea";
</script>

<Popover.Root>
	<Popover.Trigger asChild let:builder>
		<Button variant="outline" builders={[builder]}>
			<MessageCircleHeart
				class="m4-2 mr-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100"
			/> Feedback

			<span class="sr-only">Leave feedback button</span>
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-[520px]" align="end">
		<div class="flex flex-col space-y-2 text-center sm:text-left">
			<h3 class="text-lg font-semibold">Feedback</h3>
			<p class="text-sm text-muted-foreground">
				Found a bug or just have some feedback? Don't hold back!
			</p>
		</div>
		<div class="flex items-center space-x-2 pt-4">
			<div class="grid flex-1 gap-2">
				<Textarea
					id="feedback"
					name="feedback"
					placeholder="This stupid bug is being stupid..."
				/>
			</div>
		</div>
		<div class="!mt-4 flex items-end">
			<Button
				variant="outline"
				size="sm"
				class="ml-auto hidden h-8 lg:flex"
			>
				<Send class="mr-2 h-4 w-4" />
				Submit
			</Button>
		</div>
	</Popover.Content>
</Popover.Root>
