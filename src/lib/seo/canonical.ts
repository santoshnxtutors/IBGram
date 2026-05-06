import { absoluteUrl, ensureTrailingSlash } from "./slug-utils";

export function canonicalPath(path: string): string {
  return ensureTrailingSlash(path.startsWith("/") ? path : `/${path}`);
}

export function canonicalUrl(pathOrUrl: string): string {
  return absoluteUrl(canonicalPath(pathOrUrl));
}
