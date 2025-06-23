"use client"

import { DataTable } from "@/components/ui/table/table"
import { useEffect, useState } from "react"
import { FilterValue } from "@/types"
import { useOperationByFilters } from "@/lib/hooks/operation.hook"
import { OperationDTO } from "@/lib/DTO/operation.dto"
import { PAGE_SIZE_OPTIONS } from "@/lib/constants"
import operationColumns from "./table-column"
import { useSession } from "next-auth/react"
import { RoleEnum } from "@/lib/Enums/role.enum"
import { Button } from "@/components/ui/button"
import CreateOperation from "./create"
import WeekPicker from "@/components/week-picker"
import { useExportWeeklyReport } from "@/lib/hooks/operation.hook"
import { exportWeeklyReportExcel } from "./weekly.report"
import { toast } from "sonner"
import { format } from 'date-fns'

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
  const [openWeekPicker, setOpenWeekPicker] = useState(false)
  const [selectedExportDates, setSelectedExportDates] = useState<{ startDate: string, endDate: string } | null>(null);

  const { data, isLoading, error } = useOperationByFilters({ 
    page: pagination.pageIndex + 1, 
    pageSize: pagination.pageSize,
    filters: filters
  })

  const { exportReport, isLoading: isExporting, data: exportData, isSuccess, isError } = useExportWeeklyReport();

  useEffect(() => {
    if (!selectedExportDates) return;

    if(exportData && exportData.length === 0) {
      toast.error("Aucune donnée trouvée pour la semaine sélectionnée");
      setSelectedExportDates(null);
    }
    else if (isSuccess && exportData) {
      exportWeeklyReportExcel(exportData, selectedExportDates.startDate, selectedExportDates.endDate);
      setSelectedExportDates(null);
    }
    if (isError) {
      toast.error("Erreur lors de la génération du rapport.");
      setSelectedExportDates(null);
    }
  }, [isSuccess, isError, exportData, selectedExportDates]);

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

  const handleExport = (selection: { weekStart: Date; weekEnd: Date }) => {
    const startDate = format(selection.weekStart, 'yyyy-MM-dd');
    const endDate = format(selection.weekEnd, 'yyyy-MM-dd');
    setSelectedExportDates({ startDate, endDate });
    exportReport({ startDate, endDate });
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
          loading: isExporting,
          onClick: () => setOpenWeekPicker(true)
        }}
      />

      <CreateOperation
        open={openCreate}
        onOpenChange={setOpenCreate}
      />

      <WeekPicker
        open={openWeekPicker}
        onOpenChange={setOpenWeekPicker}
        onExport={handleExport}
        isLoading={isExporting}
      />
    </>
  )
}
