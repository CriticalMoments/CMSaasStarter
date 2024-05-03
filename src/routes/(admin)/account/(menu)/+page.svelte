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

  function downloadImage(imageUrl: string) {
    // Create a dummy anchor element
    var anchor = document.createElement("a")
    anchor.style.display = "none"
    anchor.href = data.imagesIds.anchor.download = "downloaded_image.jpg"

    // Append the anchor to the body
    document.body.appendChild(anchor)

    // Trigger the click event
    anchor.click()

    // Remove the anchor from the body
    document.body.removeChild(anchor)
  }
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
<br />
<div
  class="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4"
>
  {#each data.imagesIds as id}
    <!-- Repeat this div for each photo -->
    <div class="relative group">
      <div class="relative">
        <img
          src={constructImageUrl(id.id)}
          alt={constructImageUrl(id.id)}
          class="w:auto sm:auto h-auto rounded-lg"
        />
        <div class="absolute top-0 right-0 p-2">
          <button
            class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            on:click={() =>
              downloadImage(constructImageUrl(id.id) + "?download=true")}
          >
            Download
          </button>
        </div>
      </div>
    </div>
    <!-- End of repeated div -->
  {/each}
</div>
