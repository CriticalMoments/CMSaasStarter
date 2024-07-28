<script lang="ts" context="module">
  export const prerender = true

  import { sortedBlogPosts } from "./../posts"
  import { convert } from "html-to-text"

  async function loadComponent(path: string) {
    console.log(path)

    const blogComponent = await import(path).then((mod) => mod.default)
    return blogComponent
    //const blogComponent = import(path)
    //console.log(blogComponent)
    //return blogComponent.default
  }

  async function buildIndexData() {
    let indexData = []
    for (const post of sortedBlogPosts) {
      const link = post.link
      console.log(link)
      let plaintext = ""
      try {
        const postComponentPath = `./${link.replace("/blog/", "../(posts)/")}/+page.svelte`
        console.log(postComponentPath)
        /*loadComponent(postComponent).then((module) => {
          console.log(module)
          const { html } = module.render()
          plaintext = convert(html)
          console.log(plaintext)
        })*/
        const postComponent = await loadComponent(postComponentPath)
        const { html } = postComponent.render()
        plaintext = convert(html)
        console.log(plaintext)
      } catch (e) {
        // log but continue
        console.log("Blog search indexing error", post.title, e)
      }

      indexData.push({
        title: post.title,
        description: post.description,
        plaintext,
      })
    }

    return indexData
  }
  export const idxdata = await buildIndexData()
  //console.log(idxdata)
</script>

<div>
  a = {JSON.stringify(idxdata)}
  constantXXX
</div>
