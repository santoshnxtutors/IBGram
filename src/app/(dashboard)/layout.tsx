import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-muted/20">
      <Sidebar />
      <main className="flex-1 overflow-y-auto w-full p-8">
        {children}
      </main>
    </div>
  );
}
