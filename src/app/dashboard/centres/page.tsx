"use client"

import React, { useState, useEffect } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import columns from './columns'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants, QUERY_KEY } from '@/lib/constants'
import { StatusEnum } from '@/lib/enums/status_enum'
import NewCentrePage from './add'
import { useGetAllCentres } from '@/lib/hooks/use-centre'
import { CentreDTO } from '@/lib/dtos/centre_dto'


export default function CentrePage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const [filters, setFilters] = useState<FilterState>({})
  const [dialog, setDialog] = useState(false);

  const { centres, error, fetchCentres, isPending } = useGetAllCentres()
  const handlePaginationChange = (newPagination: PaginationState) => setPagination(newPagination)
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)

  useEffect(() => {
    fetchCentres()
  }, [pagination, filters])



  const filterOptions = {
    status: Object.values(StatusEnum) as StatusEnum[],
  }

  return (
    <div className='relative'>
      <NewCentrePage
        isOpen={dialog}
        onClose={() => setDialog(false)}
        title='Ajouter un centre'
        description='Ajouter un nouveau centre'
      />
      <DataTable<CentreDTO>
        data={centres?.data ?? []}
        title='Liste des centres'
        columns={columns}
        totalItems={centres?.pagination.totalPages ?? 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions!}
        error={error ?? undefined}
        loading={isPending}
        addNew={() => setDialog(true)}
        addNewLabel='Ajouter un centre'
        exportEndPoint='/commissions'
        exportFileName='commissions'
      />
    </div>
  )
}