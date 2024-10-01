"use client"

import React, { useState } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import { operationColumn } from './columns'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants, QUERY_KEY } from '@/lib/constants'
import { StatusEnum } from '@/lib/enums/status_enum'
import { OperationDTO } from '../../../lib/dtos/operation_dto'
import { useGetOperations } from '@/lib/hooks/use-operation'
import { FonctionEnum, RoleEnum } from '@/lib/enums/role_enum'


export default function OperationPage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const [filters, setFilters] = useState<FilterState>({})


  console.log('filters', filters['role'])
  const { operations, error, isLoading } = useGetOperations({ filters, pagination });
  const handlePaginationChange = (newPagination: PaginationState) => {setPagination(newPagination)}
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)


  const filterOptions = {
    Fonction: Object.values(FonctionEnum) as FonctionEnum[],
  }

  return (
    <div className='relative'>
      <DataTable<OperationDTO>
        data={operations?.data ?? []}
        title='Liste des operations'
        columns={operationColumn('')}
        totalItems={operations?.pagination.totalCount ?? 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions!}
        error={error?.message}
        loading={isLoading}
        exportEndPoint='/commissions'
        exportFileName='commissions'
      />
    </div>
  )
}