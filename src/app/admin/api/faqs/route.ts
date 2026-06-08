import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getAffectedPathsForFaq } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const createSchema = z.object({
  question: z.string().min(1).max(500),
  answer: z.string().min(1).max(4000),
  category: z.string().max(120).optional().nullable(),
  citySlug: z.string().max(120).optional().nullable(),
  pageId: z.string().optional().nullable(),
  curriculum: z.enum(["IB", "IGCSE", "BOTH"]).optional().nullable(),
  sortOrder: z.number().int().optional(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
});

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.faqItem.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }], take: 500 });
  return jsonNoStore({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const created = await prisma.faqItem.create({ data: parsed.data });
  const revalidated = applyRevalidationTargets(getAffectedPathsForFaq(created));
  return jsonNoStore({ item: created, revalidated });
}
