<script lang="ts">
  import { page } from "$app/stores"
  import { error } from "@sveltejs/kit"
  import { sortedBlogPosts, type BlogPost } from "./../posts"
  import { WebsiteName } from "../../../../config"

  function getCurrentPost(url: string): BlogPost {
    let searchPost: BlogPost | null = null
    for (const post of sortedBlogPosts) {
      if (url == post.link || url == post.link + "/") {
        searchPost = post
        continue
      }
    }
    if (!searchPost) {
      error(404, "Blog post not found")
    }
    return searchPost
  }
  $: currentPost = getCurrentPost($page.url.pathname)

  function buildLdJson(post: BlogPost) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.parsedDate?.toISOString(),
      dateModified: post.parsedDate?.toISOString(),
    }
  }
  $: jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(buildLdJson(currentPost)) + "<"
  }/script>`

  $: pageUrl = $page.url.origin + $page.url.pathname
</script>

<svelte:head>
  <title>{currentPost.title}</title>
  <meta name="description" content={currentPost.description} />

  <!-- Facebook -->
  <meta property="og:title" content={currentPost.title} />
  <meta property="og:description" content={currentPost.description} />
  <meta property="og:site_name" content={WebsiteName} />
  <meta property="og:url" content={pageUrl} />
  <!-- <meta property="og:image" content="https://samplesite.com/image.jpg"> -->

  <!-- Twitter -->
  <!-- “summary”, “summary_large_image”, “app”, or “player” -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={currentPost.title} />
  <meta name="twitter:description" content={currentPost.description} />
  <!-- <meta name="twitter:site" content="@samplesite"> -->
  <!-- <meta name="twitter:image" content="https://samplesite.com/image.jpg"> -->

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<article class="prose mx-auto py-12 px-6 font-sans">
  <div class="text-sm text-accent">
    {currentPost.parsedDate?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}
  </div>
  <h1>{currentPost.title}</h1>
  <slot />
</article>
