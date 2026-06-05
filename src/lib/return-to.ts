type ReturnToKey = "tutor-compare" | "tutor-profile";

const RETURN_TO_STORAGE_KEYS: Record<ReturnToKey, string> = {
  "tutor-compare": "ibgram.returnTo.tutorCompare",
  "tutor-profile": "ibgram.returnTo.tutorProfile",
};

export function rememberReturnTo(key: ReturnToKey, returnTo: string, blockedPrefixes: string[] = []) {
  const safeReturnTo = getSafeReturnTo(returnTo, blockedPrefixes);
  if (!safeReturnTo || typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(RETURN_TO_STORAGE_KEYS[key], safeReturnTo);
  } catch {
    // Session storage can be unavailable in strict browser privacy modes.
  }
}

export function getStoredReturnTo(key: ReturnToKey, blockedPrefixes: string[] = []) {
  if (typeof window === "undefined") return undefined;

  try {
    return getSafeReturnTo(window.sessionStorage.getItem(RETURN_TO_STORAGE_KEYS[key]), blockedPrefixes);
  } catch {
    return undefined;
  }
}

export function getCurrentInternalPath() {
  if (typeof window === "undefined") return "/";
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export function storeLegacyReturnToFromUrl(key: ReturnToKey, blockedPrefixes: string[] = []) {
  if (typeof window === "undefined") return undefined;

  const url = new URL(window.location.href);
  const legacyReturnTo = getSafeReturnTo(url.searchParams.get("returnTo"), blockedPrefixes);
  if (!legacyReturnTo) return undefined;

  rememberReturnTo(key, legacyReturnTo, blockedPrefixes);
  window.history.replaceState(
    window.history.state,
    "",
    `${window.location.pathname}${stripQueryParam(window.location.search, "returnTo")}${window.location.hash}`,
  );

  return legacyReturnTo;
}

export function getSafeReturnTo(value: string | null | undefined, blockedPrefixes: string[] = []) {
  if (!value) return undefined;

  const returnTo = decodeReturnTo(value);
  if (!returnTo.startsWith("/") || returnTo.startsWith("//")) return undefined;
  if (blockedPrefixes.some((prefix) => returnTo.startsWith(prefix))) return undefined;

  return returnTo;
}

function decodeReturnTo(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function stripQueryParam(search: string, name: string) {
  if (!search.startsWith("?")) return "";

  const filteredParts = search
    .slice(1)
    .split("&")
    .filter((part) => getQueryParamName(part) !== name);

  return filteredParts.length ? `?${filteredParts.join("&")}` : "";
}

function getQueryParamName(part: string) {
  const [rawName] = part.split("=", 1);

  try {
    return decodeURIComponent(rawName.replace(/\+/g, " "));
  } catch {
    return rawName;
  }
}
