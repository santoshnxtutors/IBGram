import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const createSchema = z.object({
  kind: z.enum(["review", "success_story"]).optional(),
  authorName: z.string().min(1).max(200),
  authorRole: z.string().max(120).optional().nullable(),
  location: z.string().max(120).optional().nullable(),
  rating: z.number().int().min(1).max(5).optional().nullable(),
  quote: z.string().min(1).max(2000),
  longStory: z.string().max(8000).optional().nullable(),
  curriculum: z.enum(["IB", "IGCSE", "BOTH"]).optional().nullable(),
  imageAssetId: z.string().optional().nullable(),
  status: z.enum(["draft", "review", "published", "archived"]).optional(),
  useOnHomepage: z.boolean().optional(),
  featured: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const items = await prisma.testimonial.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }], take: 200 });
  return Response.json({ items });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = createSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const created = await prisma.testimonial.create({ data: parsed.data });
  revalidateTag("cms:testimonials", { expire: 0 });
  return Response.json({ item: created });
}
