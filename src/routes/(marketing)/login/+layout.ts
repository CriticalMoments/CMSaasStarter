import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public"
import { createBrowserClient } from "@supabase/ssr"

export const load = async ({ fetch, data, depends }) => {
  depends("supabase:auth")

  const supabase = createBrowserClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    { fetch }
  )

  const url = data.url

  return { supabase, url }
}
