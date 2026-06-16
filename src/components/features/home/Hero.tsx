"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { HERO_CONTENT, HERO_STATS } from "@/constants/hero";

import { HeroGallery } from "@/components/features/home/HeroGallery";
import { Marquee } from "@/components/ui/Marquee";

export function Hero() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = language === "en" ? HERO_CONTENT.en : HERO_CONTENT.ar;
  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const customerLogos = Array.from({ length: 15 }, (_, index) => ({
    src: `/img/customers/${index + 1}.jpg`,
    alt: `Customer logo ${index + 1}`,
  }));

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden transition-colors duration-500 min-h-[100svh] pt-28",
        isDark
          ? "bg-[#060f2e]"
          : "bg-gradient-to-br from-[#f0f6ff] via-[#e8f0fe] to-[#dde8f8]",
      )}
    >
      {/* ── Background Image — dark mode only ───────────────────── */}
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

      {/* ── Light mode decorative blobs ──────────────────────────── */}
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

      {/* ── Watermark text ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none overflow-hidden">
        <h2
          className={cn(
            "text-[22vw] sm:text-[18vw] md:text-[160px] lg:text-[200px] font-black select-none leading-none text-center",
            isDark ? "text-white/[0.05]" : "text-[#0a1a4f]/[0.04]",
          )}
        >
          {t.bgText}
          <span className="text-primary">.</span>
        </h2>
      </div>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-20 w-full">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Two-column on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-14 items-center pt-24 sm:pt-28 lg:pt-32 pb-8">

            {/* ── Text card ──────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className={cn(
                "relative flex flex-col items-center lg:items-start",
                "text-center lg:text-left",
                "p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl border shadow-xl backdrop-blur-md",
                isDark
                  ? "bg-[#060f2e]/70 border-white/10 shadow-black/30"
                  : "bg-white/70 border-[#d6e6ff]/80 shadow-primary/5",
                isRTL && "rtl",
              )}
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
                  "text-[10px] sm:text-xs font-bold uppercase tracking-wide mb-3 sm:mb-4",
                  isDark
                    ? "bg-primary/15 text-primary border border-primary/25"
                    : "bg-primary/10 text-primary border border-primary/20",
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                {language === "en" ? "Trusted Since Establishment" : "موثوق منذ التأسيس"}
              </motion.span>

              {/* Title */}
              <h1
                className={cn(
                  "text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl",
                  "font-extrabold tracking-tight leading-tight py-1 mb-3 sm:mb-4",
                  "bg-clip-text text-transparent bg-gradient-to-r",
                  isDark
                    ? "from-primary via-blue-400 to-cyan-300"
                    : "from-primary via-blue-600 to-[#0b3b8f]",
                )}
              >
                {t.title}
              </h1>

              {/* Description */}
              <p
                className={cn(
                  "text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-5 sm:mb-7",
                  "max-w-xl",
                  isDark ? "text-gray-300" : "text-[#4a6fa5]",
                )}
              >
                {t.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 w-full sm:w-auto mb-5">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "text-sm sm:text-base font-bold rounded-full px-6 sm:px-8",
                    "shadow-lg shadow-primary/25 hover:shadow-primary/40",
                    "bg-primary text-white hover:bg-primary/90 border-none",
                    "hover:-translate-y-0.5 transition-all",
                    "w-full sm:w-auto",
                  )}
                >
                  <Link href="/products">{t.cta}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={cn(
                    "text-sm sm:text-base font-bold rounded-full px-6 sm:px-8",
                    "border-2 transition-all backdrop-blur-md hover:-translate-y-0.5",
                    "w-full sm:w-auto",
                    isDark
                      ? "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
                      : "border-[#d6e6ff] bg-white/50 text-[#0a1a4f] hover:bg-white/80 hover:border-primary/40",
                  )}
                >
                  <Link href="/contact">{t.secondaryCta}</Link>
                </Button>
              </div>

              {/* Stats row */}
              <div
                className={cn(
                  "grid grid-cols-3 gap-3 sm:gap-6 pt-5 mt-5 border-t w-full",
                  isDark ? "border-white/10" : "border-[#d6e6ff]",
                )}
              >
                {HERO_STATS.map((stat) => (
                  <div key={stat.value} className="flex flex-col text-center mt-3">
                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary">
                      {stat.value}
                    </span>
                    <span
                      className={cn(
                        "text-[9px] xs:text-[10px] sm:text-xs font-semibold uppercase tracking-wide mt-0.5",
                        isDark ? "text-gray-400" : "text-[#4a6fa5]",
                      )}
                    >
                      {language === "en" ? stat.label.en : stat.label.ar}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Desktop gallery (right column) ─────────────────── */}
            <div className="hidden lg:block">
              <div
                className={cn(
                  "relative h-[520px] xl:h-[600px] w-full rounded-3xl border overflow-hidden",
                  isDark
                    ? "border-white/10 bg-[#060f2e]/40"
                    : "border-[#d6e6ff]/80 bg-white/60",
                )}
              >
                <HeroGallery isDark={isDark} compact={false} />
              </div>
            </div>
          </div>

          {/* ── Mobile gallery strip (below text card) ─────────── */}
          <div className="block lg:hidden pb-6">
            <div
              className={cn(
                "relative h-[200px] sm:h-[240px] w-full rounded-2xl border overflow-hidden",
                isDark
                  ? "border-white/10 bg-[#060f2e]/40"
                  : "border-[#d6e6ff]/80 bg-white/60",
              )}
            >
              <HeroGallery isDark={isDark} compact={true} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Customers marquee ────────────────────────────────────── */}
      <div className="relative z-20 w-full pb-10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className={cn("mt-2 sm:mt-6", isRTL && "rtl")}>
            <p
              className={cn(
                "text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3",
                isDark ? "text-gray-400" : "text-[#4a6fa5]",
              )}
            >
              {language === "en" ? "Our Customers" : "عملاؤنا"}
            </p>
            <div
              className={cn(
                "rounded-xl sm:rounded-2xl border overflow-hidden",
                isDark
                  ? "border-white/10 bg-white/5"
                  : "border-[#d6e6ff]/80 bg-white/60",
              )}
            >
              <Marquee
                pauseOnHover
                reverse={isRTL}
                className="py-1.5 sm:py-2 [--duration:30s] [--gap:0.75rem]"
              >
                {customerLogos.map((logo) => (
                  <div
                    key={logo.src}
                    className={cn(
                      "flex items-center justify-center rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 shrink-0",
                      isDark ? "bg-white/5" : "bg-white",
                    )}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="h-10 sm:h-14 w-auto object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
