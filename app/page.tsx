import { LandingPage } from '@/components/component/landing-page';
import { getHomePage, getNextEvents } from '@/lib/contentful/api';
import { getPageMetadata } from '@/lib/utils';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('/');
}

export default async function Home() {
  const { isEnabled } = await draftMode();
  const [homePage, events] = await Promise.all([
    getHomePage(isEnabled),
    getNextEvents(2, isEnabled),
  ]);
  const testimonials = homePage?.testimonialsCollection?.items || [];
  const sponsors = homePage?.sponsorsCollection?.items || [];
  return (
    <LandingPage homePage={homePage} sponsors={sponsors} testimonials={testimonials} events={events || []} />
  );
}
