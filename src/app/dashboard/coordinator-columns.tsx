
import { ColumnDef } from "@tanstack/react-table"
import { UserDTO } from "@/lib/dtos/user_dto"

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
]

export default columns