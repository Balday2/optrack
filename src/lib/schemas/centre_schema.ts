import { z } from 'zod';

export const CreateCentreSchema = z.object({
  name: z.string({message: 'Nom du centre est requis'}),
  prefecture: z.string({message: 'Prefecture est requise'}),
  commune: z.string({message: 'Commune est requise'}),
  quartier: z.string({message: 'Quartier est requis'}),
}).strict();

export const UpdateCentreSchema = CreateCentreSchema.strict();


