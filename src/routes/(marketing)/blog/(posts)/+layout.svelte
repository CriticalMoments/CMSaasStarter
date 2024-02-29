<script lang="ts">
  import { page } from "$app/stores"
  import { error } from "@sveltejs/kit"
  import { sortedBlogPosts, type BlogPost } from "./../posts"

  let currentPost: BlogPost | null = null
  for (const post of sortedBlogPosts) {
    if (
      $page.url.pathname == post.link ||
      $page.url.pathname == post.link + "/"
    ) {
      currentPost = post
      continue
    }
  }
  if (!currentPost) {
    throw error(404, "Blog post not found")
  }
</script>

<svelte:head>
  <title>{currentPost?.title ? currentPost.title : "Not Found"}</title>
  <meta
    name="description"
    content={currentPost?.description ? currentPost.description : "Blog post"}
  />
</svelte:head>

<article class="prose mx-auto py-12 px-6 font-sans">
  {#if currentPost == null}
    <h1>Blog post not found</h1>
  {:else}
    <div class="text-sm text-accent">
      {currentPost.parsedDate?.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
    </div>
    <h1>{currentPost.title}</h1>
    <slot />
  {/if}
</article>
