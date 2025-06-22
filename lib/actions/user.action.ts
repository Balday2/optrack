"use server";

import { FilterValue } from "@/types";
import { MapperDTO } from "@/types/mapper-typer";
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "../DTO/user.dto";
import { UserService } from "../services/user.service";

export async function create(data: CreateUserDTO) {
  try {
    const user = await UserService.create(data);
    return { success: true, data: JSON.parse(JSON.stringify({ user })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getActiveOperatorsCount(): Promise<number> {
  try {
    const count = await UserService.getActiveOperatorsCount();
    return count;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function toggleStatus(id: string, status: string) {
  try {
    const user = await UserService.toggleStatus(id, status);
    return { success: true, data: JSON.parse(JSON.stringify({ user })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getOperatorsByCentreId(centreId: string): Promise<UserDTO[]> {
  try {
    const users = await UserService.getOperatorsByCentreId(centreId);
    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getUserById(id: string): Promise<UserDTO> {
  try {
    const user = await UserService.getById(id);
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}
export async function getByFilters(page: number, pageSize: number, filters: Record<string, FilterValue>): Promise<MapperDTO<UserDTO>> {
  try {
    const users = await UserService.getByFilters(page, pageSize, filters);
    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function updateUser(id: string, data: UpdateUserDTO) {
  try {
    const user = await UserService.update(id, data);
    return { success: true, data: JSON.parse(JSON.stringify({ user })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}
