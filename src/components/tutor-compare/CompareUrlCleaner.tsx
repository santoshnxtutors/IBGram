"use client";

import { useEffect } from "react";
import { storeLegacyReturnToFromUrl } from "@/lib/return-to";
import { buildTutorComparePath, parseTutorCompareIds } from "@/lib/tutor-compare-url";

export function CompareUrlCleaner() {
  useEffect(() => {
    storeLegacyReturnToFromUrl("tutor-compare", ["/tutor-compare"]);

    const url = new URL(window.location.href);
    if (url.pathname !== "/tutor-compare") return;

    const ids = parseTutorCompareIds(url.searchParams.get("ids"));
    if (!ids.length) return;

    window.history.replaceState(window.history.state, "", `${buildTutorComparePath(ids)}${url.hash}`);
  }, []);

  return null;
}
