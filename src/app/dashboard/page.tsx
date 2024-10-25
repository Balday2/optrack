"use client"

import React, { useState } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import columns from './coordinator-columns'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants } from '@/lib/constants'
import { UserDTO } from '@/lib/dtos/user_dto'
import { StatusEnum } from '@/lib/enums/status_enum'
import NewCoordinatorPage from './add-coordinator'
import { useGetAllCentres } from '@/lib/hooks/use-centre'
import EditCoordinatorPage from './edit-coordinator'
import ToggleCoordinatorPage from './toggle-coordinator'
import { useAppStore } from '@/lib/stores/app-store'
import { useGetCoordinators } from '@/lib/hooks/use-user'


export default function DashboardPage() {

  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })
  const {setOpenToAddUser} = useAppStore();
  
  const [filters, setFilters] = useState<FilterState>({})
  const { users, error, isLoading } = useGetCoordinators({ 
    filters:{
      ...filters,
      status: filters['status'] && filters['status'][0]
    },
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });
  const handlePaginationChange = (newPagination: PaginationState) => setPagination(newPagination)
  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)
  const { centres, isLoading: loadCentres } = useGetAllCentres({ getAllCentres: true });




  const filterOptions = {
    status: ['actif', 'inactif'],
  }

  return (
    <div className='relative'>
      <NewCoordinatorPage centres={centres?.data ?? []} />
      <EditCoordinatorPage centres={centres?.data ?? []} />
      <ToggleCoordinatorPage />
      <DataTable<UserDTO>
        data={users?.data ?? []}
        title='Liste des coordinateurs'
        columns={columns}
        totalItems={users?.pagination.totalCount ?? 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions!}
        error={error?.message}
        loading={isLoading || loadCentres}
        addNew={() => setOpenToAddUser(true)}
        addNewLabel='Ajouter un coordinateur'
      />
    </div>
  )
}