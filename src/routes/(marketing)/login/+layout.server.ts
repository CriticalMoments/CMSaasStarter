import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  url,
  locals: { getSession },
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
