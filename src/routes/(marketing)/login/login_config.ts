import { ThemeSupa } from "@supabase/auth-ui-shared"
import type { Provider } from "@supabase/supabase-js"

export const oauthProviders = ["github"] as Provider[]

// use the css variables from DaisyUI to style Supabase auth template
export let sharedAppearance = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "hsl(var(--p))",
        brandAccent: "hsl(var(--pf))",
        inputText: "hsl(var(--n))",
        inputBackground: "white",
        defaultButtonBackground: '#F9F7F3',
        brandButtonText: "hsl(var(--pc))",
        messageText: "hsl(var(--b))",
        dividerBackground: "hsl(var(--n))",
        inputLabelText: "hsl(var(--n))",
        defaultButtonText: "hsl(var(--n))",
        anchorTextColor: "hsl(var(--nc))",
      },
      fonts: {
        buttonFontFamily: 'Avenir, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
      },
      fontSizes: {
        baseInputSize: "16px"
      }
    },
  },
  className: {
    button: "authBtn",
  },
}
