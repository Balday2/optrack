"use client";

import XHeader from "@/components/x-header";
import XSidebar from "@/components/x-sidebar";
import XDashboardCard from "@/components/x-dashboard-card";
import { RoleGuard } from "@/components/role-guard";
import { RoleEnum } from "@/lib/enums/role_enum";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <RoleGuard
      allowedRoles={[RoleEnum.ADMIN]}
      className="flex min-h-screen w-full flex-col bg-muted/40"
    >
        <XSidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <XHeader />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="grid auto-rows-max items-start gap-4">
              <XDashboardCard />
              {children}
            </div>
          </main>
        </div>
    </RoleGuard>
  );
}
