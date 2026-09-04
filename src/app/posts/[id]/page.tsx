import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, getPosts } from '@/lib/api';
import { SinglePost } from '@/components/features/posts/SinglePost';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return { title: 'Post Not Found | Al-Nada Scientific' };
  }

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
    if (!posts || posts.length === 0) {
      return [{ id: 'not-found' }];
    }
    return posts.map((post) => ({
      id: post.id,
    }));
  } catch {
    return [{ id: 'not-found' }];
  }
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return <SinglePost post={post} />;
}
