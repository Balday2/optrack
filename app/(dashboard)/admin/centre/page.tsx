"use client"

import { DataTable } from "@/components/ui/table/table"
import { useState } from "react"
import { FilterValue } from "@/types"
import { useCentreByFilters } from "@/lib/hooks/centre.hook"
import { CentreDTO } from "@/lib/DTO/centre.dto"
import centreColumns from "./_components/table-column"
import CreateCentre from "./_components/create"
import { PAGE_SIZE_OPTIONS } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export default function CentrePage() {

  const [openCreate, setOpenCreate] = useState(false);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: PAGE_SIZE_OPTIONS[0] })
  const [filters, setFilters] = useState<Record<string, FilterValue>>({})

  const { data, isLoading, error } = useCentreByFilters({ 
    page: pagination.pageIndex + 1, 
    pageSize: pagination.pageSize,
    filters: filters
  })


  const filterOptions = {
    status: [
      {
        label: "Activé",
        value: "actif"
      },
      {
        label: "Fermé",
        value: "inactif"
      }
    ],
    date: [],
  }


  const handlePaginationChange = (newPagination: { pageIndex: number; pageSize: number }) => {
    setPagination(newPagination)
  }

  const handleFiltersChange = (newFilters: Record<string, FilterValue>) => {
    setFilters(newFilters)
  }


  return (
    <div className="max-w-[1200px] mx-auto py-5">
      <DataTable<CentreDTO>
        data={data?.data || []}
        title="Liste des opérations"
        columns={centreColumns}
        totalItems={data?.pagination?.totalCount || 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions}
        error={error?.message}
        loading={isLoading}
        autoApply={true}
        moreChildren={
          <>
            <Button 
              variant="default" 
              className="h-7 px-4 text-sm"
              size="sm"
              onClick={() => setOpenCreate(true)}
            >
              Ajouter un centre
            </Button>
          </>
        }
      />

      <CreateCentre 
        open={openCreate}
        onOpenChange={setOpenCreate}
      />
    </div>
  )
}
