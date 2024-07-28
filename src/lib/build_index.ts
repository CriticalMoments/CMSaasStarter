import path from "path"
import fs from "fs"
import glob from "glob"
import { convert } from "html-to-text"
import JSDOM from "jsdom"
import Fuse from "fuse.js"

export async function buildSearchIndex() {
  const indexData = []

  // iterate all files with html extension in ./svelte-kit/output/prerendered/pages
  const fileRoot = path.resolve(".")
  const pagesPath = path.join(fileRoot, ".svelte-kit/output/prerendered/pages")

  const allFiles = glob.sync(path.join(pagesPath, "**/*.html"))
  for (const file of allFiles) {
    try {
      // read the file
      const data = fs.readFileSync(file, "utf8")
      const plaintext = convert(data)
      const webPath = file
        .replace(pagesPath, "")
        .replace("/index.html", "")
        .replace(".html", "")
      const dom = new JSDOM.JSDOM(data)
      const title = dom.window.document.querySelector("title")?.innerHTML
      const description = dom.window.document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content")
      indexData.push({
        title,
        description,
        body: plaintext,
        path: webPath,
      })
    } catch (e) {
      console.log("Blog search indexing error", file, e)
    }
  }

  const index = Fuse.createIndex(["title", "description", "body"], indexData)
  const jsonIndex = index.toJSON()
  const data = { index: jsonIndex, indexData, buildMode: "build-time-compiled" }

  // write index data to file, overwriting static file on build
  fs.writeFileSync(
    path.resolve("./.svelte-kit/output/client/search_index.json"),
    JSON.stringify(data),
  )
  console.log("Search index built")
}
