import Link from "next/link";
import { AdminShell } from "../_components/AdminShell";
import {
  AdminPageHeader,
  AdminButtonLink,
  AdminCard,
  AdminDataTable,
  AdminFilterBar,
  AdminPill,
  AdminScoreBadge,
  AdminStatusBadge,
  adminFilterHref,
} from "../_components/AdminPrimitives";
import { getLocations } from "../_lib/admin-data";

export const dynamic = "force-dynamic";

const BASE = "/admin/locations";
const TYPES = ["city", "area", "sector", "society", "school"] as const;

export default async function AdminLocationsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const one = (key: string) => {
    const value = params[key];
    return (Array.isArray(value) ? value[0] : value)?.trim() || undefined;
  };
  const q = one("q");
  const current = { q, type: one("type") };

  const all = await getLocations();
  const needle = q?.toLowerCase();

  const locations = all.filter((location) => {
    if (current.type && location.type !== current.type) return false;
    if (
      needle &&
      ![location.name, location.slug, location.type, location.parentCity, location.state, location.country, location.seoNotes]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle)
    ) {
      return false;
    }
    return true;
  });

  const filters = TYPES.map((type) => ({
    label: type,
    href: adminFilterHref(BASE, current, "type", type),
    active: current.type === type,
    count: all.filter((l) => l.type === type).length,
  }));

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Locations"
        title="Location Management"
        description="Manage cities, areas, sectors, societies and schools for Gurugram and broader IB/IGCSE local SEO."
        actions={<AdminButtonLink href="/admin/locations/cities">City hub</AdminButtonLink>}
      />

      <AdminFilterBar
        action={BASE}
        query={q}
        placeholder="Search by name, city, state or SEO note"
        hidden={{ type: current.type }}
        filters={filters}
      >
        <AdminPill>
          {locations.length} / {all.length}
        </AdminPill>
        {(q || current.type) && (
          <Link href={BASE} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-300 hover:text-emerald-100">
            Clear
          </Link>
        )}
      </AdminFilterBar>

      <AdminCard>
        <AdminDataTable
          columns={["Name", "Type", "Parent city", "Premium", "Demand", "Active", "SEO notes"]}
          empty="No location matches this search."
          rows={locations.map((location) => [
            location.name,
            location.type,
            location.parentCity || "-",
            <AdminScoreBadge key={`${location.id}-p`} score={location.premiumScore} />,
            <AdminScoreBadge key={`${location.id}-d`} score={location.demandScore} />,
            <AdminStatusBadge key={`${location.id}-s`} status={location.active ? "published" : "draft"} />,
            location.seoNotes,
          ])}
        />
      </AdminCard>
    </AdminShell>
  );
}
