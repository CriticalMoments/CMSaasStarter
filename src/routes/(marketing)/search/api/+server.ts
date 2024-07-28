import { buildSearchIndex } from "$lib/build_index"

export async function GET() {
  const searchData = await buildSearchIndex()

  return new Response(JSON.stringify(searchData), {
    headers: { "Content-Type": "application/json" },
  })
}

export const prerender = true
