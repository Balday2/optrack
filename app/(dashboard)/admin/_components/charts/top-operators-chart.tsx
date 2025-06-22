"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { useTopOperatorsByOperations } from "@/lib/hooks/operation.hook"

const chartConfig = {
  count: {
    label: "Opérations",
    color: "#f3e7e8",
  },
  label: {
    color: "hsl(var(--primary-foreground))",
  },
} satisfies ChartConfig

export function TopOperatorsChart() {
  const [filter, setFilter] = useState("tous")
  const { data, isLoading } = useTopOperatorsByOperations(filter)
  const currentYear = new Date().getFullYear()

  if (isLoading) {
    return (
      <Skeleton className="min-w-72 flex-1 rounded-lg border border-[#e7d0d1] p-6 min-h-[350px]" />
    )
  }

  return (
    <>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Top 10 des opérateurs</CardTitle>
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
        <p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight truncate">
          {data?.totalOperations}
        </p>
        <CardDescription>Total des opérations</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={data?.topOperators}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis dataKey="count" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" hideIndicator />}
            />
            <Bar
              dataKey="count"
              layout="vertical"
              fill="var(--color-count)"
              radius={4}
            >
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-[var(--color-label)]"
                fontSize={12}
              />
              <LabelList
                dataKey="count"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </>
  )
}
