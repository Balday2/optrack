"use client";

import { useState } from "react";
import { DialogAlert } from "./dialog-alert";
import { signOut } from "next-auth/react";
import { ROUTE_PATH } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RoleEnum } from "@/lib/Enums/role.enum";
import { Button } from "./ui/button";

const XHeader = ({ role }: { role: string }) => {
  const [dialog, setDialog] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3e7e8] px-10 py-3 bg-white">
      <div className="flex items-center space-x-4 md:grow-0">
        <Image
          src="/images/logo.png"
          alt="App Logo"
          width={70}
          height={20}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-primary">OPTRACK</span>
      </div>
      <div className="flex flex-1 justify-end gap-8">
      <div className="flex items-center gap-9">
        {
          role === RoleEnum.ADMIN && (
            <>
              <Link 
                className={`text-sm font-medium leading-normal transition-colors duration-200 border-b-1 ${
                  isActiveLink("/admin") 
                    ? "text-[#994d51] border-[#994d51]" 
                    : "text-[#1b0e0e] border-transparent hover:text-[#994d51] hover:border-[#994d51]"
                }`} 
                href="/admin"
              >
                Dashboard
              </Link>
              <Link 
                className={`text-sm font-medium leading-normal transition-colors duration-200 border-b-1 ${
                  isActiveLink("/admin/centre") 
                    ? "text-[#994d51] border-[#994d51]" 
                    : "text-[#1b0e0e] border-transparent hover:text-[#994d51] hover:border-[#994d51]"
                }`} 
                href="/admin/centre"
              >
                centres
              </Link>
              <Link 
                className={`text-sm font-medium leading-normal transition-colors duration-200 border-b-1 ${
                  isActiveLink("/admin/coordinator") 
                    ? "text-[#994d51] border-[#994d51]" 
                    : "text-[#1b0e0e] border-transparent hover:text-[#994d51] hover:border-[#994d51]"
                }`} 
                href="/admin/coordinator"
              >
                coordinateurs
              </Link>
              <Link 
                className={`text-sm font-medium leading-normal transition-colors duration-200 border-b-1 ${
                  isActiveLink("/admin/operator") 
                    ? "text-[#994d51] border-[#994d51]" 
                    : "text-[#1b0e0e] border-transparent hover:text-[#994d51] hover:border-[#994d51]"
                }`} 
                href="/admin/operator"
              >
                opérateurs
              </Link>
            </>
          )
        }
      </div>
      <Button 
        variant="default"
        onClick={() => setDialog(true)}
        className="flex h-7 bg-black cursor-pointer items-center justify-center transition-colors"
      >
        Déconnexion
      </Button>

      <DialogAlert
          isOpen={dialog}
          onClose={() => setDialog(false)}
          title={`Etes-vous sûr de vouloir vous déconnecter ?`}
          description={`Cette action mettra fin à votre session actuelle et vous devrez vous reconnecter pour accéder à votre compte.`}
          action={() => signOut({ callbackUrl: ROUTE_PATH.LOGIN })}
          actionLabel={`Déconnexion`}
        />
    </div>
  </header>
  );
};

export default XHeader;
