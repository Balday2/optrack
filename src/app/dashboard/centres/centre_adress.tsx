import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronsUpDown, Check } from "lucide-react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";


interface XCentreAdressProps<T> {
  items: Array<T>; 
  selectedItem: T | null;
  onSelectItem: (item: T, event?: React.MouseEvent<HTMLButtonElement>) => void; 
  placeholder?: string;
  loading?: boolean; 
  labelKey: keyof T;
  valueKey: keyof T;
}


export default function XCentreAdress<T>({
  items,
  selectedItem,
  onSelectItem,
  placeholder = "Sélectionner un élément",
  loading = false,
  labelKey,
  valueKey,
}: XCentreAdressProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen && !loading} onOpenChange={setIsOpen}>
      <Button
        variant="ghost"
        role="combobox"
        type="button"
        aria-expanded={isOpen}
        className="flex items-center justify-between space-x-4 px-4 border w-full"
        disabled={loading}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
        {selectedItem 
          ? String(selectedItem[labelKey])
          : placeholder}
        </span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
      <CollapsibleTrigger asChild></CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <Command>
          <CommandInput placeholder={`Rechercher ${placeholder.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>Aucun élément trouvé.</CommandEmpty>
            <CommandGroup heading="Options">
              {items.map(item => (
                <CommandItem
                  key={String(item[valueKey])}
                  value={String(item[labelKey])}
                  onSelect={() => {
                    onSelectItem(item);
                    setIsOpen(false);
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${selectedItem === item ? "opacity-100" : "opacity-0"}`}
                  />
                  {String(item[labelKey])}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CollapsibleContent>
    </Collapsible>
  );
}
