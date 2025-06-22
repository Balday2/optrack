import { z } from "zod";

export const CreateCentreSchema = z
  .object({
    name: z.string().min(1, "Nom du centre est requis"),
    prefecture_id: z.number().min(1, "Prefecture est requise"),
    commune_id: z.number().min(1, "Commune est requise"),
    quartier_id: z.number().min(1, "Quartier est requis"),
  })
  .strict();

export const UpdateCentreSchema = CreateCentreSchema.partial().strict();
