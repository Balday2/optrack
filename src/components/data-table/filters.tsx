// Filters.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterState } from "./types";
import { X } from "lucide-react";

interface FiltersProps {
  onApplyFilters: (filters: FilterState) => void;
  filterOptions: {
    [key: string]: string[];
  };
  loading?: boolean;
}

export function Filters({ onApplyFilters, filterOptions, loading }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>(() => {
    const initialFilters: FilterState = {};
    Object.keys(filterOptions).forEach((key) => {
      initialFilters[key] = [];
    });
    return initialFilters;
  });

  const handleFilterChange = (key: string, value: string | undefined) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value ? [value] : [],
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  const handleClearFilters = () => {
    const clearedFilters: FilterState = {};
    Object.keys(filterOptions).forEach((key) => {
      clearedFilters[key] = [];
    });
    setFilters(clearedFilters);
    onApplyFilters(clearedFilters);
  };

  return (
      <div className="flex flex-col sm:flex-row gap-2">
        {Object.entries(filterOptions).map(([key, options]) => (
          <Select
            key={key}
            onValueChange={(value) => handleFilterChange(key, value)}
            value={filters[key][0] || ""}
          >
            <SelectTrigger className="h-7">
              <SelectValue placeholder={`${key}`} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
        
        <Button
          variant="outline"
          onClick={handleClearFilters}
          size="sm"
          className="h-7 gap-1 text-sm"
          disabled={loading}
        >
          <X className="h-3.5 w-3.5 text-red-600" />
          <span>Effacer</span>
        </Button>
        <Button
          onClick={handleApplyFilters}
          size="sm"
          className="h-7 text-sm"
          disabled={loading}
        >
          <span>Filtrer</span>
        </Button>
      </div>
  );
}
