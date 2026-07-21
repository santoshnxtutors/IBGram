import type { NextRequest } from "next/server";
import { z } from "zod";
import { hashPassword } from "@ibgram/authentication";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  email: z.string().trim().email().max(240),
  password: z.string().min(10, "Password must be at least 10 characters.").max(200),
});

async function uniqueUsername(seed: string): Promise<string> {
  const base = seed.split("@")[0].toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24) || "tutor";
  let username = base;
  let i = 1;
  // eslint-disable-next-line no-await-in-loop
  while (await prisma.user.findUnique({ where: { username }, select: { id: true } })) {
    i += 1;
    username = `${base}${i}`;
  }
  return username;
}

/** Create a login for an existing catalog tutor and link + approve it. */
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const { id } = await params;
  const parsed = bodySchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });

  const tutor = await prisma.tutor.findUnique({ where: { id }, select: { id: true, userId: true, displayName: true } });
  if (!tutor) return jsonNoStore({ error: "Tutor not found" }, { status: 404 });
  if (tutor.userId) return jsonNoStore({ error: "This tutor already has a login." }, { status: 409 });

  const email = parsed.data.email.toLowerCase();
  const existing = await prisma.user.findFirst({ where: { email }, select: { id: true } });
  if (existing) return jsonNoStore({ error: "A user with that email already exists." }, { status: 409 });

  const [firstName, ...rest] = tutor.displayName.split(" ");
  const passwordHash = await hashPassword(parsed.data.password);
  const user = await prisma.user.create({
    data: {
      email,
      username: await uniqueUsername(email),
      passwordHash,
      firstName: firstName || tutor.displayName,
      lastName: rest.join(" ") || null,
      accountType: "tutor",
      status: "active",
    },
    select: { id: true },
  });

  await prisma.tutor.update({
    where: { id },
    data: { userId: user.id, email, approved: true, status: "active" },
  });

  return jsonNoStore({ ok: true, userId: user.id, email });
}
