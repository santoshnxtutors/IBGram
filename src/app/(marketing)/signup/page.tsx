import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthFlow } from "@/components/auth/AuthFlow";
import { getServerUser } from "@/lib/auth/server";
import { dashboardPathForUser } from "@/lib/auth/types";

export const metadata: Metadata = {
  title: "Sign Up",
  robots: {
    index: false,
    follow: false,
  },
};

/** Only same-site relative paths, so ?returnTo can't bounce users off-site. */
function safeReturnTo(value?: string): string | null {
  return value && value.startsWith("/") && !value.startsWith("//") ? value : null;
}

// ?role=tutor (from /join-as-tutor) or ?role=student skips the role picker.
export default async function SignupPage({ searchParams }: { searchParams: Promise<{ role?: string; returnTo?: string }> }) {
  const { role, returnTo } = await searchParams;
  // Already signed in: honour ?returnTo, else straight to the dashboard.
  const user = await getServerUser();
  if (user) redirect(safeReturnTo(returnTo) ?? dashboardPathForUser(user));
  return <AuthFlow initialAuthType="signup" initialRole={role === "tutor" || role === "student" ? role : undefined} />;
}
