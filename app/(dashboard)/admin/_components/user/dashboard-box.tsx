import { BarChart3 } from "lucide-react";

interface DashboardBoxProps {
  title: string;
  value: number;
}

export default function DashboardBox({ title, value }: DashboardBoxProps) {
  return (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f3e7e8]">
      <div className="flex items-center justify-between">
        <p className="text-[#1b0e0e] text-base font-medium leading-normal">{title}</p>
        <BarChart3 className="h-5 w-5 text-[#1b0e0e]" />
      </div>
      <p className="text-[#1b0e0e] tracking-light text-2xl font-bold leading-tight">{value}</p>
    </div>
  )
}
