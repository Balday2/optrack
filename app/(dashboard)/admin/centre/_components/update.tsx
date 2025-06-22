"use client";

import { useState } from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { useUpdateCentre } from "@/lib/hooks/centre.hook";
import { UpdateCentreDTO } from "@/lib/DTO/centre.dto";
import { useEffect } from "react";
import { communeData } from "@/lib/data/commune";
import { quartierData } from "@/lib/data/quartier";
import { prefectureData } from "@/lib/data/prefecture";

interface UpdateCentreProps {
  centreId: string;
  initialData: UpdateCentreDTO;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UpdateCentre({ centreId, initialData, open, onOpenChange }: UpdateCentreProps) {
  const [openPrefecture, setOpenPrefecture] = useState(false);
  const [openCommune, setOpenCommune] = useState(false);
  const [openQuartier, setOpenQuartier] = useState(false);
  const { form, onSubmit, isLoading } = useUpdateCentre(centreId);

  useEffect(() => {
    if (open && initialData) {
      form.reset(initialData);
    }
  }, [open, initialData, form]);

  const watchedPrefecture = form.watch("prefecture_id");
  const watchedCommune = form.watch("commune_id");

  const filteredCommunes = communeData.filter(
    (commune) => commune.prefecture_id === watchedPrefecture
  );

  const filteredQuartiers = quartierData.filter(
    (quartier) => quartier.commune_id === watchedCommune
  );

  const handlePrefectureChange = (prefectureId: number) => {
    form.setValue("prefecture_id", prefectureId);
    form.setValue("commune_id", 0);
    form.setValue("quartier_id", 0);
  };

  const handleCommuneChange = (communeId: number) => {
    form.setValue("commune_id", communeId);
    form.setValue("quartier_id", 0);
  };

  const handleSubmit = async (data: UpdateCentreDTO) => {
    await onSubmit(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Modifier le centre</DialogTitle>
          <DialogDescription>
            Modifiez les informations du centre.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4 py-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du centre</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le nom du centre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="prefecture_id"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Préfecture</FormLabel>
                    <Popover open={openPrefecture} onOpenChange={setOpenPrefecture}>
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
                              ? prefectureData.find(
                                  (prefecture) =>
                                    prefecture.prefecture_id === field.value
                                )?.nom
                              : "Sélectionner une préfecture"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                        <Command>
                          <CommandInput placeholder="Rechercher une préfecture..." />
                          <CommandList>
                            <CommandEmpty>Aucune préfecture trouvée.</CommandEmpty>
                            <CommandGroup>
                              {prefectureData.map((prefecture) => (
                                <CommandItem
                                  value={prefecture.nom}
                                  key={prefecture.prefecture_id}
                                  onSelect={() => {
                                    handlePrefectureChange(prefecture.prefecture_id);
                                    setOpenPrefecture(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      prefecture.prefecture_id === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {prefecture.nom}
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

              <FormField
                control={form.control}
                name="commune_id"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Commune</FormLabel>
                    <Popover open={openCommune} onOpenChange={setOpenCommune}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            disabled={!watchedPrefecture}
                            className={cn(
                              "justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value && field.value > 0
                              ? filteredCommunes.find(
                                  (commune) => commune.commune_id === field.value
                                )?.nom
                              : watchedPrefecture
                              ? "Sélectionner une commune"
                              : "Sélectionnez d'abord une préfecture"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                        <Command>
                          <CommandInput placeholder="Rechercher une commune..." />
                          <CommandList>
                            <CommandEmpty>Aucune commune trouvée.</CommandEmpty>
                            <CommandGroup>
                              {filteredCommunes.map((commune) => (
                                <CommandItem
                                  value={commune.nom}
                                  key={commune.commune_id}
                                  onSelect={() => {
                                    handleCommuneChange(commune.commune_id);
                                    setOpenCommune(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      commune.commune_id === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {commune.nom}
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

              <FormField
                control={form.control}
                name="quartier_id"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Quartier</FormLabel>
                    <Popover open={openQuartier} onOpenChange={setOpenQuartier}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            disabled={!watchedCommune}
                            className={cn(
                              "justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value && field.value > 0
                              ? filteredQuartiers.find(
                                  (quartier) =>
                                    quartier.quartier_id === field.value
                                )?.nom
                              : watchedCommune
                              ? "Sélectionner un quartier"
                              : "Sélectionnez d'abord une commune"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                        <Command>
                          <CommandInput placeholder="Rechercher un quartier..." />
                          <CommandList>
                            <CommandEmpty>Aucun quartier trouvé.</CommandEmpty>
                            <CommandGroup>
                              {filteredQuartiers.map((quartier) => (
                                <CommandItem
                                  value={quartier.nom}
                                  key={quartier.quartier_id}
                                  onSelect={() => {
                                    form.setValue("quartier_id", quartier.quartier_id);
                                    setOpenQuartier(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      quartier.quartier_id === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {quartier.nom}
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
              Modifier
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
