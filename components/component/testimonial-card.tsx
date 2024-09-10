import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialCardProps {
  name: string
  quote: string
  avatar?: string
}

export function TestimonialCard(props: TestimonialCardProps) {
  const { name, quote } = props
  const avatar = props.avatar || "/placeholder-user.jpg"
  return (
    <Card className="flex flex-col items-center justify-start p-6 shadow bg-background">
      <Avatar className="w-16 h-16 border">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="space-y-3 text-center">
        <div className="font-semibold">{name}</div>
        <blockquote className="text-lg font-semibold leading-snug">
          {quote}
        </blockquote>
      </div>
    </Card>
  )
}

