import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

import { message, superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";

import { generateEmailVerificationToken } from "$lib/server/token";
import { sendEmailVerificationLink } from "$lib/server/email";

import { db } from "$lib/server/database";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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
      const user = await auth.createUser({
        key: {
          providerId: "email", // auth method
          providerUserId: email.toLowerCase(), // unique id when using "email" auth method
          password // hashed by Lucia
        },
        attributes: {
          email: email.toLowerCase(),
          email_verified: false
        }
      });
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {}
      });
      locals.auth.setSession(session); // set session cookie
      const token = await generateEmailVerificationToken(user.userId);
      await db.plan.create({
        data: {
          user_id: user.userId,
          plan: "free"
        }
      });
      await sendEmailVerificationLink(session.user.email, token);
    } catch (e) {
      console.error(e);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (e instanceof PrismaClientKnownRequestError && e.code == "P2002") {
        return message(form, "Account already exists", { status: 400 });
      }
      return message(form, "An unknown error occurred", { status: 500 });
    }
    // make sure you don't throw inside a try/catch block!
    throw redirect(302, "/auth/email-verification");
  }
};
