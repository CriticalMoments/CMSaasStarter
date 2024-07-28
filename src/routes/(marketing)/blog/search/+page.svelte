<script lang="ts">
  import { blogInfo } from "./../posts"
  import { page } from "$app/stores"
  import { browser } from "$app/environment"

  export let data

  import Fuse from "fuse.js"

  const index = Fuse.parseIndex(data.index)
  const fuse = new Fuse(data.indexData, data.fuseOptions, index)

  //const fuse = new Fuse(sortedBlogPosts, fuseOptions)

  // searchQuery is $page.url.hash minus the "#" at the beginning if present
  let searchQuery = $page.url.hash.slice(1) ?? ""

  $: results = fuse.search(searchQuery)

  // Update the URL hash when searchQuery changes so the browser can bookmark/share the search results
  $: {
    if (browser) {
      window.location.hash = "#" + searchQuery
    }
  }
</script>

<svelte:head>
  <title>{blogInfo.name} Search</title>
  <meta name="description" content="Search our blog posts." />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-lg mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Blog Search
    </div>
  </div>
  <label class="input input-bordered flex items-center gap-2 mt-10">
    <input
      type="text"
      class="grow"
      placeholder="Search"
      bind:value={searchQuery}
    />
  </label>

  <div>
    {#each results as result}
      <div class="card my-6 bg-white shadow-xl flex-row overflow-hidden">
        <div class="flex-none w-6 md:w-32 bg-secondary"></div>
        <div class="py-6 px-6">
          <div class="text-xl">{result.item.title}</div>
          <div class="text-sm text-accent">
            {result.item.parsedDate?.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div class="text-slate-500">{result.item.description}</div>
        </div>
      </div>
    {/each}
  </div>

  <div></div>

  <div>
    {JSON.stringify(data.indexData)}
  </div>
</div>
