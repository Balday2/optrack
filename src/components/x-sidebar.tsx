"use client"

import Link from "next/link";
import {
  ChartColumn,
  Home,
  LayoutGrid,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePathname } from "next/navigation";
import { SIDEBAR_PATHS } from "@/routes";


const XSidebar = () => {
  const path = SIDEBAR_PATHS;

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href={`${path.dashboard}`}
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Home</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`${path.centre}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LayoutGrid className="h-5 w-5" />
                  <span className="sr-only">Centres</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Centres</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`${path.operation}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <ChartColumn className="h-5 w-5" />
                  <span className="sr-only">Operations</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Operations</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
  )
}

export default XSidebar