import type { Metadata } from "next";
import type { CitySeoPage } from "./city-page-types";
import type { IgcseCitySeoPage } from "./igcse-city-pages";
import type { IndexingDecision } from "./indexing";
import { canonicalUrl } from "./canonical";
import { absoluteUrl } from "./slug-utils";

export function buildCityMetadata(page: CitySeoPage, indexing: IndexingDecision): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: {
      canonical: canonicalUrl(indexing.canonicalUrl),
    },
    robots: {
      index: indexing.index,
      follow: indexing.follow,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl(page.canonicalUrl),
      title: page.ogTitle,
      description: page.ogDescription,
      siteName: "IB Gram",
      images: [
        {
          url: absoluteUrl(page.ogImage),
          alt: page.imageAltText,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle,
      description: page.ogDescription,
      images: [absoluteUrl(page.ogImage)],
    },
  };
}

export function buildNoindexMetadata(args: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
}): Metadata {
  return {
    title: args.title,
    description: args.description,
    alternates: {
      canonical: canonicalUrl(args.canonicalUrl),
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl(args.canonicalUrl),
      title: args.title,
      description: args.description,
      siteName: "IB Gram",
      images: [
        {
          url: absoluteUrl(args.ogImage),
          alt: args.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: args.title,
      description: args.description,
      images: [absoluteUrl(args.ogImage)],
    },
  };
}

export function buildIndexableMetadata(args: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  keywords?: string[];
}): Metadata {
  return {
    title: args.title,
    description: args.description,
    keywords: args.keywords,
    alternates: {
      canonical: canonicalUrl(args.canonicalUrl),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl(args.canonicalUrl),
      title: args.title,
      description: args.description,
      siteName: "IB Gram",
      images: [
        {
          url: absoluteUrl(args.ogImage),
          alt: args.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: args.title,
      description: args.description,
      images: [absoluteUrl(args.ogImage)],
    },
  };
}

export function buildIgcseCityMetadata(page: IgcseCitySeoPage): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: canonicalUrl(page.canonicalUrl),
    },
    robots: {
      index: page.indexFlag === "index",
      follow: true,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl(page.canonicalUrl),
      title: page.ogTitle,
      description: page.ogDescription,
      siteName: "IB Gram",
      images: [
        {
          url: absoluteUrl(page.ogImage),
          alt: page.breadcrumbTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.twitterTitle,
      description: page.twitterDescription,
      images: [absoluteUrl(page.ogImage)],
    },
  };
}
