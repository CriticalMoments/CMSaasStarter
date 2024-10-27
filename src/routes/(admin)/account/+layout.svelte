<script lang="ts">
  import { run } from 'svelte/legacy';

  import { invalidate } from "$app/navigation"
  import { onMount } from "svelte"

  interface Props {
    data: any;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();

  let { supabase, session } = $state(data)
  run(() => {
    ({ supabase, session } = data)
  });

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth")
      }
    })

    return () => data.subscription.unsubscribe()
  })
</script>

{@render children?.()}
