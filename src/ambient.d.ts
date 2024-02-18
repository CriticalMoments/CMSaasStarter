declare global {
  type FormAccountUpdateResult = {
    errorMessage?: string
    errorFields?: string[]
    fullName?: string
    companyName?: string
    website?: string
    email?: string
  }

  type Post = {
    link: string
    date: string // date is a string 'YYYY-MM-DD'
    title: string
    description: string
    parsedDate?: Date // Optional because it's added dynamically
  }
}

export {}
