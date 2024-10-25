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
import { useAppStore } from '@/lib/stores/app-store';
import { QUERY_KEY } from '@/lib/constants';
import { useSession } from 'next-auth/react';
import { FonctionLabels } from '@/lib/enums/role_enum';

export default function NewOperatorPage() {
  const { data: session, status } = useSession();
  const { form, onSubmit, error, isPending } = useCreateUser({
    centreId: session?.user.centre_id,
    userId: session?.user.id
  });
  const {openToAddUser, setOpenToAddUser } = useAppStore();


  return (
    <DialogAlert 
        isOpen={openToAddUser}
        onClose={() => setOpenToAddUser(false)} 
        title='Ajouter un operateur'
        description='Ajouter un nouveau operateur'>
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
                    name="phone"
                    label="Téléphone"
                    type="standard"
                    inputProps={{ placeholder: "Entrez le numéro de téléphone" }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    form={form}
                    name="matricule"
                    label="Matricule"
                    type="standard"
                    inputProps={{ placeholder: "Entrez le matricule" }}
                  />
                  <FormInput
                    form={form}
                    name="role"
                    label="Fonction"
                    type="select"
                    options={Object.entries(FonctionLabels).map(([key, value]) => ({value, label: value}))}
                  />
                </div>
                {error && <FormError message={error} />}
              </CardContent>
              <CardFooter>
                <Button disabled={isPending} type="submit" className="w-full justify-center">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Ajouter un operateur
                </Button>
              </CardFooter>
            </form>
          </Form>
      </DialogAlert>
  );
}
