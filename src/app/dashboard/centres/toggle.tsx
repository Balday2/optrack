"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { useAppStore } from '@/lib/stores/app-store';
import { useToggleCentre } from '@/lib/hooks/use-centre';


export default function ToggleCentrePage() {
  const {openToToggleCentre, selectedCentre, setOpenToToggleCentre} = useAppStore();
  let centreId = selectedCentre ? selectedCentre!.id : ''
  let title = selectedCentre?.status === 'actif'
    ? 'Fermer' : 'Activer'
  const {toggleCentreById, error, isPending } = useToggleCentre();

  return (
    <DialogAlert 
        isOpen={openToToggleCentre} 
        onClose={() => setOpenToToggleCentre(false)} 
        title={'Information'}
        size='md'
        description={`Voulez-vous ${title} ce centre ?`}>
        <Button
          disabled={isPending}
          variant='destructive'
          onClick={() => toggleCentreById(centreId, selectedCentre?.status ?? 'actif')}
          className="w-full justify-center">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {title}
        </Button>
      </DialogAlert>
  );
}