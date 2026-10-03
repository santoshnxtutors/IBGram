import type { Metadata } from "next";
import { TutorPolicy } from "@/components/dashboard/TutorPolicy";

export const metadata: Metadata = { title: "IB Gram Tutor Policy" };

export default function TutorPolicyPage() {
  return <TutorPolicy />;
}
