import { fail, redirect } from '@sveltejs/kit'

export const actions = {
  updatePrimaryEmail: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    
    let validationError
    if (!email || email === '') {
      validationError = 'An email address is required'
    }
    // Dead simple check -- there's no standard here (which is followed),
    // and lots of errors will be missed until we actually email to verify, so 
    // just do that
    else if (!email.includes('@')) {
      validationError = 'A valid email address is required'
    }
    if (validationError) {
      return fail(400, {
        errorMessage: validationError,
        errorFields: ['email'],
        email
      })
    }

    const session = await getSession()

    const { error } = await supabase.auth.updateUser({email: email})

    if (error) {
      return fail(500, {
        errorMessage: 'Unknown error. If this persists please contact us.',
        email,
      })
    }

    return {
      email
    }
  },
  updatePassword: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()
    const newPassword1 = formData.get('newPassword1') as string
    const newPassword2 = formData.get('newPassword2') as string
    const currentPassword = formData.get('currentPassword') as string

    let validationError
    let errorFields = []
    if (!newPassword1) {
      validationError = "You must type a new password"
      errorFields.push('newPassword1')
    }
    if (!newPassword2) {
      validationError = 'You must type the new password twice'
      errorFields.push('newPassword2')
    }
    if (newPassword1.length < 6) {
      validationError = "The new password must be at least 6 charaters long"
      errorFields.push('newPassword1')
    }
    if (newPassword1.length > 72) {
      validationError = "The new password can be at most 72 charaters long"
      errorFields.push('newPassword1')
    }
    if (newPassword1 != newPassword2) {
      validationError = "The passwords don't match"
      errorFields.push('newPassword1')
      errorFields.push('newPassword2')
    }
    if (!currentPassword) {
      validationError = "You must include your current password. If you forgot it, use the reset password functionality."
      errorFields.push('currentPassword')
    }
    if (validationError) {
      return fail(400, {
        errorMessage: validationError,
        errorFields: [...new Set(errorFields)], // unique values
        newPassword1,
        newPassword2,
        currentPassword
      })
    }

    const session = await getSession()

    {
        // Check current password before updating
        const { error } = await supabase.auth.signInWithPassword({
          email: session?.user.email || '',
          password: currentPassword,
        })
        if (error) {
          // Not ideal, error message would be better.
          // but this is unforunately logging the user out so this is
          // better than leaving them in the admin console
          throw redirect(303, '/login')
        }
    }

    {
        const { error } = await supabase.auth.updateUser({password: newPassword1})

        if (error) {
            return fail(500, {
                errorMessage: 'Unknown error. If this persists please contact us.',
                newPassword1,
                newPassword2,
                currentPassword
            })
        }
    }

    return {
        newPassword1,
        newPassword2,
        currentPassword
    }
  },
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