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
import { CentreDTO } from '@/lib/dtos/centre_dto';
import { useAppStore } from '@/lib/stores/app-store';

export interface NewCoordinatorPageProps {
  centres?: CentreDTO[]
}
export default function NewCoordinatorPage({ centres }: NewCoordinatorPageProps) {
  const { form, onSubmit, error, isPending } = useCreateUser({});
  const {openToAddUser, setOpenToAddUser} = useAppStore();


  return (
    <DialogAlert 
        isOpen={openToAddUser}
        onClose={() => setOpenToAddUser(false)} 
        title='Ajouter un coordinateur'
        description='Ajouter un nouveau coordinateur'>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    form={form}
                    name="prenom"
                    label="Prénom"
                    type="standard"
                    inputProps={{ placeholder: "Entrez le prénom" }}
                  />
                  <FormInput
                    form={form}
                    name="nom"
                    label="Nom"
                    type="standard"
                    inputProps={{ placeholder: "Entrez le nom" }}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    form={form}
                    name="adresse"
                    label="Adresse"
                    type="standard"
                    inputProps={{ placeholder: "Entrez l'adresse" }}
                  />
                  <FormInput
                    form={form}
                    name="password"
                    label="Mot de passe"
                    type="standard"
                    inputProps={{ placeholder: "Proposez un mot de passe" }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    form={form}
                    name="centre_id"
                    label="Centre(s)"
                    type="select"
                    options={centres!.map(centre => ({ value: centre.id, label: centre.name }))}
                  />
                  <FormInput
                    form={form}
                    name="phone"
                    label="Téléphone"
                    type="standard"
                    inputProps={{ placeholder: "Entrez le numéro de téléphone" }}
                  />
                </div>
                  <FormInput
                      form={form}
                      name="matricule"
                      label="Matricule"
                      type="standard"
                      inputProps={{ placeholder: "Entrez le matricule" }}
                    />
                {error && <FormError message={error} />}
              </CardContent>
              <CardFooter>
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
