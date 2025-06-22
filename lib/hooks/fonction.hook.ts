import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFonction, getFonctionList, deleteFonction } from "../actions/fonction.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { QUERY_KEY } from "../constants";
import { z } from "zod";
import { IFonction } from "../models/fonction.model";

const CreateFonctionSchema = z.object({
  nom: z.string({ message: "Le nom de la fonction est requis" })
    .min(1, "Le nom de la fonction est requis")
    .max(50, "Le nom de la fonction ne doit pas dépasser 50 caractères"),
});

type CreateFonctionDTO = z.infer<typeof CreateFonctionSchema>;

export function useFonctionForm() {
  const queryClient = useQueryClient();
  const form = useForm<CreateFonctionDTO>({
    resolver: zodResolver(CreateFonctionSchema),
    defaultValues: {
      nom: "",
    },
  });

  const { mutate: submitFonction, isPending } = useMutation({
    mutationFn: (data: CreateFonctionDTO) => createFonction(data.nom),
    onSuccess: () => {
      toast.success("Fonction créée avec succès !");
      form.reset();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.FONCTION] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  const onSubmit = (data: CreateFonctionDTO) => {
    submitFonction(data);
  };

  return {
    form,
    onSubmit,
    isLoading: isPending,
  };
}


export function useFonctionList() {
  const fonctions = useQuery<IFonction[]>({
    queryKey: [QUERY_KEY.FONCTION],
    queryFn: () => getFonctionList(),
  });

  return fonctions;
}


export function useDeleteFonction() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteFonction(id),
    onSuccess: () => {
      toast.success("Fonction supprimée avec succès !");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.FONCTION] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  return {
    deleteFonctionById: (id: string, onSuccess?: () => void) => 
      mutate(id, { onSuccess }),
    isPending,
  };
}
