import { fail, redirect } from "@sveltejs/kit"
import { page } from "$app/stores"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({
  url,
  locals: { supabase, getSession },
}) => {
  const session = await getSession()

  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, "/account")
  }

  return {
    session: session,
    url: url.origin,
  }
}
