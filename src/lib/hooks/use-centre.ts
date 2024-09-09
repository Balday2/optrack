import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { handleClientError } from '../error-handler';
import { CentreDTO, CreateCentreDTO, UpdateCentreDTO } from '../dtos/centre_dto';
import { CreateCentreSchema, UpdateCentreSchema } from '../schemas/centre_schema';
import { createCentre, deleteCentre, getAllCentres, getCentreById, updateCentre } from '../actions/centre-action';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AppConstants, QUERY_KEY } from '../constants';
import { PaginationState } from '@tanstack/react-table';
import { FilterParams, FilterParamsx, FilterState } from '@/components/data-table/types';
import { useAppStore } from '../stores/app-store';


export function useCreateCentre(onClose: () => void) {
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CreateCentreDTO>({
    resolver: zodResolver(CreateCentreSchema),
    defaultValues: {
      name: "",
      prefecture: "",
      commune: "",
      quartier: "",
    },
  });

  const { mutate, isPending} = useMutation({
    mutationFn: createCentre,
    onSuccess: (resp) => {
      toast.success("Centre créé avec succès.");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CENTRES] });
      onClose();
      form.reset();
    },
    onError: (error: any) => {
      toast.error(handleClientError(error))
      setError(handleClientError(error))
    }
  });

  const onSubmit = form.handleSubmit((data) => {
    setError(null);
    mutate(data);
  });
  return { form, error, onSubmit, isPending };
}


export function useUpdateCentre(centreId: string, onClose: () => void) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();


  const form = useForm<UpdateCentreDTO>({
    resolver: zodResolver(UpdateCentreSchema),
    defaultValues: {},
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await updateCentre(centreId, data);
        toast.success("Centre mis à jour avec succès.");
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CENTRES] });
        onClose();
        form.reset();
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  });

  return { form, error, onSubmit, isPending };
}

export function useDeleteCentre() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const {setOpenToDeleteCentre} = useAppStore();


  const deleteCentreById = async (centreId: string) => {
    setError(null);
    startTransition(async () => {
      try {
        await deleteCentre(centreId);
        toast.success("Centre supprimé avec succès.");
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CENTRES] });
        setOpenToDeleteCentre(false);
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  };

  return { deleteCentreById, error, isPending };
}

export function useGetCentreById(centreId: string) {
  const [centre, setCentre] = useState<CentreDTO | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const fetchCentre = async () => {
    setError(null);
    startTransition(async () => {
      try {
        const centreData = await getCentreById(centreId);
        setCentre(centreData);
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  };

  return { centre, fetchCentre, error, isPending };
}

interface UseGetAllCentresParams {
  filters?: FilterParams['filters'];
  pagination?: {
    pageIndex: number;
    pageSize: number;
  };
  getAllCentres?: boolean;
}



export function useGetAllCentres({
  filters = {},
  pagination,
  getAllCentres: getAllCentresFlag = false
}: UseGetAllCentresParams) {
  const { data: centres, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.CENTRES, { filters, pagination, getAllCentresFlag }],
    queryFn: () => getAllCentres({
      filters,
      page: pagination ? pagination.pageIndex + 1 : undefined,
      limit: pagination ? pagination.pageSize : undefined,
      getAllCentres: getAllCentresFlag
    }),
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: !getAllCentresFlag,
    refetchOnReconnect: !getAllCentresFlag,
  });

  return { centres, error, isLoading };
}