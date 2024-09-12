import Link from "next/link"
import Image from "next/image"
import { Time } from '@/components/component/time';
import { Button } from '@/components/ui/button';

export interface BlogItemProps {
  title: string;
  date: string;
  image?: string;
  href: string;
  description?: string;
}

export default function BlogItem(props: BlogItemProps) {
  const { title, date, image, href, description } = props;
  return (
    <Link
      href={href}
      className="group flex flex-col bg-muted rounded-lg overflow-hidden hover:bg-muted/80"
      prefetch={false}
    >
      <div className="relative aspect-video">
        {image && (<>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={400}
            className="aspect-video object-cover w-full h-full group-hover:brightness-[80%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </>)}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-lg font-bold">{title}</div>
          <div className="text-sm">
            <Time datetime={date} />
          </div>
        </div>
      </div>
      <div className="p-4 flex-1 grid gap-2">
        <div className="text-muted-foreground line-clamp-2">
          {description}
        </div>
        <div className="mt-auto">
          <Button variant="outline" className="w-full">
            Seguir lendo
          </Button>
        </div>
      </div>
    </Link>
  )
}
