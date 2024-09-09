'use server'

import { PrismaClient } from "@prisma/client";
import { handleError } from "../error-handler";
import { MapperDTO } from "@/types/mapper-typer";
import { CentreDTO, CreateCentreDTO, UpdateCentreDTO } from "../dtos/centre_dto";
import { CreateCentreSchema, UpdateCentreSchema } from "../schemas/centre_schema";
import { revalidatePath } from "next/cache";
import { SIDEBAR_PATHS } from "@/routes";
import { FilterParams } from "@/components/data-table/types";
import { AppConstants } from "../constants";

const prisma = new PrismaClient()

export async function createCentre(centreData: CreateCentreDTO) {
  const validatedData = CreateCentreSchema.parse(centreData)
  try {
    const centre = await prisma.centre.create({ data: validatedData })
    return centre;
  } catch (error) {
    throw handleError(error);
  }
}

export async function updateCentre(centreId: string, centreData: UpdateCentreDTO) {
  try {
    const validatedData = UpdateCentreSchema.parse(centreData);
    const centre = await prisma.centre.update({
      where: { id: centreId },
      data: validatedData,
    });
    return centre;
  } catch (error) {
    throw handleError(error);
  }
}

export async function deleteCentre(centreId: string) {
  try {
    await prisma.centre.delete({
      where: { id: centreId },
    });
  } catch (error) {
    throw handleError(error);
  }
}

export async function getCentreById(centreId: string): Promise<CentreDTO | null> {
  try {
    const centre = await prisma.centre.findUnique({
      where: { id: centreId },
    });
    if (!centre) {
      throw new Error('Centre not found');
    }
    return centre;
  } catch (error) {
    throw handleError(error);
  }
}

export async function getAllCentres({
  page = 1,
  limit = AppConstants.pageSize,
  filters = {},
  getAllCentres = false
}: FilterParams & { getAllCentres?: boolean }): Promise<MapperDTO<CentreDTO>> {
  try {
    const where = { ...filters };

    if (getAllCentres) {
      // Récupérer tous les centres sans pagination
      const centres = await prisma.centre.findMany({ where });
      return {
        data: centres as CentreDTO[],
        pagination: {
          page: 1,
          limit: centres.length,
          totalCount: centres.length,
          totalPages: 1,
        },
      };
    } else {
      // Comportement existant avec pagination
      const skip = (page - 1) * limit;
      const [centres, totalCount] = await Promise.all([
        prisma.centre.findMany({
          where,
          skip,
          take: limit,
        }),
        prisma.centre.count({ where }),
      ]);

      return {
        data: centres as CentreDTO[],
        pagination: {
          page,
          limit,
          totalCount,
          totalPages: Math.ceil(totalCount / limit),
        },
      };
    }
  } catch (error) {
    throw handleError(error);
  }
}