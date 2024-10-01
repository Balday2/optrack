import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createOperation, getDailyOperations, getOperations, updateOperation } from '../actions/operation-action';
import { QUERY_KEY } from '../constants';
import { FilterParams } from '@/components/data-table/types';
import { useState, useTransition } from 'react';
import { useAppStore } from '../stores/app-store';
import { useForm } from 'react-hook-form';
import { CreateOperationDTO, CreateOperationSchema, OperationDTO, UpdateOperationDTO, UpdateOperationSchema } from '../dtos/operation_dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { handleClientError } from '../error-handler';
import { useSession } from 'next-auth/react';



interface UseGetOperationParams {
  filters?: FilterParams['filters'];
  pagination?: {
    pageIndex: number;
    pageSize: number;
  };
}



export function useGetOperations({
  filters = {},
  pagination,
  currentUserId
}: UseGetOperationParams & { currentUserId?: string }) {
  const { data: operations, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.OPERATIONS, { filters, pagination }],
    queryFn: () => getOperations({
      filters,
      page: pagination ? pagination.pageIndex + 1 : undefined,
      limit: pagination ? pagination.pageSize : undefined,
      currentUserId: currentUserId
    }),
    placeholderData: (prev) => prev,
  });

  return { operations, error, isLoading };
}

export function useDailyOperations(currentUserId?: string, role?: string) {
  const { data: operations, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.DAILY_OPERATIONS],
    queryFn: () => getDailyOperations(currentUserId!, role),
    placeholderData: (prev) => prev,
  });

  return { operations, error, isLoading };
}


export function useCreateOperation(onClose: () => void) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient()
  const { data: session } = useSession();

  const form = useForm<CreateOperationDTO>({
    resolver: zodResolver(CreateOperationSchema),
    defaultValues: {
      nombre: 0,
      operator_id: "",
      centre_id: session?.user.centre_id,
      coordinator_id: session?.user.id
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await createOperation(data);
        toast.success("Utilisateur créé avec succès.");
        form.reset();
        onClose();
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATIONS] });
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.DAILY_OPERATIONS] });
      } catch (error: unknown) {
        toast.error(handleClientError(error))
        setError(handleClientError(error))
      }
    });
  });

  return { form, error, onSubmit, isPending };
}

interface OperationProps {
  operationId: string
  onClose: () => void
}


export function useUpdateOperation({operationId, onClose}: OperationProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient()


  const form = useForm<UpdateOperationDTO>({
    resolver: zodResolver(UpdateOperationSchema),
      defaultValues: {},
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await updateOperation({operationId, operationData: data});
        toast.success("Operateur mis à jour avec succès.");
        form.reset();
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATIONS] });
        onClose();
      } catch (error: unknown) {
        toast.error(handleClientError(error))
        setError(handleClientError(error));
      }
    });
  });

  return { form, error, onSubmit, isPending };
}