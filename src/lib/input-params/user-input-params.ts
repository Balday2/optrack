import { FieldErrors } from "react-hook-form";
import { Lock, Phone, PhoneCall, User } from "lucide-react";
import { CreateUserDTO, LoginDTO } from "../dtos/user_dto";
import { FormFieldType } from "@/types/form-field-type";

export const AuthInputParams: FormFieldType[] = [
  {
    label: 'Entrer votre numéro de téléphone',
    placeholder: '000112233',
    name: 'phone',
    type: 'phone',
    leftIcon: PhoneCall,
  },
  {
    label: 'Entrer votre mot de passe',
    placeholder: '123456',
    name: 'password',
    type: 'password',
    leftIcon: Lock,
  },
]

export const CreateUserInputParams: FormFieldType[] = [
  {
    label: 'Entrer votre nom',
    placeholder: 'Doe',
    name: 'nom',
    type: 'text',
    leftIcon: Lock,
  },
  {
    label: 'Entrer votre prénom',
    placeholder: 'John',
    name: 'prenom',
    type: 'text',
    leftIcon: Lock,
  },
  {
    label: 'Sélectionnez le genre',
    placeholder: 'Choisissez un genre',
    name: 'sexe',
    type: 'select',
    leftIcon: User,
    options: [
      { value: 'masculin', label: 'Masculin' },
      { value: 'feminin', label: 'Feminin' }
    ],
  },
  {
    label: `Sélectionnez l'etat civil`,
    placeholder: 'Célibataire',
    name: 'etatCivil',
    type: 'select',
    leftIcon: User,
    options: [
      { value: 'marie', label: 'Marié' },
      { value: 'celiataire', label: 'Célibataire' },
      { value: 'divorce', label: 'Divorcé' },
    ],
  },
  {
    label: 'Entrer votre numéro de téléphone',
    placeholder: '000112233',
    name: 'phone',
    type: 'phone',
    leftIcon: PhoneCall,
  },
  {
    label: 'Entrer votre mot de passe',
    placeholder: '123456',
    name: 'password',
    type: 'password',
    leftIcon: Lock,
  },
]