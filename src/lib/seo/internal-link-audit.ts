import { getCanonicalTargetForDuplicate, normalizePath } from "./canonical";
import { isPrivateOrUtilityPath } from "./indexing-policy";

export type InternalLinkAuditIssue = {
  href: string;
  reason: string;
  canonicalTarget?: string;
};

export function auditInternalLinks(hrefs: string[]): InternalLinkAuditIssue[] {
  const issues: InternalLinkAuditIssue[] = [];

  for (const href of hrefs) {
    const trimmed = href.trim();
    if (!trimmed) {
      issues.push({ href, reason: "Empty href." });
      continue;
    }

    if (/^https?:\/\/(localhost|127\.0\.0\.1)/i.test(trimmed)) {
      issues.push({ href, reason: "Public link points to localhost." });
      continue;
    }

    if (!trimmed.startsWith("/") && !/^https:\/\/(www\.)?ibgram\.com/i.test(trimmed)) {
      continue;
    }

    const path = normalizePath(trimmed);
    if (isPrivateOrUtilityPath(path)) {
      issues.push({ href, reason: "Public link points to a private, auth, API, or utility route." });
      continue;
    }

    const canonicalTarget = getCanonicalTargetForDuplicate(path);
    if (canonicalTarget) {
      issues.push({ href, reason: "Public link points to a redirected duplicate URL.", canonicalTarget });
    }
  }

  return issues;
}
