"use client"
// components/RoleGuard.tsx
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"
import { RoleEnum } from "@/lib/enums/role_enum"

interface RoleGuardProps {
  children: ReactNode
  allowedRoles: RoleEnum[]
  redirect?: boolean
  redirectTo?: string
  className?: string
}

export function RoleGuard({ 
  children, 
  allowedRoles, 
  redirect = false, 
  redirectTo = '/login',
  className = ''
}: RoleGuardProps) {
  const { data: session, status } = useSession()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      const userRole = session.user.role as RoleEnum
      const isAllowed = allowedRoles.includes(userRole)
      setIsAuthorized(isAllowed)

      if (!isAllowed && redirect) {
        router.push(redirectTo)
      }
    }
  }, [status, session, allowedRoles, redirect, redirectTo, router])

  if (status === "loading") {
    return <div className={className}>Chargement...</div>
  }

  if (!isAuthorized) {
    return null
  }

  return <div className={className}>{children}</div>
}