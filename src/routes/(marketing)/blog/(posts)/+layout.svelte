<script lang="ts">
  import { page } from "$app/stores"
  import { error } from "@sveltejs/kit"
  import { sortedBlogPosts, type BlogPost } from "./../posts"
  import { PUBLIC_SITE_NAME } from "$env/static/public"

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

  const pageTitle = currentPost?.title ? currentPost.title : "Not Found"
  const pageDescription = currentPost?.description
    ? currentPost.description
    : "Blog post"
  const pageUrl = $page.url.origin + $page.url.pathname
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />

  <!-- Facebook -->
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:site_name" content={PUBLIC_SITE_NAME} />
  <meta property="og:url" content={pageUrl} />
  <!-- <meta property="og:image" content="https://samplesite.com/image.jpg"> -->

  <!-- Twitter -->
  <!-- “summary”, “summary_large_image”, “app”, or “player” -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <!-- <meta name="twitter:site" content="@samplesite"> -->
  <!-- <meta name="twitter:image" content="https://samplesite.com/image.jpg"> -->
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
