"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const isRTL = language === "ar";

  const t = {
    en: {
      code: "404",
      title: "Page Not Found",
      description:
        "Sorry, the page you are looking for doesn't exist or has been moved.",
      cta: "Back to Home",
    },
    ar: {
      code: "404",
      title: "الصفحة غير موجودة",
      description: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      cta: "العودة للرئيسية",
    },
  };

  const content = language === "en" ? t.en : t.ar;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen px-4",
        isRTL && "rtl",
        isDark
          ? "bg-[#060f2e]"
          : "bg-gradient-to-br from-[#f0f6ff] via-white to-[#edf3ff]",
      )}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/8 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-center max-w-lg"
      >
        {/* Big 404 */}
        <div className="relative mb-6">
          <span
            className={cn(
              "text-[10rem] md:text-[14rem] font-black leading-none select-none",
              isDark ? "text-white/5" : "text-primary/5",
            )}
          >
            {content.code}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "w-24 h-24 rounded-full flex items-center justify-center",
                isDark ? "bg-primary/15" : "bg-primary/10",
              )}
            >
              <SearchX className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        <h1
          className={cn(
            "text-3xl md:text-4xl font-extrabold tracking-tight mb-4",
            isDark ? "text-white" : "text-[#0a1a4f]",
          )}
        >
          {content.title}
        </h1>

        <p
          className={cn(
            "text-lg mb-10 leading-relaxed",
            isDark ? "text-gray-400" : "text-[#4a6fa5]",
          )}
        >
          {content.description}
        </p>

        <Button
          asChild
          size="lg"
          className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary text-white hover:bg-primary/90 hover:-translate-y-0.5 font-bold gap-2"
        >
          <Link href="/">
            <Home className="h-5 w-5" />
            {content.cta}
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
