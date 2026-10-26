import { redirect } from "next/navigation";
import { APPLY_HREF } from "@/lib/jobs/apply-link";

/**
 * There is one way to apply for a role now: sign up as a tutor and fill in your own profile.
 *
 * This route used to render a per-role application form. Nothing links to it any more, but
 * old links and anyone who kept the URL should land in the real flow rather than on a second,
 * parallel form that the matching process does not read.
 */
export default function ApplyRedirect() {
  redirect(APPLY_HREF);
}
