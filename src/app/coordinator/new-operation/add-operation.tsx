"use client";
import React from "react";
import { FormInput } from "@/components/form-input";
import { CardContent, CardFooter } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { Loader2 } from "lucide-react";
import { DialogAlert } from "@/components/dialog-alert";
import { useAppStore } from "@/lib/stores/app-store";
import { QUERY_KEY } from "@/lib/constants";
import { useCreateOperation } from "@/lib/hooks/use-operation";
import { UserDTO } from "@/lib/dtos/user_dto";
import { XOperationDatePicker } from "./date-picker";

export interface NewOperationPageProps {
  users?: UserDTO[];
}

export default function NewOperationModal({ users }: NewOperationPageProps) {
  const { openToAddOperation, setOpenToAddOperation } = useAppStore();
  const { form, onSubmit, error, isPending } = useCreateOperation(() =>
    setOpenToAddOperation(false)
  );

  return (
    <DialogAlert
      isOpen={openToAddOperation}
      onClose={() => setOpenToAddOperation(false)}
      title="Ajouter une operation"
      description="Ajouter une nouvelle operation"
    >
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            
            <XOperationDatePicker 
              form={form}
              name="date"
              label={`Date d'operation`}
            />

            <FormInput
              form={form}
              name="nombre"
              label="Nombre"
              type="standard"
              inputProps={{
                placeholder: "Nombre d'operation",
                type: 'number'
              }}
            />
            <FormInput
              form={form}
              name="operator_id"
              label="Operateurs(s)"
              type="select"
              options={users!.map((user) => ({
                value: user.id,
                label: user.prenom + " " + user.nom,
              }))}
            />
            {error && <FormError message={error} />}
          </CardContent>
          <CardFooter>
            <Button
              disabled={isPending}
              type="submit"
              className="w-full justify-center"
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Ajouter une operation
            </Button>
          </CardFooter>
        </form>
      </Form>
    </DialogAlert>
  );
}
