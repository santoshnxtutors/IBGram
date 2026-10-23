/**
 * Lists tutor and student accounts that look automated, with the evidence for each.
 *
 *   npx tsx scripts/tutors/flag-bot-signups.ts              tutors without a profile
 *   npx tsx scripts/tutors/flag-bot-signups.ts --all        every account, profile or not
 *   npx tsx scripts/tutors/flag-bot-signups.ts --csv        comma-separated, for a spreadsheet
 *
 * READ-ONLY. It deletes nothing and changes nothing. Deleting a tutor on this setup is a hard
 * delete with no backup, so the decision stays with a person: review the list, then remove
 * whoever you agree with from the admin panel.
 *
 * Why this exists: on 23 Oct 2026, 21 of 22 tutor accounts without a profile were automated
 * signups - 16 of them registered inside a single 24-hour window and not one had ever logged
 * in. They inflate the admin counters and, if emailed, would put SES deliverability at risk.
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const args = process.argv.slice(2);
const ALL = args.includes("--all");
const CSV = args.includes("--csv");
const DAY = 86_400_000;

interface Signal {
  label: string;
  detail: string;
}

/** Every independent reason to doubt an account. More signals, more confidence. */
function signalsFor(user: {
  email: string;
  firstName: string | null;
  lastName: string | null;
  lastLoginAt: Date | null;
  createdAt: Date;
}): Signal[] {
  const out: Signal[] = [];
  const name = [user.firstName, user.lastName].filter(Boolean).join(" ").trim();
  const letters = name.replace(/[^a-z]/gi, "");
  const local = user.email.split("@")[0];

  const dots = (local.match(/\./g) ?? []).length;
  // Gmail ignores dots, so a heavily dotted local part is one mailbox wearing many addresses.
  if (dots >= 3) out.push({ label: "dotted-address", detail: `${dots} dots in "${local}"` });

  if (letters.length >= 5) {
    const ratio = (letters.match(/[aeiou]/gi) ?? []).length / letters.length;
    if (ratio < 0.25) out.push({ label: "low-vowel-name", detail: `"${name}" vowel ratio ${ratio.toFixed(2)} (real names ~0.40)` });
  }
  if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(letters)) {
    out.push({ label: "consonant-run", detail: `"${name}" has a 5+ consonant run` });
  }
  if (!user.lastLoginAt) out.push({ label: "never-logged-in", detail: "account created but never signed in" });

  return out;
}

async function main() {
  const users = await prisma.user.findMany({
    where: { accountType: { in: ["tutor", "student"] }, deletedAt: null },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      email: true,
      accountType: true,
      firstName: true,
      lastName: true,
      createdAt: true,
      lastLoginAt: true,
      tutorProfile: { select: { id: true, deletedAt: true } },
    },
  });

  const scope = ALL ? users : users.filter((u) => u.accountType !== "tutor" || !u.tutorProfile || u.tutorProfile.deletedAt);

  // A burst of signups in one hour is itself a signal, independent of any single account.
  const byHour = new Map<string, number>();
  for (const u of scope) {
    const hour = u.createdAt.toISOString().slice(0, 13);
    byHour.set(hour, (byHour.get(hour) ?? 0) + 1);
  }

  const rows = scope
    .map((user) => {
      const signals = signalsFor(user);
      const hour = user.createdAt.toISOString().slice(0, 13);
      const burst = (byHour.get(hour) ?? 0) >= 4;
      if (burst) signals.push({ label: "signup-burst", detail: `${byHour.get(hour)} accounts created in the hour of ${hour}:00Z` });
      return { user, signals };
    })
    // never-logged-in alone is weak - a real person may simply not have returned yet.
    .filter((r) => r.signals.filter((s) => s.label !== "never-logged-in").length > 0)
    .sort((a, b) => b.signals.length - a.signals.length);

  if (CSV) {
    console.log("email,accountType,name,createdAt,signalCount,signals");
    for (const { user, signals } of rows) {
      const name = [user.firstName, user.lastName].filter(Boolean).join(" ");
      console.log(
        [user.email, user.accountType, `"${name}"`, user.createdAt.toISOString(), signals.length, `"${signals.map((s) => s.label).join(" ")}"`].join(","),
      );
    }
    return;
  }

  console.log(`\nScanned ${scope.length} account(s)${ALL ? "" : " without a tutor profile"}.`);
  console.log(`${rows.length} look automated. Nothing has been changed - review and delete from the admin panel.\n`);

  for (const { user, signals } of rows) {
    const name = [user.firstName, user.lastName].filter(Boolean).join(" ") || "(no name)";
    const age = ((Date.now() - user.createdAt.getTime()) / DAY).toFixed(1);
    console.log(`  ${signals.length} signals  ${user.email}`);
    console.log(`              ${name}  ·  ${user.accountType}  ·  signed up ${age}d ago`);
    for (const s of signals) console.log(`              - ${s.label}: ${s.detail}`);
    console.log("");
  }

  const strong = rows.filter((r) => r.signals.length >= 3).length;
  console.log(`${strong} of them carry three or more independent signals.`);
  console.log(`Admin panel: /admin/tutor-signups/ (tutors) and /admin/student-signups/ (students).`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
