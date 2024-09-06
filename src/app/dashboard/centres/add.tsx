"use client";
import React from 'react'
import { FormInput } from '@/components/form-input'
import { CardContent, CardFooter } from '@/components/ui/card'

import { Button } from "@/components/ui/button";
import { useCreateUser } from "@/lib/hooks/use-user";
import { Form } from '@/components/ui/form';
import { FormError } from '@/components/form-error';
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { useCreateCentre } from '@/lib/hooks/use-centre';

export interface NewCentrePageProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}
export default function NewCentrePage({ isOpen, onClose, title, description }: NewCentrePageProps) {
  const { form, onSubmit, error, isPending } = useCreateCentre();

  return (
    <DialogAlert 
        isOpen={isOpen} 
        onClose={onClose} 
        title={title}
        description={description}>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    form={form}
                    name="name"
                    label="Nom"
                    type="standard"
                    inputProps={{ placeholder: "Entrez le nom du centre" }}
                  />
                  <FormInput
                    form={form}
                    name="prefecture"
                    label="Préfecture"
                    type="standard"
                    inputProps={{ placeholder: "Entrez la prefecture" }}
                  />
                </div>
                  <FormInput
                    form={form}
                    name="commune"
                    label="Commune"
                    type="standard"
                    inputProps={{ placeholder: "Entrez la commune" }}
                  />
                  <FormInput
                    form={form}
                    name="quartier"
                    label="Quartier"
                    type="standard"
                    inputProps={{ placeholder: "Entrez le quartier" }}
                  />
              </CardContent>
              <CardFooter>
                {error && <FormError message={error} />}
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
