"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LazyImage } from "@/components/ui/LazyImage";
import type { ProductArticle } from "@/constants/products";

interface ArticleCardProps {
  article: ProductArticle;
  index: number;
  language: string;
  isDark: boolean;
}

export function ArticleCard({
  article,
  index,
  language,
  isDark,
}: ArticleCardProps) {
  const [expanded, setExpanded] = useState(false);
  const title = language === "en" ? article.title.en : article.title.ar;
  const description =
    language === "en" ? article.description.en : article.description.ar;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "group rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500",
          isDark
            ? "bg-white/[0.02] border-white/10 hover:border-primary/30 hover:bg-white/[0.04]"
            : "bg-white border-gray-100 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5",
        )}
      >
        {/* Header row */}
        <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6">
          {/* Number badge */}
          <span
            className={cn(
              "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black transition-colors duration-300",
              isDark
                ? "bg-primary/10 text-primary group-hover:bg-primary/20"
                : "bg-primary/10 text-primary group-hover:bg-primary/15",
            )}
          >
            {num}
          </span>

          {/* Title */}
          <h3
            className={cn(
              "flex-1 text-base md:text-lg font-bold",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {title}
          </h3>

          {/* Toggle icon */}
          <div
            className={cn(
              "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
              expanded
                ? "bg-primary text-white rotate-45"
                : isDark
                  ? "bg-white/5 text-white/40 group-hover:bg-primary/15 group-hover:text-primary"
                  : "bg-gray-100 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary",
            )}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M7 1v12M1 7h12" />
            </svg>
          </div>
        </div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-6 px-5 pb-6 md:px-6 md:pb-6">
            {/* Image — square (1:1 aspect ratio) */}
            <div
              className={cn(
                "w-full md:w-72 shrink-0 relative aspect-square rounded-xl overflow-hidden",
                isDark
                  ? "shadow-md shadow-black/30"
                  : "shadow-md shadow-primary/10",
              )}
            >
              <LazyImage
                src={article.image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p
              className={cn(
                "flex-1 text-sm leading-relaxed",
                isDark ? "text-gray-400" : "text-[#4a6fa5]",
              )}
            >
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
