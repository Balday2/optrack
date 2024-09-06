"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "@radix-ui/react-progress";
import { Button } from "./ui/button";
import { useGetAllUsers } from "@/lib/hooks/use-user";

export default function XDashboardCard() {
  const { users } = useGetAllUsers()  

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <CardValue 
        label="Centres" 
        value={100} 
      />
      <CardValue
        label="Coordinateurs"
        value={users && users.pagination.totalCount}
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
