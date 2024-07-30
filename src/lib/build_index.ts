import path from "path"
import fs from "fs"
import glob from "glob"
import { convert } from "html-to-text"
import JSDOM from "jsdom"
import lunr from "lunr"

const excludePaths = ["/search"]

export async function buildSearchIndex() {
  const docs = []
  const indexDocs: {
    title: string
    description: string
    body: string
    id: number
  }[] = []

  // iterate all files with html extension in ./svelte-kit/output/prerendered/pages
  const fileRoot = path.resolve(".")
  const pagesPath = path.join(fileRoot, ".svelte-kit/output/prerendered/pages")

  const allFiles = glob.sync(path.join(pagesPath, "**/*.html"))
  for (const [i, file] of allFiles.entries()) {
    try {
      const webPath = file
        .replace(pagesPath, "")
        .replace("/index.html", "")
        .replace(".html", "")

      // check if path is excluded
      if (excludePaths.includes(webPath)) {
        continue
      }

      // read the file
      const data = fs.readFileSync(file, "utf8")
      const plaintext = convert(data, {
        selectors: [
          { selector: "a", options: { ignoreHref: true, linkBrackets: false } },
          { selector: "img", format: "skip" },
        ],
      })
      const dom = new JSDOM.JSDOM(data)
      const title =
        dom.window.document.querySelector("title")?.innerHTML ||
        "Page " + webPath
      const description =
        dom.window.document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content") || ""
      docs.push({
        title,
        description,
        path: webPath,
      })
      indexDocs.push({
        title,
        description,
        body: plaintext,
        id: i,
      })
    } catch (e) {
      console.log("Blog search indexing error", file, e)
    }
  }

  const index = lunr(function () {
    this.field("title", { boost: 3 })
    this.field("description", { boost: 2 })
    this.field("body", { boost: 1 })
    this.ref("id")

    indexDocs.forEach((doc) => {
      this.add(doc)
    }, this)
  })

  return {
    index: JSON.stringify(index),
    docs,
    buildTime: Date.now(),
  }
}

// Use this if you want to integrate intyou your build process manually.
// Default install achieves similar result by setting prerender=true fore /search/api route.
export async function buildAndCacheSearchIndex() {
  const data = await buildSearchIndex()
  // write index data to file, overwriting static file on build
  fs.writeFileSync(
    path.resolve("./.svelte-kit/output/client/search_index.json"),
    JSON.stringify(data),
  )
  console.log("Search index built")
}
