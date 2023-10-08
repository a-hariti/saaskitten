import { lucia } from "lucia";

import { neonConfig, Pool } from "@neondatabase/serverless";
import ws from "ws";

// necessary to make websockets work in node
neonConfig.webSocketConstructor = ws;

import { pg } from "@lucia-auth/adapter-postgresql";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { DATABASE_URL } from "$env/static/private";

const db = new Pool({ connectionString: DATABASE_URL });

export const auth = lucia({
  // "PROD" if deployed to HTTPS
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  sessionCookie: { expires: false },
  adapter: pg(db, {
    user: "users",
    session: "user_sessions",
    key: "user_keys"
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
