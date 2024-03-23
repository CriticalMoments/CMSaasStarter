import { ThemeSupa } from "@supabase/auth-ui-shared";
import type { Provider } from "@supabase/supabase-js";

export const oauthProviders = ["google"] as Provider[];

// use the css variables from DaisyUI to style Supabase auth template
export const sharedAppearance = {
	theme: ThemeSupa,

	className: {
		button: "authBtn",
	},
};
