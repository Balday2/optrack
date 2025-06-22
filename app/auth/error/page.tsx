"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Erreur d&apos;authentification
          </h1>
          <p className="mt-2 text-gray-600">
            {error === "Configuration"
              ? "Une erreur de configuration s'est produite. Veuillez contacter l'administrateur."
              : "Une erreur s'est produite lors de l'authentification."}
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <Button>Retour à la connexion</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
