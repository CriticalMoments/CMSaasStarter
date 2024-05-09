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

  // STATS WIDGET
  let imageNumber: number = data.images.length
  let totalImageNumberFree = 5
  let totalImageNumberPro = 100
  // calculate the percentage of the total image number
  let percentageFree = (imageNumber / totalImageNumberFree) * 100
  let percentagePro = (imageNumber / totalImageNumberPro) * 100
  // i want to make sure the percentage is not more than 100
  let percentage = data.license === "pro" ? percentagePro : percentageFree
  // round to 2 decimal places
  percentage = Math.round(percentage * 100) / 100
  // i want to make sure the percentage is not more than 100
  percentage = percentage > 100 ? 100 : percentage
  // STATS WIDGET
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
        imageNumber = data.images.length
        setTimeout(() => {
          isLoading = false
          location.reload() // refresh the page
        }, 10000)
      }}
    >
      {#if isLoading}
        <div class="flex justify-center">
          <div class="loader"></div>
        </div>
      {/if}
      <label for="prompt" class="block tracking-wide px-2 py-1"
        >Enter Your Prompt Here: 👇</label
      >
      <textarea name="prompt" class="w-[500px] h-[100px] px-2 py-1" />
      <div class="w-full flex justify-center mt-4">
        {#if !isLoading}
          <button
            type="submit"
            class={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${(data.license === undefined && imageNumber <= totalImageNumberFree) || (data.license === "pro" && imageNumber <= totalImageNumberPro) ? "" : "bg-gray-400"}`}
            disabled={(data.license === undefined &&
              imageNumber >= totalImageNumberFree) ||
              (data.license === "pro" && imageNumber >= totalImageNumberPro)}
          >
            {#if data.license === undefined && imageNumber >= totalImageNumberFree}
              <a href="/account/billing">Upgrade to generate more images</a>
            {:else if data.license === "pro" && imageNumber >= totalImageNumberPro}
              <a href="/account/billing"
                >You have reached the maximum number of images for your license</a
              >
            {:else}
              Generate
            {/if}
          </button>
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
        <div class="stat-value">
          {imageNumber} / {data.license === "pro"
            ? totalImageNumberPro
            : totalImageNumberFree}
        </div>
        <div class="stat-desc justify-center">
          {percentage} % of license used
        </div>
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
