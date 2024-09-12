import { LandingPage } from '@/components/component/landing-page';
import { getHomePage, getNextEvents } from '@/lib/contentful/api';
import { draftMode } from 'next/headers';

export default async function Home() {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage(isEnabled);
  const testimonials = homePage?.testimonialsCollection?.items || [];
  const events = await getNextEvents(3, isEnabled) || [];
  return (
    <LandingPage homePage={homePage} testimonials={testimonials} events={events} />
  );
}