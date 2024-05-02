<script lang="ts">
  import { getContext, onMount } from "svelte"
  import { writable, type Writable } from "svelte/store"
  import { enhance } from "$app/forms"
  export let data

  let isLoading = false
  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")

  // Fetch images from server endpoint
  async function fetchImages() {
    const response = await fetch("/api/getImages")
    const { images } = await response.json()
    return images
  }

  // Store to hold image URLs
  const images = writable([])
  onMount(async () => {
    const fetchedImages = await fetchImages()
    images.set(fetchedImages)
  })
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Create new coloring page</h1>

<div class="grow w-full flex items-center justify-cente">
  <form
    class="bg-neutral-100 shadow-md p-8"
    method="POST"
    action="?/new"
    use:enhance={() => {
      isLoading = true
    }}
  >
    <label for="prompt" class="block font-extralight tracking-wide px-2 py-1"
      >Enter Your Prompt Here:</label
    >
    <textarea name="prompt" class="w-[500px] h-[100px] px-2 py-1" />
    <div class="w-full flex justify-center mt-4">
      {#if !isLoading}
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit">Generate</button
        >
      {:else}
        <button
          class="bg-neutral-400 text-white font-bold py-2 px-4 rounded"
          disabled={true}>Loading...</button
        >
      {/if}
    </div>
  </form>
</div>

<hr class="border-t-2 border-gray-300 my-6" />
<h2 class="font-bold text-2xl">Coloring Pages</h2>
<p class="text-slate-500">
  View all your previously created images here. Click on any image to download
  it.
</p>

<div>
  <div></div>
</div>
