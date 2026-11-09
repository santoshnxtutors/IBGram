import { prepareJsonLd } from "@/lib/seo/schema";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const safeData = prepareJsonLd(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(safeData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
