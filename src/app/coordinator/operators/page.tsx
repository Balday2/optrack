"use client"

import React, { useState } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants } from '@/lib/constants'
import { UserDTO } from '@/lib/dtos/user_dto'
import { StatusEnum } from '@/lib/enums/status_enum'
import { useAppStore } from '@/lib/stores/app-store'
import NewOperatorPage from './add-operator'
import EditOperatorPage from './edit-operator'
import columns from '@/app/dashboard/coordinator-columns'
import ToggleOperatorPage from './toggle-operator'
import { useGetOperatorsByCoordinator } from '@/lib/hooks/use-user'


export default function CoordinatorPage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const [filters, setFilters] = useState<FilterState>({})
  const {setOpenToAddUser} = useAppStore();
  


  const { users, error, isLoading } = useGetOperatorsByCoordinator({ filters, pagination });
  const handlePaginationChange = (newPagination: PaginationState) => setPagination(newPagination)
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)




  const filterOptions = {
    status: Object.values(StatusEnum) as StatusEnum[],
  }

  return (
    <div className='relative'>
      <NewOperatorPage />
      <EditOperatorPage  />
      <ToggleOperatorPage />
      <DataTable<UserDTO>
        data={users?.data ?? []}
        title='Liste des operateurs'
        columns={columns}
        totalItems={users?.pagination.totalCount ?? 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions!}
        error={error?.message}
        loading={isLoading}
        addNew={() => setOpenToAddUser(true)}
        addNewLabel='Ajouter un operateur'
        exportEndPoint='/commissions'
        exportFileName='commissions'
      />
    </div>
  )
}