import { GitBranch } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedTutorMatching({ page }: { page: GeneratedSeoPage }) {
  return <GeneratedBlockSection page={page} type="matching_process" icon={GitBranch} eyebrow="Matching" fallbackTitle="Tutor Matching Process" tinted />;
}
