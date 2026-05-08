import type { Metadata } from "next";
import { Sidebar } from "@/components/dashboard/Sidebar";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

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
