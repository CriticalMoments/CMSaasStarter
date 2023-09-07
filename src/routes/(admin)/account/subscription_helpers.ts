import { PRIVATE_STRIPE_API_KEY} from '$env/static/private'
import Stripe from 'stripe'
const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, {apiVersion: '2023-08-16'})

export const getOrCreateCustomerId = async ({ supabaseServiceRole, session }) => {
    const {data: dbCustomer, error } = await supabaseServiceRole
        .from('stripe_customers')
        .select('stripe_customer_id')
        .eq('user_id', session.user.id)
        .single()

    if (error && error.code != 'PGRST116') { // PGRST116 == no rows
        return {error: error}
    }

    if (dbCustomer?.stripe_customer_id) {
        return {customerId: dbCustomer.stripe_customer_id}
    }

    // Fetch data needed to create customer
    let {data: profile, error: profileError} = await supabaseServiceRole
        .from('profiles')
        .select(`full_name, website, company_name`)
        .eq('id', session.user.id)
        .single()
    if (profileError) {
        return {error: profileError}
    }

    // Create a stripe customer
    let customer
    try {
        customer = await stripe.customers.create({
            email: session.user.email,
            name: profile.data?.full_name ?? '',
            metadata: {
                user_id: session.user.id,
                company_name: profile.data?.company_name ?? '',
                website: profile.data?.website ?? ''
            }
        })
    } catch (e) {
        return {error: e}
    }
    
    if (!customer.id) {
        return {error: "Unknown stripe user creation error"}
    }

    // insert instead of upsert so we never over-write. PK ensures later attempts error.
    const {insertError} = await supabaseServiceRole
        .from('stripe_customers')
        .insert({
            user_id: session.user.id,
            stripe_customer_id: customer.id,
            updated_at: new Date()
        })
    
    if (insertError) {
        return {error: insertError}
    }

    return {customerId: customer.id}
}
