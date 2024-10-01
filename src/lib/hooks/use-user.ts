import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserSchema, UpdateUserSchema } from '@/lib/schemas/user_schema';
import { createUser, toggleUser, getUsers, getUserById, updateUser } from '../actions/user-actions';
import { toast } from 'sonner';
import { handleClientError } from '../error-handler';
import { CreateUserDTO, UpdateUserDTO, UserDTO } from '../dtos/user_dto';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants';
import { FilterParams, FilterParamsx } from '@/components/data-table/types';
import { useAppStore } from '../stores/app-store';
import { RoleEnum } from '../enums/role_enum';
import { useSession } from 'next-auth/react';

interface UserProps {
  queryKey?: string
  userId?: string
  centreId?: string
}

export function useCreateUser({userId, centreId}: UserProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient()
  const {setOpenToAddUser} = useAppStore();

  const form = useForm<CreateUserDTO>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      phone: "",
      nom: "",
      prenom: "",
      sexe: "",
      etatCivil: "",
      adresse: "",
      centre_id: centreId ?? "",
      coordinator_id: userId ?? "",
      password: "000000",
      matricule: ""
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    console.log({data})
    startTransition(async () => {
      try {
        await createUser(data);
        toast.success("Utilisateur créé avec succès.");
        form.reset();
        setOpenToAddUser(false);
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATORS] });
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USERS] });
      } catch (error: unknown) {
        toast.error(handleClientError(error))
        setError(handleClientError(error))
      }
    });
  });

  return { form, error, onSubmit, isPending };
}


export function useUpdateUser({userId, queryKey}: UserProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const {setOpenToEditUser} = useAppStore();
  const queryClient = useQueryClient()


  const form = useForm<UpdateUserDTO>({
    resolver: zodResolver(UpdateUserSchema),
      defaultValues: {},
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await updateUser(userId!, data);
        toast.success("Utilisateur mis à jour avec succès.");
        form.reset();
        queryClient.invalidateQueries({ queryKey: [queryKey] });
        setOpenToEditUser(false);
      } catch (error: unknown) {
        toast.error(handleClientError(error))
        setError(handleClientError(error));
      }
    });
  });

  return { form, error, onSubmit, isPending };
}

export function useToggleUser({queryKey}: UserProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const {setOpenToToggleUser} = useAppStore();
  const queryClient = useQueryClient()

  const toggleUserById = async (userId: string, status: string) => {
    setError(null);
    startTransition(async () => {
      try {
        await toggleUser(userId, status);
        toast.success("Modification effectuée avec succès");
        queryClient.invalidateQueries({ queryKey: [queryKey] });
        setOpenToToggleUser(false)
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  };

  return { toggleUserById, error, isPending };
}

export function useGetUserById() {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async (userId: string) => {
    setError(null);
    startTransition(async () => {
      try {
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  };

  return { user, fetchUser, error, isPending };
}


export function useGetCoordinators({page, limit, filters}: FilterParams) {
  const { data: users, error, isLoading } = useQuery({
     queryKey: [QUERY_KEY.USERS, {filters, page, limit}],
     queryFn:  () => getUsers({
      filters: {...filters, role: RoleEnum.COORDINATOR },
      page: page ? page : undefined,
      limit: limit ? limit : undefined,
    }),
    placeholderData: (prev) => prev,
  });
  return { users, error, isLoading };
}


export function useGetOperators({filters = {}, pagination}: FilterParamsx) {
  const { data: users, error, isLoading } = useQuery({
     queryKey: [QUERY_KEY.OPERATORS, {filters, pagination}],
     queryFn:  () => getUsers({
      filters: {
        ...filters, 
        role: { notIn: [RoleEnum.ADMIN, RoleEnum.COORDINATOR] },
      },
      page: pagination.pageIndex+1,
      limit: pagination.pageSize
    }),
     placeholderData: (prev) => prev
  });
  return { users, error, isLoading };
}


export function useGetOperatorsByCoordinator({filters = {}, pagination}: FilterParamsx) {
  const {data: session} = useSession();
  const { data: users, error, isLoading } = useQuery({
     queryKey: [QUERY_KEY.OPERATORS, {filters, pagination}],
     queryFn:  () => getUsers({
      filters: {
        ...filters, 
        coordinator_id: session?.user?.id
      },
      page: pagination.pageIndex+1,
      limit: pagination.pageSize
    }),
     placeholderData: (prev) => prev
  });
  return { users, error, isLoading };
}