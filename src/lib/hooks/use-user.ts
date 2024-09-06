import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserSchema, UpdateUserSchema } from '@/lib/schemas/user_schema';
import { z } from 'zod';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../actions/user-actions';
import { toast } from 'sonner';
import { handleClientError } from '../error-handler';
import { CreateUserDTO, UpdateUserDTO, UserDTO } from '../dtos/user_dto';
import { MapperDTO } from '@/types/mapper-typer';

export function useCreateUser() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CreateUserDTO>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {},
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await createUser(data);
        toast.success("Utilisateur créé avec succès.");
        form.reset();
      } catch (error: unknown) {
        setError(handleClientError(error))
      }
    });
  });

  return { form, error, onSubmit, isPending };
}


export function useUpdateUser(userId: string) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

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
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  });

  return { form, error, onSubmit, isPending };
}

export function useDeleteUser() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const deleteUserById = async (userId: string) => {
    setError(null);
    startTransition(async () => {
      try {
        await deleteUser(userId);
        toast.success("Utilisateur supprimé avec succès.");
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

export function useGetAllUsers() {
  const [users, setUsers] = useState<MapperDTO<UserDTO>>();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async (filters = {}, page = 1, limit = 10) => {
    setError(null);
    startTransition(async () => {
      try {
        const usersData = await getAllUsers(filters, page, limit);
        console.log({usersData})
        setUsers(usersData);
      } catch (error: unknown) {
        setError(handleClientError(error));
      }
    });
  };

  return { users, fetchUsers, error, isPending };
}