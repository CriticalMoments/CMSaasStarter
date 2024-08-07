declare global {
  type FormAccountUpdateResult = {
    errorMessage?: string
    errorFields?: string[]
    fullName?: string
    companyName?: string
    website?: string
    email?: string
    isGcuAgreed?: boolean | null
    isNewsletterAgreed?: boolean | null
  }
}

export {}
