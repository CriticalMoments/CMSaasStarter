import { buildSearchIndex } from "$lib/build_index"

export async function GET() {
  console.log("Search API")
  const searchData = await buildSearchIndex()
  return new Response(JSON.stringify(searchData))
}

export const prerender = true
