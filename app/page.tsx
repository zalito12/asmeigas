import { LandingPage } from '@/components/component/landing-page';
import { getHomePage, getNextEvents } from '@/lib/contentful/api';
import { getPageMetadata } from '@/lib/utils';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { pathname } from 'next-extra/pathname';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(pathname());
}

export default async function Home() {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage(isEnabled);
  const testimonials = homePage?.testimonialsCollection?.items || [];
  const events = await getNextEvents(2, isEnabled) || [];
  return (
    <LandingPage homePage={homePage} testimonials={testimonials} events={events} />
  );
}