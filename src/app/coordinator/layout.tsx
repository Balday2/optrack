"use client";

import XHeader from "@/components/x-header";
import { RoleGuard } from "@/components/role-guard";
import { RoleEnum } from "@/lib/enums/role_enum";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { COORDINATOR_PATHS } from "@/routes";
import { date } from "zod";
import { formatDate } from "@/lib/_helper";
import { format } from "date-fns";

export default function CoordinatorLayout({children}: {children: React.ReactNode}) {

  const path = usePathname()
  return (
    <RoleGuard
      allowedRoles={[RoleEnum.COORDINATOR]}
      className="flex min-h-screen w-full flex-col bg-muted/50">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:px-20">
          <XHeader />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="grid auto-rows-max items-start ">
            <div className="pt-5">
                <Separator className="bg-primary" />
                <div className="flex gap-3 pb-2 font-light">
                  <Link 
                    href={`${COORDINATOR_PATHS.newOperation}`}
                    className={`px-2 text-lg ${path.includes('new-operation') && 'border border-primary bg-gray-200 '}`}>
                    {format(new Date().toISOString(), 'dd/MM/yyyy')}
                  </Link>
                  <Link 
                    href={`${COORDINATOR_PATHS.coordinator}`}
                    className={`px-2 text-lg ${path.includes('coordinator') && (!path.includes('operators') && !path.includes('new-operation') && !path.includes('operations')) && 'border border-primary bg-gray-200 '}`}>
                    Operations
                  </Link>
                  <Link 
                    href={`${COORDINATOR_PATHS.operator}`}
                    className={`px-2 text-lg ${path.includes('operators') && 'border border-primary bg-gray-200 '}`}>
                    operateurs
                  </Link>
                </div>
              </div>
              {children}
            </div>
          </main>
        </div>
    </RoleGuard>
  );
}
