"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { PAGE_SIZE_OPTIONS, ROUTE_PATH } from "@/lib/constants";
import { RoleEnum } from "@/lib/Enums/role.enum";
import { useRouter } from "next/navigation";
import CreateOperation from "../common/operation/create";
import { Button } from "@/components/ui/button";
import operationColumns from "../common/operation/table-column";
import { DataTable } from "@/components/ui/table/table";
import { OperationDTO } from "@/lib/DTO/operation.dto";
import { FilterValue } from "@/types";
import { useOperationByFiltersByCoordinator } from "@/lib/hooks/operation.hook";

export default function CoordinatorPage() {
  const router = useRouter();

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: PAGE_SIZE_OPTIONS[0] })
  const { data: session, status } = useSession()
  const [filters, setFilters] = useState<Record<string, FilterValue>>({})
  const [openCreate, setOpenCreate] = useState(false)

  const { data, isLoading, error } = useOperationByFiltersByCoordinator({ 
    page: pagination.pageIndex + 1, 
    pageSize: pagination.pageSize,
    filters: filters
  })

  const filterOptions = {
    date: []
  }

  const handlePaginationChange = (newPagination: { pageIndex: number; pageSize: number }) => {
    setPagination(newPagination)
  }

  const handleFiltersChange = (newFilters: Record<string, FilterValue>) => {
    setFilters(newFilters)
  }

  const handleExport = () => {
    console.log("export")
  }

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== RoleEnum.COORDINATOR) {
      router.push(ROUTE_PATH.LOGIN);
    }
  }, [session, status, router]);

  if (status === "loading") return <div>Chargement...</div>;

  return (
    <div className="flex flex-1 justify-center">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
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
          loading: isLoading,
          onClick: handleExport
        }}
      />

      <CreateOperation
        open={openCreate}
        onOpenChange={setOpenCreate}
      />
      </div>
    </div>
  );
}
