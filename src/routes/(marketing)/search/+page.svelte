<script lang="ts">
  import { page } from "$app/stores"
  import { browser } from "$app/environment"
  import { onMount } from "svelte"
  import Fuse from "fuse.js"
  import { goto } from "$app/navigation"
  import { dev } from "$app/environment"

  const fuseOptions = {
    keys: ["title", "description", "body"],
    ignoreLocation: true,
    threshold: 0.3,
  }

  let fuse: Fuse<Result> | undefined

  let loading = true
  onMount(async () => {
    try {
      const response = await fetch("/search/api")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const searchData = await response.json()
      if (searchData && searchData.index && searchData.indexData) {
        const index = Fuse.parseIndex(searchData.index)
        fuse = new Fuse<Result>(searchData.indexData, fuseOptions, index)
      }
    } catch (error) {
      console.error("Failed to load search data", error)
    } finally {
      loading = false
    }
  })

  type Result = {
    item: {
      title: string
      description: string
      body: string
      path: string
    }
  }
  let results: Result[] = []

  // searchQuery is $page.url.hash minus the "#" at the beginning if present
  let searchQuery = decodeURIComponent($page.url.hash.slice(1) ?? "")
  $: {
    if (fuse) {
      results = fuse.search(searchQuery)
    }
  }
  // Update the URL hash when searchQuery changes so the browser can bookmark/share the search results
  $: {
    if (browser && window.location.hash.slice(1) !== searchQuery) {
      goto("#" + searchQuery, { keepFocus: true })
    }
  }
</script>

<svelte:head>
  <title>Search</title>
  <meta name="description" content="Search our website." />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-lg mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Search
    </div>
  </div>
  <label class="input input-bordered flex items-center gap-2 mt-10">
    <input
      id="search-input"
      type="text"
      class="grow"
      placeholder="Search"
      bind:value={searchQuery}
      aria-label="Search input"
    />
  </label>

  {#if loading && searchQuery.length > 0}
    <div class="text-center mt-10 text-accent text-xl">Loading...</div>
  {/if}

  {#if !loading && searchQuery.length > 0 && results.length === 0}
    <div class="text-center mt-10 text-accent text-xl">No results found</div>
    {#if dev}
      <div class="text-center mt-4 font-mono">
        Development mode only message: if you're missing content, rebuild your
        local search index with `npm run build`
      </div>
    {/if}
  {/if}

  <div>
    {#each results as result}
      <a href={result.item.path || "/"}>
        <div class="card my-6 bg-white shadow-xl flex-row overflow-hidden">
          <div class="flex-none w-6 md:w-32 bg-secondary"></div>
          <div class="py-6 px-6">
            <div class="text-xl">{result.item.title}</div>
            <div class="text-sm text-accent">
              {result.item.path}
            </div>
            <div class="text-slate-500">{result.item.description}</div>
          </div>
        </div>
      </a>
    {/each}
  </div>

  <div></div>
</div>
