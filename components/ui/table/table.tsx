"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, FileText } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTableToolbar } from "./table-toolbar";
import { DataTablePagination } from "./table-pagination";
import { FilterValue } from "@/types";
import { PAGE_SIZE_OPTIONS } from "@/lib/constants";

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  title?: string;
  totalItems?: number;
  onPaginationChange?: (pagination: {
    pageIndex: number;
    pageSize: number;
  }) => void;
  onFiltersChange?: (filters: Record<string, FilterValue>) => void;
  filterOptions?: Record<string, Array<{ label: string; value: string | number | Date }> | string[] | number[] | Date[]>;
  error?: string;
  loading?: boolean;
  moreChildren?: React.ReactNode;
  autoApply?: boolean;
  onExport?: {
    loading: boolean;
    onClick: () => void;
  };
}

export function DataTable<TData>({
  columns,
  data,
  title = "",
  totalItems,
  onPaginationChange,
  onFiltersChange,
  filterOptions,
  error,
  loading = false,
  moreChildren,
  autoApply = true,
  onExport,
}: DataTableProps<TData>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: PAGE_SIZE_OPTIONS[0],
  });
  const [pendingFilters, setPendingFilters] = React.useState<
    Record<string, FilterValue>
  >({});

  // Handle server-side pagination
  const pageCount = totalItems
    ? Math.ceil(totalItems / pagination.pageSize)
    : -1;
  

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: (updatedPagination) => {
      const newPagination =
        typeof updatedPagination === "function"
          ? updatedPagination(pagination)
          : updatedPagination;
      setPagination(newPagination);
      if (onPaginationChange) {
        onPaginationChange({
          pageIndex: newPagination.pageIndex,
          pageSize: newPagination.pageSize,
        });
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: Boolean(onPaginationChange),
    pageCount,
  });

  // Handle filter changes
  const handleFiltersChange = React.useCallback(
    (filters: Record<string, FilterValue>) => {
      if (autoApply) {
        if (onFiltersChange) {
          onFiltersChange(filters);
        }
      } else {
        setPendingFilters(filters);
      }
    },
    [onFiltersChange, autoApply]
  );

  // Apply pending filters
  const applyPendingFilters = React.useCallback(() => {
    if (onFiltersChange) {
      onFiltersChange(pendingFilters);
    }
  }, [pendingFilters, onFiltersChange]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        {moreChildren}
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {filterOptions && (
        <DataTableToolbar
          table={table}
          filterOptions={filterOptions}
          onFiltersChange={handleFiltersChange}
          autoApply={autoApply}
          onApplyFilters={applyPendingFilters}
          pendingFilters={pendingFilters}
          onExport={onExport}
        />
      )}

      <div>
        <Table>
          <TableHeader className="bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="font-medium">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: pagination.pageSize }).map((_, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  {columns.map((_, colIndex) => (
                    <TableCell key={colIndex}>
                      <Skeleton className="h-6 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`hover:bg-blue-100/50 ${
                    index % 2 === 0 ? "bg-background" : "bg-[#f3e7e8]/30"
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <FileText className="h-10 w-10" />
                    <p>Aucun résultat trouvé</p>
                    <p className="text-sm">Essayez de modifier vos filtres ou de réinitialiser la recherche</p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} totalItems={totalItems} />
    </div>
  );
}
