
import { z } from 'zod';
import { CreateCentreSchema, UpdateCentreSchema } from '../schemas/centre_schema';

export type CreateCentreDTO = z.infer<typeof CreateCentreSchema>


export type UpdateCentreDTO = z.infer<typeof UpdateCentreSchema>

export interface CentreDTO extends CreateCentreDTO {
  id: string
  status: string
}

export interface PrefectureDTO {
  id: string
  prefecture_id: number
  nom: string
}

export interface CommuneDTO {
  id: string
  commune_id: number
  nom: string
  prefecture_id: number
}

export interface QuartierDTO {
  id: string
  quartier_id: number
  nom: string
  commune_id: number
}
