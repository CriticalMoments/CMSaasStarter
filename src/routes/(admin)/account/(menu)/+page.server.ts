import { redirect } from "@sveltejs/kit"

export const actions = {
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      redirect(303, "/")
    }
  },
}
