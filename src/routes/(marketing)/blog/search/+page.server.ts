export const prerender = true
export const ssr = true
import Fuse from "fuse.js"


import { sortedBlogPosts } from "./../posts"
import { convert } from "html-to-text"

function buildIndexData() {
  const indexData = []
  for (const post of sortedBlogPosts) {
    let plaintext = ""
    try {
      // Attempt to render the page to html for indexing
      const { html } = post.component.render()
      plaintext = convert(html)
    } catch (e) {
      // log but continue
      console.log("Blog search indexing error", post.link, e)
    }

    indexData.push({
      title: post.title,
      description: post.description,
      body: plaintext,
    })
  }

  return indexData
}

const idxdata = buildIndexData()
// TODO weight title/description/content
  const fuseOptions = {
    keys: ["title", "description", "body"],
    //threshold: 0.1,
  }
  const index = Fuse.createIndex(fuseOptions.keys, idxdata)
  console.log(index)
  const jsonIndex = index.toJSON()
  console.log(JSON.stringify(jsonIndex))

export async function load() {
  /*if (!building || !dev) {
      // TODO
      return {
        indexData: []
      }
    }*/
  return {
    indexData: idxdata,
    index: jsonIndex,
    fuseOptions,
  }
}
