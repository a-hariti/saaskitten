import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import { isValidPasswordResetToken, validatePasswordResetToken } from "$lib/server/token";

import type { PageServerLoad, Actions } from "./$types";
import { formSchema } from "./schema";
import { message, superValidate } from "sveltekit-superforms/server";

export const load: PageServerLoad = async ({ params }) => {
  const { token } = params;
  const validToken = await isValidPasswordResetToken(token);
  if (!validToken) {
    throw redirect(302, "/auth/password-reset");
  }
  return {
    form: superValidate(formSchema)
  };
};

export const actions: Actions = {
  default: async ({ request, params, locals }) => {
    // form validation
    const form = await superValidate(request, formSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const { password } = form.data;
    try {
      const { token } = params;
      const userId = await validatePasswordResetToken(token);
      let user = await auth.getUser(userId);
      await auth.invalidateAllUserSessions(user.userId);
      await auth.updateKeyPassword("email", user.email, password);
      if (!user.email_verified) {
        user = await auth.updateUserAttributes(user.userId, {
          email_verified: true
        });
      }
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {}
      });
      locals.auth.setSession(session);
    } catch (e) {
      console.error(e);
      return message(form, "Invalid or expired password reset link", { status: 400 });
    }
    throw redirect(302, "/dashboard");
  }
};
