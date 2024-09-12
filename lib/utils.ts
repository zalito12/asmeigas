import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { getPages } from "./contentful/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getPageMetadata(pathname: string): Promise<Metadata> {
  const pages = await getPages();
  const page =
    pages
      ?.slice()
      .reverse()
      .find((page: { slug: string }) => pathname.startsWith(page.slug)) ||
    pages[0];

  return {
    title: page?.seoTitle,
    description: page?.seoDescription
  };
}
