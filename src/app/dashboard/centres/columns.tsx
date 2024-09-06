
import { ColumnDef } from "@tanstack/react-table"
import { CentreDTO } from "@/lib/dtos/centre_dto"

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
]

export default columns