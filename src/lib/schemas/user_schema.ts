import { z } from 'zod';
import { RoleEnum } from '../enums/role_enum';
import { StatusEnum } from '../enums/status_enum';

export const CreateUserSchema = z.object({
  nom: z.string({message: 'Nom est invalide'}).min(2, 'Nom est invalide'),
  prenom: z.string({message: 'Prénom est invalide'}).min(2, 'Prénom est invalide'),
  phone: z.string({message: 'Numéro de téléphone invalide'}).min(9, 'Numéro de téléphone invalide'),
  sexe: z.string({message: 'Sexe invalide'}),
  adresse: z.string({message: 'Adresse invalide'}),
  etatCivil: z.string({message: 'Etat civil invalide'}),
  password: z
    .string({ message: 'Mot de passe invalide' })
    .length(6, 'Le mot de passe doit avoir exactement six (6) chiffres') // Vous pouvez ajuster la longueur selon vos besoins
    .regex(/^\d+$/, 'Le mot de passe doit contenir uniquement des chiffres'),
  
}).strict();


export const UpdateUserSchema = CreateUserSchema
  .partial()
  .omit({ password: true })
  .strict();

export const LoginSchema = CreateUserSchema.pick({ 
  phone: true, 
  password: true 
}).strict();

export const ForgotPasswordSchema = CreateUserSchema.pick({ 
  phone: true,
}).strict();

export const SetPasswordSchema = CreateUserSchema.pick({ 
    phone: true, 
    password: true 
  })
  .merge(z.object({ otp: z.string({message: 'Token invalide'}) }))
  .strict();


export const TokenSchema = z.object({
  _id: z.string(),
  role: z.string(),
  phone: z.string(),
});