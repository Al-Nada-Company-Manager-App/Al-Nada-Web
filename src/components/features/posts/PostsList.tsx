"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/api";
import { POSTS_CONTENT } from "@/constants/posts";
import { PostCard } from "./PostCard";

export function PostsList({ posts }: { posts: Post[] }) {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const isRTL = language === "ar";
  const t = language === "en" ? POSTS_CONTENT.en : POSTS_CONTENT.ar;

  return (
    <section
      className={cn(
        "relative py-24 md:py-32 min-h-screen overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#070d24]"
          : "bg-gradient-to-b from-[#f6f9ff] to-white"
      )}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isDark ? (
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        ) : (
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        )}
      </div>

      <div
        className={cn(
          "container max-w-7xl mx-auto px-4 md:px-8 relative",
          isRTL && "rtl"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
              isDark
                ? "bg-primary/15 text-primary border border-primary/25"
                : "bg-primary/10 text-primary border border-primary/20"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            {t.tag}
          </span>
          <h1
            className={cn(
              "text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight",
              isDark ? "text-white" : "text-[#0a1a4f]"
            )}
          >
            {t.title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-2xl mx-auto text-lg leading-relaxed",
              isDark ? "text-gray-400" : "text-[#4a6fa5]"
            )}
          >
            {t.description}
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <div className="text-center py-20 bg-primary/5 rounded-3xl border border-primary/10">
            <p className={cn("text-lg", isDark ? "text-gray-400" : "text-[#4a6fa5]")}>
              {t.noPosts}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <PostCard
                key={post.id}
                post={post}
                index={index}
                language={language}
                isDark={isDark}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
