"use client";

import XHeader from "@/components/x-header";
import XDashboardCard from "@/components/x-dashboard-card";
import { RoleGuard } from "@/components/role-guard";
import { RoleEnum } from "@/lib/enums/role_enum";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SIDEBAR_PATHS } from "@/routes";
import { format } from "date-fns";

export default function DashboardLayout({children}: {children: React.ReactNode}) {


  const path = usePathname()
  return (
    <RoleGuard
      allowedRoles={[RoleEnum.ADMIN]}
      className="flex min-h-screen w-full flex-col bg-muted/50">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:px-20">
          <XHeader />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="grid auto-rows-max items-start ">
              <XDashboardCard />
              <div className="pt-5">
                <Separator className="bg-primary" />
                <div className="flex gap-3 pb-2 font-light">
                  <Link 
                    href={`${SIDEBAR_PATHS.dailyOperation}`}
                    className={`px-2 text-lg ${path.includes('daily-operation') && 'border border-primary bg-gray-200 '}`}>
                    {format(new Date().toISOString(), 'dd/MM/yyyy')}
                  </Link>
                  <Link 
                    href={`${SIDEBAR_PATHS.operation}`}
                    className={`px-2 text-lg ${path.includes('operations') && 'border border-primary bg-gray-200 '}`}>
                    operations
                  </Link>
                  <Link 
                    href={`${SIDEBAR_PATHS.dashboard}`}
                    className={`px-2 text-lg ${path.includes('dashboard') && (!path.includes('centres') && !path.includes('daily-operation') && !path.includes('operations')) && 'border border-primary bg-gray-200 '}`}>
                    coordinateurs
                  </Link>
                  <Link 
                    href={`${SIDEBAR_PATHS.centre}`}
                    className={`px-2 text-lg ${path.includes('centres') && 'border border-primary bg-gray-200 '}`}>
                    centres
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
