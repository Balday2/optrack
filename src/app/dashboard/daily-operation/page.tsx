"use client"

import { DataTable } from '@/components/data-table/DataTable'
import { useAppStore } from '@/lib/stores/app-store'
import { useDailyOperations } from '@/lib/hooks/use-operation'
import { OperationDTO } from '@/lib/dtos/operation_dto'
import { useSession } from 'next-auth/react'
import { operationColumn } from '@/app/dashboard/operations/columns'
import { format } from 'date-fns'
import { RoleEnum } from '@/lib/enums/role_enum'


export default function DailyOperationPage() {

  const {setOpenToAddOperation} = useAppStore();
  const {data: session, status} = useSession()


  const { operations, error, isLoading } = useDailyOperations('', RoleEnum.ADMIN);




  return (
    <div className='relative'>
      <DataTable<OperationDTO>
        data={operations ?? []}
        title={`Operation du jour | ${format(new Date().toISOString(), 'dd/MM/yyyy')}`}
        columns={operationColumn(session?.user.role)}
        error={error?.message}
        loading={isLoading || status === "loading"}
        addNew={() => setOpenToAddOperation(true)}
      />
    </div>
  )
}