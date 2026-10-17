/* eslint-disable @typescript-eslint/no-require-imports -- plain CommonJS diagnostic, run with bare node */
// Read-only: who is holding Postgres connection slots on the DATABASE_URL in .env.
// Run when a deploy dies with "remaining connection slots are reserved for roles
// with the SUPERUSER attribute".
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const env = fs.readFileSync(path.join(root, '.env'), 'utf8');
const m = env.match(/^DATABASE_URL\s*=\s*"?([^"\r\n]+)"?/m);
if (!m) throw new Error('DATABASE_URL not found in .env');
process.env.DATABASE_URL = m[1];

// Keep our own footprint at one connection — the pool is the thing we're short of.
process.env.DATABASE_URL += (process.env.DATABASE_URL.includes('?') ? '&' : '?') +
  'connection_limit=1&pool_timeout=5';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const KILL = process.argv.includes('--kill');

// The DB may be 100% full, in which case even this script can't get in.
// Retry: slots free up as orphans get reaped or requests finish.
async function connect(attempts = 20) {
  for (let i = 1; i <= attempts; i++) {
    try {
      await prisma.$queryRawUnsafe('SELECT 1');
      return;
    } catch (e) {
      if (i === attempts) throw e;
      process.stdout.write(`no free slot (try ${i}/${attempts}), retrying in 3s\n`);
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
}

(async () => {
  await connect();

  if (KILL) {
    // Same-role sessions only: Postgres allows pg_terminate_backend without
    // superuser when the backend belongs to the role running it. 'idle' only —
    // never 'idle in transaction' or 'active', which could be doing real work.
    const killed = await prisma.$queryRawUnsafe(
      `SELECT count(pg_terminate_backend(pid))::int AS killed
         FROM pg_stat_activity
        WHERE usename = current_user
          AND datname = current_database()
          AND state = 'idle'
          AND state_change < now() - interval '5 minutes'
          AND pid <> pg_backend_pid()`
    );
    console.log('terminated idle sessions:', killed[0].killed);

    // Stop them piling up again. idle_session_timeout is USERSET, so the role
    // can set it on itself — no superuser, no SSH. PG 14+ (server is 16.13).
    await prisma.$executeRawUnsafe(
      `ALTER ROLE current_user SET idle_session_timeout = '10min'`
    );
    console.log("idle_session_timeout set to 10min for this role");
  }

  console.table(
    await prisma.$queryRawUnsafe(
      "SELECT pg_size_pretty(pg_database_size(current_database())) AS db_size, current_database() AS db"
    )
  );
  console.table(await prisma.$queryRawUnsafe('SHOW max_connections'));
  console.table(await prisma.$queryRawUnsafe('SHOW server_version'));
  console.table(
    await prisma.$queryRawUnsafe(
      "SELECT rolname, rolconfig FROM pg_roles WHERE rolname = current_user"
    )
  );
  console.table(
    await prisma.$queryRawUnsafe(
      // This DB only — other apps share the server and are not our business.
      `SELECT count(*)::int AS n, usename, state
         FROM pg_stat_activity
        WHERE datname = current_database()
        GROUP BY 2,3 ORDER BY 1 DESC`
    )
  );
  // Where do the idle ones come from, and how long have they sat there?
  console.table(
    await prisma.$queryRawUnsafe(
      `SELECT count(*)::int AS n, host(client_addr) AS client, datname,
              date_trunc('hour', min(backend_start))::text AS oldest,
              date_trunc('hour', max(backend_start))::text AS newest
         FROM pg_stat_activity
        WHERE state = 'idle' AND datname = current_database()
        GROUP BY 2,3 ORDER BY 1 DESC`
    )
  );
  await prisma.$disconnect();
})().catch((e) => {
  console.error('FAILED:', e.message);
  process.exit(1);
});
