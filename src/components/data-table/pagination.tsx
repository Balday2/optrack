import React from 'react'
import { Button } from '@/components/ui/button'

type PaginationProps = {
  currentPage: number
  totalPages: number
  loading?: boolean
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  loading
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between px-2 py-3 space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || loading}
      >
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
      >
        Next
      </Button>
    </div>
  )
}