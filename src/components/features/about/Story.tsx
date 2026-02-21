"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { LazyImage } from "@/components/ui/LazyImage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ABOUT_CONTENT,
  ABOUT_IMAGES,
  ABOUT_PAGE_CONTENT,
} from "@/constants/about";

export interface AboutStoryProps {
  isDark: boolean;
  isRTL: boolean;
  isCompact?: boolean; // If true, renders the shorter home page version
}

export function AboutStory({
  isDark,
  isRTL,
  isCompact = false,
}: AboutStoryProps) {
  const { language } = useLanguage();
  const about = language === "en" ? ABOUT_CONTENT.en : ABOUT_CONTENT.ar;
  const storyParagraphs =
    language === "en"
      ? ABOUT_PAGE_CONTENT.en.story
      : ABOUT_PAGE_CONTENT.ar.storyAr; // Note: Fixed this from the previous en.storyAr typo

  return (
    <section
      id={isCompact ? "about" : undefined}
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#070d24]"
          : "bg-gradient-to-b from-[#f0f6ff] via-[#f6f9ff] to-white",
      )}
    >
      {/* Decorative background elements exclusively for the Home page compact view */}
      {isCompact && !isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-200/10 blur-3xl" />
        </div>
      )}
      {isCompact && isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl" />
        </div>
      )}

      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
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
              initial={isCompact ? { opacity: 0, scale: 0.8 } : { scale: 0 }}
              whileInView={isCompact ? { opacity: 1, scale: 1 } : { scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: isCompact ? 0.4 : 0.5,
                duration: isCompact ? 0.5 : undefined,
                type: isCompact ? undefined : "spring",
                stiffness: isCompact ? undefined : 200,
                ease: isCompact ? "easeOut" : undefined,
              }}
              className={cn(
                "absolute z-10 shadow-xl",
                // Home page badge is a large rectangle with backdrop blur
                isCompact
                  ? "top-4 flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-md"
                  : "top-6 w-24 h-24 rounded-2xl flex flex-col items-center justify-center",
                // Dark/Light styles
                isCompact && isDark
                  ? "bg-[#0a1640]/80 border-white/10 shadow-black/20"
                  : isCompact
                    ? "bg-white/90 border-[#d6e6ff] shadow-primary/10"
                    : isDark
                      ? "bg-primary/90 shadow-primary/30"
                      : "bg-primary shadow-primary/25",
                isRTL && isCompact
                  ? "left-4"
                  : isRTL
                    ? "left-6"
                    : isCompact
                      ? "right-4"
                      : "right-6",
              )}
            >
              {isCompact ? (
                <>
                  <span className="text-3xl font-black text-primary">20+</span>
                  <span
                    className={cn(
                      "text-sm font-semibold leading-tight",
                      isDark ? "text-gray-300" : "text-[#4a6fa5]",
                    )}
                  >
                    {language === "en" ? "Years of\nExperience" : "سنوات\nخبرة"}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-3xl font-black text-white">20+</span>
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
                    {language === "en" ? "Years" : "عام"}
                  </span>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className={cn(isCompact && "space-y-6")}
          >
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
                isDark
                  ? "bg-primary/15 text-primary border border-primary/25"
                  : "bg-primary/10 text-primary border border-primary/20",
              )}
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {about.tag}
            </span>

            <h2
              className={cn(
                isCompact
                  ? "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
                  : "text-3xl md:text-4xl font-extrabold tracking-tight mb-6",
                isDark ? "text-white" : "text-[#0a1a4f]",
              )}
            >
              {about.title}
            </h2>

            <div className={cn(!isCompact && "space-y-4 mb-8")}>
              {isCompact ? (
                // Home page displays just the short description
                <p
                  className={cn(
                    "text-lg leading-relaxed max-w-xl",
                    isDark ? "text-gray-400" : "text-[#4a6fa5]",
                  )}
                >
                  {about.description}
                </p>
              ) : (
                // About page displays the full story paragraphs
                storyParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={cn(
                      "text-base leading-relaxed",
                      isDark ? "text-gray-400" : "text-[#4a6fa5]",
                    )}
                  >
                    {p}
                  </p>
                ))
              )}
            </div>

            <div className={cn("space-y-3", isCompact && "space-y-4 pt-2")}>
              {about.points.map((point, i) =>
                isCompact ? (
                  <motion.div
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
                  </motion.div>
                ) : (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span
                      className={cn(
                        "text-sm font-medium",
                        isDark ? "text-gray-300" : "text-[#2c4a7c]",
                      )}
                    >
                      {point}
                    </span>
                  </div>
                ),
              )}
            </div>

            {/* CTA exclusively for the Home page */}
            {isCompact && (
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary text-white hover:bg-primary/90 border-none hover:-translate-y-0.5 font-bold"
                >
                  <Link href="/about">{about.cta}</Link>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
