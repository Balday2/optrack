"use client"

import React, { useState, useEffect } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import columns from './coordinator-columns'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants, QUERY_KEY } from '@/lib/constants'
import { UserDTO } from '@/lib/dtos/user_dto'
import { StatusEnum } from '@/lib/enums/status_enum'
import { useGetAllUsers } from '@/lib/hooks/use-user'
import NewCoordinatorPage from './add-new-coordinator'


export default function DashboardPage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const [filters, setFilters] = useState<FilterState>({})
  const [dialog, setDialog] = useState(false);

  const { users, error, fetchUsers, isPending } = useGetAllUsers()
  const handlePaginationChange = (newPagination: PaginationState) => setPagination(newPagination)
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)

  useEffect(() => {
    fetchUsers()
  }, [pagination, filters])



  const filterOptions = {
    status: Object.values(StatusEnum) as StatusEnum[],
  }

  return (
    <div className='relative'>
      <NewCoordinatorPage 
        isOpen={dialog}
        onClose={() => setDialog(false)}
        title='Ajouter un coordinateur'
        description='Ajouter un nouveau coordinateur'
      />
      <DataTable<UserDTO>
        data={users?.data ?? []}
        title='Liste des coordinateurs'
        columns={columns}
        totalItems={users?.pagination.totalPages ?? 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions!}
        error={error ?? undefined}
        loading={isPending}
        addNew={() => setDialog(true)}
        addNewLabel='Ajouter un coordinateur'
        exportEndPoint='/commissions'
        exportFileName='commissions'
      />
    </div>
  )
}