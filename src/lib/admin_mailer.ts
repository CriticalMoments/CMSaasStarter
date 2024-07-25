// Optional dependency, only used if platform suppport node.js (not Cloudflare Workers).
let nodemailer: typeof import("nodemailer") | undefined
try {
  nodemailer = await import("nodemailer")
} catch (e) {
  nodemailer = undefined
}

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

  // Chech if we have a valid nodemailer.
  const canCreateTransport = nodemailer?.createTransport
  if (canCreateTransport) {
    return await sendAdminEmailNodemailer({ subject, body })
  } else {
    console.log(
      "This environment does not support sending emails. Nodemailer requires node.js and doesn't work in environments like Cloudflare Workers.",
    )
  }
}

const sendAdminEmailNodemailer = async ({
  subject,
  body,
}: {
  subject: string
  body: string
}) => {
  if (!nodemailer) {
    console.log(
      "This environment does not support sending emails. Nodemailer requires node.js and doesn't work in environments like Cloudflare Workers.",
    )
    return
  }

  // Check if smtp settings are set.
  if (
    !env.PRIVATE_SMTP_HOST ||
    !env.PRIVATE_SMTP_USER ||
    !env.PRIVATE_SMTP_PASS
  ) {
    console.log(
      "No smtp settings, not sending admin email. See CMSaasStarter setup instructions.",
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
