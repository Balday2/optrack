"use client"

import { ColumnDef, Row } from "@tanstack/react-table"
import { OperationDTO } from "@/lib/DTO/operation.dto"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CentreDTO } from "@/lib/DTO/centre.dto"
import { UserDTO } from "@/lib/DTO/user.dto"
import { useState } from "react"
import { RoleEnum } from "@/lib/Enums/role.enum"
import UpdateOperation from "./update"

const ActionCell = ({ row, roleUser }: { row: Row<OperationDTO>, roleUser: string }) => {
  const [openEdit, setOpenEdit] = useState(false)
  return (
    <div className="flex items-center justify-center space-x-4">
      <Button 
        disabled={roleUser !== RoleEnum.COORDINATOR} 
        size="sm" 
        className="h-7 text-sm" 
        variant="outline" 
        onClick={() => setOpenEdit(true)}
      >
        Modifier
      </Button>

      <UpdateOperation
        operationId={String(row.original._id)}
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        initialData={{ nombre: row.original.nombre }}
      />
    </div>
  )
}

const operationColumns = (roleUser: string): ColumnDef<OperationDTO>[] => {
  const columns: ColumnDef<OperationDTO>[] = [
    {
      accessorKey: "centre_id",
      header: "Centre",
      cell: ({ row }) => {
        const centre = row.original.centre_id
        return <div>{centre ? (centre as CentreDTO).name : "N/A"}</div>
      },
    },
    {
      accessorKey: "status",
      header: "Statut",
      cell: ({ row }) => {
        const centre = row.original.centre_id
        return (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
            {centre ? (
              (centre as CentreDTO).status === "actif" ? (
                <span className="bg-green-100 text-green-800 px-3 py-1">Active</span>
              ) : (
                <span className="bg-red-100 text-red-800 px-3 py-1">Fermé</span>
              )
            ) : (
              <span className="bg-gray-100 text-gray-800">N/A</span>
            )}
          </div>
        )
      },
    },
    {
      accessorKey: "prenom",
      header: "Prénom",
      cell: ({ row }) => {
        const operator = row.original.operator_id
        return <div>{operator ? (operator as UserDTO).prenom : "N/A"}</div>
      },
    },
    {
      accessorKey: "nom",
      header: "Nom",
      cell: ({ row }) => {
        const operator = row.original.operator_id
        return <div>{operator ? (operator as UserDTO).nom : "N/A"}</div>
      },
    },
    {
      accessorKey: "sexe",
      header: "Sexe",
      cell: ({ row }) => {
        const operator = row.original.operator_id
        return <div>{operator ? (operator as UserDTO).sexe : "N/A"}</div>
      },
    },
    {
      accessorKey: "matricule",
      header: "Matricule",
      cell: ({ row }) => {
        const operator = row.original.operator_id
        return <div>{operator ? (operator as UserDTO).matricule : "N/A"}</div>
      },
    },
    {
      accessorKey: "role",
      header: "Fonction",
      cell: ({ row }) => {
        const operator = row.original.operator_id
        return <div>{operator ? (operator as UserDTO).role : "N/A"}</div>
      },
    },
    {
      accessorKey: "nombre",
      header: "Nombre",
      cell: ({ row }) => {
        return (
          <div className="font-medium">
            <div className="inline-flex items-center justify-center w-7 h-7 p-3 rounded-full bg-[#f3e7e8] text-black text-sm font-semibold">
              {row.getValue("nombre")}
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "date",
      header: "Date de l'opération",
      cell: ({ row }) => {
        const date = row.getValue("date") as Date
        return <div>{format(new Date(date), "dd/MM/yyyy", { locale: fr })}</div>
      },
    },
    {
      id: "actions",
      header: () => <div className="text-center">Actions</div>,
      cell: ({ row }) => ActionCell({ row, roleUser })
    },
  ]

  return columns
}

export default operationColumns 