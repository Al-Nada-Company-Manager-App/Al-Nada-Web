import { Metadata } from 'next';
import { getPosts } from '@/lib/api';
import { PostsList } from '@/components/features/posts/PostsList';

export const metadata: Metadata = {
  title: 'Blog & News | Al-Nada Scientific',
  description: 'Read the latest updates, news, and technical articles from Al-Nada Scientific.',
};

export default async function PostsPage() {
  const posts = await getPosts();
  return <PostsList posts={posts} />;
}
