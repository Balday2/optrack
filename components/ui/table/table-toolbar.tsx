"use client";

import type { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Download, Search, X } from "lucide-react";
import { useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateRangePicker } from "@/components/ui/date-range";
import { FilterValue } from "@/types";
import { Input } from "@/components/ui/input";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterOptions: Record<string, Array<{ label: string; value: string | number | Date }> | string[] | number[] | Date[]>;
  onFiltersChange: (filters: Record<string, FilterValue>) => void;
  autoApply?: boolean;
  onApplyFilters?: () => void;
  pendingFilters?: Record<string, FilterValue>;
  onExport?: {
    loading: boolean;
    onClick: () => void;
  };
}

export function DataTableToolbar<TData>({
  filterOptions,
  onFiltersChange,
  autoApply = true,
  onApplyFilters,
  pendingFilters,
  onExport,
}: DataTableToolbarProps<TData>) {
  const [filters, setFilters] = useState<Record<string, FilterValue>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const dateRangeRef = useRef<{ reset: () => void } | null>(null);

  // Update filters and notify parent component
  const updateFilters = (key: string, value: FilterValue) => {
    const newFilters = { ...filters };

    if (value === undefined || value === null || value === "") {
      delete newFilters[key];
    } else {
      newFilters[key] = value;
    }

    setFilters(newFilters);
    if (autoApply) {
      onFiltersChange(newFilters);
    } else {
      // Pour le mode manuel, on inclut aussi la recherche dans les filtres en attente
      const pendingFiltersWithSearch = {
        ...newFilters,
        search: searchQuery || undefined
      };
      onFiltersChange(pendingFiltersWithSearch);
    }
  };

  // Handle search
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (autoApply) {
      updateFilters("search", value);
    } else {
      const pendingFiltersWithSearch = {
        ...filters,
        search: value || undefined
      };
      onFiltersChange(pendingFiltersWithSearch);
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    onFiltersChange({});
    if (dateRangeRef.current) {
      dateRangeRef.current.reset();
    }
    Object.keys(filterOptions).forEach(key => {
      updateFilters(key, undefined);
    });
    setFilters({});
    // apply filter with {}
    onApplyFilters?.();
  };

  return (
    <div className="flex flex-col space-y-4 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-[300px]">
          <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-8 h-7"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {Object.entries(filterOptions).map(([key, options]) => {
            // Handle date filter
            if (key === "date") {
              return (
                <div key={key} className="flex items-center gap-2">
                  <DateRangePicker
                    ref={dateRangeRef}
                    defaultValue={options[0] as { label: string; value: string | number | Date } | undefined}
                    onChange={(date) => updateFilters(key, date)}
                  />
                  {/* {filters[key] && (
                    <Button
                      variant="ghost"
                      onClick={() => updateFilters(key, undefined)}
                      className="h-7 px-2 lg:px-3"
                    >
                      <X className="h-4 w-2 text-muted-foreground" />
                    </Button>
                  )} */}
                </div>
              );
            }

            // Handle select filters
            return (
              <div key={key} className="flex items-center gap-2">
                <Select
                  value={String(filters[key] || "")}
                  onValueChange={(value) =>
                    updateFilters(key, value || undefined)
                  }
                >
                  <SelectTrigger size="xs" className="text-sm">
                    <SelectValue placeholder={`${key}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous</SelectItem>
                    {options.map((option) => {
                      const optionValue = typeof option === 'object' && 'value' in option ? option.value : option;
                      const optionLabel = typeof option === 'object' && 'label' in option ? option.label : String(option);
                      return (
                        <SelectItem key={String(optionValue)} value={String(optionValue)}>
                          {optionLabel}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                {/* {filters[key] && (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      updateFilters(key, undefined);
                    }}
                    className="h-7 px-2 lg:px-3"
                  >
                    <X className="h-4 w-2 text-muted-foreground" />
                  </Button>
                )} */}
              </div>
            );
          })}

          {Object.keys(filters).length > 0 && (
            <Button
              variant="outline"
              onClick={resetFilters}
              className="h-7 gap-1 text-sm"
            >
              <X className="h-3.5 w-3.5" />
              Effacer
            </Button>
          )}
          {!autoApply && (
            <Button
              variant="default"
              className="h-7 gap-1 text-sm"

              onClick={onApplyFilters}
              disabled={Object.keys(pendingFilters || {}).length === 0}
            >
              Filtrer
            </Button>
          )}
          { 
            onExport &&
            <Button
              size="sm"
              onClick={onExport?.onClick}
              variant="outline"
              className="h-7 gap-1 text-sm"
              disabled={onExport?.loading}>
              <Download className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Exporter</span>
            </Button>
          }
        </div>
      </div>
    </div>
  );
}
