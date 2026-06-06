import "server-only";
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/db";

export const PUBLIC_FAQS_CACHE_TAG = "cms:public-faqs";

export type PublicFaq = {
  question: string;
  answer: string;
};

export const getPublicHomepageFaqs = unstable_cache(
  async (): Promise<PublicFaq[] | null> => {
    try {
      const rows = await prisma.faqItem.findMany({
        where: {
          status: "published",
          OR: [
            { category: { in: ["homepage", "home", "general"] } },
            { pageId: { in: ["/", "home", "homepage"] } },
          ],
        },
        orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
        take: 12,
      });
      if (!rows.length) return null;
      return rows.map((row) => ({ question: row.question, answer: row.answer }));
    } catch {
      return null;
    }
  },
  ["public-homepage-faqs"],
  { tags: [PUBLIC_FAQS_CACHE_TAG], revalidate: 300 },
);
