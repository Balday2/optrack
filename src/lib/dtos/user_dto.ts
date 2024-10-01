import { 
  CreateUserSchema,
  SetPasswordSchema, 
  ForgotPasswordSchema, 
  UpdateUserSchema, 
  LoginSchema 
} from '../schemas/user_schema';
import { z } from 'zod';


export type CreateUserDTO = z.infer<typeof CreateUserSchema>;

export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;

export type LoginDTO = z.infer<typeof LoginSchema>;


export type SetPasswordDTO = z.infer<typeof SetPasswordSchema>;

export type ForgotPasswordDTO = z.infer<typeof ForgotPasswordSchema>;




export interface UserDTO extends CreateUserDTO {
  id: string
  status: string
  role: string
}




export interface TokenDTO {
  id: string
  role: any
  phone: string
}
