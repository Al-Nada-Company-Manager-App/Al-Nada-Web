import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPost, getPosts } from '@/lib/api';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return { title: 'Post Not Found | Al-Nada Scientific' };
  }

  // Strip HTML for the description
  const description = post.body.replace(/<[^>]+>/g, '').substring(0, 160) + '...';

  return {
    title: `${post.title} | Al-Nada Scientific`,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      images: post.image1Url ? [{ url: post.image1Url }] : [],
    },
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({
      id: post.id,
    }));
  } catch {
    return [];
  }
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 max-w-4xl">
      <Link 
        href="/posts" 
        className="inline-flex items-center text-sm font-medium text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to News
      </Link>

      <article className="bg-[var(--color-card)] rounded-3xl border border-[var(--color-border)] overflow-hidden shadow-sm">
        {post.image1Url && (
          <div className="w-full aspect-[2/1] overflow-hidden bg-[var(--color-muted)]">
            <img 
              src={post.image1Url} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-8 md:p-12">
          <div className="flex items-center text-sm text-[var(--color-muted-foreground)] mb-6">
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-10 leading-tight">
            {post.title}
          </h1>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-[var(--color-foreground)] prose-a:text-[var(--color-primary)] hover:prose-a:text-[var(--color-primary-dark)]"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {post.image2Url && (
            <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-sm">
              <img 
                src={post.image2Url} 
                alt="Supplementary material" 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
