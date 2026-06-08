import type { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { jsonNoStore } from "@/lib/cache/revalidation";
import { requireAdminRequest } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const itemSchema = z.object({
  menuKey: z.string().min(1).max(120),
  label: z.string().min(1).max(200),
  href: z.string().min(1).max(500),
  sortOrder: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

const menuCreateSchema = z.object({
  menuKey: z.string().min(1).max(120),
  label: z.string().min(1).max(200),
  position: z.enum(["header", "footer", "sidebar", "mobile"]).optional(),
});

export async function GET(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const menus = await prisma.navigationMenu.findMany({
    include: { items: { orderBy: { sortOrder: "asc" } } },
    orderBy: { menuKey: "asc" },
  });
  return jsonNoStore({ menus });
}

export async function POST(request: NextRequest) {
  const session = requireAdminRequest(request);
  if (session instanceof Response) return session;
  const body = (await request.json().catch(() => ({}))) as { kind?: "menu" | "item" } & Record<string, unknown>;
  if (body.kind === "item") {
    const parsed = itemSchema.safeParse(body);
    if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
    const menu = await prisma.navigationMenu.findUnique({ where: { menuKey: parsed.data.menuKey } });
    if (!menu) return jsonNoStore({ error: `Menu with key ${parsed.data.menuKey} not found` }, { status: 404 });
    const item = await prisma.navigationMenuItem.create({
      data: { menuId: menu.id, label: parsed.data.label, href: parsed.data.href, sortOrder: parsed.data.sortOrder ?? 0, isActive: parsed.data.isActive ?? true },
    });
    return jsonNoStore({ item });
  }
  const parsed = menuCreateSchema.safeParse(body);
  if (!parsed.success) return jsonNoStore({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  const menu = await prisma.navigationMenu.create({
    data: { menuKey: parsed.data.menuKey, label: parsed.data.label, position: parsed.data.position ?? "header" },
  });
  return jsonNoStore({ menu });
}
