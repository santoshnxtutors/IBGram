import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable } from "../_components/AdminPrimitives";
export default function ImportsPage() { return <AdminShell><AdminPageHeader eyebrow="Imports" title="CSV Imports" description="Future CSV import flow for tutors, cities, areas, sectors, societies, pages and internal links." /><AdminCard><AdminDataTable columns={["Import type", "Status", "Validation"]} rows={["Tutors", "Cities", "Areas", "Sectors", "Societies", "Pages", "Internal links"].map((item) => [item, "Upload ready", "Column mapping and row errors UI prepared"])} /></AdminCard></AdminShell>; }


