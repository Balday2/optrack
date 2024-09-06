// DataTable.tsx
import React, { useState, useEffect } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pagination } from './pagination'
import { Filters } from './filters'
import { Search } from './search'
import { DataTableProps, PaginationState, FilterState } from './types'
import { AppConstants } from '@/lib/constants'
import ExportExcelButton from './export.excel'
import NoDataFound from './no-data-found'
import { Card, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export function DataTable<T>({
  data,
  columns,
  totalItems,
  onPaginationChange,
  onFiltersChange,
  filterOptions,
  loading,
  error,
  exportEndPoint,
  exportFileName,
  title,
  addNew,
  addNewLabel
}: DataTableProps<T>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: AppConstants.pageSize
  })
  const [filters, setFilters] = useState<FilterState>({})
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    pageCount: Math.ceil(totalItems / pagination.pageSize),
    manualPagination: true,
  })

  useEffect(() => {
    onPaginationChange(pagination)
  }, [pagination, onPaginationChange])

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    onFiltersChange(newFilters)
    setPagination({ ...pagination, pageIndex: 0 })
  }

  if (error) {
    return <NoDataFound 
      title={`Une erreur s'est produite`}
      content={error}
      error={true}
    />
  }

  return (
    <Card className='w-full bg-white px-4 pb-4'>
      <CardHeader className='text-2xl font-bold'>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <div className="flex flex-col sm:flex-row justify-between my-3 mx-2 gap-2">
        <Search value={globalFilter} onChange={setGlobalFilter} />
        {filterOptions && <Filters
            onApplyFilters={handleFiltersChange}
            filterOptions={filterOptions}
            loading={loading}
          />
        }
        {/* {
          exportEndPoint && exportFileName && <ExportExcelButton 
            filters={filters}
            endpoint={exportEndPoint}
            fileName={exportFileName}
          />
        } */}
        <Button
          onClick={addNew}
          size="sm"
          className="h-7 text-sm"
          disabled={loading}
        >
          <span>{addNewLabel}</span>
        </Button>
      </div>
      <div className='border bg-white rounded-md'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading && table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-4">
                  Chargement...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-4">
                  <NoDataFound 
                    title={`Acune donnée trouvée`}
                    content={`Nous n'avons pas pu trouver les données que vous recherchez.`}
                  />
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <Pagination
          currentPage={pagination.pageIndex + 1}
          loading={loading}
          totalPages={table.getPageCount()}
          onPageChange={(page) =>
            setPagination({ ...pagination, pageIndex: page - 1 })
          }
        />
      </div>
    </Card>
  )
}