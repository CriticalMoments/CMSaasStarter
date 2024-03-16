<script lang="ts">
  import { t } from "$lib/i18n"
  export let k: string
  export let v = {}
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html $t(k, v)}
