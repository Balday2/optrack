"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, Input, Select } from "@/components/ui/x-form";
import { toast } from "sonner";
import { CreateUserSchema } from "@/lib/validations/user.validation";
import { Lock, PhoneCall, User, MapPin, Hash } from "lucide-react";
import { CreateUserDTO } from "@/lib/DTO/user.dto";
import { getAuthErrorMessage } from "@/lib/error.handler";
import { ROUTE_PATH } from "@/lib/constants";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: CreateUserDTO) => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error);
      }

      toast.success("Inscription réussie !");

      // Connexion automatique après l'inscription
      const loginResult = await signIn("credentials", {
        phone: data.phone,
        password: data.password,
        redirect: false,
      });

      if (loginResult?.error) {
        throw new Error(loginResult.error);
      }

      toast.success("Connexion réussie !");
      router.refresh();
      router.push(ROUTE_PATH.ADMIN.DASHBOARD);
    } catch (error) {
      toast.error(getAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit} schema={CreateUserSchema}>
        {({ register, formState }) => (
          <>
            <Input
              type="text"
              label="Nom"
              placeholder="Votre nom"
              error={formState.errors["nom"]}
              registration={register("nom")}
              leftIcon={User}
            />
            <Input
              type="text"
              label="Prénom"
              placeholder="Votre prénom"
              error={formState.errors["prenom"]}
              registration={register("prenom")}
              leftIcon={User}
            />
            <Input
              type="text"
              label="Matricule"
              placeholder="Votre matricule"
              error={formState.errors["matricule"]}
              registration={register("matricule")}
              leftIcon={Hash}
            />
            <Select
              label="Sélectionnez une option"
              error={formState.errors["sexe"]}
              registration={register("sexe")}
              options={[
                { value: "custom1", label: "Option personnalisée 1" },
                { value: "custom2", label: "Option personnalisée 2" },
              ]}
            />

            <Input
              type="text"
              label="Adresse"
              placeholder="Votre adresse"
              error={formState.errors["adresse"]}
              registration={register("adresse")}
              leftIcon={MapPin}
            />
            <Input
              type="phone"
              label="Numéro de téléphone"
              placeholder="621001122"
              error={formState.errors["phone"]}
              registration={register("phone")}
              leftIcon={PhoneCall}
            />
            <Input
              type="password"
              label="Mot de passe"
              placeholder="123456"
              error={formState.errors["password"]}
              registration={register("password")}
              leftIcon={Lock}
            />
            <div>
              <Button isLoading={isLoading} type="submit" className="w-full">
                S&apos;inscrire
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
