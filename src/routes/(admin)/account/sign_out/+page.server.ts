import { redirect } from "@sveltejs/kit"

export const actions = {
  default: async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    if (session) {
      await supabase.auth.signOut()
    }
    redirect(303, "/")
  },
}
