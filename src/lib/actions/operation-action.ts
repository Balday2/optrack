'use server'

import { Prisma, PrismaClient } from "@prisma/client";
import { UserDTO } from "../dtos/user_dto"
import { handleError } from "../error-handler";
import { MapperDTO } from "@/types/mapper-typer";
import { FilterParams } from "@/components/data-table/types";
import { AppConstants } from "../constants";
import { CreateOperationDTO, CreateOperationSchema, OperationDTO, UpdateOperationDTO, UpdateOperationSchema } from "../dtos/operation_dto";
import { CentreDTO } from "../dtos/centre_dto";
import { endOfDay, startOfDay, isFuture } from "date-fns";
import { RoleEnum } from "../enums/role_enum";
const prisma = new PrismaClient()

export async function createOperation(operation: CreateOperationDTO) {
  const validatedData = CreateOperationSchema.parse(operation)
  const operationDate = new Date(validatedData.date)
  const today = new Date()

  try {
    if (isFuture(operationDate)) {
      throw new Error('Impossible d\'ajouter une opération pour une date future')
    }

    const startOfOperationDay = startOfDay(operationDate)
    const endOfOperationDay = endOfDay(operationDate)

    // Check if an operation already exists for the given date and operator
    const existingOperation = await prisma.operation.findFirst({
      where: {
        operator_id: validatedData.operator_id,
        date: {
          gte: startOfOperationDay,
          lte: endOfOperationDay,
        },
      },
    })

    if (existingOperation) {
      throw new Error('Une opération existe déjà pour cette date')
    }
    const result = await prisma.operation.create({ data: validatedData })
    return result;
  } catch (error) {
    throw handleError(error);
  }
}
  

export async function updateOperation({ operationId, operationData }: { operationId: string, operationData: UpdateOperationDTO }) {
  try {
    const validatedData = UpdateOperationSchema.parse(operationData);
    const result = await prisma.operation.update({
      where: { id: operationId },
      data: validatedData,
    });
    return result;
  } catch (error) {
    throw handleError(error);
  }
}

export async function getDailyOperations(currentUserId: string, role?: string): Promise<OperationDTO[]> {
  const today = new Date()
  const startOfToday = startOfDay(today)
  const endOfToday = endOfDay(today)
  let where = {
    date: {
      gte: startOfToday,
      lte: endOfToday,
    },
  }

  if(currentUserId && role === RoleEnum.COORDINATOR) {
    where = { ...where, coordinator_id: currentUserId } as {
      date: {
        gte: Date;
        lte: Date;
      };
      coordinator_id: string;
    };
  }

  try {
    const operations = await prisma.operation.findMany({
      where,
      include: {
        coordinator: true,
        operator: true,
        centre: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const formattedOperations: OperationDTO[] = operations.map(op => ({
      id: op.id,
      nombre: op.nombre,
      date: op.date,
      coordinator_id: op.coordinator as Omit<UserDTO, 'password'>,
      operator_id: op.operator as Omit<UserDTO, 'password'>,
      centre: op.centre as CentreDTO,
      createdAt: op.createdAt,
      updatedAt: op.updatedAt,
    }));

    return formattedOperations;
  } catch (error) {
    throw handleError(error);
  }
}


export async function getOperations({
  page = 1,
  limit = AppConstants.pageSize,
  filters,
  currentUserId
}: FilterParams & { currentUserId?: string }): Promise<MapperDTO<OperationDTO>> {
  try {
    const skip = (page - 1) * limit;
    let where = {};

    if (filters) {
      const { Fonction, Centre, date, ...otherFilters } = filters;
      where = {
        AND: [
          { ...otherFilters },
          Fonction ? {
            OR: [
              { operator: { role: Fonction } },
            ]
          } : {},
          Centre ? { centre: { name: Centre } } : {},
          date ? {
            date: {
              gte: filters.date.from ? new Date(filters.date.from) : undefined,
              lt: filters.date.to ? new Date(new Date(filters.date.to).setDate(new Date(filters.date.to).getDate() + 1)) : undefined,
            }
          } : {}
        ].filter(condition => Object.keys(condition).length > 0)
      };
    }


    if(currentUserId){
      where = { 
        ...where, 
        coordinator_id: currentUserId 
      }
    }

    const [operations, totalCount] = await Promise.all([
      prisma.operation.findMany({
        where,
        skip,
        take: limit,
        include: {
          coordinator: true,
          operator: true,
          centre: true,
        },
      }),
      prisma.operation.count({ where }),
    ]);

    const formattedOperations: OperationDTO[] = operations.map(op => ({
      id: op.id,
      nombre: op.nombre,
      date: op.date,
      coordinator_id: op.coordinator as Omit<UserDTO, 'password'>,
      operator_id: op.operator as Omit<UserDTO, 'password'>,
      centre: op.centre as CentreDTO,
      createdAt: op.createdAt,
      updatedAt: op.updatedAt,
    }));

    return {
      data: formattedOperations,
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
