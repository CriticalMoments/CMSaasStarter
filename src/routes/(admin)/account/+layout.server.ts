import { UserProfileManager } from "$lib/business/UserProfileManager"
import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { supabase, safeGetSession },
}) => {
  const { session } = await safeGetSession()

  if (!session) {
    redirect(303, "/login")
  }

  const userProfileManager = new UserProfileManager(supabase, session)
  const profile = await userProfileManager.getProfile()

  return { session, profile }
}
