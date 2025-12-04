"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/table/table"
import WeekPicker from "@/components/week-picker"
import { OperationDTO } from "@/lib/DTO/operation.dto"
import { RoleEnum } from "@/lib/Enums/role.enum"
import { PAGE_SIZE_OPTIONS } from "@/lib/constants"
import { useCentreList } from "@/lib/hooks/centre.hook"
import { useFonctionList } from "@/lib/hooks/fonction.hook"
import { useExportWeeklyReport, useOperationByFilters } from "@/lib/hooks/operation.hook"
import { FilterValue } from "@/types"
import { format } from 'date-fns'
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import CreateOperation from "./create"
import operationColumns from "./table-column"
import { exportWeeklyReportExcel } from "./weekly.report"

export default function OperationListe() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: PAGE_SIZE_OPTIONS[0] })
  const { data: session } = useSession()
  const [filters, setFilters] = useState<Record<string, FilterValue>>({
    // date: {
    //   from: new Date(new Date().setHours(0, 0, 0, 0)),
    //   to: null
    // }
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

  // Récupérer les centres et fonctions
  const { data: centresData } = useCentreList();
  const { data: fonctionsData } = useFonctionList();

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
    date: [
      // {
      //   label: "Aujourd'hui",
      //   value: new Date()
      // }
  ]
  }

  const handlePaginationChange = (newPagination: { pageIndex: number; pageSize: number }) => {
    setPagination(newPagination)
  }

  const handleFiltersChange = (newFilters: Record<string, FilterValue>) => {
    setFilters(newFilters)
  }

  const handleExport = (selection: {
    startDate: Date;
    endDate: Date;
    periodType: string;
    centreId?: string;
    fonction?: string;
  }) => {
    const startDate = format(selection.startDate, 'yyyy-MM-dd');
    const endDate = format(selection.endDate, 'yyyy-MM-dd');
    setSelectedExportDates({ startDate, endDate });

    // Appeler l'export avec tous les filtres
    exportReport({
      startDate,
      endDate,
      centreId: selection.centreId,
      fonction: selection.fonction
    });
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
        centres={centresData || []}
        fonctions={fonctionsData?.map(f => f.nom) || []}
      />
    </>
  )
}
