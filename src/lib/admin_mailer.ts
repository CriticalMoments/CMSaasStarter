// Optional dependency, only used if platform suppport node.js (not Cloudflare Workers).
let nodemailer: typeof import("nodemailer") | undefined
try {
  nodemailer = await import("nodemailer")
} catch (e) {
  // nodemailer is not installed (Cloudflare Workers). Do nothing.
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
    return await sendAdminEmailCloudflareWorkers({ subject, body })
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

// https://blog.cloudflare.com/sending-email-from-workers-with-mailchannels/
const sendAdminEmailCloudflareWorkers = async ({
  subject,
  body,
}: {
  subject: string
  body: string
}) => {
  const send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: env.PRIVATE_ADMIN_EMAIL }],
        },
      ],
      from: {
        email: env.PRIVATE_ADMIN_EMAIL,
      },
      subject: "ADMIN_MAIL: " + subject,
      content: [
        {
          type: "text/plain",
          value: body,
        },
      ],
    }),
  })

  const response = await fetch(send_request)
  if (!response.ok) {
    const issue = await response.text()
    console.log("Error sending admin email with MailChannels API", issue)
    return
  }
}
