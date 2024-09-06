import { z } from 'zod';

export const CreateEquipeSchema = z.object({
  name: z.string({message: 'Nom du centre est requis'}),
  centre_id: z.string({message: 'Le centre est requis'})
}).strict();

export const UpdateEquipeSchema = CreateEquipeSchema.strict();


