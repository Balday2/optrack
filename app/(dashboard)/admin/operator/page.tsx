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
import FunctionManager from "./_components/fonction"

export default function OperatorPage() {

  const [openCreate, setOpenCreate] = useState(false);
  const [openFunction, setOpenFunction] = useState(false);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: PAGE_SIZE_OPTIONS[0] })
  const [filters, setFilters] = useState<Record<string, FilterValue>>({})

  const { data, isLoading, error } = useUserByFilters({ 
    page: pagination.pageIndex + 1, 
    pageSize: pagination.pageSize,
    filters
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
    date: []
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
        title="Liste des opérateurs"
        columns={userColumns}
        totalItems={data?.pagination?.totalCount || 0}
        onPaginationChange={handlePaginationChange}
        onFiltersChange={handleFiltersChange}
        filterOptions={filterOptions}
        error={error?.message}
        loading={isLoading}
        autoApply={true}
        moreChildren={
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="h-7 px-4 text-sm"
              size="sm"
              onClick={() => setOpenFunction(true)}
            >
              Gérer les fonctions
            </Button>
            <Button 
              variant="default" 
              className="h-7 px-4 text-sm"
              size="sm"
              onClick={() => setOpenCreate(true)}
            >
              Ajouter un opérateur
            </Button>
          </div>
        }
      />

      <CreateUser 
        open={openCreate}
        onOpenChange={setOpenCreate}
      />

      <FunctionManager 
        open={openFunction}
        onOpenChange={setOpenFunction}
      />
    </div>
  )
}
