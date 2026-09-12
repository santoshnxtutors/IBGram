"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InvoiceDownloadButton({ fileName }: { fileName: string }) {
  return (
    <Button
      className="h-11 rounded-xl px-6 font-black"
      onClick={() => {
        // Browsers use the page title as the saved PDF's file name.
        const title = document.title;
        document.title = fileName;
        window.addEventListener("afterprint", () => (document.title = title), { once: true });
        window.print();
      }}
    >
      <Download className="size-4" />
      Download invoice (PDF)
    </Button>
  );
}
