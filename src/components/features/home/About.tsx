"use client";

import { LazyImage } from "@/components/ui/LazyImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT, ABOUT_IMAGES } from "@/constants/about";

export function About() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = language === "en" ? ABOUT_CONTENT.en : ABOUT_CONTENT.ar;
  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section
      id="about"
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#070d24]"
          : "bg-gradient-to-b from-white via-[#f6f9ff] to-[#edf3ff]",
      )}
    >
      {/* Decorative background elements */}
      {!isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/10 blur-3xl" />
        </div>
      )}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl" />
        </div>
      )}

      <div
        className={cn(
          "container max-w-7xl mx-auto px-4 md:px-8",
          isRTL && "rtl",
        )}
      >
        {/* ── About Section ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 md:mb-32">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Main image */}
              <div
                className={cn(
                  "relative w-[85%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl",
                  isDark ? "shadow-black/40" : "shadow-primary/15",
                  isRTL ? "ml-auto" : "",
                )}
              >
                <LazyImage
                  src={ABOUT_IMAGES.main}
                  alt="Al Nada Scientific Office"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Secondary overlapping image */}
              <div
                className={cn(
                  "absolute bottom-[-20px] w-[55%] aspect-[4/3] rounded-2xl overflow-hidden border-4 shadow-xl",
                  isDark
                    ? "border-[#070d24] shadow-black/30"
                    : "border-white shadow-primary/10",
                  isRTL ? "left-0" : "right-0",
                )}
              >
                <LazyImage
                  src={ABOUT_IMAGES.secondary}
                  alt="Al Nada Team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                className={cn(
                  "absolute top-4 flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-md",
                  isDark
                    ? "bg-[#0a1640]/80 border-white/10 shadow-lg shadow-black/20"
                    : "bg-white/90 border-[#d6e6ff] shadow-lg shadow-primary/10",
                  isRTL ? "left-4" : "right-4",
                )}
              >
                <span className="text-3xl font-black text-primary">20+</span>
                <span
                  className={cn(
                    "text-sm font-semibold leading-tight",
                    isDark ? "text-gray-300" : "text-[#4a6fa5]",
                  )}
                >
                  {language === "en" ? "Years of\nExperience" : "سنوات\nخبرة"}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Tag */}
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider",
                isDark
                  ? "bg-primary/15 text-primary border border-primary/25"
                  : "bg-primary/10 text-primary border border-primary/20",
              )}
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {t.tag}
            </span>

            {/* Title */}
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
                isDark ? "text-white" : "text-[#0a1a4f]",
              )}
            >
              {t.title}
            </h2>

            {/* Description */}
            <p
              className={cn(
                "text-lg leading-relaxed max-w-xl",
                isDark ? "text-gray-400" : "text-[#4a6fa5]",
              )}
            >
              {t.description}
            </p>

            {/* Check Points */}
            <ul className="space-y-4 pt-2">
              {t.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    className={cn(
                      "h-5 w-5 mt-0.5 shrink-0",
                      isDark ? "text-primary" : "text-primary",
                    )}
                  />
                  <span
                    className={cn(
                      "text-base font-medium",
                      isDark ? "text-gray-300" : "text-[#2a4a7f]",
                    )}
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary text-white hover:bg-primary/90 border-none hover:-translate-y-0.5 font-bold"
              >
                <Link href="/about">{t.cta}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
