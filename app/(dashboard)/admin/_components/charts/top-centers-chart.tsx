"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useTopCentersByOperations } from "@/lib/hooks/operation.hook"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const chartConfig = {
  count: {
    label: "Opérations",
    color: "#f3e7e8",
  },
} satisfies ChartConfig

export function TopCentersChart() {
    const [filter, setFilter] = useState("tous")
    const {data, isLoading} = useTopCentersByOperations(filter)
    const currentYear = new Date().getFullYear();

    if (isLoading) {
        return <Skeleton className="min-w-72 flex-1 rounded-lg border border-[#e7d0d1] p-6 min-h-[350px]" />
    }
  return (
    <>
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle>Top 10 des centres</CardTitle>
            <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Filtrer" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="tous">Tous</SelectItem>
                    <SelectItem value="semaine">Semaine</SelectItem>
                    <SelectItem value="mois">Mois</SelectItem>
                    <SelectItem value={String(currentYear)}>{currentYear}</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <CardDescription>Les centres avec plus d&apos;operations</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={data?.topCenters}>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              
            />
             <YAxis tickLine={false}
              axisLine={false}
              tickMargin={10} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideIndicator />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </>
  )
} 