"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { HERO_CONTENT, HERO_STATS, HERO_IMAGES } from "@/constants/hero";

import { HeroCards } from "@/components/features/home/HeroCards";

export function Hero() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = language === "en" ? HERO_CONTENT.en : HERO_CONTENT.ar;
  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section
      className={cn(
        "relative grid min-h-[100svh] w-full place-content-center overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#060f2e]"
          : "bg-gradient-to-br from-[#f0f6ff] via-[#e8f0fe] to-[#dde8f8]",
      )}
    >
      {/* Background Image — dark mode only */}
      {isDark && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/header-page.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060f2e]/80 via-[#060f2e]/60 to-[#060f2e]/90" />
        </div>
      )}

      {/* Light mode decorative elements */}
      {!isDark && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-300/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      )}

      {/* Background Large Text */}
      <h2
        className={cn(
          "relative z-0 text-[18vw] md:text-[200px] font-black select-none transition-colors duration-300 leading-none",
          isDark ? "text-white/[0.06]" : "text-[#0a1a4f]/[0.04]",
        )}
      >
        {t.bgText}
        <span className="text-primary">.</span>
      </h2>

      {/* Draggable Cards Layer — Hidden on mobile/tablet for clean UX */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-10 pointer-events-none hidden xl:block"
      >
        <HeroCards isDark={isDark} containerRef={containerRef} />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className={cn(
            "container relative flex flex-col items-center text-center pointer-events-auto max-w-4xl mx-4 transition-all duration-500",
            "p-6 md:p-10 rounded-3xl border shadow-2xl backdrop-blur-md xl:backdrop-blur-xl mt-16 md:mt-0",
            isDark
              ? "bg-[#060f2e]/70 border-white/10 shadow-black/30"
              : "bg-white/70 border-[#d6e6ff]/80 shadow-primary/5",
            isRTL && "rtl",
          )}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" as const }}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
              isDark
                ? "bg-primary/15 text-primary border border-primary/25"
                : "bg-primary/10 text-primary border border-primary/20",
            )}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {language === "en"
              ? "Trusted Since Establishment"
              : "موثوق منذ التأسيس"}
          </motion.span>

          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight py-2",
              "bg-clip-text text-transparent bg-gradient-to-r",
              isDark
                ? "from-primary via-blue-400 to-cyan-300"
                : "from-primary via-blue-600 to-[#0b3b8f]",
            )}
          >
            {t.title}
          </h1>
          <p
            className={cn(
              "text-base md:text-xl mb-6 md:mb-8 max-w-2xl leading-relaxed font-medium",
              isDark ? "text-gray-300" : "text-[#4a6fa5]",
            )}
          >
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-6 sm:py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary text-white hover:bg-primary/90 border-none hover:-translate-y-0.5 font-bold"
            >
              <Link href="/products">{t.cta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-6 sm:py-6 rounded-full border-2 transition-all backdrop-blur-md hover:-translate-y-0.5 font-bold",
                isDark
                  ? "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
                  : "border-[#d6e6ff] bg-white/50 text-[#0a1a4f] hover:bg-white/80 hover:border-primary/40",
              )}
            >
              <Link href="#contact">{t.secondaryCta}</Link>
            </Button>
          </div>

          {/* Stats row */}
          <div
            className={cn(
              "grid grid-cols-3 gap-4 sm:gap-8 pt-6 mt-6 border-t w-full",
              isDark ? "border-white/10" : "border-[#d6e6ff]",
            )}
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.value} className="flex flex-col text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary">
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "text-[10px] sm:text-sm font-medium uppercase tracking-wider",
                    isDark ? "text-gray-400" : "text-[#4a6fa5]",
                  )}
                >
                  {language === "en" ? stat.label.en : stat.label.ar}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
