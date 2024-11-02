<script lang="ts">
  import { invalidate } from "$app/navigation"
  import { onMount, onDestroy } from "svelte"

  let { data, children } = $props()

  let { supabase, session } = $state(data)

  onMount(() => {
    ;({ supabase, session } = data)

    const { data: authData } = supabase.auth.onAuthStateChange(
      (event, _session) => {
        if (_session?.expires_at !== session?.expires_at) {
          invalidate("supabase:auth")
        }
      },
    )

    onDestroy(() => {
      authData.subscription.unsubscribe()
    })
  })
</script>

{@render children?.()}
