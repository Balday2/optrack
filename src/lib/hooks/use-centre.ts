import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { handleClientError } from '../error-handler';
import { CentreDTO, CreateCentreDTO, UpdateCentreDTO } from '../dtos/centre_dto';
import { CreateCentreSchema, UpdateCentreSchema } from '../schemas/centre_schema';
import { createCentre, toggleCentre, getAllCentres, getCentreById, updateCentre, getAllPrefecture, getCommunesByPrefectureId, getQuartiersByCommuneId } from '../actions/centre-action';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants';
import { useAppStore } from '../stores/app-store';
import { zodResolver } from '@hookform/resolvers/zod';

interface CreateCentreProps {
  onClose: () => void;
  prefecture: string;
  commune: string;
  quartier: string;
}

export function useCreateCentre({ onClose, prefecture, commune, quartier }: CreateCentreProps) {
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
    if(prefecture === '' || commune === '' || quartier === '') {
      toast.error("Veuillez sélectionner les adresses");
      return;
    } else {
      let newData = {
        ...data,
        prefecture,
        commune,
        quartier
      };
      setError(null);
      mutate(newData);
    }
  });

  return { form, error, onSubmit, isPending };
}


interface UpdateCentreProps {
  onClose: () => void;
  centreId: string;
  prefecture: string;
  commune: string;
  quartier: string;
}


export function useUpdateCentre({ onClose, centreId, prefecture, commune, quartier }: UpdateCentreProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  
  
  const form = useForm<UpdateCentreDTO>({
    resolver: zodResolver(UpdateCentreSchema),
    defaultValues: {},
  });

  
  const onSubmit = form.handleSubmit(async (data: UpdateCentreDTO) => {
    if(prefecture === '' || commune === '' || quartier === '') {
      toast.error("Veuillez sélectionner les adresses");
      return;
    } else {
      let newData = {
        ...data,
        prefecture,
        commune,
        quartier
      };
      setError(null);
      startTransition(async () => {
        try {
          await updateCentre({centreId: centreId, centreData: newData});
          toast.success("Centre mis à jour avec succès.");
          queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CENTRES] });
          onClose();
          form.reset();
        } catch (error: unknown) {
          setError(handleClientError(error));
        }
      });
    }
  });

  return { form, error, onSubmit, isPending };
}

export function useToggleCentre() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const {setOpenToToggleCentre} = useAppStore();


  const toggleCentreById = async (centreId: string, status: string) => {
    setError(null);
    startTransition(async () => {
      try {
        await toggleCentre(centreId, status);
        toast.success("Modification effectuée avec succès.");
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CENTRES] });
        setOpenToToggleCentre(false);
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  };

  return { toggleCentreById, error, isPending };
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
  page?: number;
  limit?: number;
  filters?: Record<string, any>;
  getAllCentres?: boolean;
}



export function useGetAllCentres({ filters, page, limit, getAllCentres: getAllCentresFlag = false }: UseGetAllCentresParams) {
  const { data: centres, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.CENTRES, { filters, page, limit, getAllCentresFlag }],
    queryFn: () => getAllCentres({
      filters,
      page: page ? page : undefined,
      limit: limit ? limit : undefined,
      getAllCentres: getAllCentresFlag
    }),
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: !getAllCentresFlag,
    refetchOnReconnect: !getAllCentresFlag,
  });

  return { centres, error, isLoading };
}


export function useGetAllPrefecture() {
  const { data: prefectures, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.PREFECTURES],
    queryFn: () => getAllPrefecture(),
    placeholderData: (prev) => prev,
  });

  return { prefectures, error, isLoading };
}

export function useGetCommunesByPrefectureId(prefectureId: number) {
  const { data: communes, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.COMMUNES, {prefectureId}],
    queryFn: () => getCommunesByPrefectureId(prefectureId),
    placeholderData: (prev) => prev,
  });
  return { communes, error, isLoading };
}

export function useGetQuartiersByCommuneId(communeId: number) {
  const { data: quartiers, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.QUARTIERS, {communeId}],
    queryFn: () => getQuartiersByCommuneId(communeId),
    placeholderData: (prev) => prev,
  });
  return { quartiers, error, isLoading };
}