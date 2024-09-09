"use client";
import React from 'react'
import { FormInput } from '@/components/form-input'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Button } from "@/components/ui/button";
import { useUpdateUser } from "@/lib/hooks/use-user";
import { Form } from '@/components/ui/form';
import { FormError } from '@/components/form-error';
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { CentreDTO } from '@/lib/dtos/centre_dto';
import { UserDTO } from '@/lib/dtos/user_dto';
import { useAppStore } from '@/lib/stores/app-store';

export interface EditCoordinatorPageProps {
  centres?: CentreDTO[]
}

export default function EditCoordinatorPage({ 
  centres, 
}: EditCoordinatorPageProps) {
  const {openToEditUser, user, setOpenToEditUser} = useAppStore();
  let userId = user ? user!.id : ''
  let currentCentre = centres!.find(centre => centre.id === user?.centre_id);
  const { form, onSubmit, error, isPending } = useUpdateUser(userId);

  return (
    <DialogAlert 
        isOpen={openToEditUser} 
        onClose={() => setOpenToEditUser(false)} 
        title={'Modification'}
        description={`Modifier les informations de l\'utilisateur`}>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    form={form}
                    name="prenom"
                    label="Prénom"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez votre prénom",
                      defaultValue: user?.prenom
                    }}
                  />
                  <FormInput
                    form={form}
                    name="nom"
                    label="Nom"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez votre nom",
                      defaultValue: user?.nom
                    }}
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
                    defaultLabel={user?.sexe}
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
                    defaultLabel={user?.etatCivil}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    form={form}
                    name="adresse"
                    label="Adresse"
                    type="standard"
                    inputProps={{ 
                        placeholder: "Entrez votre adresse",
                        defaultValue: user?.adresse
                     }}
                  />
                  <FormInput
                    form={form}
                    name="phone"
                    label="Téléphone"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Entrez votre numéro de téléphone",
                      defaultValue: user?.phone
                    }}
                  />
                </div>
                <FormInput
                  form={form}
                  name="centre_id"
                  label="Centre(s)"
                  type="select"
                  options={centres!.map(centre => ({ value: centre.id, label: centre?.name+'-'+centre?.prefecture }))}
                  defaultLabel={currentCentre?.name+'-'+currentCentre?.prefecture}
                />
                {error && <FormError message={error} />}
              </CardContent>
              <CardFooter>
                <Button disabled={isPending} type="submit" className="w-full justify-center">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Mettre à jour le coordinateur
                </Button>
              </CardFooter>
            </form>
          </Form>
      </DialogAlert>
  );
}