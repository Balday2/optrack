/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Types
type PeriodType = "jour" | "semaine" | "mois" | "annee"

interface Centre {
  _id: string
  name: string
}

interface DateSelection {
  startDate: Date
  endDate: Date
  periodType: PeriodType
  centreId?: string
  fonction?: string
}

// Utility functions for date calculations
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

function getMonthStart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function getMonthEnd(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function getYearStart(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1)
}

function getYearEnd(date: Date): Date {
  return new Date(date.getFullYear(), 11, 31)
}

function formatDateRange(startDate: Date, endDate: Date, periodType: PeriodType): string {
  if (periodType === "jour") {
    return startDate.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
  }

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

function getYearOptions(): { value: string; label: string }[] {
  const currentYear = new Date().getFullYear()
  const options: any[] = []

  for (let year = currentYear - 5; year <= currentYear + 1; year++) {
    options.push({
      value: year.toString(),
      label: year.toString(),
    })
  }

  return options
}

interface WeekPickerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onExport: (selection: DateSelection) => void
  isLoading?: boolean
  centres?: Centre[]
  fonctions?: string[]
}

export default function WeekPicker({
  open,
  onOpenChange,
  onExport,
  isLoading = false,
  centres = [],
  fonctions = [],
}: WeekPickerProps) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [periodType, setPeriodType] = useState<PeriodType>("semaine")
  const [selectedCentre, setSelectedCentre] = useState<string>("all")
  const [selectedFonction, setSelectedFonction] = useState<string>("all")
  const [openCentreCombobox, setOpenCentreCombobox] = useState(false)
  const [openFonctionCombobox, setOpenFonctionCombobox] = useState(false)

  // Calculate date range based on period type
  const getDateRange = () => {
    switch (periodType) {
      case "jour":
        return { startDate: selectedDate, endDate: selectedDate }
      case "semaine":
        return { startDate: getWeekStart(selectedDate), endDate: getWeekEnd(selectedDate) }
      case "mois":
        return { startDate: getMonthStart(selectedDate), endDate: getMonthEnd(selectedDate) }
      case "annee":
        return { startDate: getYearStart(selectedDate), endDate: getYearEnd(selectedDate) }
      default:
        return { startDate: selectedDate, endDate: selectedDate }
    }
  }

  const { startDate, endDate } = getDateRange()

  const goToPrevious = () => {
    const newDate = new Date(selectedDate)
    switch (periodType) {
      case "jour":
        newDate.setDate(selectedDate.getDate() - 1)
        break
      case "semaine":
        newDate.setDate(selectedDate.getDate() - 7)
        break
      case "mois":
        newDate.setMonth(selectedDate.getMonth() - 1)
        break
      case "annee":
        newDate.setFullYear(selectedDate.getFullYear() - 1)
        break
    }
    setSelectedDate(newDate)
  }

  const goToNext = () => {
    const newDate = new Date(selectedDate)
    switch (periodType) {
      case "jour":
        newDate.setDate(selectedDate.getDate() + 1)
        break
      case "semaine":
        newDate.setDate(selectedDate.getDate() + 7)
        break
      case "mois":
        newDate.setMonth(selectedDate.getMonth() + 1)
        break
      case "annee":
        newDate.setFullYear(selectedDate.getFullYear() + 1)
        break
    }
    setSelectedDate(newDate)
  }

  const goToMonth = (monthValue: string) => {
    const [year, month] = monthValue.split("-").map(Number)
    const newDate = new Date(year, month, 1)
    setSelectedDate(newDate)
  }

  const goToYear = (yearValue: string) => {
    const year = Number(yearValue)
    const newDate = new Date(year, 0, 1)
    setSelectedDate(newDate)
  }

  const handleExport = () => {
    onExport({
      startDate,
      endDate,
      periodType,
      centreId: selectedCentre !== "all" ? selectedCentre : undefined,
      fonction: selectedFonction !== "all" ? selectedFonction : undefined,
    })
    onOpenChange(false)
  }

  // Reset to current date when period type changes
  useEffect(() => {
    setSelectedDate(new Date())
  }, [periodType])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Rapport {periodType === "jour" ? "journalier" : periodType === "semaine" ? "hebdomadaire" : periodType === "mois" ? "mensuel" : "annuel"}</DialogTitle>
          <DialogDescription>{formatDateRange(startDate, endDate, periodType)}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Period Type Selector */}
          <div>
            <Label>Type de période</Label>
            <Select value={periodType} onValueChange={(value) => setPeriodType(value as PeriodType)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jour">Jour</SelectItem>
                <SelectItem value="semaine">Semaine</SelectItem>
                <SelectItem value="mois">Mois</SelectItem>
                <SelectItem value="annee">Année</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Centre Selector */}
          {centres.length > 0 && (
            <div>
              <Label>Centre</Label>
              <Popover open={openCentreCombobox} onOpenChange={setOpenCentreCombobox}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openCentreCombobox}
                    className="w-full justify-between"
                  >
                    {selectedCentre === "all"
                      ? "Tous les centres"
                      : centres.find((centre) => centre._id === selectedCentre)?.name || "Sélectionner un centre"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Rechercher un centre..." />
                    <CommandList>
                      <CommandEmpty>Aucun centre trouvé.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          value="all"
                          onSelect={() => {
                            setSelectedCentre("all")
                            setOpenCentreCombobox(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedCentre === "all" ? "opacity-100" : "opacity-0"
                            )}
                          />
                          Tous les centres
                        </CommandItem>
                        {centres.map((centre) => (
                          <CommandItem
                            key={centre._id}
                            value={centre.name}
                            onSelect={() => {
                              setSelectedCentre(centre._id)
                              setOpenCentreCombobox(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedCentre === centre._id ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {centre.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* Fonction Selector */}
          {fonctions.length > 0 && (
            <div>
              <Label>Fonction</Label>
              <Popover open={openFonctionCombobox} onOpenChange={setOpenFonctionCombobox}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openFonctionCombobox}
                    className="w-full justify-between"
                  >
                    {selectedFonction === "all" ? "Toutes les fonctions" : selectedFonction}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Rechercher une fonction..." />
                    <CommandList>
                      <CommandEmpty>Aucune fonction trouvée.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          value="all"
                          onSelect={() => {
                            setSelectedFonction("all")
                            setOpenFonctionCombobox(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedFonction === "all" ? "opacity-100" : "opacity-0"
                            )}
                          />
                          Toutes les fonctions
                        </CommandItem>
                        {fonctions.map((fonction) => (
                          <CommandItem
                            key={fonction}
                            value={fonction}
                            onSelect={(currentValue) => {
                              setSelectedFonction(currentValue)
                              setOpenFonctionCombobox(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedFonction === fonction ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {fonction}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* Month/Year Quick Selector for Mois and Annee */}
          {periodType === "mois" && (
            <div>
              <Label>Sélection rapide</Label>
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
          )}

          {periodType === "annee" && (
            <div>
              <Label>Sélection rapide</Label>
              <Select value={selectedDate.getFullYear().toString()} onValueChange={goToYear}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner une année" />
                </SelectTrigger>
                <SelectContent>
                  {getYearOptions().map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Date Navigation */}
          <div className="flex items-center justify-between mt-4">
            <Button variant="outline" size="icon" onClick={goToPrevious} aria-label="Previous period">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex flex-1 justify-center">
              {periodType === "semaine" ? (
                <div className="flex gap-2">
                  {["Lun", "Mar", "Mer", "Jeu", "Ven"].map((day, index) => {
                    const currentDay = new Date(startDate)
                    currentDay.setDate(startDate.getDate() + index)
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
              ) : (
                <div className="text-center">
                  <div className="text-lg font-semibold">{formatDateRange(startDate, endDate, periodType)}</div>
                </div>
              )}
            </div>

            <Button variant="outline" size="icon" onClick={goToNext} aria-label="Next period">
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
