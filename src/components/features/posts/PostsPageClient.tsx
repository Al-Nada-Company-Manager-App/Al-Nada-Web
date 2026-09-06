"use client";

import { useEffect, useState } from "react";
import type { Post } from "@/lib/api";
import { getPosts } from "@/lib/api";
import { Loader2 } from "lucide-react";
import { PostsList } from "./PostsList";

export function PostsPageClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((error) => {
        console.error(error);
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </section>
    );
  }

  return <PostsList posts={posts} />;
}