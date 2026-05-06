import { MapPinned } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";

export function GeneratedLocalAreas({ page }: { page: GeneratedSeoPage }) {
  return <GeneratedBlockSection page={page} type="local_areas" icon={MapPinned} eyebrow="Local coverage" fallbackTitle="Areas Covered" tinted />;
}
