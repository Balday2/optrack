import { z } from "zod";

export const CreateUserSchema = z
  .object({
    nom: z.string({ message: "Nom est invalide" }).min(2, "Nom est invalide"),
    prenom: z
      .string({ message: "Prénom est invalide" })
      .min(2, "Prénom est invalide"),
    phone: z
      .string({ message: "Numéro de téléphone invalide" })
      .min(9, "Numéro de téléphone invalide"),
    sexe: z
      .string({ message: "Sexe invalide" })
      .min(1, "Sexe invalide"),
    adresse: z
      .string({ message: "Adresse invalide" })
      .min(1, "Adresse invalide"),
    matricule: z
      .string({ message: "Matricule est invalide" })
      .min(1, "Matricule est invalide"),

    centre_id: z
      .string({ message: "Centre invalide" })
      .min(1, "Centre invalide"),
    role: z
      .string({ message: "Fonction invalide" })
      .min(1, "Fonction invalide"),
    coordinator_id: z.string({ message: "Coordinateur invalide" }).optional(),
  })
  .strict();

export const UpdateUserSchema = CreateUserSchema.partial()
  .strict();

export const LoginSchema = CreateUserSchema.pick({
  phone: true,
})
.merge(z.object({
  password: z
  .string({ message: "Mot de passe invalide" })
  .length(6, "Le mot de passe doit avoir exactement six (6) chiffres") 
  .regex(/^\d+$/, "Le mot de passe doit contenir uniquement des chiffres"),
}))
.strict();

export const ForgotPasswordSchema = CreateUserSchema.pick({
  phone: true,
}).strict();

export const SetPasswordSchema = CreateUserSchema.pick({
  phone: true,
})
  .merge(z.object({ 
    otp: z.string({ message: "Token invalide" }),
    password: z
      .string({ message: "Mot de passe invalide" })
      .length(6, "Le mot de passe doit avoir exactement six (6) chiffres") 
      .regex(/^\d+$/, "Le mot de passe doit contenir uniquement des chiffres"),
  }))
  .strict();

export const TokenSchema = z.object({
  _id: z.string(),
  role: z.string(),
  phone: z.string(),
});
