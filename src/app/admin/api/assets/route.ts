import type { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;

  const url = new URL(request.url);
  const take = Math.min(Number(url.searchParams.get("take") ?? "60"), 200);
  const skip = Math.max(Number(url.searchParams.get("skip") ?? "0"), 0);
  const search = url.searchParams.get("search")?.trim() || undefined;
  const mimeFilter = url.searchParams.get("mime")?.trim() || undefined;

  const where = {
    ...(search
      ? {
          OR: [
            { id: search },
            { filename: { contains: search, mode: "insensitive" as const } },
            { altText: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {}),
    ...(mimeFilter ? { mimeType: { startsWith: mimeFilter } } : {}),
  };

  const [items, total] = await Promise.all([
    prisma.asset.findMany({ where, orderBy: { createdAt: "desc" }, take, skip }),
    prisma.asset.count({ where }),
  ]);

  return jsonNoStore({ items, total, take, skip });
}
