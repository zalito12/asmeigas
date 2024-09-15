import { Event } from '@/types/contentful';
import { Time } from '../component/time';
import Link from 'next/link';
import { CalendarDaysIcon } from 'lucide-react';

interface EventItemProps {
  event: Event;
}

export function EventItem(props: EventItemProps) {
  const { event } = props;
  return (
    <li>
      <Link
        href={`/eventos/${event.slug}`}
        className="relative flex flex-row bg-muted rounded-lg overflow-hidden transition-all hover:opacity-80"
        prefetch={false}
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-primary brightness-150" />
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
    </li>
  )
}

