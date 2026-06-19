import { prisma } from "@/lib/db";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminMetricCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { LeadsClient } from "./LeadsClient";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  let items: Awaited<ReturnType<typeof prisma.contactLead.findMany>> = [];
  let dbError: string | null = null;

  try {
    items = await prisma.contactLead.findMany({
      orderBy: [{ createdAt: "desc" }],
      take: 500,
    });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const serialised = items.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone,
    inquiryType: item.inquiryType,
    message: item.message,
    status: item.status,
    sourcePage: item.sourcePage,
    adminNotes: item.adminNotes,
    createdAt: item.createdAt.toISOString(),
  }));

  const fresh = serialised.filter((item) => item.status === "new").length;
  const reviewing = serialised.filter((item) => item.status === "reviewing").length;
  const contacted = serialised.filter((item) => item.status === "contacted").length;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Inbox"
        title="Leads &amp; Messages"
        description="Enquiries submitted from the public contact form. Update statuses, reply by email or phone, and keep internal notes."
      />
      <div className="mb-5 grid gap-4 md:grid-cols-3">
        <AdminMetricCard label="New" value={fresh} tone="amber" />
        <AdminMetricCard label="Reviewing" value={reviewing} tone="sky" />
        <AdminMetricCard label="Contacted" value={contacted} tone="emerald" />
      </div>
      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Database not reachable" detail={dbError} />
        ) : (
          <LeadsClient items={serialised} />
        )}
      </AdminCard>
    </AdminShell>
  );
}
