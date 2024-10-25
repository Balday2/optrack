"use client";
import React from 'react'
import { FormInput } from '@/components/form-input'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Button } from "@/components/ui/button";
import { Form } from '@/components/ui/form';
import { FormError } from '@/components/form-error';
import { Loader2 } from 'lucide-react';
import { DialogAlert } from '@/components/dialog-alert';
import { useAppStore } from '@/lib/stores/app-store';
import { useUpdateOperation } from '@/lib/hooks/use-operation';


export default function EditOperationModal() {
  const {openToEditOperation, operation, setOpenToEditOperation} = useAppStore();
  let operationId = operation ? operation!.id : ''
  const { form, onSubmit, error, isPending } = useUpdateOperation({
    operationId,
    onClose: () => setOpenToEditOperation(false)
  });

  return (
    <DialogAlert 
        isOpen={openToEditOperation} 
        onClose={() => setOpenToEditOperation(false)} 
        title={'Modification'}
        description={`Modifier l\'operation`}>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <CardContent className="space-y-4">
                  <FormInput
                    form={form}
                    name="nombre"
                    label="Nombre"
                    type="standard"
                    inputProps={{ 
                      placeholder: "Nombre d'operation",
                      defaultValue: operation?.nombre,
                    }}
                  />
                {error && <FormError message={error} />}
              </CardContent>
              <CardFooter>
                <Button disabled={isPending} type="submit" className="w-full justify-center">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                 {`Mettre à jour l'operation`}
                </Button>
              </CardFooter>
            </form>
          </Form>
      </DialogAlert>
  );
}