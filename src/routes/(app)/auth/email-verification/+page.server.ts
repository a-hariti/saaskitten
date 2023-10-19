import { redirect, fail } from "@sveltejs/kit";
import { generateEmailVerificationToken } from "$lib/server/token";
import { sendEmailVerificationLink } from "$lib/server/email";

import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, "/auth/login");
  if (session.user.email_verified) {
    throw redirect(302, "/dashboard");
  }
  return {};
};

export const actions: Actions = {
  default: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) throw redirect(302, "/auth/login");
    if (session.user.email_verified) {
      throw redirect(302, "/dashboard");
    }
    try {
      const token = await generateEmailVerificationToken(session.user.userId);
      await sendEmailVerificationLink(session.user.email, token);
      return { success: true };
    } catch {
      return fail(500, { message: "An unknown error occurred" });
    }
  }
};
