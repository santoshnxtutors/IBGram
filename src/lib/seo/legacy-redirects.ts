/**
 * One-hop 301s for legacy URLs that Google still crawls but that no longer
 * resolve. Spread this into `redirects()` in next.config.ts.
 *
 * Rules for anything added here:
 *  - The `source` MUST be absent from the sitemap. Redirecting a live sitemap
 *    URL deletes an indexed page; that is forbidden. Every source below was
 *    checked against tmp/sitemap-urls.json and confirmed to return 404.
 *  - The `destination` MUST return 200 and be present in the sitemap, so the
 *    hop lands on a final URL and never chains into a second redirect.
 *  - Exact paths only, no `:params` or wildcards, so no rule here can ever
 *    swallow a live URL by accident.
 */
export const legacyRedirects: { source: string; destination: string; permanent: true }[] = [
  // Blog slugs that changed or were published once under a typo'd/short form.
  // All five earned impressions before the blog rewrite renamed the posts.
  { source: "/blog/how-to-score-7-ib-ib-math-aa-hl/", destination: "/blog/how-to-score-7-ib-math-aa-hl/", permanent: true },
  { source: "/blog/how-to-score-7-ib-math-aahl/", destination: "/blog/how-to-score-7-ib-math-aa-hl/", permanent: true },
  { source: "/blog/how-to-perfect-ib-extended-essay-ee/", destination: "/blog/how-to-write-a-perfect-ib-extended-essay-ee/", permanent: true },
  { source: "/blog/stem-subject-choice-ib-math-ai-physics/", destination: "/blog/stem-subject-choice-ib-dp/", permanent: true },
  { source: "/blog/top-igcse-tutors-in-gurgaon/", destination: "/blog/top-igcse-tutors-in-gurgaon-for-maths-science/", permanent: true },

  // Path-parent hubs that were never built as pages. Breadcrumbs on the child
  // pages link to them, so Googlebot walks up and banks a 404 on each one.
  // GSC confirms all four as "Not found (404)" with the child page as referrer
  // (e.g. /courses/ <- /courses/ib/chemistry/, /igcse-tutors/ <- /igcse-tutors/gurugram/chemistry/).
  { source: "/courses/", destination: "/programmes/", permanent: true },
  { source: "/courses/ib/", destination: "/programmes/", permanent: true },
  { source: "/courses/igcse/", destination: "/igcse/", permanent: true },
  { source: "/igcse-tutors/", destination: "/igcse-pages/", permanent: true },
  { source: "/tutor-pages/", destination: "/tutors/", permanent: true },
  { source: "/tutor-profile/", destination: "/tutors/", permanent: true },

  // Removed billing page. Still advertised as "Subscription plans" in
  // llms-full.txt and linked from a couple of /ib-tutors/ city pages, which is
  // how Google keeps re-finding it. 123 impressions / 5 clicks, so the hop goes
  // to the live conversion page rather than a generic hub. /payment/ is the
  // literal successor but is not in the sitemap, so it cannot be the target.
  { source: "/subscription/", destination: "/contact-us/", permanent: true },

  // Hard-deleted tutor profiles. They were in the sitemap when Google indexed
  // them and there is no per-person replacement, so they fold into the
  // directory, matching the existing /tutor-profile/8403/ rule.
  { source: "/tutor-profile/suman-sharma-ib-igcse-myp-online-tutor/", destination: "/tutors/", permanent: true },
  { source: "/tutor-profile/preeti-malhotra-myp-science-tutor/", destination: "/tutors/", permanent: true },

  // Misspelled or superseded keyword URLs that earned impressions once:
  // "igcse-toors" typo, "spanish" before the subject slug became "spanish-b",
  // and three one-off Gurgaon/IGCSE landing slugs that were never rebuilt.
  { source: "/igcse-toors/gurugram/areas/dlf-phase-5/", destination: "/igcse-tutors/gurugram/areas/dlf-phase-5/", permanent: true },
  { source: "/gurgaon/ib-dp-spanish-home-tutor-in-dlf-phase-2-gurgaon/", destination: "/gurgaon/ib-dp-spanish-b-home-tutor-in-dlf-phase-2-gurgaon/", permanent: true },
  { source: "/gurgaon/ib-home-tutorial-gurgaon/", destination: "/gurgaon/", permanent: true },
  { source: "/ib-home-tutor-in-gurgaon/", destination: "/ib-tutor-in-gurgaon/", permanent: true },
  { source: "/igcse-online-tutor/", destination: "/igcse/", permanent: true },
];
