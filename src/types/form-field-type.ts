export type FormFieldType = {
  name: string
  label: string
  placeholder: string
  type: string
  leftIcon?: React.ElementType
  description?: string
  options?: { value: string; label: string }[]
}