import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminButtonLink, AdminCard, AdminDataTable, AdminFilterBar, AdminPill, AdminScoreBadge, AdminStatusBadge } from "../_components/AdminPrimitives";
import { getLocations } from "../_lib/admin-data";

export default async function AdminLocationsPage() {
  const locations = await getLocations();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Locations" title="Location Management" description="Manage cities, areas, sectors, societies and schools for Gurugram and broader IB/IGCSE local SEO." actions={<AdminButtonLink href="/admin/locations/cities">City hub</AdminButtonLink>} />
      <AdminFilterBar><AdminPill>Gurugram</AdminPill><AdminPill>Areas</AdminPill><AdminPill>Sectors</AdminPill><AdminPill>Societies</AdminPill><AdminPill>Schools</AdminPill></AdminFilterBar>
      <AdminCard>
        <AdminDataTable columns={["Name", "Type", "Parent city", "Premium", "Demand", "Active", "SEO notes"]} rows={locations.map((location) => [location.name, location.type, location.parentCity || "-", <AdminScoreBadge key={`${location.id}-p`} score={location.premiumScore} />, <AdminScoreBadge key={`${location.id}-d`} score={location.demandScore} />, <AdminStatusBadge key={`${location.id}-s`} status={location.active ? "published" : "draft"} />, location.seoNotes])} />
      </AdminCard>
    </AdminShell>
  );
}


