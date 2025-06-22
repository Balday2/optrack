"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, ChevronsUpDown, Loader2, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useOperationForm } from "@/lib/hooks/operation.hook";
import { CreateOperationDTO } from "@/lib/DTO/operation.dto";
import { useOperatorsByCentreId } from "@/lib/hooks/user.hook";
import { useSession } from "next-auth/react";

interface CreateOperationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}

export default function CreateOperation({ open, onOpenChange }: CreateOperationProps) {

  const [openOperator, setOpenOperator] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const { form, onSubmit, isLoading } = useOperationForm();
  const { data: session } = useSession();

  const userList = useOperatorsByCentreId(session?.user?.centre_id || '');

  // Filtrer les coordinateurs et opérateurs
  const operators = userList.data?.filter(user => user.role !== 'coordinator' && user.role !== 'admin') || [];

  const handleSubmit = async (data: CreateOperationDTO) => {
    await onSubmit(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Créer une nouvelle opération</DialogTitle>
          <DialogDescription>
            Remplissez les informations pour créer une nouvelle opération.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 py-5">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Entrez le nombre" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <div className="relative flex gap-2">
                      <FormControl>
                        <Input
                          value={formatDate(field.value)}
                          placeholder="Sélectionnez une date"
                          className="bg-background pr-10"
                          onChange={(e) => {
                            const date = new Date(e.target.value)
                            if (isValidDate(date)) {
                              field.onChange(date)
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "ArrowDown") {
                              e.preventDefault()
                              setOpenDate(true)
                            }
                          }}
                        />
                      </FormControl>
                      <Popover open={openDate} onOpenChange={setOpenDate}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                          >
                            <CalendarIcon className="size-3.5" />
                            <span className="sr-only">Sélectionner une date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto overflow-hidden p-0"
                          align="end"
                          alignOffset={-8}
                          sideOffset={10}
                        >
                          <Calendar
                            mode="single"
                            selected={field.value}
                            captionLayout="dropdown"
                            disabled={(date) => date > new Date()}
                            onSelect={(date) => {
                              field.onChange(date)
                              setOpenDate(false)
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="operator_id"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Opérateur</FormLabel>
                    <Popover open={openOperator} onOpenChange={setOpenOperator}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? operators.find(op => op._id === field.value) 
                                ? `${operators.find(op => op._id === field.value)?.prenom} ${operators.find(op => op._id === field.value)?.nom}`
                                : "Opérateur non trouvé"
                              : "Sélectionner un opérateur"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                        <Command>
                          <CommandInput placeholder="Rechercher un opérateur..." />
                          <CommandList>
                            <CommandEmpty>Aucun opérateur trouvé.</CommandEmpty>
                            <CommandGroup>
                              {operators.map((operator) => (
                                <CommandItem
                                  value={`${operator.prenom} ${operator.nom}`}
                                  key={String(operator._id)}
                                  onSelect={() => {
                                    form.setValue("operator_id", String(operator._id));
                                    setOpenOperator(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      String(operator._id) === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {operator.prenom} {operator.nom}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Créer l&apos;opération
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 