/**
 * Emails tutors who signed up but never submitted a profile.
 *
 *   npx tsx scripts/tutors/remind-incomplete-profiles.ts            dry run - lists who would be emailed
 *   npx tsx scripts/tutors/remind-incomplete-profiles.ts --send     actually send
 *   npx tsx scripts/tutors/remind-incomplete-profiles.ts --send --grace-days 0   include today's signups
 *
 * A tutor account with no Tutor row is invisible to families: they signed up, stopped, and
 * nothing happens. This nudges them weekly until they either finish or are closed.
 *
 * Two safeguards, because this sends real mail to real people:
 *
 *   1. DRY RUN IS THE DEFAULT. Nothing is sent without --send.
 *   2. One email per tutor per week, enforced by reading the AuditLog rows this script writes.
 *      Re-running it an hour later sends nothing. That check uses the database rather than a
 *      local file so it holds however many machines run it.
 *
 * AuditLog is reused rather than adding a `lastRemindedAt` column: it already stores
 * action/entityId/createdAt, and a reminder is exactly the kind of thing an audit log is for.
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ACTION = "tutor_profile_reminder_sent";
const args = process.argv.slice(2);
const SEND = args.includes("--send");
const flag = (name: string, fallback: number) => {
  const i = args.indexOf(`--${name}`);
  const value = i >= 0 ? Number(args[i + 1]) : NaN;
  return Number.isFinite(value) ? value : fallback;
};
/** Don't badger someone who signed up this morning. */
const GRACE_DAYS = flag("grace-days", 1);
const EVERY_DAYS = flag("every-days", 7);
const LIMIT = flag("limit", 500);

const DAY = 86_400_000;
const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

/**
 * Skip accounts that look automated.
 *
 * On 23 Oct 2026, 21 of the 22 tutor accounts without a profile were bot signups: random
 * consonant names ("Xhodbkcj Vaemcgjms"), Gmail dot-obfuscated local parts
 * ("c.he.n.li.s.h.o.p.p.i.n.g@gmail.com" - Gmail ignores dots, so one mailbox yields unlimited
 * unique-looking addresses), and not one had ever logged in.
 *
 * This filter exists to protect deliverability, not to be clever. Bounces and spam complaints
 * from addresses like those are what gets an SES account suspended, and that would take down
 * tutor credentials, demo confirmations and chat notifications along with it. A false positive
 * costs one unsent reminder; a false negative can cost all transactional email.
 *
 * Pass --no-bot-filter to send to everyone anyway.
 */
function looksAutomated(input: { email: string; firstName: string | null; lastName: string | null; lastLoginAt: Date | null }): string | null {
  const name = [input.firstName, input.lastName].filter(Boolean).join(" ").trim();
  const local = input.email.split("@")[0];

  // Gmail ignores dots entirely, so three or more in the local part is address generation
  // rather than how anyone writes their own address.
  const dots = (local.match(/\./g) ?? []).length;
  if (dots >= 3) return `${dots} dots in the email local part (address generation)`;

  const letters = name.replace(/[^a-z]/gi, "");
  if (letters.length >= 5) {
    const vowelRatio = (letters.match(/[aeiou]/gi) ?? []).length / letters.length;
    // English names run near 0.40; machine-generated strings sit far below.
    if (vowelRatio < 0.25) return `name "${name}" has a vowel ratio of ${vowelRatio.toFixed(2)} (random string)`;
  }

  // A long run of consonants almost never occurs in a real name.
  if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(letters)) return `name "${name}" contains a 5+ consonant run`;

  return null;
}

async function main() {
  const now = Date.now();

  // Tutor accounts with no live Tutor row. A soft-deleted profile counts as none, which
  // matches what the admin Tutor Signups screen shows.
  const users = await prisma.user.findMany({
    where: { accountType: "tutor", deletedAt: null },
    orderBy: { createdAt: "asc" },
    take: LIMIT,
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      createdAt: true,
      tutorProfile: { select: { id: true, deletedAt: true } },
    },
  });

  const incomplete = users.filter((u) => !u.tutorProfile || u.tutorProfile.deletedAt !== null);

  // How many reminders each of them has already had, and when the last one went.
  const history = await prisma.auditLog.findMany({
    where: { action: ACTION, entityId: { in: incomplete.map((u) => u.id) } },
    select: { entityId: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });
  const sentCount = new Map<string, number>();
  const lastSent = new Map<string, Date>();
  for (const row of history) {
    if (!row.entityId) continue;
    sentCount.set(row.entityId, (sentCount.get(row.entityId) ?? 0) + 1);
    if (!lastSent.has(row.entityId)) lastSent.set(row.entityId, row.createdAt);
  }

  const due: typeof incomplete = [];
  const skipped: string[] = [];
  let botsSkipped = 0;
  for (const user of incomplete) {
    if (!args.includes("--no-bot-filter")) {
      const reason = looksAutomated(user);
      if (reason) {
        botsSkipped += 1;
        skipped.push(`${user.email} - looks automated: ${reason}`);
        continue;
      }
    }
    const ageDays = (now - user.createdAt.getTime()) / DAY;
    if (ageDays < GRACE_DAYS) {
      skipped.push(`${user.email} - signed up ${ageDays.toFixed(1)}d ago, inside the ${GRACE_DAYS}d grace period`);
      continue;
    }
    const last = lastSent.get(user.id);
    if (last && now - last.getTime() < EVERY_DAYS * DAY) {
      skipped.push(`${user.email} - reminded ${((now - last.getTime()) / DAY).toFixed(1)}d ago`);
      continue;
    }
    due.push(user);
  }

  console.log(`tutor accounts        : ${users.length}`);
  console.log(`without a profile     : ${incomplete.length}`);
  console.log(`due a reminder now    : ${due.length}`);
  console.log(`skipped               : ${skipped.length}${botsSkipped ? ` (of which ${botsSkipped} look automated)` : ""}`);
  for (const line of skipped.slice(0, 10)) console.log(`    ${line}`);
  if (skipped.length > 10) console.log(`    ... and ${skipped.length - 10} more`);
  console.log("");

  if (due.length === 0) {
    console.log("Nothing to send.");
    return;
  }

  if (!SEND) {
    console.log("DRY RUN - no email sent. Re-run with --send to actually send:\n");
    for (const user of due) {
      const n = (sentCount.get(user.id) ?? 0) + 1;
      console.log(`    #${n}  ${user.email.padEnd(38)} ${[user.firstName, user.lastName].filter(Boolean).join(" ") || "(no name)"}  joined ${fmt(user.createdAt)}`);
    }
    return;
  }

  // Imported lazily so a dry run needs no mail configuration at all.
  const { sendMail } = await import("../../src/lib/mail");
  const { tutorProfileReminderEmail } = await import("../../src/lib/emails");

  let sent = 0;
  let failed = 0;
  for (const user of due) {
    const reminderNumber = (sentCount.get(user.id) ?? 0) + 1;
    const name = [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email.split("@")[0];
    const mail = tutorProfileReminderEmail({ name, reminderNumber, signedUpOn: fmt(user.createdAt) });
    try {
      // sendMail returns false rather than throwing - both when SMTP is unconfigured and when
      // the send fails - so the boolean has to be checked or an unsent email gets logged as
      // delivered and the tutor is never reminded again.
      const delivered = await sendMail({ to: user.email, subject: mail.subject, html: mail.html, text: mail.text });
      if (!delivered) {
        failed += 1;
        console.log(`  NOT SENT  ${user.email} - sendMail returned false (SMTP unconfigured or rejected)`);
        continue;
      }
      // Logged only after a successful send, so a failure is retried next run rather than
      // silently counting as delivered.
      await prisma.auditLog.create({
        data: {
          action: ACTION,
          entityType: "User",
          entityId: user.id,
          metadata: { email: user.email, reminderNumber, subject: mail.subject },
        },
      });
      sent += 1;
      console.log(`  sent #${reminderNumber}  ${user.email}`);
    } catch (error) {
      failed += 1;
      console.log(`  FAILED  ${user.email} -> ${(error as Error).message.slice(0, 160)}`);
    }
  }

  console.log(`\nsent ${sent}, failed ${failed}`);
  if (failed > 0) process.exitCode = 1;
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
