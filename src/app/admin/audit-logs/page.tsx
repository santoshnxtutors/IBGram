import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable } from "../_components/AdminPrimitives";
import { getAuditLogs } from "../_lib/admin-data";
export default async function AuditLogsPage() { const logs = await getAuditLogs(); return <AdminShell><AdminPageHeader eyebrow="Audit logs" title="Admin Activity" description="Login, logout, publishing, metadata, tutor, internal link and settings changes." /><AdminCard><AdminDataTable columns={["Time", "Actor", "Action", "Target", "Detail"]} rows={logs.map((log) => [log.createdAt, log.actor, log.action, log.target, log.detail])} /></AdminCard></AdminShell>; }


