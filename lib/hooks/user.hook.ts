import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { QUERY_KEY } from "../constants";
import { FilterValue } from "@/types";
import { CreateUserDTO, UpdateUserDTO } from "../DTO/user.dto";
import { CreateUserSchema, UpdateUserSchema } from "../validations/user.validation";
import { create, getActiveOperatorsCount, getByFilters, getOperatorsByCentreId, toggleStatus, updateUser } from "../actions/user.action";

export function useUserForm() {
  const queryClient = useQueryClient();
  const form = useForm<CreateUserDTO>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      phone: "",
      sexe: "",
      adresse: "",
      matricule: "",
      centre_id: "",
      role: "",
    },
  });


  const { mutate: submitUser, isPending } = useMutation({
    mutationFn: (data: CreateUserDTO) => create(data),
    onSuccess: () => {
      toast.success("Utilisateur créé avec succès !");
      form.reset();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  const onSubmit = (data: CreateUserDTO) => {
    submitUser(data);
  };

  return {
    form,
    onSubmit,
    isLoading: isPending,
  };
}

export interface UserByFilters {
  page: number;
  pageSize: number;
  filters: Record<string, FilterValue>;
}


export function useOperatorsByCentreId(centreId: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.USER, centreId],
    queryFn: () => getOperatorsByCentreId(centreId),
    enabled: centreId !== '',
  });

  return {
    data,
    isLoading,
    error,
  };
}

export function useActiveOperatorsCount() {
  const countOperators = useQuery({
    queryKey: [QUERY_KEY.USER, "active-operators-count"],
    queryFn: () => getActiveOperatorsCount(),
  });

  return countOperators;
}

export function useUserByFilters({ page, pageSize, filters }: UserByFilters) {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.USER, page, pageSize, filters],
    queryFn: () => getByFilters(page, pageSize, filters),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export function useToggleUser() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, status }: { id: string, status: string }) =>
      toggleStatus(id, status === "actif" ? "inactif" : "actif"),
    onSuccess: () => {
      toast.success("Utilisateur modifié avec succès !");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });
    },
  });
  return { 
    toggleUserById: (id: string, status: string, onSuccess?: () => void) => 
      mutate({ id, status }, { onSuccess }), 
    isPending 
  };
}

export function useUpdateUser(id: string) {
  const queryClient = useQueryClient();
  const form = useForm<UpdateUserDTO>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      phone: "",
      sexe: "",
      adresse: "",
      matricule: "",
      centre_id: "",
      role: "",
    },
  });

  const { mutate: submitUser, isPending } = useMutation({
    mutationFn: (data: UpdateUserDTO) => updateUser(id, data),
    onSuccess: () => {
      toast.success("Utilisateur modifié avec succès !");
      form.reset();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  const onSubmit = (data: UpdateUserDTO) => {
    submitUser(data);
  };

  return {
    form,
    onSubmit,
    isLoading: isPending,
  };
}
