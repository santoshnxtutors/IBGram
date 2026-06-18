import type { Metadata } from "next";
import type { GeneratedSeoPage } from "./types";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { absoluteUrl } from "@/lib/seo/slug-utils";

export function buildGeneratedMetadata(page: GeneratedSeoPage): Metadata {
  const indexing = getGeneratedIndexingDecision(page);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: {
      canonical: indexing.canonicalUrl,
    },
    robots: {
      index: indexing.index,
      follow: indexing.follow,
    },
    openGraph: {
      type: "website",
      url: indexing.canonicalUrl,
      title: page.ogTitle,
      description: page.ogDescription,
      siteName: "IB Gram",
      images: [{ url: absoluteUrl(page.ogImage), alt: page.breadcrumbTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.twitterTitle,
      description: page.twitterDescription,
      images: [absoluteUrl(page.ogImage)],
    },
  };
}
