import { draftMode } from 'next/headers';
import { getEvent } from '@/lib/contentful/api';
import { Time } from '@/components/component/time';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import renderOptions from '@/lib/contentful/render-options';
import { Document, Event } from '@/types/contentful';
import { CalendarDaysIcon } from 'lucide-react';
import { DocumentCard } from '@/components/component/document-card';
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const event = await getEvent(params.slug) as Event;
  
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  const images = event.image?.url ? [event.image.url, ...previousImages] : previousImages;

  return {
    title: `CN As Meigas | ${event.title}`,
    description: event.summary,
    openGraph: {
      images: images,
    },
  }
}

export default async function EventEntry({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  const event = await getEvent(params.slug, isEnabled) as Event;

  if (!event) {
    notFound();
  }

  return (
    <section className="w-full bg-background">
      {event.image?.url && (
        <div className="relative">
          <Image
            src={event.image.url}
            alt={event.image.title}
            width={1250}
            height={340}
            className="aspect-video overflow-hidden object-cover w-full max-h-[40rem]"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white rounded-md px-4 py-2">
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <div className="flex items-center text-sm">
              <CalendarDaysIcon className="mr-2 h-4 w-4" />
              <span><Time datetime={event.date} dayTreshold={1} /></span>
            </div>
          </div>
        </div>)}
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-gray max-w-none mx-auto lg:max-w-6xl dark:prose-invert text-foreground">
          {!event.image?.url && (
            <div className="space-y-2 not-prose">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] text-foreground">
                {event.title}
              </h1>
              <div className="flex items-center text-muted-foreground">
                <CalendarDaysIcon className="mr-2 h-4 w-4" />
                <span><Time datetime={event.date} dayTreshold={1} /></span>
              </div>
            </div>)}
          {documentToReactComponents(event.description.json, renderOptions(event.description.links))}
          <div className="flex flex-wrap gap-4 max-sm:justify-center">
            {event.documentsCollection?.items?.map((document: Document, index: number) => (
              <DocumentCard key={index} document={document} />
            ))}
          </div>
        </article>
      </div >
    </section >
  )
}
