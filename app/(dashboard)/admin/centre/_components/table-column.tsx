import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CentreDTO } from "@/lib/DTO/centre.dto";
import { findCommuneById } from "@/lib/data/commune";
import { findPrefectureById } from "@/lib/data/prefecture";
import { findQuartierById } from "@/lib/data/quartier";
import { DialogAlert } from "@/components/dialog-alert";
import { Loader2 } from "lucide-react";
import { useToggleCentre } from "@/lib/hooks/centre.hook";
import { UpdateCentre } from "./update";
import { HelperFunctions } from "@/lib/_helper";

const ActionCell = ({ row }: { row }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const isActif = row.original.status === 'actif';
    const { toggleCentreById, isPending } = useToggleCentre();
    return (
      <div className="flex items-center justify-center space-x-4">
          <Button size="sm" className="h-7 text-sm" variant="outline" onClick={() => setOpenEdit(true)}>
            Modifier
          </Button>
          <Button 
            variant="default" 
            size='sm'
            onClick={() => setOpen(true)}
            className={`h-7 text-sm ${!isActif && 'px-6'} ${isActif ? 'bg-red-500' : 'bg-black'}`}
          >
            {isActif ? 'Désactiver' : 'Activer'}
          </Button>
          <DialogAlert 
            isOpen={open} 
            onClose={() => setOpen(false)} 
            title={'Information'}
            size='md'
            description={`Cette action désactivera le centre. Voulez-vous continuer ?`}>
            <Button
              disabled={isPending}
              variant='destructive'
              onClick={() => toggleCentreById(row.original._id, row.original.status, () => setOpen(false))}
              className="w-full justify-center">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isActif ? 'Désactiver' : 'Activer'}
            </Button>
          </DialogAlert>

          <UpdateCentre 
            centreId={row.original._id}
            initialData={{
              name: row.original.name,
              prefecture_id: row.original.prefecture_id,
              commune_id: row.original.commune_id,
              quartier_id: row.original.quartier_id
            }}
            open={openEdit}
            onOpenChange={setOpenEdit}
          />
      </div>
    )
};

const centreColumns: ColumnDef<CentreDTO>[] = [
  {
    accessorKey: "name",
    header: "Nom"
  },
  {
    accessorKey: "prefecture_id",
    header: "Préfecture",
    cell: ({ row }) => {
      const prefecture = findPrefectureById(row.original.prefecture_id)
      return <span>{prefecture?.nom}</span>
    }
  },
  {
    accessorKey: "commune_id",
    header: "Commune",
    cell: ({ row }) => {
      const commune = findCommuneById(row.original.commune_id)
      return <span>{commune?.nom}</span>
    }
  },
  {
    accessorKey: "quartier_id",
    header: "Quartier",
    cell: ({ row }) => {
      const quartier = findQuartierById(row.original.quartier_id)
      return <span>{quartier?.nom}</span>
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
      `}>{status === 'actif' ? 'activé' : 'fermé'}</span>
    }
  },
  {
    id: 'actions',
    header:  () => <div className="text-center">Actions</div>,
    cell: ActionCell
  }
]

export default centreColumns