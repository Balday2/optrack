import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogAlert } from "@/components/dialog-alert";
import { Loader2 } from "lucide-react";
import { HelperFunctions } from "@/lib/_helper";
import { UserDTO } from "@/lib/DTO/user.dto";
import { CentreDTO } from "@/lib/DTO/centre.dto";
import UpdateCoordinator from "./update";
import { useToggleUser } from "@/lib/hooks/user.hook";

const ActionCell = ({ row }: { row }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const isActif = row.original.status === 'actif';
    const { toggleUserById, isPending } = useToggleUser();
    return (
      <div className="flex items-center justify-center space-x-4">
          <Button size="sm" className="h-7 text-sm" variant="outline" onClick={() => setOpenEdit(true)}>
            Modifier
          </Button>
          <Button 
            variant="default" 
            size='sm'
            onClick={() => setOpen(true)}
            className={`h-7 text-sm ${isActif && 'px-5'} ${isActif ? 'bg-red-500' : 'bg-black'}`}
          >
            {isActif ? 'Bloquer' : 'Débloquer'}
          </Button>
          <DialogAlert 
            isOpen={open} 
            onClose={() => setOpen(false)} 
            title={'Information'}
            size='md'
            description={`Cette action bloquera le compte de ce coordinateur. Voulez-vous continuer ?`}>
            <Button
              disabled={isPending}
              variant='destructive'
              onClick={() => toggleUserById(row.original._id, row.original.status, () => setOpen(false))}
              className="w-full justify-center">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isActif ? 'Débloquer' : 'Bloquer'}
            </Button>
          </DialogAlert>

          <UpdateCoordinator 
            coordinatorId={row.original._id}
            open={openEdit}
            onOpenChange={setOpenEdit}
          />
      </div>
    )
};

const coordinatorColumns: ColumnDef<UserDTO>[] = [
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
    accessorKey: "centre_id.name",
    header: "Centre",
    cell: ({ row }) => {
      const centre = row.original.centre_id
      return centre ? (centre as CentreDTO).name : 'N/A'
    }
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => HelperFunctions.formatDate(row.original.createdAt.toString())
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status
      return <span className={`text-xs px-3 py-1 font-medium 
        ${ status === 'actif' ? 'bg-green-200 text-green-500' : 'bg-red-200 text-red-500'}
      `}>{status === 'actif' ? 'Actif' : 'Bloqué'}</span>
    }
  },
  {
    id: 'actions',
    header:  () => <div className="text-center">Actions</div>,
    cell: ActionCell
  }
]

export default coordinatorColumns