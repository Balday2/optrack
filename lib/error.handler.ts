import { ZodError } from "zod";

export const getAuthErrorMessage = (error: unknown): string => {
  if (error instanceof Error && error.message === "CredentialsSignin") {
    return "Numéro de téléphone ou mot de passe incorrectx";
  }

  return "Une erreur est survenue lors de la connexion";
};

// Types d'erreurs personnalisés
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code: string = "INTERNAL_SERVER_ERROR"
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 404, "NOT_FOUND");
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Non autorisé") {
    super(message, 401, "UNAUTHORIZED");
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Accès refusé") {
    super(message, 403, "FORBIDDEN");
    this.name = "ForbiddenError";
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = "Requête invalide") {
    super(message, 400, "BAD_REQUEST");
    this.name = "BadRequestError";
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = "Erreur interne du serveur") {
    super(message, 500, "INTERNAL_SERVER_ERROR");
    this.name = "InternalServerError";
  }
}

// Interface pour la réponse d'erreur
interface ErrorResponse {
  success: false;
  error: {
    message: string;
    code: string;
    statusCode: number;
    details?: Record<string, string[]>;
  };
}

// Fonction pour gérer les erreurs
export function handleError(error: unknown): ErrorResponse {
  console.error("Erreur:", error);

  // Si c'est une de nos erreurs personnalisées
  if (error instanceof AppError) {
    return {
      success: false,
      error: {
        message: error.message,
        code: error.code,
        statusCode: error.statusCode,
      },
    };
  }

  // Si c'est une erreur Zod
  if (error instanceof Error && error.name === "ZodError") {
    const zodError = error as ZodError;
    const details: Record<string, string[]> = {};

    if (zodError.errors) {
      zodError.errors.forEach((err) => {
        const path = err.path.join(".");
        if (!details[path]) {
          details[path] = [];
        }
        details[path].push(err.message);
      });
    }

    return {
      success: false,
      error: {
        message: "Erreur de validation",
        code: "VALIDATION_ERROR",
        statusCode: 400,
        details,
      },
    };
  }

  // Si c'est une erreur Mongoose
  if (error instanceof Error && error.name === "MongooseError") {
    return {
      success: false,
      error: {
        message: "Erreur de base de données",
        code: "DATABASE_ERROR",
        statusCode: 500,
      },
    };
  }

  // Si c'est une erreur de validation Mongoose
  if (error instanceof Error && error.name === "ValidationError") {
    return {
      success: false,
      error: {
        message: "Données invalides",
        code: "VALIDATION_ERROR",
        statusCode: 400,
      },
    };
  }

  // Pour toute autre erreur
  return {
    success: false,
    error: {
      message: "Une erreur inattendue est survenue",
      code: "INTERNAL_SERVER_ERROR",
      statusCode: 500,
    },
  };
}

// Fonction pour créer une réponse d'erreur
export function createErrorResponse(
  message: string,
  code: string = "INTERNAL_SERVER_ERROR",
  statusCode: number = 500,
  details?: Record<string, string[]>
): ErrorResponse {
  return {
    success: false,
    error: {
      message,
      code,
      statusCode,
      details,
    },
  };
}

// Fonction pour vérifier si une réponse est une erreur
export function isErrorResponse(response: unknown): response is ErrorResponse {
  if (!response || typeof response !== "object") return false;

  const obj = response as Record<string, unknown>;
  return (
    obj.success === false &&
    typeof obj.error === "object" &&
    obj.error !== null &&
    "message" in obj.error &&
    "code" in obj.error &&
    "statusCode" in obj.error
  );
}
