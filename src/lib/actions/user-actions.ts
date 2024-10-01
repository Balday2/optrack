'use server'

import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "../dtos/user_dto"
import { CreateUserSchema, UpdateUserSchema } from "../schemas/user_schema";
import bcrypt from 'bcryptjs';
import { z } from "zod";
import { handleError } from "../error-handler";
import { MapperDTO } from "@/types/mapper-typer";
import { FilterParams } from "@/components/data-table/types";
import { AppConstants } from "../constants";
import { RoleEnum } from "../enums/role_enum";
const prisma = new PrismaClient()

export async function createUser(userData: CreateUserDTO) {
  const validatedData = CreateUserSchema.parse(userData)
  const {phone, password } = validatedData
  try {
    const existingUser = await prisma.user.findUnique({
      where: { phone: phone }
    });

    if (existingUser) {
      throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    let newData = { ...validatedData, password: hashedPassword }
    const user = await prisma.user.create({ data: newData })
    return user;
  } catch (error) {
    throw handleError(error);
  }
}

export async function updateUser(userId: string, userData: UpdateUserDTO) {
  try {
    const validatedData = UpdateUserSchema.parse(userData);
    const user = await prisma.user.update({
      where: { id: userId },
      data: validatedData,
    });
    return user;
  } catch (error) {
    throw handleError(error);
  }
}

export async function toggleUser(userId: string, status: string) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        status: status === 'actif' ? 'inactif' : 'actif'
      }
    });
  } catch (error) {
    throw handleError(error);
  }
}

export async function getUserById(userId: string): Promise<UserDTO | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const userDTO = {
      ...user,  
      centre_id: user.centre_id ?? undefined, 
      coordinator_id: user.coordinator_id ?? undefined
    };
    return userDTO;
  } catch (error) {
    throw handleError(error);
  }
}

export async function getUsers({
  page = 1, 
  limit = AppConstants.pageSize, 
  filters,
}: FilterParams & {getAllUsers?: boolean}): Promise<MapperDTO<UserDTO>> {
  try {
    const skip = (page - 1) * limit;
    const where = { 
      ...filters
    };
    const [users, totalCount] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
      }),
      prisma.user.count({ where }),
    ]);

    return {
      data: users as UserDTO[],
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
