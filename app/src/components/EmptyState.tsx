import { FolderOpen } from "lucide-react"

export function EmptyState({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center h-[60vh] animate-in fade-in duration-500">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <FolderOpen className="w-10 h-10 text-gray-300" />
      </div>
      <h2 className="text-2xl font-bold text-brand-navy mb-2">{title}</h2>
      <p className="text-gray-500 max-w-md">{description}</p>
    </div>
  )
}
