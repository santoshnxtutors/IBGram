import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { requireAdminRequest } from "../../../_lib/admin-auth";
import { SEO_CACHE_TAGS } from "@/lib/seo/seo-db";

export const dynamic = "force-dynamic";

const sitemapEntrySchema = z.object({
  loc: z.string().url(),
  lastmod: z.string().datetime().optional().nullable(),
  changefreq: z.enum(["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"]).optional().nullable(),
  priority: z.number().min(0).max(1).optional().nullable(),
  isIncluded: z.boolean().optional(),
});

const sitemapUpdateSchema = sitemapEntrySchema.partial().extend({ id: z.string().min(1) });

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const rows = await prisma.sitemapEntry.findMany({ orderBy: { loc: "asc" } });
  return Response.json({ entries: rows });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = sitemapEntrySchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const row = await prisma.sitemapEntry.upsert({
    where: { loc: parsed.data.loc },
    create: {
      loc: parsed.data.loc,
      lastmod: parsed.data.lastmod ? new Date(parsed.data.lastmod) : null,
      changefreq: parsed.data.changefreq ?? null,
      priority: parsed.data.priority ?? null,
      isIncluded: parsed.data.isIncluded ?? true,
    },
    update: {
      lastmod: parsed.data.lastmod ? new Date(parsed.data.lastmod) : undefined,
      changefreq: parsed.data.changefreq ?? undefined,
      priority: parsed.data.priority ?? undefined,
      isIncluded: parsed.data.isIncluded ?? undefined,
    },
  });
  revalidateTag(SEO_CACHE_TAGS.sitemap);
  return Response.json({ entry: row });
}

export async function PATCH(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const parsed = sitemapUpdateSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }
  const { id, lastmod, ...rest } = parsed.data;
  const row = await prisma.sitemapEntry.update({
    where: { id },
    data: {
      ...rest,
      ...(lastmod !== undefined ? { lastmod: lastmod ? new Date(lastmod) : null } : {}),
    },
  });
  revalidateTag(SEO_CACHE_TAGS.sitemap);
  return Response.json({ entry: row });
}

export async function DELETE(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return Response.json({ error: "id required" }, { status: 400 });
  await prisma.sitemapEntry.delete({ where: { id } });
  revalidateTag(SEO_CACHE_TAGS.sitemap);
  return Response.json({ ok: true });
}
