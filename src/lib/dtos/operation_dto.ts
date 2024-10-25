import { CentreDTO } from "@/lib/dtos/centre_dto";
import { UserDTO } from "@/lib/dtos/user_dto";
import { z } from "zod";


export const CreateOperationSchema = z.object({
  date: z.date({ invalid_type_error: "La valeur doit être une date valide" }),
  nombre: z
  .number({ invalid_type_error: "La valeur doit être un nombre valide" })
  .int("La valeur doit être un entier")
  .positive("La valeur doit être positive")
  .or(z.string().regex(/^\d+$/, "La valeur doit être un nombre valide").transform(Number)),
  centre_id: z.string({message: 'Centre invalide'}),
  coordinator_id: z.string({message: 'Coordinateur invalide'}),
  operator_id: z.string({message: 'Operateur invalide'})
}).strict();

export const UpdateOperationSchema = CreateOperationSchema.pick({ 
  nombre: true, 
  // operator_id: true 
}).strict();

export type CreateOperationDTO = z.infer<typeof CreateOperationSchema>;
export type UpdateOperationDTO = z.infer<typeof UpdateOperationSchema>;

export interface OperationDTO {
  id: string;
  nombre: number;
  date: Date,
  coordinator_id?: Omit<UserDTO, 'password'>
  operator_id?: Omit<UserDTO, 'password'>
  centre_id?: CentreDTO
  centre?: CentreDTO;
  createdAt: Date;
  updatedAt: Date;
}