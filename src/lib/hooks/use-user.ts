import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserSchema, UpdateUserSchema } from '@/lib/schemas/user_schema';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../actions/user-actions';
import { toast } from 'sonner';
import { handleClientError } from '../error-handler';
import { CreateUserDTO, UpdateUserDTO, UserDTO } from '../dtos/user_dto';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '../constants';
import { FilterParamsx } from '@/components/data-table/types';
import { useAppStore } from '../stores/app-store';


export function useCreateUser() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient()
  const {setOpenToAddUser} = useAppStore();

  const form = useForm<CreateUserDTO>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      phone: "",
      password: "",
      nom: "",
      prenom: "",
      sexe: "",
      etatCivil: "",
      adresse: "",
      centre_id: ""
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await createUser(data);
        toast.success("Utilisateur créé avec succès.");
        form.reset();
        setOpenToAddUser(false);
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USERS] });
      } catch (error: unknown) {
        toast.error(handleClientError(error))
        setError(handleClientError(error))
      }
    });
  });

  return { form, error, onSubmit, isPending };
}


export function useUpdateUser(userId: string) {
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
        await updateUser(userId, data);
        toast.success("Utilisateur mis à jour avec succès.");
        form.reset();
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USERS] });
        setOpenToEditUser(false);
      } catch (error: unknown) {
        toast.error(handleClientError(error))
        setError(handleClientError(error));
      }
    });
  });

  return { form, error, onSubmit, isPending };
}

export function useDeleteUser() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const {setOpenToDeleteUser} = useAppStore();
  const queryClient = useQueryClient()

  const deleteUserById = async (userId: string) => {
    setError(null);
    startTransition(async () => {
      try {
        await deleteUser(userId);
        toast.success("Utilisateur supprimé avec succès.");
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USERS] });
        setOpenToDeleteUser(false)
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  };

  return { deleteUserById, error, isPending };
}

export function useGetUserById(userId: string) {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
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

export function useGetAllUsers({filters = {}, pagination}: FilterParamsx) {
  const { data: users, error, isLoading } = useQuery({
     queryKey: [QUERY_KEY.USERS, {filters, pagination}],
     queryFn:  () => getAllUsers({
      filters, 
      page: pagination.pageIndex+1,
      limit: pagination.pageSize
    }),
     placeholderData: (prev) => prev
  });
  return { users, error, isLoading };
}