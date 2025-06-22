import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCentre, getByFilters, getCentreList, toggleStatus, updateCentre } from "../actions/centre.action";
import { CreateCentreDTO, UpdateCentreDTO } from "../DTO/centre.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateCentreSchema, UpdateCentreSchema } from "../validations/centre.validation";
import { QUERY_KEY } from "../constants";
import { FilterValue } from "@/types";

export function useCentreForm() {
  const queryClient = useQueryClient();
  const form = useForm<CreateCentreDTO>({
    resolver: zodResolver(CreateCentreSchema),
    defaultValues: {
      name: "",
      prefecture_id: undefined,
      commune_id: undefined,
      quartier_id: undefined,
    },
  });

  const { mutate: submitCentre, isPending } = useMutation({
    mutationFn: createCentre,
    onSuccess: () => {
      toast.success("Centre créé avec succès !");
      form.reset();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CENTRE] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  const onSubmit = (data: CreateCentreDTO) => {
    submitCentre(data);
  };

  return {
    form,
    onSubmit,
    isLoading: isPending,
  };
}

export interface CentreByFilters {
  page: number;
  pageSize: number;
  filters: Record<string, FilterValue>;
}


export function useCentreList() {
  const response = useQuery({
    queryKey: [QUERY_KEY.CENTRE],
    queryFn: () => getCentreList(),
  });

  return response;
}

export function useCentreByFilters({ page, pageSize, filters }: CentreByFilters) {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.CENTRE, page, pageSize, filters],
    queryFn: () => getByFilters(page, pageSize, filters),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export function useToggleCentre() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, status }: { id: string, status: string }) =>
      toggleStatus(id, status === "actif" ? "inactif" : "actif"),
    onSuccess: () => {
      toast.success("Centre modifié avec succès !");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CENTRE] });
    },
  });
  return { 
    toggleCentreById: (id: string, status: string, onSuccess?: () => void) => 
      mutate({ id, status }, { onSuccess }), 
    isPending 
  };
}

export function useUpdateCentre(id: string) {
  const queryClient = useQueryClient();
  const form = useForm<UpdateCentreDTO>({
    resolver: zodResolver(UpdateCentreSchema),
    defaultValues: {
      name: "",
      prefecture_id: undefined,
      commune_id: undefined,
      quartier_id: undefined,
    },
  });

  const { mutate: submitCentre, isPending } = useMutation({
    mutationFn: (data: UpdateCentreDTO) => updateCentre(id, data),
    onSuccess: () => {
      toast.success("Centre modifié avec succès !");
      form.reset();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CENTRE] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  const onSubmit = (data: UpdateCentreDTO) => {
    submitCentre(data);
  };

  return {
    form,
    onSubmit,
    isLoading: isPending,
  };
}
