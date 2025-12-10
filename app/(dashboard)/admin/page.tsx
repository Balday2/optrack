"use client";

import { ROUTE_PATH } from "@/lib/constants";
import { RoleEnum } from "@/lib/Enums/role.enum";
import { useCentreList } from "@/lib/hooks/centre.hook";
import { useTotalOperationsCount } from "@/lib/hooks/operation.hook";
import { useActiveOperatorsCount } from "@/lib/hooks/user.hook";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import OperationListe from "../common/operation/liste";
import { TopCentersChart } from "./_components/charts/top-centers-chart";
import { TopOperatorsChart } from "./_components/charts/top-operators-chart";
import DocumentPipeline from "./_components/document_pipeline";
import DashboardBox from "./_components/user/dashboard-box";

export default function AdminPage() {
  const { data: session, status } = useSession();

  const router = useRouter();
  const centreList = useCentreList();
  const countOperators = useActiveOperatorsCount();
  const totalOperations = useTotalOperationsCount();

  // Ordre des rôles dans le pipeline
  const rolesOrder = [
    "Agent d'expertise",
    "Superviseur d'expertise",
    "Controleur de bordereaux",
    "Hotesse d'accueil",
    "Agent verificateur",
    "Operateur de saisie",
    "Impression Carte grise"
  ];

  // Fonction pour déterminer si un rôle est complété
  const isRoleCompleted = (roleName: string): boolean => {
    if (!totalOperations.data) return false;

    const currentIndex = rolesOrder.indexOf(roleName);
    if (currentIndex === -1) return false;

    // Vérifier tous les rôles précédents
    for (let i = 0; i <= currentIndex; i++) {
      const roleCount = totalOperations.data[rolesOrder[i]] || 0;

      // Si un rôle précédent ou le rôle actuel a 0 opérations, retourner false
      if (roleCount === 0) {
        return false;
      }

      // Si ce n'est pas le premier rôle, vérifier qu'il a >= opérations que le précédent
      if (i > 0) {
        const previousRoleCount = totalOperations.data[rolesOrder[i - 1]] || 0;
        if (roleCount < previousRoleCount) {
          return false;
        }
      }
    }

    return true;
  };

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
              <DashboardBox title="Coordinateurs" value={countOperators.data || 0} />
              <DashboardBox title="Operateurs" value={countOperators.data || 0} />
              <DashboardBox title="Opérations" value={Object.values(totalOperations.data || {}).reduce((a, b) => a + b, 0)} />
            </div>
            <h1 className="text-[#1b0e0e] text-[22px] font-normal leading-tight tracking-[-0.015em] px-4 py-2 pt-2">L&apos;ordre de traitement de dossiers</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 p-6 rounded-lg bg-[#f3e7e8] border border-border/50">
              <DocumentPipeline value={totalOperations.data?.["Agent d'expertise"] || 0} name="Agent d'expertise" isCompleted={isRoleCompleted("Agent d'expertise")} />
              <DocumentPipeline value={totalOperations.data?.["Superviseur d'expertise"] || 0} name="Superviseur d'expertise" isCompleted={isRoleCompleted("Superviseur d'expertise")} />
              <DocumentPipeline value={totalOperations.data?.["Controleur de bordereaux"] || 0} name="Controleur de bordereaux" isCompleted={isRoleCompleted("Controleur de bordereaux")} />
              <DocumentPipeline value={totalOperations.data?.["Hotesse d'accueil"] || 0} name="Hotesse d'accueil" isCompleted={isRoleCompleted("Hotesse d'accueil")} />
              <DocumentPipeline value={totalOperations.data?.["Agent verificateur"] || 0} name="Agent verificateur" isCompleted={isRoleCompleted("Agent verificateur")} />
              <DocumentPipeline value={totalOperations.data?.["Operateur de saisie"] || 0} name="Operateur de saisie" isCompleted={isRoleCompleted("Operateur de saisie")} />
              <DocumentPipeline value={totalOperations.data?.["Impression Carte grise"] || 0} name="Impression Carte grise" isCompleted={isRoleCompleted("Impression Carte grise")} />
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
