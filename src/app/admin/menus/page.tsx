import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { MenusClient } from "./MenusClient";
import { prisma } from "@/lib/db";
import type { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

type NavigationMenuWithItems = Prisma.NavigationMenuGetPayload<{
  include: { items: true };
}>;

export default async function AdminMenusPage() {
  let menus: NavigationMenuWithItems[] = [];
  let dbError: string | null = null;
  try {
    menus = await prisma.navigationMenu.findMany({
      include: { items: { orderBy: { sortOrder: "asc" } } },
      orderBy: { menuKey: "asc" },
    });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = menus.map((m) => ({
    id: m.id,
    menuKey: m.menuKey,
    label: m.label,
    position: m.position,
    items: m.items.map((it: NavigationMenuWithItems["items"][number]) => ({ id: it.id, label: it.label, href: it.href, sortOrder: it.sortOrder, isActive: it.isActive })),
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Navigation"
        title="Navigation Menus"
        description="Header, footer, sidebar and mobile menus. Add, edit, reorder and disable items. Persists immediately to NavigationMenu / NavigationMenuItem."
      />
      <AdminCard>
        {dbError ? <AdminEmptyState title="Database not reachable" detail={dbError} /> : <MenusClient menus={serialised} />}
      </AdminCard>
    </AdminShell>
  );
}
