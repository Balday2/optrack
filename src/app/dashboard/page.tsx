"use client"

import React, { useState } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import columns from './coordinator-columns'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants } from '@/lib/constants'
import { UserDTO } from '@/lib/dtos/user_dto'
import { StatusEnum } from '@/lib/enums/status_enum'
import { useGetAllUsers } from '@/lib/hooks/use-user'
import NewCoordinatorPage from './add-new-coordinator'
import { useGetAllCentres } from '@/lib/hooks/use-centre'
import EditCoordinatorPage from './edit-coordinator'
import DeleteCoordinatorPage from './delete-coordinator'
import { useAppStore } from '@/lib/stores/app-store'


export default function DashboardPage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const [filters, setFilters] = useState<FilterState>({})
  const {setOpenToAddUser} = useAppStore();


  const { users, error, isLoading } = useGetAllUsers({ filters, pagination });
  const handlePaginationChange = (newPagination: PaginationState) => setPagination(newPagination)
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)
  const { centres } = useGetAllCentres({ getAllCentres: true });




  const filterOptions = {
    status: Object.values(StatusEnum) as StatusEnum[],
  }

  return (
    <div className='relative'>
      <NewCoordinatorPage centres={centres?.data ?? []} />
      <EditCoordinatorPage centres={centres?.data ?? []} />
      <DeleteCoordinatorPage />
      <DataTable<UserDTO>
        data={users?.data ?? []}
        title='Liste des coordinateurs'
        columns={columns}
        totalItems={users?.pagination.totalCount ?? 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions!}
        error={error?.message}
        loading={isLoading}
        addNew={() => setOpenToAddUser(true)}
        addNewLabel='Ajouter un coordinateur'
        exportEndPoint='/commissions'
        exportFileName='commissions'
      />
    </div>
  )
}