import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Subscription Plans | IB Gram",
  robots: { index: false, follow: true },
  alternates: { canonical: "/subscription/" },
};

export default function SubscriptionLayout({ children }: { children: ReactNode }) {
  return children;
}
