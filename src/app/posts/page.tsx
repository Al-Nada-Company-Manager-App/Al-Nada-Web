import { Metadata } from 'next';
import { PostsPageClient } from '@/components/features/posts/PostsPageClient';

export const metadata: Metadata = {
  title: 'Blog & News | Al-Nada Scientific',
  description: 'Read the latest updates, news, and technical articles from Al-Nada Scientific.',
};

export default async function PostsPage() {
  return <PostsPageClient />;
}
