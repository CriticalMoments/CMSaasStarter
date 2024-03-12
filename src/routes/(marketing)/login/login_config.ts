import { ThemeSupa } from "@supabase/auth-ui-shared"
import type { Provider } from "@supabase/supabase-js"

export const oauthProviders = ["github"] as Provider[]

// use the css variables from DaisyUI to style Supabase auth template
export const sharedAppearance = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "oklch(var(--p))",
        brandAccent: "oklch(var(--ac))",
        inputText: "oklch(var(--n))",
        brandButtonText: "oklch(var(--pc))",
        messageText: "oklch(var(--b))",
        dividerBackground: "oklch(var(--n))",
        inputLabelText: "oklch(var(--n))",
        defaultButtonText: "oklch(var(--n))",
        anchorTextColor: "oklch(var(--p))",
      },
      fontSizes: {
        baseInputSize: "16px",
      },
    },
  },
  className: {
    button: "authBtn",
  },
}
