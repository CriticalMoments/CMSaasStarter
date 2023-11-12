import { PRIVATE_GO_API_ROOT, PRIVATE_GO_API_TOKEN } from '$env/static/private';

function errorResponse(status: number, errorMsg: string) {
  var body = {
    "errorMessage": errorMsg
  }
  return new Response(
    JSON.stringify(body), {
      status: status,
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
}

export async function POST({ request, locals: { supabaseServiceRole} }) {
  const body = await request.text()

    // Check the app ID is registered
    let json: any = {}
    try {
      json = JSON.parse(body)
    } catch(e) {
      return errorResponse(400, "Invalid JSON.")
    }
    const appId = json.appId as string
    if (!appId) {
      return errorResponse(400, "Missing AppId in config file. An App ID is required.")
    }
    // Lookup the app in the DB, ensuring it exists. Later we can perform more checks (like subscription level)
    let { data: dbApp, error: appError } = await supabaseServiceRole
      .from("apps")
      .select(`id, bundle_id, user_id`)
      .eq("bundle_id", appId)
      .single()
    if (appError) {
      return errorResponse(400, "The app ID \"" + appId + "\" is not registered. Please register your app ID.")
    }

    // Call to go server to sign the config
    let url = `${PRIVATE_GO_API_ROOT}/sign_config`
    const response = await fetch(url, {
      method: "POST",
      body: body,
      headers: {
        "X-Auth-Token": PRIVATE_GO_API_TOKEN,
        "Content-Type": "application/json",
      }
    })
    if (response.status != 200) {
      let errorMessage = "Unknown error. If Problem persists, please contact us."
      // Parse server error if we can. Go server checks that it's user-presentable
      try {
        const json = await response.json()
        if (json?.error_message) {
          errorMessage = json.error_message
        }
      } catch(e) {}
      return errorResponse(400, errorMessage)
    }

    // Return the signed config
    const signedConfig = await response.text()
    return new Response(signedConfig)
}