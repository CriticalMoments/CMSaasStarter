import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	updateEmail: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			throw redirect(303, "/login");
		}

		const formData = await request.formData();
		const email = formData.get("email") as string;

		let validationError;
		if (!email || email === "") {
			validationError = "An email address is required";
		}
		// Dead simple check -- there's no standard here (which is followed),
		// and lots of errors will be missed until we actually email to verify, so
		// just do that
		else if (!email.includes("@")) {
			validationError = "A valid email address is required";
		}
		if (validationError) {
			return fail(400, {
				errorMessage: validationError,
				errorFields: ["email"],
				email,
			});
		}

		// Supabase does not change the email until the user verifies both
		// if 'Secure email change' is enabled in the Supabase dashboard
		const { error } = await supabase.auth.updateUser({ email: email });

		if (error) {
			return fail(500, {
				errorMessage:
					"Unknown error. If this persists please contact us.",
				email,
			});
		}

		return {
			email,
		};
	},
	deleteAccount: async ({
		locals: { supabase, supabaseServiceRole, getSession },
	}) => {
		const session = await getSession();
		if (!session) {
			throw redirect(303, "/login");
		}

		const { error } = await supabaseServiceRole.auth.admin.deleteUser(
			session.user.id,
			true,
		);
		if (error) {
			return fail(500, {
				errorMessage:
					"Unknown error. If this persists please contact us.",
			});
		}

		await supabase.auth.signOut();
		throw redirect(303, "/");
	},
	updateProfile: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (!session) {
			throw redirect(303, "/login");
		}

		const formData = await request.formData();
		const fullName = formData.get("fullName") as string;
		const companyName = formData.get("companyName") as string;
		const website = formData.get("website") as string;

		let validationError;
		const fieldMaxTextLength = 50;
		const errorFields = [];
		if (!fullName) {
			validationError = "Name is required";
			errorFields.push("fullName");
		} else if (fullName.length > fieldMaxTextLength) {
			validationError = `Name must be less than ${fieldMaxTextLength} characters`;
			errorFields.push("fullName");
		}
		if (!companyName) {
			validationError =
				"Company name is required. If this is a hobby project or personal app, please put your name.";
			errorFields.push("companyName");
		} else if (companyName.length > fieldMaxTextLength) {
			validationError = `Company name must be less than ${fieldMaxTextLength} characters`;
			errorFields.push("companyName");
		}
		if (!website) {
			validationError =
				"Company website is required. An app store URL is a good alternative if you don't have a website.";
			errorFields.push("website");
		} else if (website.length > fieldMaxTextLength) {
			validationError = `Company website must be less than ${fieldMaxTextLength} characters`;
			errorFields.push("website");
		}
		if (validationError) {
			return fail(400, {
				errorMessage: validationError,
				errorFields,
				fullName,
				companyName,
				website,
			});
		}

		const { error } = await supabase.from("profiles").upsert({
			id: session?.user.id,
			full_name: fullName,
			company_name: companyName,
			website: website,
			updated_at: new Date(),
		});

		if (error) {
			return fail(500, {
				errorMessage:
					"Unknown error. If this persists please contact us.",
				fullName,
				companyName,
				website,
			});
		}

		return {
			fullName,
			companyName,
			website,
		};
	},
	signout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, "/");
		} else {
			throw redirect(303, "/");
		}
	},
};
