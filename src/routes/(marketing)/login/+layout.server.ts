import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { session },
  cookies,
  url,
}) => {
  // if the user is already logged in return them to the account page
  if (session) {
    redirect(303, "/account")
  }

  return {
    url: url.origin,
    cookies: cookies.getAll(),
  }
}
