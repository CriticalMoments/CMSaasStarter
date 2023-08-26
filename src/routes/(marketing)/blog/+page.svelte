<svelte:head>
    <title>Blog Posts</title>
	<meta name="description" content="Our blog posts." />
</svelte:head>

<script>
    import {postList, blogInfo} from './posts.json';
    for (const post of postList) {
        let dateParts = post.date.split('-');
        post.parsedDate = new Date(dateParts[0], dateParts[1]-1, dateParts[2]); // Note: months are 0-based 
    }
    let sortedPosts = postList.sort(((a, b) => (b.parsedDate - a.parsedDate)));
</script>

<div class="py-8 max-w-xl mx-auto">
    <div class="text-2xl font-medium text-primary flex gap-3 items-baseline">
        <span class="flex-none">{blogInfo.name}</span>
        <a href="/blog/rss.xml" target="_blank" rel="noreferrer">
            <img class="flex-none w-5 h-5 object-contain" src="/images/rss.svg" alt="rss feed"/>
        </a>
    </div>

    {#each sortedPosts as post}
        <a href="{post.link}">
            <div class="mt-8 mb-12">
            <div class="text-xl">{post.title}</div>
            <div class="text-sm text-secondary">{post.parsedDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</div>
            <div class="text-slate-500">{post.description}</div>
            </div>
        </a>
    {/each}
</div>