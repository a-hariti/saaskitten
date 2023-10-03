import { auth } from "$lib/server/lucia";
import { fail } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { users } from "$lib/server/db/schema";
import { generatePasswordResetToken } from "$lib/server/token";
import { sendPasswordResetLink } from "$lib/server/email";

import type { Actions, PageServerLoad } from "./$types";
import { eq } from "drizzle-orm";
import { message, setError, superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
  return {
    form: superValidate(formSchema)
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    // form validation
    const form = await superValidate(request, formSchema);
    if (!form.valid) {
      return fail(400, { form });
    }

    const { email } = form.data;
    try {
      const [storedUser] = await db.select().from(users).where(eq(users.email, email));

      if (!storedUser) {
        return setError(form, "User does not exist", { status: 404 });
      }
      const user = auth.transformDatabaseUser(storedUser);
      const token = await generatePasswordResetToken(user.userId);
      await sendPasswordResetLink(user.email, token);
      return message(form, "Password reset link sent to your email");
    } catch (e) {
      console.error(e);
      return setError(form, "An unknown error occurred", { status: 500 });
    }
  }
};
