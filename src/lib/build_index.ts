import path from "path"
import fs from "fs"
import { glob } from "glob"
import { convert } from "html-to-text"
import JSDOM from "jsdom"
import Fuse from "fuse.js"

const excludePaths = ["/search"]

export async function buildSearchIndex() {
  const indexData = []

  // iterate all files with html extension in ./svelte-kit/output/prerendered/pages
  const fileRoot = path.resolve(".")
  const pagesPath = path.join(fileRoot, ".svelte-kit/output/prerendered/pages")

  const allFiles = glob.sync(path.join(pagesPath, "**/*.html"))
  for (const file of allFiles) {
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
  const data = { index: jsonIndex, indexData, buildTime: Date.now() }
  return data
}

// Build search index into the output directory, for use in the build process (see vite.config.js)
export async function buildAndCacheSearchIndex() {
  const data = await buildSearchIndex()

  const dir = path.resolve("./.svelte-kit/output/client/search")
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(
    path.resolve("./.svelte-kit/output/client/search/api.json"),
    JSON.stringify(data),
  )
  console.log("Search index built")
}
