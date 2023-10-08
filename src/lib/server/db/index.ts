import { Pool, neon, neonConfig } from "@neondatabase/serverless";
import { drizzle as drizzleWebSocket } from "drizzle-orm/neon-serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import ws from "ws";
import { dev } from "$app/environment";
import { DATABASE_URL } from "$env/static/private";

// necessary to make websockets work in node
neonConfig.webSocketConstructor = ws;

// Enable connection caching over http
neonConfig.fetchConnectionCache = true;

const pool = new Pool({ connectionString: DATABASE_URL });
const httpConnection = neon(DATABASE_URL);

// the reason we're exporting both is to use websockets when you need transactions
// otherwise use http as it is faster as per the docs:
// https://neon.tech/docs/serverless/serverless-driver#when-to-use-the-neon-function-vs-pool-or-client
export const dbWs = drizzleWebSocket(pool, { logger: dev });
export const dbHttp = drizzleHttp(httpConnection, { logger: dev });
