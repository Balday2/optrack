"use client";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, UserCircleIcon } from "lucide-react";
import { DialogAlert } from "./dialog-alert";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { AUTH_ROUTES } from "@/routes";
import Image from "next/image";

const XHeader = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex w-full h-14 gap-4 border-b-8 bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4 md:grow-0">
          <Image
            src="/images/logo.png"
            alt="App Logo"
            width={70}
            height={20}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-primary">OP-TRACK</span>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDialog(true)}
          className="overflow-hidden rounded-full"
        >
          <LogOutIcon className="w-4 h-4" />
        </Button>

        <DialogAlert
          isOpen={dialog}
          onClose={() => setDialog(false)}
          title={`Etes-vous sûr de vouloir vous déconnecter ?`}
          description={`Cette action mettra fin à votre session actuelle et vous devrez vous reconnecter pour accéder à votre compte.`}
          action={() => signOut({ callbackUrl: AUTH_ROUTES[0] })}
          actionLabel={`Déconnexion`}
        />
      </div>
    </header>
  );
};

export default XHeader;
