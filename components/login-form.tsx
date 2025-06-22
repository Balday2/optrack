"use client";

import { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, Input } from "@/components/ui/x-form";
import { toast } from "sonner";
import { LoginSchema } from "@/lib/validations/user.validation";
import { Lock, PhoneCall } from "lucide-react";
import { LoginDTO } from "@/lib/DTO/user.dto";
import { ROUTE_PATH } from "@/lib/constants";
import { getAuthErrorMessage } from "@/lib/error.handler";
import { RoleEnum } from "@/lib/Enums/role.enum";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: LoginDTO) => {
    try {
      setIsLoading(true);

      const result = await signIn("credentials", {
        phone: data.phone,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      const session = await getSession();
      toast.success("Connexion réussie !");

      if (session?.user?.role === RoleEnum.ADMIN) {
        router.push(ROUTE_PATH.ADMIN.DASHBOARD);
      } else if (session?.user?.role === RoleEnum.COORDINATOR) {
        router.push(ROUTE_PATH.COORDINATOR.DASHBOARD);
      } else {
        router.push(ROUTE_PATH.LOGIN);
      }
    } catch (error) {
      toast.error(getAuthErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit} schema={LoginSchema}>
        {({ register, formState }) => (
          <>
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
                Se connecter
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
