import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable } from "../_components/AdminPrimitives";
import { AdminApiError, getAuditLogList, type BackendAuditLog } from "../_lib/admin-api-client";

function formatTimestamp(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString().slice(0, 19).replace("T", " ");
}

function actorLabel(log: BackendAuditLog): string {
  if (!log.actor) return "system";
  const name = [log.actor.firstName, log.actor.lastName].filter(Boolean).join(" ").trim();
  return name || log.actor.username || log.actor.email;
}

function targetLabel(log: BackendAuditLog): string {
  return log.entityId ? `${log.entityType}:${log.entityId.slice(0, 12)}` : log.entityType;
}

function detailLabel(log: BackendAuditLog): string {
  if (log.metadata && typeof log.metadata === "object") {
    try {
      return JSON.stringify(log.metadata);
    } catch {
      return "—";
    }
  }
  return log.requestId ? `req=${log.requestId.slice(0, 8)}` : "—";
}

async function loadLogs() {
  try {
    const list = await getAuditLogList(100);
    return { items: list.items, error: null as string | null, total: list.totalItems };
  } catch (error) {
    const message =
      error instanceof AdminApiError ? `${error.code}: ${error.message}` : error instanceof Error ? error.message : "Unknown error";
    return { items: [] as BackendAuditLog[], error: message, total: 0 };
  }
}

export default async function AuditLogsPage() {
  const { items, error, total } = await loadLogs();

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Audit logs"
        title="Admin Activity"
        description={`Live audit trail from PostgreSQL. ${total} total records.`}
      />
      {error && (
        <div className="mb-5 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-sm font-bold text-amber-100">
          Backend unavailable: {error}.
        </div>
      )}
      <AdminCard>
        <AdminDataTable
          columns={["Time", "Actor", "Action", "Target", "Detail"]}
          empty="No audit records yet. Sign in to the admin panel to generate the first entry."
          rows={items.map((log) => [formatTimestamp(log.createdAt), actorLabel(log), log.action, targetLabel(log), detailLabel(log)])}
        />
      </AdminCard>
    </AdminShell>
  );
}
