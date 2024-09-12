import Image from 'next/image'
import { getHomePage } from "@/lib/contentful/api";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { draftMode } from 'next/headers';
import { pathname } from 'next-extra/pathname';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/utils';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(pathname());
}

export default async function ClubPage() {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage(isEnabled);
  return (
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

  )
}