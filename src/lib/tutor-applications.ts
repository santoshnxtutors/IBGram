/**
 * Tutor applications reuse the JobApplication table. They are written with
 * jobId null and this fixed jobTitleSnapshot, which is how they are told apart
 * from applications to real job postings.
 *
 * This lives outside the route file because a Next.js route module may only
 * export route handlers and its known config keys — exporting a constant from
 * route.ts fails the generated route type check.
 */
export const TUTOR_APPLICATION_TITLE = "Tutor application";
