
interface DocumentPipelineProps {
  name: string;
  value: number;
  isCompleted: boolean
}

export default function DocumentPipeline({ name, value, isCompleted }: DocumentPipelineProps) {
  if(isCompleted){
    return (
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="flex-row">
          <span className="text-sm text-foreground">{value}</span>
          <span className="text-sm text-gray-400"> | </span>
          <span className="text-sm text-foreground">{name}</span>
        </div>
      </div>
    )
  }
  return (
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="flex-row">
          <span className="text-sm text-foreground">{value}</span>
          <span className="text-sm text-gray-400"> | </span>
          <span className="text-sm text-foreground">{name}</span>
        </div>
      </div>
    )
}
