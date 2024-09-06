import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { 
  AUTH_ROUTES, 
  FIND_ROLE_PATH,
} from '@/routes'
import { RoleEnum } from "./lib/enums/role_enum"
import { roleGuard } from "./roleGuard"

export default withAuth(async function middleware(req) {

    const token = await getToken({ req })
    const isLoggedIn = !!token
    const isAuthRoute = AUTH_ROUTES.includes(req.nextUrl.pathname)

    if(isLoggedIn && isAuthRoute) {
      return NextResponse.redirect(
        new URL(FIND_ROLE_PATH(token?.role as RoleEnum), req.url)
      )
    }

    if(!isLoggedIn && !isAuthRoute) {
      let callbackUrl = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        callbackUrl += req.nextUrl.search;
      }
      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${encodedCallbackUrl}`, req.url)
      )
    }
    
    
    // Only apply roleGuard if the user is logged in
    if (isLoggedIn) {
      const roleGuardResult = roleGuard(token?.role as RoleEnum, req)
      if (roleGuardResult) {
        return roleGuardResult
      }
    }
    return null;
  },
  {
    callbacks: {
      async authorized() {
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
