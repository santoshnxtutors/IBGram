import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { getServerUser } from "@/lib/auth/server";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Gate the whole dashboard: signed-out users go to login.
  const user = await getServerUser();
  if (!user) redirect("/login");

  return <DashboardShell>{children}</DashboardShell>;
}
