import "server-only";
import { PrismaClient } from "@prisma/client";

declare global {
  var __ibgramPrisma: PrismaClient | undefined;
}

/**
 * Build a Prisma client URL with a constrained connection pool so the app
 * cooperates with remote PostgreSQL instances that have a low max_connections
 * (e.g. shared dev databases capped at ~25 slots).
 *
 * Reads PRISMA_CONNECTION_LIMIT from env (default 3). The pool applies per
 * Node.js process, so dev + prod each get their own small pool.
 */
function buildConstrainedDatasourceUrl(): string | undefined {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return undefined;

  // Already explicitly configured? Don't touch it.
  if (url.includes("connection_limit=") && url.includes("pool_timeout=")) return url;

  // Default to 1 connection per Prisma client instance. Remote dev DBs often
  // cap max_connections at 20-25, and Turbopack hot-reload can spawn multiple
  // client instances; with limit=1 each, total app-side connections stay tiny.
  // Override with PRISMA_CONNECTION_LIMIT in .env if you're on a fatter DB.
  const limit = process.env.PRISMA_CONNECTION_LIMIT?.trim() || "1";
  // Don't wait forever for a connection — fail fast instead of hanging the request.
  const poolTimeout = process.env.PRISMA_POOL_TIMEOUT?.trim() || "5";

  const extras: string[] = [];
  if (!url.includes("connection_limit=")) extras.push(`connection_limit=${limit}`);
  if (!url.includes("pool_timeout=")) extras.push(`pool_timeout=${poolTimeout}`);

  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${extras.join("&")}`;
}

const datasourceUrl = buildConstrainedDatasourceUrl();

const prisma =
  globalThis.__ibgramPrisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    ...(datasourceUrl ? { datasourceUrl } : {}),
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.__ibgramPrisma = prisma;
}

export { prisma };
export default prisma;
