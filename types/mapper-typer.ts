
export type Pagination = {
  page: number
  limit: number
  totalCount: number
  totalPages: number
}

export type MapperDTO<T> = {
  data: T[];
  pagination: Pagination
}