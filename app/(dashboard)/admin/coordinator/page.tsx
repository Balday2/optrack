"use client"

import { DataTable } from "@/components/ui/table/table"
import { useState } from "react"
import { FilterValue } from "@/types"
import { useUserByFilters } from "@/lib/hooks/user.hook"
import { UserDTO } from "@/lib/DTO/user.dto"
import userColumns from "../_components/user/table-column"
import CreateUser from "../_components/user/create"
import { PAGE_SIZE_OPTIONS } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export default function CoordinatorPage() {

  const [openCreate, setOpenCreate] = useState(false);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: PAGE_SIZE_OPTIONS[0] })
  const [filters, setFilters] = useState<Record<string, FilterValue>>({})

  const { data, isLoading, error } = useUserByFilters({ 
    page: pagination.pageIndex + 1, 
    pageSize: pagination.pageSize,
    filters: { ...filters, role: 'coordinator' }
  })


  const filterOptions = {
    status: [
      {
        label: "Activé",
        value: "actif"
      },
      {
        label: "Bloqué",
        value: "inactif"
      }
    ],
    sexe: ["Masculin", "Feminin"],
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
      <DataTable<UserDTO>
        data={data?.data || []}
        title="Liste des coordinateurs"
        columns={userColumns}
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
              Ajouter un coordinateur
            </Button>
          </>
        }
      />

      <CreateUser 
        open={openCreate}
        onOpenChange={setOpenCreate}
      />
    </div>
  )
}
