import { redirect } from "@sveltejs/kit"
import { STABILITY_API_KEY } from "$env/static/private"

export const actions = {
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      throw redirect(303, "/")
    }
  },
  new: async ({ request, locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (!session) {
      throw redirect(303, "/login")
    }

    const profile = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session?.user?.id?.toString())
      .limit(1)

    // call the Stability AI endpoint and generate the imag
    const formData = await request.formData()
    const prompt = formData.get("prompt")

    const engineId = "stable-diffusion-xl-1024-v1-0"
    const apiHost = "https://api.stability.ai"
    const apiKey = STABILITY_API_KEY

    const res = await fetch(
      `${apiHost}/v1/generation/${engineId}/text-to-image`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "image/png",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text:
                prompt +
                ", line art outline, friendly, can be used as a coloring sheet, minimalistic, black and white, simple, few details, thin lines, lots of white space",
              weight: 1,
            },
          ],
          disable_safety_checker: true,
          negative_prompt:
            "color, ugly, low-res, deformed, mutation, blurry, malformed, disgusting, mutilated, mangled, old, color, dark, black",
          cfg_scale: 10,
          clip_guidance_preset: "FAST_BLUE",
          sampler: "DDIM",
          height: 1216,
          width: 832,
          steps: 50,
          samples: 1,
        }),
      },
    )
    const imageBlob = await res.blob()

    // save the blob to supabase storage
    const imageId = crypto.randomUUID()
    const imagePath = `${profile.data?.[0]?.id}/${imageId}`
    const file = new File([imageBlob], imageId, { type: "image/png" })
    await supabase.storage.from("pages").upload(imagePath, file)

    // add information to images table
    try {
      await supabase
        .from("images")
        .insert([
          {
            owner_id: profile.data?.[0]?.id,
            prompt: prompt,
          },
        ])
        .select()
    } catch (error) {
      return { error: error }
    }
  },

  // get all images of the user
}
