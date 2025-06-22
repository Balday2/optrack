import { z } from "zod";

export const CreateOperationSchema = z
  .object({
    date: z.date({ invalid_type_error: "La valeur doit être une date valide" }),
    nombre: z
      .number({ invalid_type_error: "La valeur doit être un nombre valide" })
      .int("La valeur doit être un entier")
      .positive("La valeur doit être positive"),
    centre_id: z
      .string({ message: "Centre invalide" }).optional(),
    coordinator_id: z
      .string({ message: "Coordinateur invalide" }).optional(),
    operator_id: z
      .string({ message: "Operateur invalide" })
      .min(1, "Operateur invalide"),
  })
  .strict();

export const UpdateOperationSchema = CreateOperationSchema.pick({
  nombre: true,
}).strict();
