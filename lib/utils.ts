import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { getPages } from "./contentful/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getPageMetadata(pathname: string): Promise<Metadata> {
  const url = `https://asmeigas.es${pathname}`;

  const pages = await getPages();
  const page =
    pages
      ?.slice()
      .reverse()
      .find((page: { slug: string }) => pathname.startsWith(page.slug)) ||
    pages[0];

  return {
    title: page?.seoTitle,
    description: page?.seoDescription,
    authors: { url: 'admin@asmeigas.es', name: 'Gonzalo García' },
    openGraph: {
      url,
      title: page?.seoTitle,
      description: page?.seoDescription,
      type: 'website',
      images: 'https://asmeigas.es/logo-big.png',
      locale: 'gl_ES',
      siteName: 'CN As Meigas'
    },
    icons: 'https://asmeigas.es/favicon.ico',
    keywords: ['natación', 'Lugo', 'nadar', 'club natación'],
    twitter: {
      title: page?.seoTitle,
      description: page?.seoDescription,
      images: 'https://asmeigas.es/logo-big.png',
      // site: 'twitter url',
      card: 'summary_large_image',
    }
  };
}
