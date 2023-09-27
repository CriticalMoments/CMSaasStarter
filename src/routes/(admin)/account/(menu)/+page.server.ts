import { redirect } from "@sveltejs/kit"

export const actions = {
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      throw redirect(303, "/")
    }
  },
}

import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({
  locals: { getSession, supabaseServiceRole },
}) => {
  const session = await getSession()
  if (!session) {
    throw redirect(303, "/login")
  }
  // Load app
  const { data: app, error } = await supabaseServiceRole
    .from("apps")
    .select("app_name, api_key, bundle_id")
    .eq("user_id", session.user.id)
    .single()

  if (error && error.code != "PGRST116") {
    // PGRST116 == no rows
    return { error: error }
  }

  return {
    app,
  }
}