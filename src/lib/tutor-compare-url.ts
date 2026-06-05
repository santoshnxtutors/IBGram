type TutorCompareId = string | number;

const COMPARE_ID_SEPARATOR = "-vs-";

export function buildTutorComparePath(ids: TutorCompareId[]) {
  const cleanIds = ids.map((id) => String(id).trim()).filter(Boolean);
  return cleanIds.length ? `/tutor-compare/${cleanIds.map(encodeURIComponent).join(COMPARE_ID_SEPARATOR)}` : "/tutor-compare";
}

export function parseTutorCompareIds(value: string | null | undefined) {
  if (!value) return [];

  const separator = value.includes(COMPARE_ID_SEPARATOR) ? COMPARE_ID_SEPARATOR : ",";
  return value
    .split(separator)
    .map((id) => safeDecodeURIComponent(id.trim()))
    .filter(Boolean);
}

function safeDecodeURIComponent(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
