import { Building2 } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedSchools({ page }: { page: GeneratedSeoPage }) {
  return <GeneratedBlockSection page={page} type="schools" icon={Building2} eyebrow="School ecosystem" fallbackTitle="School Ecosystem Support" />;
}
