# IBGram Database

This folder owns the PostgreSQL database foundation for IBGram.

## Commands

- `npm run db:generate` generates the Prisma client from `database/prisma/schema.prisma`.
- `npm run db:migrate` creates and applies a local development migration.
- `npm run db:push` syncs the schema without a migration file.
- `npm run db:seed` seeds roles, permissions, the bootstrap admin, locations, programmes, and subjects.
- `npm run db:studio` opens Prisma Studio.

## Safety Notes

- Real database credentials belong in ignored `.env` files, not in tracked examples.
- Use migrations for production-like environments.
- Run seed idempotently; it upserts baseline records and does not delete existing data.

## Local Auth Setup

For local frontend/backend development:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`
- `CORS_ORIGIN=http://localhost:3000`
- `COOKIE_SECURE=false`

Auth uses an HTTP-only `ibgram_session` cookie. The raw cookie token is never stored in PostgreSQL; only its hash is saved in `Session.tokenHash`.
