import { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blog & News | Al-Nada Scientific',
  description: 'Read the latest updates, news, and technical articles from Al-Nada Scientific.',
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-foreground)] mb-4">
          Latest News & Updates
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)]">
          Stay informed with the latest scientific discoveries, product announcements, and company news.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-[var(--color-muted)]/30 rounded-2xl border border-[var(--color-border)]">
          <p className="text-[var(--color-muted-foreground)]">No posts published yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/posts/${post.id}`}
              className="group flex flex-col bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {post.image1Url && (
                <div className="aspect-video w-full overflow-hidden bg-[var(--color-muted)]">
                  <img 
                    src={post.image1Url} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-medium text-[var(--color-primary)] mb-2">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-[var(--color-card-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--color-muted-foreground)] line-clamp-3 mb-4 flex-1">
                  {post.body.replace(/<[^>]+>/g, '').substring(0, 150)}...
                </p>
                <div className="text-sm font-medium text-[var(--color-primary)] flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                  Read article &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
