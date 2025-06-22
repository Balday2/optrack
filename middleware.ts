// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { RoleEnum } from "./lib/Enums/role.enum";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    // Protection des routes admin
    if (pathname.startsWith("/admin")) {
      if (!token || token.role !== RoleEnum.ADMIN) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    // Protection des routes coordinator
    if (pathname.startsWith("/coordinator")) {
      if (!token || token.role !== RoleEnum.COORDINATOR) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Permettre l'accès à la page de login
        if (pathname === "/") return true;

        // Pour toutes les autres routes protégées, vérifier le token
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/coordinator/:path*"],
};
