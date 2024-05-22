import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { supabase, safeGetSession },
}) => {
  const { session } = await safeGetSession()

  if (!session) {
    redirect(303, "/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(`*`)
    .eq("id", session.user.id)
    .single()

  return { session, profile }
}
