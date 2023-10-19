import { redirect } from "@sveltejs/kit";
import { db } from "./database";

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
  const plan = await db.plan.findFirst({ where: { user_id: user.userId } })
  return { user: { ...user, plan: plan!.plan } };
};
