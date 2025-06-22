import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SessionProvider } from "@/lib/providers/session.provider";
import ReactQueryProvider from "@/lib/providers/reactQuery.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSD | Optrack",
  description: "Système de gestion des opérations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <SessionProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </SessionProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
