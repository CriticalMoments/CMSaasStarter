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

export const sendTemplatedEmail = async ({
  subject,
  to_emails,
  from_email,
  template_name,
  template_properties,
}: {
  subject: string
  to_emails: string[]
  from_email: string
  template_name: string
  template_properties: Record<string, string>
}) => {
  if (!env.PRIVATE_RESEND_API_KEY) {
    // email not configured.  Emails are optional so no error is thrown
    return
  }

  let plaintextBody: string | undefined = undefined
  try {
    const emailTemplate = await import(
      `./emails/${template_name}_text.svelte`
    ).then((mod) => mod.default)
    const { html } = emailTemplate.render(template_properties)
    plaintextBody = html
  } catch (e) {
    // ignore, plaintextBody is optional
    plaintextBody = undefined
  }

  let htmlBody: string | undefined = undefined
  try {
    const emailTemplate = await import(
      `./emails/${template_name}_html.svelte`
    ).then((mod) => mod.default)
    const { html } = emailTemplate.render(template_properties)
    htmlBody = html
  } catch (e) {
    // ignore, htmlBody is optional
    htmlBody = undefined
  }

  if (!plaintextBody && !htmlBody) {
    console.log(
      "No email body: requires plaintextBody or htmlBody. Template: ",
      template_name,
    )
    return
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const email: any = {
      from: from_email,
      to: to_emails,
      subject: subject,
    }
    if (plaintextBody) {
      email.text = plaintextBody
    }
    if (htmlBody) {
      email.html = htmlBody
    }
    const resend = new Resend(env.PRIVATE_RESEND_API_KEY)
    const resp = await resend.emails.send(email)

    if (resp.error) {
      console.log("Failed to send email, error:", resp.error)
    }
  } catch (e) {
    console.log("Failed to send email, error:", e)
  }
}
