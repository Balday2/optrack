
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      role?: string;
      phone?: string;
    } & DefaultSession["user"];
  } 
}

declare module "next-auth" {
  interface User {
    id?: string;
    role?: string;
    phone?: string;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    id?: string;
    role?: string;
    phone?: string;
  }
}
