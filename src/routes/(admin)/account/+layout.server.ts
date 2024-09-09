import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { session },
  cookies,
}) => {
  // Session here is from authGuard hook

  return {
    session,
    cookies: cookies.getAll(),
  }
}
