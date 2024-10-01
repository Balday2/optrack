"use client"

import React, { useState } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants } from '@/lib/constants'
import { StatusEnum } from '@/lib/enums/status_enum'
import { useGetOperations } from '@/lib/hooks/use-operation'
import { OperationDTO } from '@/lib/dtos/operation_dto'
import { useSession } from 'next-auth/react'
import { operationColumn } from '@/app/dashboard/operations/columns'


export default function OperationPage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const [filters, setFilters] = useState<FilterState>({})
  const {data: session, status} = useSession()


  const { operations, error, isLoading } = useGetOperations({ 
    filters, pagination, 
    currentUserId: session?.user?.id ?? ''
  });
  const handlePaginationChange = (newPagination: PaginationState) => setPagination(newPagination)
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)




  const filterOptions = {
    status: Object.values(StatusEnum) as StatusEnum[],
  }

  return (
    <div className='relative'>
      <DataTable<OperationDTO>
        data={operations?.data ?? []}
        title='Liste des operations'
        columns={operationColumn(session?.user.role)}
        totalItems={operations?.pagination.totalCount ?? 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions!}
        error={error?.message}
        loading={isLoading || status === "loading"}
        exportEndPoint='/commissions'
        exportFileName='commissions'
      />
    </div>
  )
}