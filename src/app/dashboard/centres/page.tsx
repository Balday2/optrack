"use client"

import React, { useState } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import columns from './columns'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants, QUERY_KEY } from '@/lib/constants'
import { StatusEnum } from '@/lib/enums/status_enum'
import NewCentrePage from './add'
import { useGetAllCentres } from '@/lib/hooks/use-centre'
import { CentreDTO } from '@/lib/dtos/centre_dto'
import { useAppStore } from '@/lib/stores/app-store'
import EditCentrePage from './edit'
import ToggleCentrePage from './toggle'


export default function CentrePage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const [filters, setFilters] = useState<FilterState>({})
  const {setOpenToAddCentre} = useAppStore();


  const { centres, error, isLoading } = useGetAllCentres({ 
    filters:{
      ...filters,
      status: filters['status'] && filters['status'][0]
    },
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });
  const handlePaginationChange = (newPagination: PaginationState) => {setPagination(newPagination)}
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)


  const filterOptions = {
    status: Object.values(StatusEnum) as StatusEnum[],
  }

  return (
    <div className='relative'>
      <NewCentrePage />
      <EditCentrePage />
      <ToggleCentrePage />
      <DataTable<CentreDTO>
        data={centres?.data ?? []}
        title='Liste des centres'
        columns={columns}
        totalItems={centres?.pagination.totalCount ?? 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions!}
        error={error?.message}
        loading={isLoading}
        addNew={() => setOpenToAddCentre(true)}
        addNewLabel='Ajouter un centre'
      />
    </div>
  )
}