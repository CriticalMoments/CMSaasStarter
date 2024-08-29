import { _hasFullProfile } from "../+layout.js"
import { redirect } from "@sveltejs/kit"

export async function load({ parent }) {
  const data = await parent()

  // They completed their profile! Redirect to "Select a Plan" screen.
  if (_hasFullProfile(data?.profile)) {
    redirect(303, "/account/select_plan")
  }

  return data
}
