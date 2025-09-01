import { getNextEvents } from '@/lib/contentful/api';
import { draftMode } from 'next/headers';
import EventCard from './event-card';
import { Event } from '@/types/contentful';
import { pathname } from 'next-extra/pathname';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/utils';
import { CalendarDaysIcon } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(pathname());
}

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
        {events?.length === 0 && (
          <div className="text-center flex flex-col gap-2 items-center justify-center w-full mt-12">
            <CalendarDaysIcon className="w-8 h-8 text-muted-foreground mr-2" />
            <span>Actualmente non hai eventos programados.</span>
            <span>Segue atento e prepara a túa toalla para as próximas actividades do Club As Meigas!</span>
          </div>
        )}
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
