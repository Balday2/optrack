"use client";
import React from 'react'
import { FormInput } from '@/components/form-input'
import { CardContent, CardFooter } from '@/components/ui/card'

import { Button } from "@/components/ui/button";
import { Form } from '@/components/ui/form';
import { FormError } from '@/components/form-error';
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { useUpdateCentre } from '@/lib/hooks/use-centre';
import { useAppStore } from '@/lib/stores/app-store';

export default function EditCentrePage() {
  const {openToEditCentre, setOpenToEditCentre, selectedCentre} = useAppStore();
  let centreId = selectedCentre ? selectedCentre.id : ''
  const { form, onSubmit, error, isPending } = useUpdateCentre(
    selectedCentre,
    centreId,
    () => setOpenToEditCentre(false)
  );


  return (
    <DialogAlert 
        isOpen={openToEditCentre} 
        onClose={() => setOpenToEditCentre(false)} 
        title='Modification'
        size='lg'
        description='Mettre à jour ce centre'>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <CardContent className="space-y-4">
                  <FormInput
                    form={form}
                    name="name"
                    label="Nom"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez le nom du centre",
                      defaultValue: selectedCentre?.name
                    }}
                  />
                  <FormInput
                    form={form}
                    name="prefecture"
                    label="Préfecture"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez la prefecture",
                      defaultValue: selectedCentre?.prefecture
                    }}
                  />
                  <FormInput
                    form={form}
                    name="commune"
                    label="Commune"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez la commune",
                      defaultValue: selectedCentre?.commune
                    }}
                  />
                  <FormInput
                    form={form}
                    name="quartier"
                    label="Quartier"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez le quartier",
                      defaultValue: selectedCentre?.quartier
                    }}
                  />
                {error && <FormError message={error} />}
              </CardContent>
              <CardFooter>
                <Button disabled={isPending} type="submit" className="w-full justify-center">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Modifier
                </Button>
              </CardFooter>
            </form>
          </Form>
      </DialogAlert>
  );
}
