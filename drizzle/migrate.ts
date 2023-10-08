import { createClient } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";

import "dotenv/config";

async function runMigrate() {
  if (!process.env.PGDATABASE) {
    throw new Error("PGDATABASE is not defined");
  }
  const client = createClient({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  const db = drizzle(client);

  console.log("Running migrations...");

  const start = Date.now();
  await migrate(db, { migrationsFolder: "drizzle/migrations" });
  const end = Date.now();

  console.log(`✅ Migrations completed in ${end - start}ms`);

  await client.end();
  process.exit(0);
}

runMigrate().catch((err) => {
  console.error("❌ Migration failed");
  console.error(err);
  process.exit(1);
});
