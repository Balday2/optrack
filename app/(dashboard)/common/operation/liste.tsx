"use client"

import { DataTable } from "@/components/ui/table/table"
import { useState } from "react"
import { FilterValue } from "@/types"
import { useExportWeeklyReport, useOperationByFilters } from "@/lib/hooks/operation.hook"
import { OperationDTO } from "@/lib/DTO/operation.dto"
import { PAGE_SIZE_OPTIONS } from "@/lib/constants"
import operationColumns from "./table-column"
import { useSession } from "next-auth/react"
import { RoleEnum } from "@/lib/Enums/role.enum"
import { Button } from "@/components/ui/button"
import CreateOperation from "./create"
import { exportWeeklyReportExcel } from "./weekly.report"
import { toast } from "sonner"

export default function OperationListe() {

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: PAGE_SIZE_OPTIONS[0] })
  const { data: session } = useSession()
  const [filters, setFilters] = useState<Record<string, FilterValue>>({
    date: {
      from: new Date(new Date().setHours(0, 0, 0, 0)),
      to: null
    }
  })
  const [openCreate, setOpenCreate] = useState(false)

  const { data, isLoading, error } = useOperationByFilters({ 
    page: pagination.pageIndex + 1, 
    pageSize: pagination.pageSize,
    filters: filters
  })

  const weeklyReport = useExportWeeklyReport("2025-06-16", "2025-06-20");

  const filterOptions = {
    date: [{
      label: "Aujourd'hui",
      value: new Date()
    }]
  }

  const handlePaginationChange = (newPagination: { pageIndex: number; pageSize: number }) => {
    setPagination(newPagination)
  }

  const handleFiltersChange = (newFilters: Record<string, FilterValue>) => {
    setFilters(newFilters)
  }

  const handleExport = () => {
    if (weeklyReport?.data) {
      exportWeeklyReportExcel(weeklyReport.data)
    } else {
      toast.error("Erreur lors de l'exportation")
    }
  }

  return (
    <>
      <DataTable<OperationDTO>
        data={data?.data || []}
        title="Liste des opérations"
        columns={operationColumns(session?.user?.role || RoleEnum.COORDINATOR)}
        totalItems={data?.pagination?.totalCount || 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions}
        error={error?.message}
        loading={isLoading}
        autoApply={true}
        moreChildren={
          session?.user?.role === RoleEnum.COORDINATOR && (
            <Button
              variant="default"
              className="h-7 px-4 text-sm"
              size="sm"
              onClick={() => setOpenCreate(true)}
            >
              Ajouter une opération
            </Button>
          )
        }
        onExport={{
          loading: weeklyReport.isLoading,
          onClick: handleExport
        }}
      />

      <CreateOperation
        open={openCreate}
        onOpenChange={setOpenCreate}
      />
    </>
  )
}
