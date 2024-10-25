"use client"

import React, { useState } from 'react'
import { DataTable } from '@/components/data-table/DataTable'
import { PaginationState, FilterState } from '@/components/data-table/types'
import { AppConstants } from '@/lib/constants'
import { StatusEnum } from '@/lib/enums/status_enum'
import { useAppStore } from '@/lib/stores/app-store'
import { useDailyOperations } from '@/lib/hooks/use-operation'
import { OperationDTO } from '@/lib/dtos/operation_dto'
import { useSession } from 'next-auth/react'
import { operationColumn } from '@/app/dashboard/operations/columns'
import NewOperationModal from './add-operation'
import EditOperationModal from './edit-operation'
import { format } from 'date-fns'
import { RoleEnum } from '@/lib/enums/role_enum'
import { useGetOperators, useGetOperatorsByCoordinator } from '@/lib/hooks/use-user'


export default function NewOperationPage() {

  const {setOpenToAddOperation} = useAppStore();
  const {data: session, status} = useSession()
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: AppConstants.pageSize })



  const { operations, error, isLoading } = useDailyOperations(session?.user?.id ?? '', RoleEnum.COORDINATOR);
  const { users, isLoading: loadOperators } = useGetOperatorsByCoordinator({
    filters: {},
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
  });




  return (
    <div className='relative'>
      <NewOperationModal users={users?.data ?? []} />
      <EditOperationModal  />
      <DataTable<OperationDTO>
        data={operations ?? []}
        title={`Operation du jour | ${format(new Date().toISOString(), 'dd/MM/yyyy')}`}
        columns={operationColumn(session?.user.role)}
        error={error?.message}
        loading={isLoading || status === "loading" || loadOperators}
        addNew={() => setOpenToAddOperation(true)}
        addNewLabel='Ajouter une operation'
      />
    </div>
  )
}