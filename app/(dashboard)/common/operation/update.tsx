"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useUpdateOperation } from "@/lib/hooks/operation.hook";
import { UpdateOperationDTO } from "@/lib/DTO/operation.dto";
import { useEffect } from "react";

interface UpdateOperationProps {
  operationId: string;
  open: boolean;
  onClose: () => void;
  initialData?: { nombre: number };
}

export default function UpdateOperation({ 
  operationId, 
  open, 
  onClose, 
  initialData 
}: UpdateOperationProps) {
  const { form, onSubmit, isLoading } = useUpdateOperation(operationId);

  // Initialiser le formulaire avec les données existantes
  useEffect(() => {
    if (initialData && open) {
      form.reset(initialData);
    }
  }, [initialData, open, form]);

  const handleSubmit = async (data: UpdateOperationDTO) => {
    await onSubmit(data);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier l&apos;opération</DialogTitle>
          <DialogDescription>
            Modifiez le nombre de l&apos;opération.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="Entrez le nouveau nombre" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Modifier l&apos;opération
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 