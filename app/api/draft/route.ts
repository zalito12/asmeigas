import { getHomePage } from "@/lib/api";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";

  if (!secret) {
    return new Response("Missing parameters", { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  /* const page = await getPage(slug);

  if (!page) {
    return new Response("Page not found", { status: 404 });
  } */

  draftMode().enable();
  redirect(`${slug}`);
}

/* const getPage = async (slug: string) => {
  switch(slug) {
    default:
      return await getHomePage(true);
  }
} */