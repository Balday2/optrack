import { toast } from "sonner";
import { z } from "zod";


export function handleError(error: unknown): unknown {
  if (error instanceof z.ZodError) {
    return Error(JSON.stringify(error.errors));
  }
  if (error instanceof Error) {
    return error;
  }
  return Error(`Une erreur inconnue s'est produite`);
}

export function handleClientError(error: unknown): any {
  if (error instanceof Error) {
    toast.error(error.message);
    return error.message;
  } else {
    console.error(error);
    toast.error(`Une erreur inconnue s'est produite`);
    return `Une erreur inconnue s'est produite`;
  }
}