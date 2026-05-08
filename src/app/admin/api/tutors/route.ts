import type { NextRequest } from "next/server";
import { getTutors } from "../../_lib/admin-data";
import { requireAdminRequest } from "../../_lib/admin-auth";
import { adminTutorLocationSchema } from "../../_validators/admin-validators";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  return Response.json({ tutors: await getTutors() });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = adminTutorLocationSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: "Invalid tutor payload.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
  return Response.json({ tutor: parsed.data, message: "Tutor payload validated. Connect DB adapter for persistence." });
}
