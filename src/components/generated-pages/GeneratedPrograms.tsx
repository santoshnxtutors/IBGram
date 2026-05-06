import { Layers3 } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedPrograms({ page }: { page: GeneratedSeoPage }) {
  return <GeneratedBlockSection page={page} type="programmes" icon={Layers3} eyebrow="PYP, MYP, DP" fallbackTitle="IB Programmes Supported" tinted />;
}
