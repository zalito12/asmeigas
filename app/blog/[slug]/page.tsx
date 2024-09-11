import { draftMode } from 'next/headers';
import { getBlogPost } from '@/lib/contentful/api';
import { BlogPost } from '@/types/contentful';
import { Time } from '@/components/component/time';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import renderOptions from '@/lib/contentful/render-options';

export default async function BlogEntry({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode();
  const post = await getBlogPost(params.slug, isEnabled) as BlogPost;

  if (!post) {
    notFound();
  }

  return (
    <section className="w-full bg-background">
      {post.image?.url && post.showImageAsHeader && (
        <div className="relative">
          <Image
            src={post.image.url}
            alt={post.image.title}
            width={1250}
            height={340}
            className="aspect-video overflow-hidden object-cover w-full max-h-[40rem]"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white rounded-md px-4 py-2">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="text-sm">
              <Time datetime={post.sys.firstPublishedAt} />
            </p>
          </div>
        </div>)}
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <article className="prose prose-gray max-w-none mx-auto lg:max-w-6xl dark:prose-invert text-foreground">
          {(!post.image?.url || !post.showImageAsHeader) && (
            <div className="space-y-2 not-prose">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] text-foreground">
                {post.title}
              </h1>
              <p className="text-muted-foreground">
                <Time datetime={post.sys.firstPublishedAt} />
              </p>
            </div>)}
          {documentToReactComponents(post.body.json, renderOptions(post.body.links))}
        </article>
      </div>
    </section>
  )
}
