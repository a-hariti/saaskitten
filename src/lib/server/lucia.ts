import { lucia } from "lucia";

import { prisma } from "@lucia-auth/adapter-prisma";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { db } from "./database";

export const auth = lucia({
  // "PROD" if deployed to HTTPS
  env: dev ? "DEV" : "PROD",

  middleware: sveltekit(),
  sessionCookie: { expires: false },
  adapter: prisma(db, {
    user: "user", // model User {}
    key: "key", // model Key {}
    session: "session" // model Session {}
  }),
  getUserAttributes: (data) => {
    return {
      id: data.id,
      email: data.email,
      email_verified: data.email_verified
    };
  }
});

export type Auth = typeof auth;
