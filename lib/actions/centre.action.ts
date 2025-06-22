"use server";

import { CentreDTO, CreateCentreDTO, UpdateCentreDTO } from "@/lib/DTO/centre.dto";
import { CentreService } from "../services/centre.service";
import { ROUTE_PATH } from "../constants";
import { revalidatePath } from "next/cache";
import { FilterValue } from "@/types";
import { MapperDTO } from "@/types/mapper-typer";

export async function createCentre(data: CreateCentreDTO) {
  try {
    const centre = await CentreService.create(data);
    revalidatePath(ROUTE_PATH.ADMIN.CENTRE);
    return { success: true, data: JSON.parse(JSON.stringify({ centre })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function toggleStatus(id: string, status: string) {
  try {
    const centre = await CentreService.toggleStatus(id, status);
    revalidatePath(ROUTE_PATH.ADMIN.CENTRE);
    return { success: true, data: JSON.parse(JSON.stringify({ centre })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getCentreList(): Promise<CentreDTO[]> {
  try {
    const centres = await CentreService.getAll();
    return JSON.parse(JSON.stringify(centres));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function getByFilters(page: number, pageSize: number, filters: Record<string, FilterValue>): Promise<MapperDTO<CentreDTO>> {
  try {
    const centres = await CentreService.getByFilters(page, pageSize, filters);
    return JSON.parse(JSON.stringify(centres));
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}

export async function updateCentre(id: string, data: UpdateCentreDTO) {
  try {
    const centre = await CentreService.update(id, data);
    revalidatePath(ROUTE_PATH.ADMIN.CENTRE);
    return { success: true, data: JSON.parse(JSON.stringify({ centre })) };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Une erreur est survenue");
  }
}
