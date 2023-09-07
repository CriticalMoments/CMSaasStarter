import { redirect, error } from '@sveltejs/kit'
import { getOrCreateCustomerId } from '../../subscription_helpers' 
import type { PageServerLoad } from './$types'
import { PRIVATE_STRIPE_API_KEY} from '$env/static/private'
import Stripe from 'stripe'
const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, {apiVersion: '2023-08-16'})

export const load: PageServerLoad = async ({ params, url, locals: { supabase, getSession, supabaseServiceRole } }) => {
    const session = await getSession()
    if (!session) {
        throw redirect(303, '/login')
    }

    let {error: idError, customerId } = await getOrCreateCustomerId({supabaseServiceRole, session})
    if (idError || !customerId) {
        console.log("Error in customer id fetch: \n" + JSON.stringify(idError))
        throw error(500, {
            message: 'Unknown error. If issue persists, please contact us.'
        })
    }

    const stripeSession = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: params.slug,
            quantity: 1,
          },
        ],
        customer: customerId,
        mode: 'subscription',
        success_url: `${url.origin}/account/billing`,
        cancel_url: `${url.origin}/account/billing`,
    })
    
    throw redirect(303, stripeSession.url ?? '/pricing')
}