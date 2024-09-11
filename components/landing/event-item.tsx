import { Event } from '@/types/contentful';
import { Time } from '../component/time';
import Link from 'next/link';
import { CalendarDaysIcon } from 'lucide-react';

interface EventItemProps {
  event: Event;
}

export async function EventItem(props: EventItemProps) {
  const { event } = props;
  return (
    <li>
      <Link className="group grid gap-1 p-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
        prefetch={false}
        href={`/eventos/${event.slug}`}>
        <h3 className="text-xl font-bold cursor-pointer">{event.title}</h3>
        <p className="text-muted-foreground cursor-pointer">
          {event.summary}
        </p>
        <div className="flex items-center text-muted-foreground">
          <CalendarDaysIcon className="mr-2 h-4 w-4" />
          <span><Time datetime={event.date} dayTreshold={1} /></span>
        </div>
      </Link>
    </li>
  )
}

