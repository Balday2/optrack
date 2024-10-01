"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { useToggleUser } from "@/lib/hooks/use-user";
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { useAppStore } from '@/lib/stores/app-store';
import { QUERY_KEY } from '@/lib/constants';


export default function ToggleOperatorPage() {
  const {openToToggleUser, user, setOpenToToggleUser} = useAppStore();
  let userId = user ? user!.id : ''
  let title = user?.status === 'actif' ? 'Fermer' : 'Activer'
  const {toggleUserById, error, isPending } = useToggleUser({
    queryKey: QUERY_KEY.OPERATORS,
  });

  return (
    <DialogAlert 
        isOpen={openToToggleUser} 
        onClose={() => setOpenToToggleUser(false)} 
        title={'Information'}
        size='md'
        description={`Voulez-vous ${title} ce operateur ?`}>
        <Button
          disabled={isPending}
          variant='destructive'
          onClick={() => toggleUserById(userId, user?.status ?? 'actif')}
          className="w-full justify-center">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {title}
        </Button>
      </DialogAlert>
  );
}