import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Document } from '@/types/contentful'
import { File } from 'lucide-react'
import Link from 'next/link'

export interface DocumentCardProps {
  document: Document
}

export function DocumentCard(props: DocumentCardProps) {
  const { document } = props

  return (
    <Link href={document.url} className="cursor-pointer" target="_blank">
      <Card className="flex flex-col items-center justify-start p-6 shadow bg-background max-w-96 w-56 h-full">
        <div className="w-16 h-16 flex items-center justify-center">
          <File className="w-8 h-8" />
        </div>
        <div className="space-y-3 text-center">
          <div className="font-semibold">{document.title}</div>
          <div className="text-sm text-muted-foreground">{Math.round(document.size / 1024)} KB</div>
        </div>
      </Card>
    </Link>
  )
}

