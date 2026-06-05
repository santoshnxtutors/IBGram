import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const createSchema = z.object({
  studentName: z.string().min(1).max(200),
  subject: z.string().max(200).optional().nullable(),
  focus: z.string().max(200).optional().nullable(),
  outcome: z.string().max(2000).optional().nullable(),
  nextStep: z.string().max(500).optional().nullable(),
  longStory: z.string().max(8000).optional().nullable(),
  imageAssetId: z.string().optional().nullable(),
  accentClass: z.string().max(200).optional().nullable(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.successStory.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    take: 200,
  });
  return Response.json({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const created = await prisma.successStory.create({ data: parsed.data });
  revalidateTag("cms:success-stories", { expire: 0 });
  return Response.json({ item: created });
}
