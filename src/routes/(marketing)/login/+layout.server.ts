import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  url,
  locals: { safeGetSession },
  cookies,
}) => {
  const { session } = await safeGetSession()

  // if the user is already logged in return them to the account page
  if (session) {
    redirect(303, "/account")
  }

  return {
    session: session,
    url: url.origin,
    cookies: cookies.getAll(),
  }
}
