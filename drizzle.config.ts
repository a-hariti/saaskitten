import type { Config } from "drizzle-kit";
import { configDotenv } from "dotenv";

configDotenv();

if (!process.env.PGHOST || !process.env.PGUSER || !process.env.PGPASSWORD || !process.env.PGDATABASE) {
  throw new Error("Missing environment variables");
}

export default {
  schema: "./src/lib/server/db/schema.ts",
  driver: "pg",
  out: "drizzle/migrations",
  dbCredentials: {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: true
  }
} satisfies Config;
