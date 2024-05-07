<script lang="ts">
  import { getContext, onMount } from "svelte"
  import { enhance } from "$app/forms"
  import type { Writable } from "svelte/store"
  import { PUBLIC_SUPABASE_URL } from "$env/static/public"
  export let data

  function constructImageUrl(imageId: string): string {
    const profile = data.profile
    const baseUrl = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/pages/${profile?.id}/`
    return `${baseUrl}${imageId}`
  }

  let isLoading = false
  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")

  async function downloadImage(imageSrc: string, imageName: string) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement("a")
    link.href = imageURL
    link.download = imageName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  let imageNumber: number = data.images.length
  let totalImageNumber = 100
  // calculate the percentage of the total image number
  let percentage = (imageNumber / totalImageNumber) * 100
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Create new coloring page</h1>
<div class="flex w-full">
  <div
    class="grid flex-grow card rounded-box place-items-center bg-neutral-100 shadow-md"
  >
    <form
      class="p-8"
      method="POST"
      action="?/new"
      use:enhance={() => {
        isLoading = true
        imageNumber += 1
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
            disabled={isLoading}>Loading...</button
          >
        {/if}
      </div>
    </form>
  </div>
  <div class="divider divider-horizontal"></div>

  <div
    class="grid flex-grow card rounded-box place-items-center bg-neutral-100 shadow-md"
  >
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Page Generated</div>
        <div class="stat-value">{imageNumber} / {totalImageNumber}</div>
        <div class="stat-desc">{percentage} % license used</div>
      </div>
    </div>
  </div>
</div>

<hr class="border-t-2 border-gray-300 my-6" />
<h2 class="font-bold text-2xl">Coloring Pages</h2>
<p class="text-slate-500">
  View all your previously created images here. Click on any image to download
  it.
</p>
<br />
<div
  class="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4"
>
  {#each data.images as image}
    <!-- Repeat this div for each photo -->
    <div class="relative group">
      <div class="relative">
        <img
          src={constructImageUrl(image.id)}
          alt={constructImageUrl(image.id)}
          class="w:auto sm:auto h-auto rounded-lg"
        />
        <div class="absolute top-0 right-0 p-2">
          <button
            class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            on:click={() =>
              downloadImage(
                constructImageUrl(image.id) + "?download=true",
                image.prompt,
              )}
          >
            Download
          </button>
        </div>
      </div>
    </div>
    <!-- End of repeated div -->
  {/each}
</div>
