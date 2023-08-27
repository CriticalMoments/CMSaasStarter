import { fail, redirect } from '@sveltejs/kit'
import { page } from '$app/stores';  
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      throw redirect(303, '/')
    } 
    return {}
}


