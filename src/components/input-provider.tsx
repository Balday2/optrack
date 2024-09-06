import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface InputProviderProps {
  name: string;
  type?: string;
  label: string;
  placeholder: string;
  LeftIcon?: any;
  RightIcon?: any;
  validations?: any;
  disabled?: boolean;
  error?: string;
  defaultValue?: string;
  register: any;
  className?: string;
  readOnly?: boolean;
  onClick?: () => void;
  options?: { value: string; label: string }[]; // Ajout des options pour le select
}

export default function InputProvider({
  name, type, placeholder, LeftIcon, validations, label, readOnly,
  disabled, error, register, defaultValue, RightIcon,
  className, onClick, options
}: InputProviderProps) {
  const isSelect = type === 'select';

  return (
    <div className="py-2 flex-1 w-full">
      <Label className="block text-xs font-medium" htmlFor={name}>{label}</Label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LeftIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        
        {isSelect ? (
          <Select 
            {...register(name, validations)}
            aria-invalid={error ? "true" : "false"}
            defaultValue={defaultValue}
            disabled={disabled}
          >
            <SelectTrigger 
              className={cn(
                'w-full focus:outline-none sm:text-sm rounded-md',
                className,
                {
                  'focus-visible:ring-red-500': error,
                  'pl-10': LeftIcon
                }
              )}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <Input
            name={name}
            id={name}
            type={type}
            placeholder={placeholder}
            autoCapitalize='none'
            autoComplete={name}
            disabled={disabled}
            aria-invalid={error ? "true" : "false"}
            {...register(name, validations)}
            className={cn(
              'block w-full focus:outline-none sm:text-sm rounded-md',
              className,
              {
                'focus-visible:ring-red-500': error,
                'pl-10': LeftIcon
              }
            )}
            defaultValue={defaultValue}
            readOnly={readOnly}
            onClick={onClick}
          />
        )}

        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}

        {!error && RightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <RightIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
      </div>

      {error && <p className="mt-2 text-xs text-red-600" id="field-error">{error}</p>}
    </div>
  );
}