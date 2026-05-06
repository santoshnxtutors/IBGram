import type { Metadata } from "next";
import type { GeneratedSeoPage } from "./types";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";

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
      url: page.canonicalUrl,
      title: page.ogTitle,
      description: page.ogDescription,
      siteName: "IB Gram",
      images: [{ url: page.ogImage, alt: page.breadcrumbTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.twitterTitle,
      description: page.twitterDescription,
      images: [page.ogImage],
    },
  };
}
