"use client"

import React, { useState } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import { operationColumn } from './columns'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants, QUERY_KEY } from '@/lib/constants'
import { StatusEnum } from '@/lib/enums/status_enum'
import { OperationDTO } from '../../../lib/dtos/operation_dto'
import { operationExportData, useGetOperations } from '@/lib/hooks/use-operation'
import { FonctionEnum, RoleEnum } from '@/lib/enums/role_enum'
import { useGetAllCentres } from '@/lib/hooks/use-centre'
import { Button } from '@/components/ui/button'
import ExportExcelButton from '@/components/data-table/export.excel'


export default function OperationPage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const [filters, setFilters] = useState<FilterState>({})
  const { centres, isLoading: loadCentres } = useGetAllCentres({ getAllCentres: true });


  const { operations, error, isLoading } = useGetOperations({ 
    filters:{
      ...filters,
      Fonction: filters['Fonction'] && filters['Fonction'][0],
      Centre: filters['Centre'] && filters['Centre'][0],
      date: filters['date'] && filters['date'][0]
    },
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });
  const handlePaginationChange = (newPagination: PaginationState) => {setPagination(newPagination)}
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)



  const filterOptions = {
    Fonction: Object.values(FonctionEnum) as FonctionEnum[],
    Centre: !loadCentres || centres?.data ? centres?.data?.map(centre => centre.name) as string[] : []
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
        exportComponent={
          <ExportExcelButton
            handleExport={() => operationExportData({ data: operations?.data ?? [] })}
            loading={isLoading}
          />
        }
      />
    </div>
  )
}