"use client";

import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useGetAllUsers } from "@/lib/hooks/use-user";
import { AppConstants } from "@/lib/constants";
import { useGetAllCentres } from "@/lib/hooks/use-centre";

export default function XDashboardCard() {

  const { users } = useGetAllUsers({ filters: {}, pagination: { pageIndex: 0, pageSize: 1} });
  const { centres } = useGetAllCentres({ filters: {}, pagination: { pageIndex: 0, pageSize: 1} });

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <CardValue 
        label="Centres" 
        value={centres?.pagination?.totalCount ?? 0} 
      />
      <CardValue
        label="Coordinateurs"
        value={users?.pagination?.totalCount ?? 0} 
      />
      <CardValue
        label="Operateurs"
        value={8}
      />
      <CardValue
        label="Equipes"
        value={7}
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
