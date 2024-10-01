
import { z } from 'zod';
import { CreateCentreSchema, UpdateCentreSchema } from '../schemas/centre_schema';

export type CreateCentreDTO = z.infer<typeof CreateCentreSchema>


export type UpdateCentreDTO = z.infer<typeof UpdateCentreSchema>

export interface CentreDTO extends CreateCentreDTO {
  id: string
  status: string
}
