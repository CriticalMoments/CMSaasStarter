import nodemailer from "nodemailer"

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
  // Check admin email is set.
  if (!env.PRIVATE_ADMIN_EMAIL) {
    return
  }

  // Check if smtp settings are set.
  if (
    !env.PRIVATE_SMTP_HOST ||
    !env.PRIVATE_SMTP_USER ||
    !env.PRIVATE_SMTP_PASS
  ) {
    console.log(
      "No smtp settings, not sending admil email. See CMSaasStarter setup instructions.",
    )
    return
  }

  // Default to port 587 if not set.
  let port = 587
  if (env.PRIVATE_SMTP_PORT) {
    port = parseInt(env.PRIVATE_SMTP_PORT)
  }

  try {
    const transporter = nodemailer.createTransport({
      host: env.PRIVATE_SMTP_HOST,
      port: port,
      secure: port === 465, // https://nodemailer.com/smtp/
      requireTLS: true, // Email should be encrypted in 2024
      auth: {
        user: env.PRIVATE_SMTP_USER,
        pass: env.PRIVATE_SMTP_PASS,
      },
    })

    const info = await transporter.sendMail({
      from: env.PRIVATE_ADMIN_EMAIL,
      to: env.PRIVATE_ADMIN_EMAIL,
      subject: "ADMIN_MAIL: " + subject,
      text: body,
    })

    if (info.rejected && info.rejected.length > 0) {
      console.log("Failed to send admin email, rejected:", info.rejected)
    }
  } catch (e) {
    console.log("Failed to send admin email, error:", e)
  }
}
