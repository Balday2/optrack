"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { useUserForm } from "@/lib/hooks/user.hook";
import { CreateUserDTO } from "@/lib/DTO/user.dto";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useFonctionList } from "@/lib/hooks/fonction.hook";
import { IFonction } from "@/lib/models/fonction.model";
import { useCentreList } from "@/lib/hooks/centre.hook";

interface CreateUserProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateCoordinator({ open, onOpenChange }: CreateUserProps) {
  const { form, onSubmit, isLoading } = useUserForm();
  const [openCentre, setOpenCentre] = useState(false);
  const [openRole, setOpenRole] = useState(false);

  const pathname = usePathname();
  const pathValue = pathname.split('/').pop();
  const typeFonction = pathValue === 'coordinator' ? 'coordinator' : null;

  useEffect(() => {
    form.reset()
    if (typeFonction) {
      form.setValue("role", typeFonction);
    }
  }, [typeFonction, form]);

  const handleSubmit = async (data: CreateUserDTO) => {
    await onSubmit(data);
    onOpenChange(false);
  };

  const centreList = useCentreList();
  const fonctionList = useFonctionList();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Créer un nouveau {typeFonction === 'coordinator' ? 'coordinateur' : 'opérateur'}</DialogTitle>
          <DialogDescription>
            Remplissez les informations pour créer un nouveau {typeFonction === 'coordinator' ? 'coordinateur' : 'opérateur'}.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4 py-5">
              <FormField
                control={form.control}
                name="prenom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le prénom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le téléphone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sexe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sexe</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value || ""}
                        onValueChange={field.onChange}
                        defaultValue=""
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sélectionnez le sexe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Masculin">Masculin</SelectItem>
                          <SelectItem value="Feminin">Féminin</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="adresse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez l'adresse" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Fonction</FormLabel>
                    {typeFonction ? (
                      <FormControl>
                        <Input 
                          {...field}
                          value={typeFonction} 
                          disabled 
                          className="bg-muted"
                        />
                      </FormControl>
                    ) : (
                      <Popover open={openRole} onOpenChange={setOpenRole}>
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
                              {field.value || "Sélectionner une fonction"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                          <Command>
                            <CommandInput placeholder="Rechercher une fonction..." />
                            <CommandList>
                              <CommandEmpty>Aucune fonction trouvée.</CommandEmpty>
                              <CommandGroup>
                                {fonctionList?.data?.map((role: IFonction) => (
                                  <CommandItem
                                    value={role.nom}
                                    key={role.nom}
                                    onSelect={() => {
                                      form.setValue("role", role.nom);
                                      setOpenRole(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        field.value === role.nom ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                    {role.nom}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="matricule"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Matricule</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le matricule" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="centre_id"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Centre</FormLabel>
                    <Popover open={openCentre} onOpenChange={setOpenCentre}>
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
                            {centreList?.data?.find(c => c._id === field.value)?.name || "Sélectionner un centre"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                        <Command>
                          <CommandInput placeholder="Rechercher un centre..." />
                          <CommandList>
                            <CommandEmpty>Aucun centre trouvé.</CommandEmpty>
                            <CommandGroup>
                              {centreList?.data?.map((centre) => (
                                <CommandItem
                                  value={centre.name}
                                  key={centre._id}
                                  onSelect={() => {
                                    form.setValue("centre_id", centre._id);
                                    setOpenCentre(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      centre._id === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
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
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Enregistrer
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
