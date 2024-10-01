"use client";
import React from 'react'
import { FormInput } from '@/components/form-input'
import { CardContent, CardFooter } from '@/components/ui/card'

import { Button } from "@/components/ui/button";
import { Form } from '@/components/ui/form';
import { FormError } from '@/components/form-error';
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { useCreateCentre } from '@/lib/hooks/use-centre';
import { useAppStore } from '@/lib/stores/app-store';

export default function NewCentrePage() {
  const {openToAddCentre, setOpenToAddCentre, selectedCentre} = useAppStore();
  const { form, onSubmit, error, isPending } = useCreateCentre(() => setOpenToAddCentre(false));


  return (
    <DialogAlert 
        isOpen={openToAddCentre} 
        onClose={() => setOpenToAddCentre(false)} 
        title='Ajouter un centre'
        size='lg'
        description='Ajouter un nouveau centre'>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <CardContent className="space-y-4">
                  <FormInput
                    form={form}
                    name="name"
                    label={`name ${selectedCentre ? selectedCentre.name : ''}`}
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez le nom du centre",
                      defaultValue: 'hello'
                    }}
                  />
                  <FormInput
                    form={form}
                    name="prefecture"
                    label="Préfecture"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez la prefecture",
                      defaultValue: selectedCentre ? selectedCentre.prefecture : undefined
                    }}
                  />
                  <FormInput
                    form={form}
                    name="commune"
                    label="Commune"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez la commune",
                      defaultValue: selectedCentre ? selectedCentre.commune : undefined
                    }}
                  />
                  <FormInput
                    form={form}
                    name="quartier"
                    label="Quartier"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez le quartier",
                      defaultValue: selectedCentre ? selectedCentre.quartier : undefined
                    }}
                  />
                {error && <FormError message={error} />}
              </CardContent>
              <CardFooter>
                <Button disabled={isPending} type="submit" className="w-full justify-center">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Ajouter un centre
                </Button>
              </CardFooter>
            </form>
          </Form>
      </DialogAlert>
  );
}
