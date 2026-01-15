import { draftMode } from 'next/headers';
import BlogItem from './blog-item'
import { getBlogPosts } from '@/lib/contentful/api';
import { BlogPostPage } from '@/types/contentful';
import { pathname } from 'next-extra/pathname';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(pathname());
}
const pageSize = 6;

export default async function BlogPage({ searchParams }: any) {
  const { isEnabled } = draftMode();
  const page = Number(searchParams?.page ?? 1);
  const skip = (page - 1) * pageSize;
  const data = await getBlogPosts(pageSize, skip,isEnabled ) as BlogPostPage;

  const totalPages = Math.ceil(data.total/pageSize);

  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Últimas publicacións</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mergúllate nas Nosas Aventuras Acuáticas</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora as últimas publicacións do noso blog e descubre o apaixonante mundo das Meigas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {data.posts.length > 0 && data.posts.map((post) => (
            <BlogItem
              key={post.sys.id}
              title={post.title}
              date={post.sys.firstPublishedAt}
              image={post.image?.url}
              description={post.summary}
              href={`/blog/${post.slug}`} />
          ))}
        </div>
        <div className="mx-auto grid max-w-5xl items-center grid-cols-2 gap-6 lg:gap-12">
          {page > 1 && 
            <Link
              href={pathname() + (page > 2 ? `/?page=${page - 1}` : '')}
              prefetch={false}
            >
              <Button variant="outline" className="w-full" >&lt; Novas</Button>
	    </Link>
          }
          {page < totalPages && 
            <Link
              className="w-full col-start-2" 
              href={`${pathname()}/?page=${page + 1}`}
              prefetch={false}
            >
              <Button variant="outline" className="w-full" >Antigas &gt;</Button>
	    </Link>
          }
        </div>
      </div>
    </section>
  )
}
