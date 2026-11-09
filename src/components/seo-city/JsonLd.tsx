import { prepareJsonLd, type JsonLdObject } from "@/lib/seo/schema";

export function JsonLd({ data }: { data: JsonLdObject }) {
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
