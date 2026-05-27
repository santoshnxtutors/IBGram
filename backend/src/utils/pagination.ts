export type PaginationInput = {
  page?: number | string;
  pageSize?: number | string;
};

export type Pagination = {
  page: number;
  pageSize: number;
  skip: number;
  take: number;
};

export function getPagination(input: PaginationInput = {}, maxPageSize = 100): Pagination {
  const page = Math.max(Number(input.page) || 1, 1);
  const pageSize = Math.min(Math.max(Number(input.pageSize) || 20, 1), maxPageSize);

  return {
    page,
    pageSize,
    skip: (page - 1) * pageSize,
    take: pageSize,
  };
}

export function getTotalPages(totalItems: number, pageSize: number): number {
  return Math.max(Math.ceil(totalItems / pageSize), 1);
}
