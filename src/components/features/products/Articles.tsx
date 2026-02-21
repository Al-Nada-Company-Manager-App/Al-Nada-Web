"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import { PRODUCTS_PAGE_CONTENT, PRODUCT_ARTICLES } from "@/constants/products";
import { ArticleCard } from "./ArticleCard";

export function ProductsArticles({ isDark }: { isDark: boolean }) {
  const { language } = useLanguage();
  const t =
    language === "en" ? PRODUCTS_PAGE_CONTENT.en : PRODUCTS_PAGE_CONTENT.ar;

  return (
    <section
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark ? "bg-[#070d24]" : "bg-gradient-to-b from-[#f5f9ff] to-white",
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-8 relative">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">
                {t.articleTag}
              </span>
            </div>
            <h2
              className={cn(
                "text-3xl md:text-4xl font-black tracking-tight",
                isDark ? "text-white" : "text-[#0a1a4f]",
              )}
            >
              {t.articleTitle}
            </h2>
          </div>
          <p
            className={cn(
              "text-sm leading-relaxed max-w-sm",
              isDark ? "text-gray-500" : "text-[#4a6fa5]",
            )}
          >
            {t.articleIntro}
          </p>
        </motion.div>

        {/* Article items */}
        <div className="space-y-6">
          {PRODUCT_ARTICLES.map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              index={index}
              language={language}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Conclusion card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "mt-12 p-8 md:p-10 rounded-3xl border",
            isDark
              ? "bg-primary/5 border-primary/20"
              : "bg-primary/5 border-primary/15",
          )}
        >
          <h3
            className={cn(
              "text-xl font-bold mb-3",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {t.conclusionTitle}
          </h3>
          <p
            className={cn(
              "text-sm leading-relaxed",
              isDark ? "text-gray-400" : "text-[#4a6fa5]",
            )}
          >
            {t.conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
