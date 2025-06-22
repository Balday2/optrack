"use client"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Loader2 } from "lucide-react"
import { useFonctionList, useFonctionForm, useDeleteFonction } from "@/lib/hooks/fonction.hook"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { IFonction } from "@/lib/models/fonction.model"


interface FunctionManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FunctionManager({ open, onOpenChange }: FunctionManagerProps) {

  const fonctionList = useFonctionList()
  const { form, onSubmit, isLoading: isCreating } = useFonctionForm()
  const { deleteFonctionById, isPending: isDeleting } = useDeleteFonction()

  const removeFonction = (id: string) => {
    deleteFonctionById(id)
  }

  const handleSubmit = async (data: { nom: string }) => {
    if (fonctionList?.data?.some((func: IFonction) => func.nom.toLowerCase() === data.nom.trim().toLowerCase())) {
      form.setError("nom", { message: "Cette fonction existe déjà" })
      return
    }

    try {
      await onSubmit(data)
      form.setValue("nom", "")
      form.clearErrors("nom")
    } catch {
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Gérer les fonctions</DialogTitle>
          <DialogDescription>
            Ajoutez ou supprimez les fonctions disponibles pour les opérateurs.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Formulaire pour ajouter une nouvelle fonction */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de la fonction</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input
                          placeholder="Entrez le nom de la fonction..."
                          {...field}
                          disabled={isCreating}
                          className="flex-1"
                        />
                      </FormControl>
                      <Button 
                        type="submit"
                        size="icon" 
                        variant="outline"
                        disabled={isCreating}
                      >
                        {isCreating ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          {/* Liste des fonctions */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-2 border rounded-md bg-gray-50">
              {fonctionList.isLoading ? (
                <div className="flex items-center gap-2 w-full justify-center py-4">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p className="text-sm text-gray-500">Chargement...</p>
                </div>
              ) : fonctionList?.data?.length === 0 ? (
                <p className="text-sm text-gray-500 w-full text-center py-4">Aucune fonction</p>
              ) : (
                fonctionList?.data?.map((func: IFonction) => (
                  <Badge
                    key={String(func._id)}
                    variant="secondary"
                    className="flex items-center gap-1 px-3 py-1 bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <span className="text-sm">{func.nom}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 hover:bg-gray-400 rounded-full"
                      onClick={() => removeFonction(String(func._id))}
                      disabled={isDeleting}
                    >
                      {isDeleting ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : (
                        <X className="h-3 w-3" />
                      )}
                    </Button>
                  </Badge>
                ))
              )}
            </div>
            <p className="text-xs text-gray-500">
              {fonctionList?.data?.length} fonction{fonctionList?.data?.length !== 1 ? "s" : ""} disponible{fonctionList?.data?.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
