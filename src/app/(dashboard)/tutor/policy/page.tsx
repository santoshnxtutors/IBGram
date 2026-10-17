import type { Metadata } from "next";
import { TutorPolicy } from "@/components/dashboard/TutorPolicy";
import { HeaderPill, PageHeader } from "@/components/dashboard/ui";
import { ScrollText } from "lucide-react";

export const metadata: Metadata = { title: "IB Gram Tutor Policy" };

export default function TutorPolicyPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={ScrollText}>Tutor policy</HeaderPill>}
        title="How tutoring on IB Gram works"
        subtitle="Payouts, conduct, cancellations and what we expect from each other."
      />
      <TutorPolicy />
    </div>
  );
}
