"use client"

import { format } from "date-fns"
import { fr } from 'date-fns/locale'
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FieldValues } from "react-hook-form"
import { BaseInputProps } from "@/components/form-input"


export function XOperationDatePicker<TFieldValues extends FieldValues>(props: BaseInputProps<TFieldValues>) {
  const { form, name, label, description, required = true } = props

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant={"outline"}>
                  {field.value ? (
                    format(field.value, "PPP", { locale: fr })
                  ) : (
                    <span>Selectionner une date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                locale={fr}
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("2020-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
