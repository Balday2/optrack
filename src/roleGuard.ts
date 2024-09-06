import { NextResponse } from 'next/server';
import type { NextRequestWithAuth } from 'next-auth/middleware';
import { 
  NOT_FOUND,
  AUTH_ROUTES,
  ROLE_PATH_MAP
} from '@/routes'
import { RoleEnum } from './lib/enums/role_enum';



export const roleGuard = (role: RoleEnum | undefined, request: NextRequestWithAuth) => {
  const path = request.nextUrl.pathname

  if (AUTH_ROUTES.includes(path)) {
    return null;
  }

  if (!role) {
    console.error('Role not defined for request:', request.url)
    return NextResponse.redirect(new URL('/login', request.url))
  }

  for (const [prefix, allowedRoles] of Object.entries(ROLE_PATH_MAP)) {
    if (path.startsWith(prefix)) {
      if (!allowedRoles.includes(role)) {
        console.warn(`Unauthorized access attempt: ${role} tried to access ${path}`)
        return NextResponse.redirect(new URL(NOT_FOUND, request.url))
      }
      return null // Authorized access
    }
  }

  // If the path doesn't match any protected routes, allow access
  return null
}