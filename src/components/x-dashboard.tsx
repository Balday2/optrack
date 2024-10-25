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
import { ChartConfig } from "./ui/chart";
import XPieChart from "./x-piechart";

export default function XDashboard() {

  const { users: coordinators } = useGetCoordinators({ filters: {}, page:  1, limit: 0 });
  const { users: operators } = useGetOperators({ filters: {}, page:  1, limit: 0 });
  const { centres } = useGetAllCentres({ filters: {}, page:  1, limit: 0 });
  const { operations } = useGetOperations({ filters: {}, page:  1, limit: 0 });


  const pieChartData = [
    { browser: "Centres", visitors: centres?.pagination?.totalCount ?? 0, fill: "var(--color-chrome)" },
    { browser: "Operations", visitors: operations?.pagination?.totalCount ?? 0, fill: "var(--color-safari)" },
    { browser: "Operateurs", visitors: operators?.pagination?.totalCount ?? 0, fill: "var(--color-firefox)" },
    { browser: "Coordinateurs", visitors: coordinators?.pagination?.totalCount ?? 0, fill: "var(--color-other)" },
  ];

  const chartConfig: ChartConfig = {
    visitors: {
      label: "Activités"
    },
    chrome: {
      label: "Centres",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Operations",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Operateurs",
      color: "hsl(var(--chart-3))",
    },
    other: {
      label: "Coordinateurs",
      color: "hsl(var(--chart-5))",
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      <div className="md:col-span-2">
        <div className="grid gap-4 pt-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
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
      </div>
      <div className="md:col-span-1">
        <XPieChart
          data={pieChartData}
          config={chartConfig}
          dataKey="visitors"
          nameKey="browser"
        />
      </div>
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
