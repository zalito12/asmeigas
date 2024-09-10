import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json();
  if (!body || !body.tags?.length) {
    return NextResponse.json({ message: "Invalid tag" }, { status: 400 });
  }

  body.tags.forEach((tag: string) => {
    revalidateTag(tag);
  });

  return NextResponse.json({ revalidated: true, now: Date.now() });
}