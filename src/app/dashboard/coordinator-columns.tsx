
import { ColumnDef } from "@tanstack/react-table"
import { UserDTO } from "@/lib/dtos/user_dto"
import { useState } from "react";
import { FileEdit, Trash2 } from "lucide-react";
import { useAppStore } from "@/lib/stores/app-store";


const ActionCell = ({ row }: { row: any }) => {
  const {setOpenToEditUser, setOpenToDeleteUser, setUser} = useAppStore()
    return (
      <div className="flex items-center space-x-2 justify-evenly">
        <FileEdit 
          className="h-4 w-4 text-gray-600 cursor-pointer" 
          onClick={() => {
            setUser(row.original)
            setOpenToEditUser(true)
          }}
        />
        <Trash2 
          className="h-4 w-4 text-red-600 cursor-pointer" 
          onClick={() => {
            setUser(row.original)
            setOpenToDeleteUser(true)
          }}
        />
      </div>
    )
};

const columns: ColumnDef<UserDTO>[] = [
  {
    accessorKey: "nom",
    header: "Nom"
  },
  {
    accessorKey: "prenom",
    header: "Prénom"
  },
  {
    accessorKey: "phone",
    header: "Téléphone"
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
    id: "actions",
    header: "Actions",
    cell: ActionCell
  }
]

export default columns