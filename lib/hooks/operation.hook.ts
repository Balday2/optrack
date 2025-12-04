import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOperation, getByFilters, toggleStatus, updateOperation, deleteOperation, getByFiltersByCoordinator, getTopCentersByOperations, getTopOperatorsByOperations, exportWeeklyReport, getTotalOperationsCount, getAllOperationsCount } from "../actions/operation.action";
import { CreateOperationDTO, UpdateOperationDTO } from "../DTO/operation.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateOperationSchema, UpdateOperationSchema } from "../validations/operation.validation";
import { QUERY_KEY } from "../constants";
import { FilterValue } from "@/types";
import { useSession } from "next-auth/react";
import { RoleEnum } from "../Enums/role.enum";

export function useOperationForm() {
  const queryClient = useQueryClient();
  const { data: session } = useSession()
  const form = useForm<CreateOperationDTO>({
    resolver: zodResolver(CreateOperationSchema),
    defaultValues: {
      nombre: 0,
      date: new Date(),
      centre_id: session?.user?.centre_id || undefined,
      coordinator_id: session?.user?.id || undefined,
      operator_id: "",
    },
  });

  const { mutate: submitOperation, isPending } = useMutation({
    mutationFn: createOperation,
    onSuccess: () => {
      toast.success("Opération créée avec succès !");
      form.reset();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATION] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  const onSubmit = (data: CreateOperationDTO) => {
    submitOperation(data);
  };

  return {
    form,
    onSubmit,
    isLoading: isPending,
  };
}

export interface OperationByFilters {
  page: number;
  pageSize: number;
  filters: Record<string, FilterValue>;
}

export function useOperationByFilters({ page, pageSize, filters }: OperationByFilters) {
  const { data: session } = useSession()
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.OPERATION, page, pageSize, filters],
    queryFn: () => getByFilters(page, pageSize, filters),
    enabled: session?.user?.role === RoleEnum.ADMIN
  });

  return {
    data,
    isLoading,
    error,
  };
}


export function useOperationByFiltersByCoordinator({ page, pageSize, filters }: OperationByFilters) {
  const { data: session } = useSession()
  if(session?.user?.role === RoleEnum.COORDINATOR) {
    filters.coordinator_id = session?.user?.id
    filters.centre_id = session?.user?.centre_id
  }
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.OPERATION, page, pageSize, filters],
    queryFn: () => getByFiltersByCoordinator(page, pageSize, filters),
    enabled: session?.user?.role === RoleEnum.COORDINATOR
  });

  return {
    data,
    isLoading,
    error,
  };
}

export function useToggleOperation() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, status }: { id: string, status: string }) =>
      toggleStatus(id, status),
    onSuccess: () => {
      toast.success("Statut de l'opération modifié avec succès !");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATION] });
    },
  });
  return { 
    toggleOperationById: (id: string, status: string, onSuccess?: () => void) => 
      mutate({ id, status }, { onSuccess }), 
    isPending 
  };
}

export function useUpdateOperation(id: string) {
  const queryClient = useQueryClient();
  const form = useForm<UpdateOperationDTO>({
    resolver: zodResolver(UpdateOperationSchema),
    defaultValues: {
      nombre: 0,
    },
  });

  const { mutate: submitOperation, isPending } = useMutation({
    mutationFn: (data: UpdateOperationDTO) => updateOperation(id, data),
    onSuccess: () => {
      toast.success("Opération modifiée avec succès !");
      form.reset();
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATION] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  const onSubmit = (data: UpdateOperationDTO) => {
    submitOperation(data);
  };

  return {
    form,
    onSubmit,
    isLoading: isPending,
  };
}

export function useDeleteOperation() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteOperation(id),
    onSuccess: () => {
      toast.success("Opération supprimée avec succès !");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATION] });
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    },
  });

  return {
    deleteOperationById: (id: string, onSuccess?: () => void) => 
      mutate(id, { onSuccess }),
    isPending,
  };
}

export function useTopCentersByOperations(filter: string) {
  const topCenters = useQuery({
     queryKey: [QUERY_KEY.OPERATION, "top-centers", filter],
     queryFn: () => getTopCentersByOperations(filter),
   });
 
  return topCenters
 }

export function useExportWeeklyReport() {
  const { mutate, isPending, data, error, isSuccess, isError } = useMutation({
    mutationFn: ({
      startDate,
      endDate,
      centreId,
      fonction
    }: {
      startDate: string;
      endDate: string;
      centreId?: string;
      fonction?: string;
    }) => exportWeeklyReport(startDate, endDate, centreId, fonction),
  });

  return {
    exportReport: mutate,
    isLoading: isPending,
    data,
    error,
    isSuccess,
    isError
  };
}

export function useTopOperatorsByOperations(filter: string) {
  const topOperators = useQuery({
     queryKey: [QUERY_KEY.OPERATION, "top-operators", filter],
     queryFn: () => getTopOperatorsByOperations(filter),
   });

  return topOperators
 }

export function useTotalOperationsCount() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.OPERATION, "total-count"],
    queryFn: () => getTotalOperationsCount(),
  });

  return {
    data,
    isLoading,
    error,
  };
}

export function useAllOperationsCount() {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.OPERATION, "all-count"],
    queryFn: () => getAllOperationsCount(),
  });

  return {
    data,
    isLoading,
    error,
  };
}
