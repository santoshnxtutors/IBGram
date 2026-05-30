import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../../_lib/admin-auth";
import { SEO_CACHE_TAGS } from "@/lib/seo/seo-db";

export const dynamic = "force-dynamic";

const redirectCreateSchema = z.object({
  sourcePath: z.string().min(1).max(2048),
  targetPath: z.string().min(1).max(2048),
  statusCode: z.number().int().min(300).max(308).optional(),
  reason: z.string().max(500).optional(),
  isActive: z.boolean().optional(),
});

const redirectUpdateSchema = redirectCreateSchema.partial().extend({ id: z.string().min(1) });

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const rows = await prisma.redirectRule.findMany({ orderBy: { updatedAt: "desc" } });
  return Response.json({ redirects: rows });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = redirectCreateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const row = await prisma.redirectRule.upsert({
    where: { sourcePath: parsed.data.sourcePath },
    create: {
      sourcePath: parsed.data.sourcePath,
      targetPath: parsed.data.targetPath,
      statusCode: parsed.data.statusCode ?? 301,
      reason: parsed.data.reason,
      isActive: parsed.data.isActive ?? true,
    },
    update: {
      targetPath: parsed.data.targetPath,
      statusCode: parsed.data.statusCode ?? 301,
      reason: parsed.data.reason,
      isActive: parsed.data.isActive ?? true,
    },
  });
  revalidateTag(SEO_CACHE_TAGS.redirects);
  return Response.json({ redirect: row });
}

export async function PATCH(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = redirectUpdateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const { id, ...data } = parsed.data;
  const row = await prisma.redirectRule.update({ where: { id }, data });
  revalidateTag(SEO_CACHE_TAGS.redirects);
  return Response.json({ redirect: row });
}

export async function DELETE(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return Response.json({ error: "id required" }, { status: 400 });
  await prisma.redirectRule.delete({ where: { id } });
  revalidateTag(SEO_CACHE_TAGS.redirects);
  return Response.json({ ok: true });
}
