import { auth } from "$lib/server/lucia";
import { LuciaError } from "lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

import { message, superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (session) {
    if (!session.user.email_verified) {
      throw redirect(302, "/auth/email-verification");
    }
    // user is logged in
    throw redirect(302, "/dashboard");
  }
  return {
    form: superValidate(formSchema)
  };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    // form validation
    const form = await superValidate(request, formSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const { email, password } = form.data;
    try {
      // find user by key
      // and validate password
      const key = await auth.useKey("email", email.toLowerCase(), password);
      const session = await auth.createSession({
        userId: key.userId,
        attributes: {}
      });
      locals.auth.setSession(session); // set session cookie
    } catch (e) {
      console.log("error: ", e);
      if (e instanceof LuciaError && (e.message === "AUTH_INVALID_KEY_ID" || e.message === "AUTH_INVALID_PASSWORD")) {
        // user does not exist
        // or invalid password
        return message(form, "Incorrect email or password", { status: 400 });
      }
      return message(form, "An unknown error occurred", { status: 500 });
    }
    // make sure you don't throw inside a try/catch block!
    throw redirect(302, "/dashboard");
  }
};
