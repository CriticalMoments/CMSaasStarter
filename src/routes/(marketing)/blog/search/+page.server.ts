export const prerender = true
export const ssr = true

import path from "path"

import { sortedBlogPosts } from "./../posts"
import { convert } from "html-to-text"

async function loadComponent(path: string) {
  console.log(path)

  //const blogComponent = await import.meta.glob(path).then((mod) => mod.default)
  const blogComponent = await import(path /* @vite-ignore */).then(
    (mod) => mod.default,
  )
  return blogComponent
  //const blogComponent = import(path)
  //console.log(blogComponent)
  //return blogComponent.default
}

async function buildIndexData() {
  const indexData = []
  for (const post of sortedBlogPosts) {
    const link = post.link
    console.log(link)
    let plaintext = ""
    try {
      console.log("base", path.relative(process.cwd(), "."))
      console.log("here", path.resolve("."))
      //const postComponentPath = `./${link.replace("/blog/", "../(posts)/")}/+page.svelte`
      //const postComponentPath = path.resolve(`./${link.replace("/blog/", "../(posts)/")}/+page.svelte`)
      //const postComponentPath = `$routes/(marketing)/blog/${link.replace("/blog/", "(posts)/")}/+page.svelte`
      // this works, but in build mode there are issues importing .svelte files
      const postComponentPath = path.resolve(
        `src/routes/(marketing)/blog/${link.replace("/blog/", "(posts)/")}/+page.svelte`,
      )
      //const postComponentPath = `$routes/(marketing)/blog/${link.replace("/blog/", "(posts)/")}/+page.svelte`
      //const postComponentPath = `$blogPosts/${link.replace("/blog/", "")}/+page.svelte`
      //const postComponentPath = `${paths.base}/routes/(marketing)/blog/${link.replace("/blog/", "(posts)/")}/+page.svelte`

      //const postComponentPath = `$routes/(marketing)/blog/(posts)/${link.replace("/blog/", "")}/+page.svelte`
      console.log(postComponentPath)

      //const postComponent = await loadComponent(postComponentPath)
      const { html } = post.component.render()
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

const idxdata = await buildIndexData()
const contentX = "contextXXX"
export const _contentX = "contentXXX"
export const _idxdata = await buildIndexData()
console.log(contentX)

export async function load() {
  /*if (!building || !dev) {
      // TODO
      return {
        indexData: []
      }
    }*/
  return {
    contentX: "contextXXX",
    indexData: JSON.stringify(idxdata),
  }
}
