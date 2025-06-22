import { z } from "zod";
import {
  CreateCentreSchema,
  UpdateCentreSchema,
} from "@/lib/validations/centre.validation";
import { type Document } from "mongoose";

export type CreateCentreDTO = z.infer<typeof CreateCentreSchema>;

export type UpdateCentreDTO = z.infer<typeof UpdateCentreSchema>;

export interface CentreDTO extends Document {
  _id: string;
  status: "actif" | "inactif";
  name: string;
  prefecture_id: number;
  commune_id: number;
  quartier_id: number;
  createdAt: Date;
  updatedAt: Date;
}
