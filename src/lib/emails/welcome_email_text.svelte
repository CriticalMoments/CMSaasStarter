<script lang="ts">
  import { WebsiteBaseUrl } from '../../config';

  // Email template is MIT open source from https://github.com/leemunroe/responsive-html-email-template
  // See full license https://github.com/leemunroe/responsive-html-email-template/blob/master/license.txt

  // must be set to true to render email on server
  export const ssr = true

  // Define all your props here
  export let companyName: string = ""
</script>

Welcome to {companyName}! 

This is a quick sample of a welcome email. You can customize this email to fit your needs.

To unsubscribe, visit: {WebsiteBaseUrl}/account/settings/change_email_subscription
