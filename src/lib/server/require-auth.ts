import { redirect } from "@sveltejs/kit";
import { plans } from "$lib/server/db/schema";
import { dbHttp } from "$lib/server/db";
import { eq } from "drizzle-orm";

/**
 * validate session and return user with plan
 * if user is not logged in, redirect to login page
 *  usage:
 *  `const { user } = await requireLogin(event.locals.auth);`
 **/
export const requireLogin = async (auth: App.Locals["auth"]) => {
  const session = await auth.validate();
  if (!session) {
    throw redirect(302, "/auth/login");
  }
  const { user } = session;
  if (!user.email_verified) {
    throw redirect(302, "/auth/email-verification");
  }

  const [plan] = await dbHttp.select().from(plans).where(eq(plans.userId, user.userId));
  return { user: { ...user, plan: plan.plan } };
};
