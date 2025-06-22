import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserModel } from "@/lib/models/user.model";
import { LoginSchema } from "@/lib/validations/user.validation";
import { connectDB } from "./connect";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Téléphone", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        try {
          await connectDB();

          const loginData = {
            phone: credentials?.phone,
            password: credentials?.password,
          };

          const validatedFields = LoginSchema.safeParse(loginData);

          if (!validatedFields.success) {
            return null;
          }

          const { phone, password } = validatedFields.data;

          const user = await UserModel.findOne({ phone });

          if (!user) {
            return null;
          }

          const isPasswordValid = await user.comparePassword(password);

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user._id.toString(),
            phone: user.phone,
            name: `${user.nom} ${user.prenom}`,
            role: user.role,
            centre_id: user.centre_id?.toString() || "",
          };
        } catch (error) {
          console.error({ error });
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.phone = user.phone;
        token.centre_id = user.centre_id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
        session.user.phone = token.phone as string;
        session.user.centre_id = token.centre_id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};
