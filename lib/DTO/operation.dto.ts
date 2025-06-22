import {
  CreateOperationSchema,
  UpdateOperationSchema,
} from "@/lib/validations/operation.validation";
import { z } from "zod";
import { Document } from "mongoose";
import { CentreDTO } from "./centre.dto";
import { UserDTO } from "./user.dto";

export type CreateOperationDTO = z.infer<typeof CreateOperationSchema>;
export type UpdateOperationDTO = z.infer<typeof UpdateOperationSchema>;

export interface OperationDTO extends Document {
  nombre: number;
  date: Date;
  centre_id: string | Pick<CentreDTO, "name" | "status">;
  coordinator_id: string | Pick<UserDTO, "prenom" | "nom" | "matricule" | "phone" | "sexe">;
  operator_id: string | Pick<UserDTO, "prenom" | "nom" | "matricule" | "phone" | "sexe">;
  createdAt: Date;
  updatedAt: Date;
}
