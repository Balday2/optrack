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

export interface NewCoordinatorPageProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}
export default function NewCoordinatorPage({ isOpen, onClose, title, description }: NewCoordinatorPageProps) {
  const { form, onSubmit, error, isPending } = useCreateUser();

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
                    name="nom"
                    label="Nom"
                    type="standard"
                    inputProps={{ placeholder: "Entrez votre nom" }}
                  />
                  <FormInput
                    form={form}
                    name="prenom"
                    label="Prénom"
                    type="standard"
                    inputProps={{ placeholder: "Entrez votre prénom" }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    form={form}
                    name="sexe"
                    label="Sexe"
                    type="select"
                    options={[
                      { value: 'feminin', label: 'Féminin' },
                      { value: 'masculin', label: 'Masculin' },
                    ]}
                  />
                  <FormInput
                    form={form}
                    name="etatCivil"
                    label="État Civil"
                    type="select"
                    options={[
                      { value: 'single', label: 'Célibataire' },
                      { value: 'marie', label: 'Marié(e)' },
                    ]}
                  />
                </div>
                <FormInput
                  form={form}
                  name="adresse"
                  label="Adresse"
                  type="standard"
                  inputProps={{ placeholder: "Entrez votre adresse" }}
                />
                {/* <FormInput
                  form={form}
                  name="centre_id"
                  label="Centre(s)"
                  type="select"
                  options={centres.map(centre => ({ value: centre, label: centre }))}
                /> */}
                <FormInput
                  form={form}
                  name="phone"
                  label="Téléphone"
                  type="standard"
                  inputProps={{ placeholder: "Entrez votre numéro de téléphone" }}
                />
              </CardContent>
              <CardFooter>
                {error && <FormError message={error} />}
                <Button disabled={isPending} type="submit" className="w-full justify-center">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Ajouter un coordinateur
                </Button>
              </CardFooter>
            </form>
          </Form>
      </DialogAlert>
  );
}
