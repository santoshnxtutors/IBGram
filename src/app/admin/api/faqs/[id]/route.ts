import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { PUBLIC_FAQS_CACHE_TAG } from "@/lib/cms/public-faqs";
import { requireAdminRequest } from "../../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const patchSchema = z.object({
  question: z.string().min(1).max(500).optional(),
  answer: z.string().min(1).max(4000).optional(),
  category: z.string().max(120).optional().nullable(),
  citySlug: z.string().max(120).optional().nullable(),
  pageId: z.string().optional().nullable(),
  curriculum: z.enum(["IB", "IGCSE", "BOTH"]).optional().nullable(),
  sortOrder: z.number().int().optional(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
});

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  const parsed = patchSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const updated = await prisma.faqItem.update({ where: { id }, data: parsed.data });
  revalidateTag(PUBLIC_FAQS_CACHE_TAG, { expire: 0 });
  return Response.json({ item: updated });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const { id } = await params;
  await prisma.faqItem.delete({ where: { id } });
  revalidateTag(PUBLIC_FAQS_CACHE_TAG, { expire: 0 });
  return Response.json({ ok: true });
}
