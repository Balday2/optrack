import React from 'react'
import { UseFormReturn, FieldPath, FieldValues } from "react-hook-form"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input, InputProps } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type BaseInputProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>
  name: FieldPath<TFieldValues>
  label: string
  description?: string
}

type StandardInputProps<TFieldValues extends FieldValues> = BaseInputProps<TFieldValues> & {
  type: 'standard'
  inputProps?: Omit<InputProps, 'name'>
}

type SelectInputProps<TFieldValues extends FieldValues> = BaseInputProps<TFieldValues> & {
  type: 'select'
  options: { value: string; label: string }[]
  multiple?: boolean
  defaultLabel?: string
}

type FormInputProps<TFieldValues extends FieldValues> = StandardInputProps<TFieldValues> | SelectInputProps<TFieldValues>

export function FormInput<TFieldValues extends FieldValues>(props: FormInputProps<TFieldValues>) {
  const { form, name, label, description } = props

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {props.type === 'standard' ? (
              <Input {...field} {...props.inputProps} />
            ) : (
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
                value={field.value}
                {...(props.multiple ? { multiple: true } : {})}
              >
                <SelectTrigger>
                  <SelectValue placeholder={props.defaultLabel || label} />
                </SelectTrigger>
                <SelectContent>
                  {props.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}