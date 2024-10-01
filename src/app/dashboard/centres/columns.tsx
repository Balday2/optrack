
import { ColumnDef } from "@tanstack/react-table"
import { CentreDTO } from "@/lib/dtos/centre_dto"
import { useAppStore } from "@/lib/stores/app-store";
import { FileEdit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ActionCell = ({ row }: { row: any }) => {
  const {setOpenToEditCentre, setSelectedCentre, setOpenToToggleCentre} = useAppStore()
    return (
      <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => {
            setSelectedCentre(row.original)
            setOpenToEditCentre(true)
          }}>
            Modifier
          </Button>
          <Button 
            variant="default" 
            size='sm'
            onClick={() => {
              setSelectedCentre(row.original)
              setOpenToToggleCentre(true)
            }}
            className={`${row.original.status === 'actif' ? 'bg-red-500' : 'bg-black'}`}
          >
            {row.original.status === 'actif' ? 'Fermer' : 'Activer'}
          </Button>
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status
      return <span className={`text-xs px-2 py-1 font-medium text-white ${
          status === 'actif' ? 'bg-green-400' : 'bg-red-400'
        }`}>{status === 'actif' ? 'activé' : 'fermé'}</span>
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ActionCell
  }
]

export default columns