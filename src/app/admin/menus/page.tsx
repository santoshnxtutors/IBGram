import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { MenusClient } from "./MenusClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminMenusPage() {
  let menus: Awaited<ReturnType<typeof prisma.navigationMenu.findMany>> = [];
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
    items: m.items.map((it) => ({ id: it.id, label: it.label, href: it.href, sortOrder: it.sortOrder, isActive: it.isActive })),
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
