import type { Config } from "drizzle-kit";
import { configDotenv } from "dotenv";

configDotenv();

if (
  !process.env.POSTGRES_HOST ||
  !process.env.POSTGRES_USER ||
  !process.env.POSTGRES_PASSWORD ||
  !process.env.POSTGRES_DATABASE
) {
  throw new Error("Missing environment variables");
}

export default {
  schema: "./src/lib/server/db/schema.ts",
  driver: "pg",
  out: "drizzle/migrations",
  dbCredentials: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: true
  }
} satisfies Config;
