'use server'

import { PrismaClient } from "@prisma/client";
import { UserDTO } from "../dtos/user_dto"
import { handleError } from "../error-handler";
import { MapperDTO } from "@/types/mapper-typer";
import { FilterParams } from "@/components/data-table/types";
import { AppConstants } from "../constants";
import { CreateOperationDTO, CreateOperationSchema, OperationDTO, UpdateOperationDTO, UpdateOperationSchema } from "../dtos/operation_dto";
import { CentreDTO } from "../dtos/centre_dto";
import { endOfDay, startOfDay } from "date-fns";
import { RoleEnum } from "../enums/role_enum";
const prisma = new PrismaClient()

export async function createOperation(operation: CreateOperationDTO) {
  const validatedData = CreateOperationSchema.parse(operation)
  const today = new Date()
  const startOfToday = startOfDay(today)
  const endOfToday = endOfDay(today)

  try {
    const existingOperation = await prisma.operation.findFirst({
      where: {
        operator_id: operation.operator_id,
        createdAt: {
          gte: startOfToday,
          lte: endOfToday,
        },
      },
    });
    if (existingOperation) {
      throw new Error('Operation existe déjà pour aujourd’hui');
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
    createdAt: {
      gte: startOfToday,
      lte: endOfToday,
    },
  }

  if(currentUserId && role === RoleEnum.COORDINATOR) {
    where = { ...where, coordinator_id: currentUserId } as {
      createdAt: {
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
    let where = { ...filters };
    if(currentUserId){
      where = { 
        ...filters,
        coordinator_id: currentUserId
      };
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
