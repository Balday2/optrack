'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"

import { LoginSchema } from "@/lib/schemas/user_schema"
import { LoginDTO } from "@/lib/dtos/user_dto"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { AuthInputParams } from "@/lib/input-params/user-input-params"
import InputProvider from "./input-provider"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter, useSearchParams } from "next/navigation"
import { BASIC_PATH } from "@/routes"
import { Form } from "./ui/form"
import { XInputProvider } from "./x-input"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function AuthForm({ className, ...props }: UserAuthFormProps) {

  const form = useForm<LoginDTO>({
    resolver: zodResolver(LoginSchema)
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter();
  const searchParams = useSearchParams()

  const onSubmit = async ({ phone, password }: LoginDTO) => {
    setIsLoading(true)
    const callbackUrl = searchParams!.get('callbackUrl') || BASIC_PATH
    const signInResult = await signIn(
      "credentials", { 
        phone, 
        password, 
        redirect: false, 
        callbackUrl
      }, 
    );

    setIsLoading(false)

    
    if (!signInResult?.ok) {
      toast.error("Something went wrong.", {
        description: signInResult?.error,
      })
      return;
    }


    toast.success("Successfully logged in.")
    router.push(callbackUrl)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-3">
          <XInputProvider form={form} formFields={AuthInputParams} />
          <Button disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Se connecter
          </Button>
        </div>
      </form>
    </Form>
  )
}
