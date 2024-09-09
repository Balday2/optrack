"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { useDeleteUser } from "@/lib/hooks/use-user";
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { useAppStore } from '@/lib/stores/app-store';


export default function DeleteCoordinatorPage() {
  const {openToDeleteUser, user, setOpenToDeleteUser} = useAppStore();
  let userId = user ? user!.id : ''
  const {deleteUserById, error, isPending } = useDeleteUser();

  return (
    <DialogAlert 
        isOpen={openToDeleteUser} 
        onClose={() => setOpenToDeleteUser(false)} 
        title={'Suppression'}
        size='md'
        description={`Voulez-vous supprimer ce coordinateur ?`}>
        <Button
          disabled={isPending}
          variant='destructive'
          onClick={() => deleteUserById(userId)}
          className="w-full justify-center">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Supprimer
        </Button>
      </DialogAlert>
  );
}