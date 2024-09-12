import { draftMode } from 'next/headers';
import BlogItem from './blog-item'
import { getBlogPosts } from '@/lib/contentful/api';
import { BlogPost } from '@/types/contentful';
import { pathname } from 'next-extra/pathname';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/utils';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(pathname());
}

export default async function BlogPage() {
  const { isEnabled } = draftMode();
  const posts = await getBlogPosts(4, isEnabled) as BlogPost[];

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
          {posts?.length > 0 && posts.map((post) => (
            <BlogItem
              key={post.sys.id}
              title={post.title}
              date={post.sys.firstPublishedAt}
              image={post.image?.url}
              description={post.summary}
              href={`/blog/${post.slug}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
