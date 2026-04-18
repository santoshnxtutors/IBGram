export type SortOrder = "asc" | "desc";

export type PaginatedResult<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
};
