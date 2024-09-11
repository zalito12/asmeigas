import { getNextEvents } from '@/lib/contentful/api';
import { CalendarDaysIcon } from 'lucide-react';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import EventCard from './event-card';
import { Event } from '@/types/contentful';

export default async function EventsPage() {
  const { isEnabled } = draftMode();
  const events = await getNextEvents(10, isEnabled);
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Eventos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Próximos eventos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Participa connosco nas próximas competicións, eventos deportivos de natación e encontros.
            </p>
          </div>
        </div>
        <div className="container px-4 md:px-6 py-12 flex justify-center">
          <div className="grid gap-8 max-w-3xl w-full">
            {events.map((event: Event) => (
              <EventCard key={event.sys.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
