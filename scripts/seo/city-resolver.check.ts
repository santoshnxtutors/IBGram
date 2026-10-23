/**
 * Checks src/lib/cms/resolve-city.ts against the real City table.
 *
 *   npx tsx scripts/seo/city-resolver.check.ts
 *
 * Runs inside a transaction that always rolls back, so the live database is untouched.
 * Guards the behaviour that the admin tutor routes depend on: known places resolve (creating
 * the row when we serve that place), everyday spellings alias onto the canonical city rather
 * than creating a duplicate, and an unknown place is REJECTED rather than silently skipping
 * the tutor's location rows - which is the bug this file exists to prevent coming back.
 */
import { PrismaClient } from "@prisma/client";
import { resolveCityForTutor, unknownCityMessage } from "../../src/lib/cms/resolve-city";

const prisma = new PrismaClient();

const PROBES = ["dubai", "abu-dhabi", "sharjah", "al-ain", "gurgaon", "Gurugram", "mumbai", "Bombay", "", "not-a-real-place-xyz"];

class Rollback extends Error {}

async function main() {
  try {
    await prisma.$transaction(async (tx) => {
      for (const probe of PROBES) {
        const city = await resolveCityForTutor(tx, probe);
        if (city) {
          console.log(`  ${JSON.stringify(probe).padEnd(24)} -> ${city.slug.padEnd(16)} (${city.name})`);
        } else {
          const msg = await unknownCityMessage(tx, probe);
          console.log(`  ${JSON.stringify(probe).padEnd(24)} -> REJECTED: ${msg.slice(0, 90)}...`);
        }
      }
      throw new Rollback();
    });
  } catch (error) {
    if (!(error instanceof Rollback)) throw error;
    console.log("\n  transaction rolled back - nothing was written to the database");
  }
}

main().finally(() => prisma.$disconnect());
