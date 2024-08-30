import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { supabase, safeGetSession },
  cookies,
}) => {
  const { session, user } = await safeGetSession()

  if (!session || !user?.id) {
    redirect(303, "/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(`*`)
    .eq("id", user.id)
    .single()

  return { session, user, profile, cookies: cookies.getAll() }
}
