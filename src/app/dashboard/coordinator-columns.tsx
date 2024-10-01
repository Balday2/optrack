
import { ColumnDef } from "@tanstack/react-table"
import { UserDTO } from "@/lib/dtos/user_dto"
import { useState } from "react";
import { FileEdit, Trash2 } from "lucide-react";
import { useAppStore } from "@/lib/stores/app-store";
import { Button } from "@/components/ui/button";


const ActionCell = ({ row }: { row: any }) => {
  const {setOpenToEditUser, setOpenToToggleUser, setUser} = useAppStore()
    return (
      <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => {
            setUser(row.original)
            setOpenToEditUser(true)
          }}>
            Modifier
          </Button>
          <Button 
            variant="default"
            size='sm'
            onClick={() => {
              setUser(row.original)
              setOpenToToggleUser(true)
            }}
            className={`${row.original.status === 'actif' ? 'bg-red-500' : 'bg-black'}`}
          >
            {row.original.status === 'actif' ? 'Fermer' : 'Activer'}
          </Button>
      </div>
    )
};

const columns: ColumnDef<UserDTO>[] = [
  {
    accessorKey: "prenom",
    header: "Prénom"
  },
  {
    accessorKey: "nom",
    header: "Nom"
  },
  {
    accessorKey: "matricule",
    header: "Matricule"
  },
  {
    accessorKey: "phone",
    header: "Téléphone"
  },
  {
    accessorKey: "role",
    header: "Fonction"
  },
  {
    accessorKey: "sexe",
    header: "Genre"
  },
  {
    accessorKey: "etatCivil",
    header: "Etat civil",
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
    id: "actions",
    header: "Actions",
    cell: ActionCell
  }
]

export default columns