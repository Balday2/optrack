import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { handleClientError } from '../error-handler';
import { MapperDTO } from '@/types/mapper-typer';
import { CentreDTO, CreateCentreDTO, UpdateCentreDTO } from '../dtos/centre_dto';
import { CreateCentreSchema, UpdateCentreSchema } from '../schemas/centre_schema';
import { createCentre, deleteCentre, getAllCentres, getCentreById, updateCentre } from '../actions/centre-action';

export function useCreateCentre() {
  const [isPending, startTransition] = useTransition();
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

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await createCentre(data);
        toast.success("Centre créé avec succès.");
        form.reset();
      } catch (error: unknown) {
        setError(handleClientError(error))
      }
    });
  });

  return { form, error, onSubmit, isPending };
}


export function useUpdateCentre(centreId: string) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

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

  const deleteCentreById = async (centreId: string) => {
    setError(null);
    startTransition(async () => {
      try {
        await deleteCentre(centreId);
        toast.success("Centre supprimé avec succès.");
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

export function useGetAllCentres() {
  const [centres, setCentres] = useState<MapperDTO<CentreDTO>>();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const fetchCentres = async (filters = {}, page = 1, limit = 10) => {
    setError(null);
    startTransition(async () => {
      try {
        const centresData = await getAllCentres(filters, page, limit);
        console.log({centresData})
        setCentres(centresData);
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  };

  return { centres, fetchCentres, error, isPending };
}