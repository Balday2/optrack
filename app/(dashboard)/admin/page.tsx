"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { ROUTE_PATH } from "@/lib/constants";
import OperationListe from "../common/operation/liste";
import { RoleEnum } from "@/lib/Enums/role.enum";
import DashboardBox from "./_components/user/dashboard-box";
import { useCentreList } from "@/lib/hooks/centre.hook";
import { useActiveOperatorsCount } from "@/lib/hooks/user.hook";
import { useTotalOperationsCount } from "@/lib/hooks/operation.hook";
import { TopCentersChart } from "./_components/charts/top-centers-chart";
import { TopOperatorsChart } from "./_components/charts/top-operators-chart";

export default function AdminPage() {
  const { data: session, status } = useSession();

  const router = useRouter();
  const centreList = useCentreList();
  const countOperators = useActiveOperatorsCount();
  const totalOperations = useTotalOperationsCount();
  

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== RoleEnum.ADMIN) {
      router.push(ROUTE_PATH.LOGIN);
    }
  }, [session, status, router]);

  if (status === "loading") return <div>Chargement...</div>;

  return (
    <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="flex flex-wrap justify-between gap-3">
              <div className="flex min-w-72 flex-col gap-2 px-4">
                <p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">Tableau de bord</p>
                <p className="text-[#994d51] text-sm font-normal leading-normal">Vue d&apos;ensemble en temps réel des opérations</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 py-2 px-4">
              <DashboardBox title="Nombre de centres" value={centreList.data?.length || 0} />
              <DashboardBox title="Les coordinateurs" value={countOperators.data || 0} />
              <DashboardBox title="Les operateurs" value={countOperators.data || 0} />
              <DashboardBox title="totales des opérations" value={totalOperations.data || 0} />
            </div>
            <h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 py-2 pt-2">Visualisation des données</h2>
            <div className="flex flex-wrap gap-4 px-4 py-3">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#e7d0d1] p-6">
                <TopCentersChart />
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#e7d0d1] p-6">
                <TopOperatorsChart />
              </div>
            </div>

            <OperationListe />
          </div>
        </div>
  );
}
