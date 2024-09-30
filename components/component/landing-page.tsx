import Link from "next/link"
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TestimonialCard } from './testimonial-card';
import { Event, Sponsor, Testimonial } from '@/types/contentful';
import { EventItem } from '../landing/event-item';
import { SponsorCard } from "./sponsor-card";

export interface LandingPageProps {
  homePage: any;
  testimonials: Testimonial[];
  events: Event[];
  sponsors: Sponsor[];
}

export function LandingPage(props: LandingPageProps) {
  const { homePage, testimonials, events, sponsors } = props;
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {homePage.heroTitle}
                </h1>
                <div className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  {documentToReactComponents(homePage.heroText?.json)}
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {homePage.callToAction1 && (
                  <Link
                    href={homePage.callToAction1.link}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    {homePage.callToAction1.text}
                  </Link>)}
                {homePage.callToAction2 && (
                  <Link
                    href={homePage.callToAction2.link}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-primary text-primary-foreground px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    {homePage.callToAction2.text}
                  </Link>)}
              </div>
            </div>
            <Image
              src="/logo-big.png"
              width={550}
              height={550}
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                Patrocinadores
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Os Nosos patrocinadores</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {homePage.sponsorsText}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-center py-12 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
            {
              sponsors.map((sponsor: Sponsor, index: number) =>
                (sponsor.name || sponsor.logo?.url) && (
                  <SponsorCard key={index} name={sponsor.name} image={sponsor.logo?.url} link={sponsor.link} />
                )
              )
            }
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-muted-foreground">
                Testemuñas
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {homePage.testimonialsTitle}
              </h2>
              <div className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {documentToReactComponents(homePage.testimonialsDescription?.json)}
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {
              testimonials?.length > 0 && testimonials
                .map((testimonial: Testimonial, index: number) =>
                  testimonial.name && testimonial.quote && (
                    <TestimonialCard key={index} name={testimonial.name} quote={testimonial.quote} avatar={testimonial.avatar?.url} />
                  )
                )
            }
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                Eventos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {homePage.eventsTitle}
              </h2>
              <div className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {documentToReactComponents(homePage.eventsDescription?.json)}
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src={homePage.eventsImage?.url || "/placeholder.svg"}
              width={550}
              height={310}
              alt={homePage.eventsImage?.title || "Eventos"}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                {
                  events?.length > 0 && events
                    .map((event: Event) =>
                      <EventItem key={event.sys.id} event={event} />
                    )
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}