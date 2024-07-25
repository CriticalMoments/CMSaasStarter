import { Resend } from "resend"
import { env } from "$env/dynamic/private"

// Sends an email to the admin email address.
// Does not throw errors, but logs them.
export const sendAdminEmail = async ({
  subject,
  body,
}: {
  subject: string
  body: string
}) => {
  // Check admin email is setup
  if (!env.PRIVATE_ADMIN_EMAIL) {
    return
  }

  try {
    const resend = new Resend(env.PRIVATE_RESEND_API_KEY)
    const resp = await resend.emails.send({
      from: env.PRIVATE_FROM_ADMIN_EMAIL || env.PRIVATE_ADMIN_EMAIL,
      to: [env.PRIVATE_ADMIN_EMAIL],
      subject: "ADMIN_MAIL: " + subject,
      text: body,
    })

    if (resp.error) {
      console.log("Failed to send admin email, error:", resp.error)
    }
  } catch (e) {
    console.log("Failed to send admin email, error:", e)
  }
}
