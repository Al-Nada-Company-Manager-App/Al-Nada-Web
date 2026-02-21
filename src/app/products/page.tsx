"use client";

import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ProductsHero } from "@/components/features/products/Hero";
import { ProductsArticles } from "@/components/features/products/Articles";
import { ProductsCompanies } from "@/components/features/products/Companies";

export default function ProductsPage() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className={cn("flex flex-col min-h-screen", isRTL && "rtl")}>
      <ProductsHero />
      <ProductsArticles isDark={isDark} />
      <ProductsCompanies isDark={isDark} />
    </div>
  );
}
