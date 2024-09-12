import { Time } from '@/components/component/time';
import { Event } from '@/types/contentful';
import { CalendarDaysIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  event: Event;
}

export default function EventCard(props: EventCardProps) {
  const { event } = props;
  return (
    <Link
      href={`/eventos/${event.slug}`}
      className="relative flex flex-row bg-muted rounded-lg overflow-hidden transition-all hover:opacity-80"
      prefetch={false}
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
      <Image
        src={event.image.url}
        alt={event.image.title}
        width={300}
        height={300}
        className="aspect-video overflow-hidden object-cover max-w-[25%] max-sm:hidden"
      />
      <div className="p-4 flex-1 grid gap-2">
        <div className="flex items-center gap-2">
          <CalendarDaysIcon className="w-4 h-4 text-muted-foreground" />
          <div className="text-sm text-muted-foreground">
            <Time datetime={event.date} dayTreshold={1} />
          </div>
        </div>
        <div className="text-lg font-bold">{event.title}</div>
        <div className="text-muted-foreground line-clamp-2">
          {event.summary}
        </div>
      </div>
    </Link>
  )
}
