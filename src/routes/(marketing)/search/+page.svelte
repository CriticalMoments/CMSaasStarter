<script lang="ts">
  import { page } from "$app/stores"
  import { browser } from "$app/environment"
  import { onMount } from "svelte"
  import { goto } from "$app/navigation"
  import { dev } from "$app/environment"
  import lunr from "lunr"

  type Result = {
    title: string
    description: string
    path: string
  }

  let results: Result[] = []
  let index: lunr.Index | undefined
  let docs: Result[] = []

  let loading = true
  let error = false
  onMount(async () => {
    try {
      const response = await fetch("/search/api")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const searchData = await response.json()
      if (searchData && searchData.index && searchData.docs) {
        //index = elasticlunr.Index.load(searchData.index)
        let indexData = JSON.parse(searchData.index)
        index = lunr.Index.load(indexData)
        docs = searchData.docs
      }
    } catch (e) {
      console.error("Failed to load search data", e)
      error = true
    } finally {
      loading = false
      document.getElementById("search-input")?.focus()
    }
  })

  // searchQuery is $page.url.hash minus the "#" at the beginning if present
  let searchQuery = decodeURIComponent($page.url.hash.slice(1) ?? "")
  $: {
    if (searchQuery.length == 0) {
      results = []
    } else if (index) {
      let indexResults = index.search(searchQuery)
      results = indexResults.map((r) => docs[parseInt(r.ref)])
    }
  }
  // Update the URL hash when searchQuery changes so the browser can bookmark/share the search results
  $: {
    if (browser && window.location.hash.slice(1) !== searchQuery) {
      goto("#" + searchQuery, { keepFocus: true })
    }
  }

  let focusItem = 0
  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      searchQuery = ""
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      focusItem += event.key === "ArrowDown" ? 1 : -1
      if (focusItem < 0) {
        focusItem = 0
      } else if (focusItem > results.length) {
        focusItem = results.length
      }
      if (focusItem === 0) {
        document.getElementById("search-input")?.focus()
      } else {
        document.getElementById(`search-result-${focusItem}`)?.focus()
      }
    }
  }
</script>

<svelte:window on:keydown={onKeyDown} />

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
      on:focus={() => (focusItem = 0)}
      aria-label="Search input"
    />
  </label>

  {#if loading && searchQuery.length > 0}
    <div class="text-center mt-10 text-accent text-xl">Loading...</div>
  {/if}

  {#if error}
    <div class="text-center mt-10 text-accent text-xl">
      Error connecting to search. Please try again later.
    </div>
  {/if}

  {#if !loading && searchQuery.length > 0 && results.length === 0 && !error}
    <div class="text-center mt-10 text-accent text-xl">No results found</div>
    {#if dev}
      <div class="text-center mt-4 font-mono">
        Development mode message: if you're missing content, rebuild your local
        search index with `npm run build`
      </div>
    {/if}
  {/if}

  <div>
    {#each results as result, i}
      <a
        href={result.path || "/"}
        id="search-result-{i + 1}"
        class="card my-6 bg-white shadow-xl flex-row overflow-hidden focus:border"
      >
        <div class="flex-none w-6 md:w-32 bg-secondary"></div>
        <div class="py-6 px-6">
          <div class="text-xl">{result.title}</div>
          <div class="text-sm text-accent">
            {result.path}
          </div>
          <div class="text-slate-500">{result.description}</div>
        </div>
      </a>
    {/each}
  </div>

  <div></div>
</div>
