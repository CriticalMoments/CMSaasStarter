import { fail, redirect } from '@sveltejs/kit'

export const actions = {
  updateProfile: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()
    const fullName = formData.get('fullName') as string
    const companyName = formData.get('companyName') as string
    const website = formData.get('website') as string
    
    let validationError
    let errorFields = []
    if (!fullName) {
      validationError = 'Name is required'
      errorFields.push('fullName')
    }
    if (!companyName) {
      validationError = 'Company name is required. If this is a hobby project or personal app, please put your name.'
      errorFields.push('companyName')
    }
    if (!website) {
      validationError = 'Company website is required. App Store urls work if you don\'t have a website.'
      errorFields.push('website')
    }
    if (validationError) {
      return fail(400, {
        errorMessage: validationError,
        errorFields,
        fullName,
        companyName,
        website
      })
    }

    const session = await getSession()

    const { error } = await supabase.from('profiles').upsert({
      id: session?.user.id,
      full_name: fullName,
      company_name: companyName,
      website: website,
      updated_at: new Date(),
    })

    if (error) {
      return fail(500, {
        errorMessage: 'Unknown error. If this persists please contact us.',
        fullName,
        companyName,
        website,
      })
    }

    return {
      fullName,
      companyName,
      website,
    }
  },
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      throw redirect(303, '/')
    }
  },
}