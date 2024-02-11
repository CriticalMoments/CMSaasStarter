import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const session = await getSession()

  if (!session) {
    throw redirect(303, "/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(`full_name, website, company_name, id, avatar_url, updated_at`)
    .eq("id", session.user.id)
    .single()

  return { session, profile }
}
