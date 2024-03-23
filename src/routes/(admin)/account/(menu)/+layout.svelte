<script lang="ts">
  import "../../../../app.pcss"
  import { writable } from "svelte/store"
  import { setContext } from "svelte"
  import Sidebar from "$lib/components/custom/navigation/sidebar.svelte"

  const adminSectionStore = writable("")
  setContext("adminSection", adminSectionStore)
  let adminSection: string
  adminSectionStore.subscribe((value) => {
    adminSection = value
  })

  function closeDrawer(): void {
    const adminDrawer = document.getElementById(
      "admin-drawer",
    ) as HTMLInputElement
    adminDrawer.checked = false
  }
</script>

<div class="relative">
  <!-- Sticky Navmenu at the top -->
  <div
    class="sticky top-0 z-50 flex items-center justify-between overflow-hidden rounded-[0.5rem] border bg-background p-2 shadow-xl"
  >
    <div class="flex items-center justify-start">
      <h2 class="ml-4 text-3xl font-semibold tracking-tight transition-colors">
        FeedHack
      </h2>
    </div>

    <div class="flex items-center justify-end"></div>
  </div>

  <!--Sidebar and Slot -->
  <div class="flex max-h-screen">
    <div class="fixed z-40 h-full w-52 border-r bg-background">
      <Sidebar />
    </div>

    <div class="m-8 flex-1 pl-52">
      <slot />
    </div>
  </div>
</div>
