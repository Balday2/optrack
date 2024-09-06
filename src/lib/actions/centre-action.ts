'use server'

import { PrismaClient } from "@prisma/client";
import { handleError } from "../error-handler";
import { MapperDTO } from "@/types/mapper-typer";
import { CentreDTO, CreateCentreDTO, UpdateCentreDTO } from "../dtos/centre_dto";
import { CreateCentreSchema, UpdateCentreSchema } from "../schemas/centre_schema";
import { revalidatePath } from "next/cache";
import { SIDEBAR_PATHS } from "@/routes";

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

export async function getAllCentres(filters = {}, page = 1, limit = 10): Promise<MapperDTO<CentreDTO>> {
  try {
    const skip = (page - 1) * limit;
    const where = { ...filters };

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
  } catch (error) {
    throw handleError(error);
  }
}