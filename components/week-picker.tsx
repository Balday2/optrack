/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

// Utility functions for week calculations
function getWeekStart(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Adjust for Monday start
  return new Date(d.setDate(diff))
}

function getWeekEnd(date: Date): Date {
  const weekStart = getWeekStart(date)
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekStart.getDate() + 4) // Only 5 days (Mon-Fri)
  return weekEnd
}

function formatDateRange(startDate: Date, endDate: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: startDate.getFullYear() !== endDate.getFullYear() ? "numeric" : undefined,
  }

  const start = startDate.toLocaleDateString("fr-FR", options)
  const end = endDate.toLocaleDateString("fr-FR", options)

  return `${start} - ${end}`
}

function getMonthOptions(): { value: string; label: string }[] {
  const options: any[] = []
  const currentYear = new Date().getFullYear()

  for (let year = currentYear - 1; year <= currentYear + 1; year++) {
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month, 1)
      options.push({
        value: `${year}-${month}`,
        label: date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" }),
      })
    }
  }

  return options
}

interface WeekPickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onExport: (selection: { weekStart: Date; weekEnd: Date }) => void;
  isLoading?: boolean;
}

export default function WeekPicker({ open, onOpenChange, onExport, isLoading = false }: WeekPickerProps) {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const weekStart = getWeekStart(selectedDate)
  const weekEnd = getWeekEnd(selectedDate)

  const goToPreviousWeek = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(selectedDate.getDate() - 7)
    setSelectedDate(newDate)
  }

  const goToNextWeek = () => {
    const newDate = new Date(selectedDate)
    newDate.setDate(selectedDate.getDate() + 7)
    setSelectedDate(newDate)
  }

  const goToMonth = (monthValue: string) => {
    const [year, month] = monthValue.split("-").map(Number)
    const newDate = new Date(year, month, 1)
    // Aller à la première semaine du mois
    setSelectedDate(getWeekStart(newDate))
  }

  const handleExport = () => {
    onExport({ weekStart, weekEnd })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Rapport hebdomadaire</DialogTitle>
          <DialogDescription>{formatDateRange(weekStart, weekEnd)}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Month Selector */}
          <div className="mt-4">
            <Select value={`${selectedDate.getFullYear()}-${selectedDate.getMonth()}`} onValueChange={goToMonth}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionner un mois" />
              </SelectTrigger>
              <SelectContent>
                {getMonthOptions().map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Week Navigation with Days */}
          <div className="flex items-center justify-between mt-4">
            <Button variant="outline" size="icon" onClick={goToPreviousWeek} aria-label="Previous week">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex flex-1 justify-center gap-2">
              {["Lun", "Mar", "Mer", "Jeu", "Ven"].map((day, index) => {
                const currentDay = new Date(weekStart)
                currentDay.setDate(weekStart.getDate() + index)
                const isToday = currentDay.toDateString() === new Date().toDateString()

                return (
                  <div key={day} className="min-w-[50px] text-center">
                    <div className="mb-1 text-xs text-muted-foreground">{day}</div>
                    <div
                      className={`text-sm font-medium ${isToday ? "mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground" : ""}`}
                    >
                      {currentDay.getDate()}
                    </div>
                  </div>
                )
              })}
            </div>

            <Button variant="outline" size="icon" onClick={goToNextWeek} aria-label="Next week">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <DialogFooter className="mt-4">
          <Button className="w-full" onClick={handleExport} disabled={isLoading}>
            {isLoading ? "Exportation..." : "Exporter"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
