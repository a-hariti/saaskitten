import { auth } from "$lib/server/lucia";
import { validateEmailVerificationToken } from "$lib/server/token";
import { error } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, locals }) => {
  const { token } = params;
  try {
    const userId = await validateEmailVerificationToken(token);
    const user = await auth.getUser(userId);
    await auth.invalidateAllUserSessions(user.userId);
    await auth.updateUserAttributes(user.userId, { email_verified: true });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {}
    });
    locals.auth.setSession(session);
    return new Response(null, { status: 302, headers: { Location: "/dashboard" } });
  } catch(e) {
    console.error(e);
    throw error(400, "Invalid email verification link");
  }
};
