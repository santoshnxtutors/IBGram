import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../../_lib/admin-auth";
import { SEO_CACHE_TAGS } from "@/lib/seo/seo-db";

export const dynamic = "force-dynamic";

const robotsCreateSchema = z.object({
  userAgent: z.string().min(1).max(120).optional(),
  directive: z.enum(["Allow", "Disallow", "Crawl-delay"]),
  path: z.string().min(1).max(2048),
  isActive: z.boolean().optional(),
});

const robotsUpdateSchema = robotsCreateSchema.partial().extend({ id: z.string().min(1) });

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const rows = await prisma.robotsRule.findMany({ orderBy: [{ userAgent: "asc" }, { directive: "asc" }] });
  return Response.json({ rules: rows });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = robotsCreateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const row = await prisma.robotsRule.create({
    data: {
      userAgent: parsed.data.userAgent ?? "*",
      directive: parsed.data.directive,
      path: parsed.data.path,
      isActive: parsed.data.isActive ?? true,
    },
  });
  revalidateTag(SEO_CACHE_TAGS.robots, { expire: 0 });
  return Response.json({ rule: row });
}

export async function PATCH(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = robotsUpdateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const { id, ...data } = parsed.data;
  const row = await prisma.robotsRule.update({ where: { id }, data });
  revalidateTag(SEO_CACHE_TAGS.robots, { expire: 0 });
  return Response.json({ rule: row });
}

export async function DELETE(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return Response.json({ error: "id required" }, { status: 400 });
  await prisma.robotsRule.delete({ where: { id } });
  revalidateTag(SEO_CACHE_TAGS.robots, { expire: 0 });
  return Response.json({ ok: true });
}
