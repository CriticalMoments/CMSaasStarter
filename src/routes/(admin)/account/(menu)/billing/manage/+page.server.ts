import { PRIVATE_STRIPE_API_KEY } from "$env/static/private"
import { error, redirect } from "@sveltejs/kit"
import Stripe from "stripe"
import { getOrCreateCustomerId } from "../../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"
const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: "2023-08-16" })

export const load: PageServerLoad = async ({
  url,
  locals: { safeGetSession, supabaseServiceRole },
}) => {
  const { session, user } = await safeGetSession()
  if (!session) {
    redirect(303, "/login")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    console.error("Error creating customer id", idError)
    error(500, {
      message: "Unknown error (PCID). If issue persists, please contact us.",
    })
  }

  let portalLink
  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${url.origin}/account/billing`,
    })
    portalLink = portalSession?.url
  } catch (e) {
    console.error("Error creating billing portal session", e)
    error(500, "Unknown error (PSE). If issue persists, please contact us.")
  }

  redirect(303, portalLink ?? "/account/billing")
}
