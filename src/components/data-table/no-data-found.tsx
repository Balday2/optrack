import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileX2 } from "lucide-react"

interface NoDataFoundProps {
  onRetry?: () => void
  title: string
  content: string
  error?: boolean
}

export default function NoDataFound({ onRetry, title, content, error = false }: NoDataFoundProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <CardContent className="pt-6 pb-2 text-center">
        <FileX2 className={`mx-auto h-12 w-12 ${error ? 'text-red-400 dark:text-red-600' : 'text-gray-400 dark:text-gray-600'}`} />
        <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {content}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        {onRetry && <Button onClick={onRetry} variant="outline">Recommencer</Button>}
      </CardFooter>
    </div>
  )
}