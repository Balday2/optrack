"use client";

import * as React from "react";
import { format, isToday } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fr } from "date-fns/locale";

export interface DateRangePickerProps {
  className?: React.HTMLAttributes<HTMLDivElement>;
  onChange: (date: { from: Date; to: Date | null } | undefined) => void;
  defaultValue?: { label: string; value: string | number | Date } | undefined;
}

export const DateRangePicker = React.forwardRef<
  { reset: () => void },
  DateRangePickerProps
>(({ className, onChange, defaultValue }, ref) => {
  const defaultDate : DateRange | undefined = defaultValue 
    ? { from: defaultValue?.value as Date || new Date() }
    : undefined;
  const [date, setDate] = React.useState<DateRange | undefined>(defaultDate || undefined);

  const handleSelect = (newDate: DateRange | undefined) => {
    setDate(newDate);
    if (newDate?.from) {
      onChange({ 
        from: new Date(newDate.from.setHours(0, 0, 0, 0)), 
        to: newDate.to ? new Date(newDate.to.setHours(23, 59, 59, 999)) : null 
      });
    }
  };

  // Expose reset method via ref
  React.useImperativeHandle(ref, () => ({
    reset: () => {
      setDate(undefined);
      onChange(undefined);
    },
  }));

  // Function to format date display
  const formatDateDisplay = (date: Date) => {
    if (isToday(date)) {
      return "Aujourd'hui";
    }
    return format(date, "dd MMM yyyy", { locale: fr });
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            size="sm"
            variant={"outline"}
            className={cn(
              "h-7 gap-1 text-sm w-[250px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {formatDateDisplay(date.from)} - {formatDateDisplay(date.to)}
                </>
              ) : (
                formatDateDisplay(date.from)
              )
            ) : (
              <span className="text-muted-foreground">
                Sélectionner une date
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            locale={fr}
            defaultMonth={date?.from}
            selected={date}
            disabled={(date) =>
              date > new Date() || date < new Date("2024-01-01")
            }
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
});

DateRangePicker.displayName = "DateRangePicker";
