
import { ColumnDef } from "@tanstack/react-table"
import { CentreDTO } from "@/lib/dtos/centre_dto"
import { useAppStore } from "@/lib/stores/app-store";
import { FileEdit, Trash2 } from "lucide-react";

const ActionCell = ({ row }: { row: any }) => {
  const {setOpenToEditCentre, setCentre, setOpenToDeleteCentre} = useAppStore()
    return (
      <div className="flex items-center space-x-2 justify-evenly">
        <FileEdit 
          className="h-4 w-4 text-gray-600 cursor-pointer" 
          onClick={() => {
            setCentre(row.original)
            setOpenToEditCentre(true)
          }}
        />
        <Trash2
          className="h-4 w-4 text-red-600 cursor-pointer" 
          onClick={() => {
            setCentre(row.original)
            setOpenToDeleteCentre(true)
          }}
        />
      </div>
    )
};

const columns: ColumnDef<CentreDTO>[] = [
  {
    accessorKey: "name",
    header: "Nom"
  },
  {
    accessorKey: "prefecture",
    header: "Préfecture"
  },
  {
    accessorKey: "commune",
    header: "Commune"
  },
  {
    accessorKey: "quartier",
    header: "Quartier"
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ActionCell
  }
]

export default columns