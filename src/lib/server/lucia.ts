import { lucia } from "lucia";

// import { neonConfig, Pool } from "@neondatabase/serverless";
// import ws from "ws";

// necessary to make websockets work in node
// neonConfig.webSocketConstructor = ws;

import { prisma } from "@lucia-auth/adapter-prisma";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { db } from "./database";

// import { pg } from "@lucia-auth/adapter-postgresql";
// import { DATABASE_URL } from "$env/static/private";
// const db = new Pool({ connectionString: DATABASE_URL });

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
