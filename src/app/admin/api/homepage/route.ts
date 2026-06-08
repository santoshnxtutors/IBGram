import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { getAffectedPathsForHomepage } from "@/lib/cache/affected-paths";
import { applyRevalidationTargets, jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const createSchema = z.object({
  sectionKey: z.string().min(1).max(120),
  displayName: z.string().min(1).max(200),
  sectionType: z.string().min(1).max(120),
  heading: z.string().max(500).optional().nullable(),
  subheading: z.string().max(1000).optional().nullable(),
  body: z.string().max(8000).optional().nullable(),
  sortOrder: z.number().int().optional(),
  isVisible: z.boolean().optional(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
});

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.homepageSection.findMany({ orderBy: { sortOrder: "asc" }, take: 200 });
  return jsonNoStore({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const created = await prisma.homepageSection.create({ data: parsed.data });
  const revalidated = applyRevalidationTargets(getAffectedPathsForHomepage());
  return jsonNoStore({ item: created, revalidated });
}
