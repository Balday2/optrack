"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { useAppStore } from '@/lib/stores/app-store';
import { useDeleteCentre } from '@/lib/hooks/use-centre';


export default function DeleteCentrePage() {
  const {openToDeleteCentre, centre, setOpenToDeleteCentre} = useAppStore();
  let centreId = centre ? centre!.id : ''
  const {deleteCentreById, error, isPending } = useDeleteCentre();

  return (
    <DialogAlert 
        isOpen={openToDeleteCentre} 
        onClose={() => setOpenToDeleteCentre(false)} 
        title={'Suppression'}
        size='md'
        description={`Voulez-vous supprimer ce centre ?`}>
        <Button
          disabled={isPending}
          variant='destructive'
          onClick={() => deleteCentreById(centreId)}
          className="w-full justify-center">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Supprimer
        </Button>
      </DialogAlert>
  );
}