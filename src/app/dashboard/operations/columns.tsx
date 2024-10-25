import { ColumnDef } from "@tanstack/react-table"
import { OperationDTO } from "@/lib/dtos/operation_dto"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/lib/stores/app-store"
import { formatDate } from "@/lib/_helper"
import { RoleEnum } from "@/lib/enums/role_enum"

const ActionCell = ({ row }: { row: any }) => {
  const { setOpenToEditOperation, setOperation } = useAppStore()
  return (
    <div className="flex items-center space-x-4">
      <Button 
        variant="outline" 
        onClick={() => {
          setOperation(row.original)
          setOpenToEditOperation(true)
        }}
      >
        Modifier
      </Button>
    </div>
  )
}

export const operationColumn = (roleUser: string): ColumnDef<OperationDTO>[] => {
  const columns: ColumnDef<OperationDTO>[] = [
    {
      accessorKey: "centre.name",
      header: "Centre",
      cell: ({ row }) => row.original.centre?.name || 'N/A'
    },
    {
      accessorKey: "operator_id.matricule",
      header: "Matricule",
      cell: ({ row }) => row.original.operator_id?.matricule || 'N/A'
    },
    {
      accessorKey: "operator_id.prenom",
      header: "Prenom",
      cell: ({ row }) => row.original.operator_id?.prenom || 'N/A'
    },
    {
      accessorKey: "operator_id.nom",
      header: "Nom",
      cell: ({ row }) => row.original.operator_id?.nom || 'N/A'
    },
    {
      accessorKey: "operator_id.role",
      header: "Fonction",
      cell: ({ row }) => row.original.operator_id?.role || 'N/A'
    },
    {
      accessorKey: "nombre",
      header: "Nombre"
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => formatDate(row.original.date.toString())
    }
  ]
  if(roleUser === RoleEnum.COORDINATOR){
    columns.push({
      id: "actions",
      header: "Actions",
      cell: ActionCell
    })
  }
  return columns;
}