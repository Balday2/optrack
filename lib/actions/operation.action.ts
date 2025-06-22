"use server";

import { FilterValue } from "@/types";
import { MapperDTO } from "@/types/mapper-typer";
import { OperationService } from "../services/operation.service";
import { revalidatePath } from "next/cache";
import { ROUTE_PATH } from "../constants";
import { CreateOperationDTO, UpdateOperationDTO, OperationDTO } from "../DTO/operation.dto";

export async function createOperation(data: CreateOperationDTO) {
  try {
    const operation = await OperationService.create(data);
    revalidatePath(ROUTE_PATH.ADMIN.OPERATION);
    return { success: true, data: JSON.parse(JSON.stringify({ operation })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function toggleStatus(id: string, status: string) {
  try {
    const operation = await OperationService.toggleStatus(id, status);
    revalidatePath(ROUTE_PATH.ADMIN.OPERATION);
    return { success: true, data: JSON.parse(JSON.stringify({ operation })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getOperationById(id: string): Promise<OperationDTO> {
  try {
    const operation = await OperationService.getById(id);
    return JSON.parse(JSON.stringify(operation));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getByFilters(page: number, pageSize: number, filters: Record<string, FilterValue>): Promise<MapperDTO<OperationDTO>> {
  try {
    const operations = await OperationService.getByFilters(page, pageSize, filters);
    return JSON.parse(JSON.stringify(operations));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getByFiltersByCoordinator(page: number, pageSize: number, filters: Record<string, FilterValue>): Promise<MapperDTO<OperationDTO>> {
  try {
    const operations = await OperationService.getByFiltersByCoordinator(page, pageSize, filters);
    return JSON.parse(JSON.stringify(operations));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function updateOperation(id: string, data: UpdateOperationDTO) {
  try {
    const operation = await OperationService.update(id, data);
    revalidatePath(ROUTE_PATH.ADMIN.OPERATION);
    return { success: true, data: JSON.parse(JSON.stringify({ operation })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function deleteOperation(id: string) {
  try {
    const operation = await OperationService.delete(id);
    revalidatePath(ROUTE_PATH.ADMIN.OPERATION);
    return { success: true, data: JSON.parse(JSON.stringify({ operation })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getTopCentersByOperations(filter: string) {
  try {
    const data = await OperationService.getTopCentersByOperations(filter);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function exportWeeklyReport(startDate: string, endDate: string) {
  try {
    const data = await OperationService.exportWeeklyReport(startDate, endDate);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getTopOperatorsByOperations(filter: string) {
  try {
    const data = await OperationService.getTopOperatorsByOperations(filter);
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}
