"use client";

import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { AppConstants } from "@/lib/constants";
import { useGetAllCentres } from "@/lib/hooks/use-centre";
import { useGetCoordinators, useGetOperators } from "@/lib/hooks/use-user";
import { useGetOperations } from "@/lib/hooks/use-operation";

export default function XDashboardCard() {

  const { users: coordinators } = useGetCoordinators({ filters: {}, pagination: { pageIndex: 0, pageSize: 1} });
  const { users: operators } = useGetOperators({ filters: {}, pagination: { pageIndex: 0, pageSize: 1} });
  const { centres } = useGetAllCentres({ filters: {}, pagination: { pageIndex: 0, pageSize: 1} });
  const { operations } = useGetOperations({ filters: {}, pagination: { pageIndex: 0, pageSize: 1} });

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <CardValue 
        label="Centres" 
        value={centres?.pagination?.totalCount ?? 0} 
      />
      <CardValue
        label="Coordinateurs"
        value={coordinators?.pagination?.totalCount ?? 0} 
      />
      <CardValue
        label="Operateurs"
        value={operators?.pagination?.totalCount ?? 0}
      />
      <CardValue
        label="Operations"
        value={operations?.pagination?.totalCount ?? 0}
      />
    </div>
  );
}

export interface CardValueProps {
  label: string;
  value?: number;
}

const CardValue = ({ label, value }: CardValueProps) => {
  return (
    <Card x-chunk="dashboard-05-chunk-1">
    <CardHeader className="pb-2">
      <CardDescription>{label}</CardDescription>
      <CardTitle className="text-4xl">{value || 0}</CardTitle>
    </CardHeader>
    </Card>
  );
};
