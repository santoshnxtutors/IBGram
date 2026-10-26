/**
 * Every /jobs/ role applies through the tutor signup, which creates the account and the
 * profile the academic team reviews. There is deliberately no per-role application form in
 * the flow: one profile is matched against this role and every one opened after it.
 *
 * Not in ./index.ts because that module is server-only and these are plain hrefs.
 */
const TUTOR_PROFILE = encodeURIComponent("/tutor/profile");

/**
 * ?from=jobs makes /join-as-tutor/ show the signup route only. Someone who clicked Apply on a
 * role has already decided to apply, so the "fill in the form and we build it for you" option
 * is noise at that point - they sign up and fill in their own details.
 */
export const APPLY_HREF = "/join-as-tutor/?from=jobs";
export const LOGIN_HREF = `/login/?returnTo=${TUTOR_PROFILE}`;
