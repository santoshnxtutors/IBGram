import { randomBytes } from "node:crypto";
import { hashPassword } from "@ibgram/authentication";
import { prisma } from "@/lib/db";

async function uniqueUsername(seed: string): Promise<string> {
  const base = seed.split("@")[0].toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24) || "student";
  let username = base;
  let i = 1;
  while (await prisma.user.findUnique({ where: { username }, select: { id: true } })) {
    i += 1;
    username = `${base}${i}`;
  }
  return username;
}

/**
 * The student account for an email, creating it when there isn't one. Both the
 * admin scheduler and a captured payment need a real account before chat or a
 * dashboard booking can exist. `credentials` is set only for a fresh account,
 * so the caller can include the login details in the email it already sends.
 */
export async function ensureStudentAccount(rawEmail: string, name?: string | null) {
  const email = rawEmail.trim().toLowerCase();
  const existing = await prisma.user.findFirst({ where: { email, deletedAt: null }, select: { id: true } });
  if (existing) return { id: existing.id, credentials: null };

  const password = `${randomBytes(6).toString("base64url")}${randomBytes(3).toString("hex")}`;
  const [firstName, ...rest] = (name?.trim() || email.split("@")[0]).split(" ");
  const created = await prisma.user.create({
    data: {
      email,
      username: await uniqueUsername(email),
      passwordHash: await hashPassword(password),
      firstName,
      lastName: rest.join(" ") || null,
      accountType: "student",
      status: "active",
    },
    select: { id: true },
  });
  return { id: created.id, credentials: { email, password } };
}
