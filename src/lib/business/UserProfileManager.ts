/**
 * User Profile Manager
 * This class is responsible for managing the user profile data
 */
export class UserProfileManager {
  private supabase: any
  private session: any

  constructor(supabase: any, session: any) {
    this.supabase = supabase
    this.session = session
  }

  /**
   * Get the user profile
   */
  async getProfile() {
    let profile = null
    const user_id = this.session.user.id
    const { data: profileData, error: errorData } = await this.supabase
      .from("profiles")
      .select(`*`)
      .eq("id", user_id)
      .single()

    if (profileData && !errorData) {
      profile = profileData
    }

    return profile
  }
}
