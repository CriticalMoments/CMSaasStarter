// src/hooks.server.ts
import { PRIVATE_SUPABASE_SERVICE_ROLE } from "$env/static/private"
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public"
import { createServerClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => event.cookies.getAll(),
        /**
         * SvelteKit's cookies API requires `path` to be explicitly set in
         * the cookie options. Setting `path` to `/` replicates previous/
         * standard behavior.
         */
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            event.cookies.set(name, value, { ...options, path: "/" })
          })
        },
      },
    },
  )

  event.locals.supabaseServiceRole = createClient(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SUPABASE_SERVICE_ROLE,
    { auth: { persistSession: false } },
  )

  // https://github.com/supabase/auth-js/issues/888#issuecomment-2189298518
  if ("suppressGetSessionWarning" in event.locals.supabase.auth) {
    // @ts-expect-error - suppressGetSessionWarning is not part of the official API
    event.locals.supabase.auth.suppressGetSessionWarning = true
  } else {
    console.warn(
      "SupabaseAuthClient#suppressGetSessionWarning was removed. See https://github.com/supabase/auth-js/issues/888.",
    )
  }

  /**
   * Unlike `supabase.auth.getSession()`, which returns the session _without_
   * validating the JWT, this function also calls `getUser()` to validate the
   * JWT before returning the session.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    if (!session) {
      return { session: null, user: null, amr: null }
    }

    const {
      data: { user },
      error: userError,
    } = await event.locals.supabase.auth.getUser()
    if (userError) {
      // JWT validation has failed
      return { session: null, user: null, amr: null }
    }

    const { data: aal, error: amrError } =
      await event.locals.supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    if (amrError) {
      return { session, user, amr: null }
    }

    return { session, user, amr: aal.currentAuthenticationMethods }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version"
    },
  })
}
