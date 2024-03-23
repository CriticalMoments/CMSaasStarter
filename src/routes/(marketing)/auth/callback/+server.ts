import { redirect } from "@sveltejs/kit";
import { isAuthApiError } from "@supabase/supabase-js";

export const GET = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get("code");
	if (code) {
		try {
			await supabase.auth.exchangeCodeForSession(code);
		} catch (error) {
			// If you open in another browser, need to redirect to login.
			// Should not display error
			if (isAuthApiError(error)) {
				console.error("Error auth api error: ", error);
				throw redirect(303, "/login/sign_in?verified=true");
			} else {
				console.error("Other Error: ", error);
				throw error;
			}
		}
	}

	console.log("i got here 1");

	const next = url.searchParams.get("next");
	if (next) {
		throw redirect(303, next);
	}

	throw redirect(303, "/account");
};
