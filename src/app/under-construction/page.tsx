"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, Construction, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTENT = {
  en: {
    title: "Under Construction",
    subtitle: "We're building something amazing!",
    description:
      "This page is currently being developed. We're working hard to bring you a great experience. Check back soon!",
    cta: "Back to Home",
  },
  ar: {
    title: "تحت الإنشاء",
    subtitle: "نعمل على بناء شيء رائع!",
    description:
      "هذه الصفحة قيد التطوير حالياً. نعمل بجد لتقديم تجربة رائعة لك. عد قريباً!",
    cta: "العودة للرئيسية",
  },
} as const;

export default function UnderConstruction() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const isRTL = language === "ar";
  const t = language === "en" ? CONTENT.en : CONTENT.ar;

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
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-center max-w-lg"
      >
        {/* Animated construction icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={cn(
            "mx-auto mb-8 w-28 h-28 rounded-full flex items-center justify-center",
            isDark
              ? "bg-amber-500/15 border-2 border-amber-500/25"
              : "bg-amber-500/10 border-2 border-amber-500/20",
          )}
        >
          <Construction className="w-14 h-14 text-amber-500" />
        </motion.div>

        {/* Animated gear dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className={cn(
                "w-3 h-3 rounded-full",
                isDark ? "bg-amber-500/60" : "bg-amber-500/50",
              )}
            />
          ))}
        </div>

        <h1
          className={cn(
            "text-3xl md:text-4xl font-extrabold tracking-tight mb-3",
            isDark ? "text-white" : "text-[#0a1a4f]",
          )}
        >
          {t.title}
        </h1>

        <p
          className={cn(
            "text-xl font-semibold mb-4",
            isDark ? "text-amber-400/80" : "text-amber-600",
          )}
        >
          {t.subtitle}
        </p>

        <p
          className={cn(
            "text-base mb-10 leading-relaxed max-w-md mx-auto",
            isDark ? "text-gray-400" : "text-[#4a6fa5]",
          )}
        >
          {t.description}
        </p>

        <Button
          asChild
          size="lg"
          className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary text-white hover:bg-primary/90 hover:-translate-y-0.5 font-bold gap-2"
        >
          <Link href="/">
            <Home className="h-5 w-5" />
            {t.cta}
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
