<script>
  import BarsComponent from "../../bars_component.svelte"
  import { postList, blogInfo } from "./posts.json"
  for (const post of postList) {
    let dateParts = post.date.split("-")
    post.parsedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]) // Note: months are 0-based
  }
  let sortedPosts = postList.sort((a, b) => b.parsedDate - a.parsedDate)
</script>

<svelte:head>
  <title>{blogInfo.name}</title>
  <meta name="description" content={blogInfo.description} />
</svelte:head>

<BarsComponent height={2} />

<div class="min-h-[70vh] py-8 p-edge flex flex-col place-content-center">
  <div
    class="mx-auto font-header text-3xl md:text-5xl whitespace-nowrap flex flex-row gap-2 items-baseline"
  >
    <div>Blog</div>
    <a href="/blog/rss.xml" target="_blank" rel="noreferrer" class="flex-none">
      <img
        class="w-4 h-4 md:w-6 md:h-6 object-contain"
        src="/images/rss.svg"
        alt="rss feed icon"
      />
    </a>
  </div>
  <h2
    class="mx-auto pt-2 text-xl md:text-2xl text-center text-slate-600 mt-1 pb-3 max-w-[300px] md:text-2xl md:max-w-sm"
  >
    We write about about technolgy, mobile, and startups.
  </h2>
  <div
    class="my-8 flex mx-auto max-w-xlg flex-row flex-wrap gap-6 place-content-center"
  >
    {#each sortedPosts as post, i}
      <a href={post.link}>
        <div
          class="card card-bordered shadow w-[280px] sm:w-[320px] h-[420px] overflow-hidden"
        >
          <div class="h-[180px] bg-rc{(i % 5) + 1} relative overflow-hidden">
            <div
              class="text-white font-header text-7xl absolute right-0 bottom-[-16px]"
            >
              #{sortedPosts.length - i}
            </div>
          </div>
          <div class="p-6 pt-3 flex flex-col h-full">
            <div class="text-slate-600 font-bold">
              {post.parsedDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div class="text-xl font-header pt-5">{post.title}</div>
            <div class="text-slate-600 text-lg pt-2">{post.description}</div>
            <div class="grow"></div>
            <div class="font-header text-primary">Read Now ➜</div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
