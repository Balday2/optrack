import { ColumnDef } from '@tanstack/react-table'

export type PaginationState = {
  pageIndex: number;
  pageSize: number;
};

export type FilterState = {
  [key: string]: string[];
};

export type FilterStatex = {
  status?: string;
  role?: string;
};

export type SortingState = {
  id: string;
  desc: boolean;
}[];

export type DataTableProps<T> = {
  data: T[];
  title: string;
  columns: ColumnDef<T>[];
  totalItems?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  onFiltersChange?: (filters: FilterState) => void;
  filterOptions?: { [key: string]: string[] };
  loading?: boolean;
  error?: string;
  exportEndPoint?: string;
  exportFileName?: string;
  addNew?: () => void;
  addNewLabel?: string;
};

export type MapperDTO<T> = {
  data: T;
  total: number
}

export type FilterParams = {
  format?: string;
  page?: number;
  limit?: number;
  filters?: Record<string, any>;
}

export interface FilterParamsx {
  filters?: FilterState,
  pagination: PaginationState
}