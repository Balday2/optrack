import React from 'react'
import { Input } from '@/components/ui/input'

type SearchProps = {
  value: string
  onChange: (value: string) => void
}

export function Search({ value, onChange }: SearchProps) {
  return (
    <Input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="max-w-sm h-7 mr-auto"
    />
  )
}