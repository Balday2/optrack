import {
  CreateUserSchema,
  SetPasswordSchema,
  ForgotPasswordSchema,
  UpdateUserSchema,
  LoginSchema,
} from "@/lib/validations/user.validation";
import { ObjectId } from "mongoose";
import { z } from "zod";
import { CentreDTO } from "./centre.dto";

export type CreateUserDTO = z.infer<typeof CreateUserSchema>

export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;

export type LoginDTO = z.infer<typeof LoginSchema>;

export type SetPasswordDTO = z.infer<typeof SetPasswordSchema>;

export type ForgotPasswordDTO = z.infer<typeof ForgotPasswordSchema>;

export interface UserDTO extends Document {
  _id: ObjectId | string;
  nom: string;
  prenom: string;
  phone: string;
  sexe: string;
  adresse: string;
  matricule: string;
  password: string;
  centre_id?: string | Pick<CentreDTO, "name">;
  coordinator_id?: string;
  status: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface TokenDTO {
  id: string;
  role: string;
  phone: string;
}
