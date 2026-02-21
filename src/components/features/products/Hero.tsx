"use client";

import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import {
  PRODUCTS_PAGE_CONTENT,
  PRODUCT_ARTICLES,
  COMPANY_PRODUCTS,
} from "@/constants/products";

export function ProductsHero() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const t =
    language === "en" ? PRODUCTS_PAGE_CONTENT.en : PRODUCTS_PAGE_CONTENT.ar;

  return (
    <>
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        breadcrumbHome={t.breadcrumbHome}
        breadcrumbCurrent={t.breadcrumbCurrent}
        isRTL={isRTL}
      />

      {/* Floating stat chips — unique to products */}
      <div
        className={cn(
          "pb-12 -mt-16 relative",
          isDark
            ? "bg-[#060f2e]"
            : "bg-gradient-to-b from-[#d4dffa] to-[#edf2ff]",
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                value: `${PRODUCT_ARTICLES.length}`,
                label: language === "en" ? "Categories" : "فئات",
              },
              {
                value: `${COMPANY_PRODUCTS.length}`,
                label: language === "en" ? "Partners" : "شركاء",
              },
              {
                value: "17+",
                label: language === "en" ? "Years" : "عام",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-sm border",
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white/60 border-[#0a1a4f]/10 shadow-sm",
                )}
              >
                <span className="text-2xl font-black text-primary">
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium uppercase tracking-wider",
                    isDark ? "text-white/50" : "text-[#0a1a4f]/50",
                  )}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
