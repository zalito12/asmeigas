import Link from "next/link"
import Image from "next/image"
import { Time } from '@/components/component/time';

export interface BlogItemProps {
  title: string;
  date: string;
  image: string;
  href: string;
  description?: string;
}

export default function BlogItem(props: BlogItemProps) {
  const { title, date, image, href } = props;
  return (
    <Link
      href={href}
      className="group grid h-auto w-full items-center justify-center gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
      prefetch={false}
    >
      <div className="space-y-2 not-prose">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={550}
          height={310}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">
            <Time datetime={date} />
          </p>
        </div>
      </div>
    </Link>
  )
}
