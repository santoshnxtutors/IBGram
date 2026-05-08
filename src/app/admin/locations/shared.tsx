import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable, AdminScoreBadge, AdminStatusBadge } from "../_components/AdminPrimitives";
import { AdminLocationEditor } from "../_components/AdminForms";
import { getLocations } from "../_lib/admin-data";
import type { AdminLocationRecord } from "../_types/admin";

export async function LocationTypePage({ type, title }: { type: AdminLocationRecord["type"]; title: string }) {
  const locations = await getLocations(type);
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Locations" title={title} description={`Manage ${title.toLowerCase()} records, parent mappings, demand scores and SEO notes.`} />
      <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
        <AdminCard>
          <AdminDataTable columns={["Name", "Slug", "Parent", "Premium", "Demand", "Active"]} rows={locations.map((location) => [location.name, location.slug, location.parentCity || location.parentArea || "-", <AdminScoreBadge key={`${location.id}-p`} score={location.premiumScore} />, <AdminScoreBadge key={`${location.id}-d`} score={location.demandScore} />, <AdminStatusBadge key={`${location.id}-s`} status={location.active ? "published" : "draft"} />])} />
        </AdminCard>
        <AdminLocationEditor location={locations[0]} />
      </div>
    </AdminShell>
  );
}


