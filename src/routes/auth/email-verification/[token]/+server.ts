import { auth } from "$lib/server/lucia";
import { validateEmailVerificationToken } from "$lib/server/token";
import { error } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, locals }) => {
  const { token } = params;
  try {
    let userId;
    try {
      userId = await validateEmailVerificationToken(token);
    } catch (e) {
      throw error(400, (e as Error).message);
    }
    const user = await auth.getUser(userId);
    await auth.invalidateAllUserSessions(user.userId);
    await auth.updateUserAttributes(user.userId, { email_verified: true });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {}
    });
    locals.auth.setSession(session);
    return new Response(null, { status: 302, headers: { Location: "/dashboard" } });
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      throw error(500, "An unknown error occurred");
    } else {
      // probably a 400 error from an invalid or expired link
      throw e;
    }
  }
};
