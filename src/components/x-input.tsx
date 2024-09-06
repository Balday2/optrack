import React from "react"
import { UseFormReturn } from "react-hook-form"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormFieldType } from "@/types/form-field-type"

type XInputProviderProps = {
  form: UseFormReturn<any>
  formFields: FormFieldType[]
}

export function XInputProvider({ form, formFields }: XInputProviderProps) {
  return (
    <>
        {formFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel className="text-gray-900">{field.label}</FormLabel>
                <FormControl>
                  <div className="relative">
                    {field.leftIcon && (
                      <field.leftIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    )}
                    {field.type === "select" ? (
                      <Select
                        onValueChange={formField.onChange}
                        value={formField.value || ""}
                        defaultValue={formField.value}>
                        <SelectTrigger className={field.leftIcon ? "pl-10" : ""}>
                          <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        {...formField}
                        type={field.type}
                        value={formField.value || ""}
                        placeholder={field.placeholder}
                        className={field.leftIcon ? "pl-10" : ""}
                      />
                    )}
                  </div>
                </FormControl>
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
    </>
  )
}