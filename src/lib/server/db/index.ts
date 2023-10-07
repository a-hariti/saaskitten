import { drizzle } from "drizzle-orm/vercel-postgres";
import { createPool } from "@vercel/postgres";
import { DATABASE_URL } from "$env/static/private";
import { dev } from "$app/environment";

const pool = createPool({ connectionString: DATABASE_URL });

export const db = drizzle(pool, {
  logger: dev
});
