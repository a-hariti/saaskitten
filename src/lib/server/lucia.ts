import { lucia } from "lucia";

import { pg } from "@lucia-auth/adapter-postgresql";
import { sveltekit } from "lucia/middleware";
import { createPool } from "@vercel/postgres";
import { dev } from "$app/environment";
import { POSTGRES_URL } from "$env/static/private";

const pool = createPool({ connectionString: POSTGRES_URL });

export const auth = lucia({
  // "PROD" if deployed to HTTPS
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  sessionCookie: { expires: false },
  adapter: pg(pool, {
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
