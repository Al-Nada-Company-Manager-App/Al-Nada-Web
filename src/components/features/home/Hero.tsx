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

  return (
    <section
      className={cn(
        "relative grid min-h-screen w-full place-content-center overflow-hidden transition-colors duration-500",
        // Light mode: clean bright bg | Dark mode: deep navy
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
          "relative z-0 text-[15vw] md:text-[200px] font-black select-none transition-colors duration-300",
          isDark ? "text-white/[0.06]" : "text-[#0a1a4f]/[0.04]",
        )}
      >
        {t.bgText}
        <span className="text-primary">.</span>
      </h2>

      {/* Draggable Cards Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Cards isDark={isDark} />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className={cn(
            "container relative flex flex-col items-center text-center pointer-events-auto max-w-4xl mx-4 transition-all duration-500",
            "p-6 md:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl",
            isDark
              ? "bg-black/50 border-white/10 shadow-black/30"
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
              "text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight py-2",
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
              "text-lg md:text-xl mb-8 max-w-2xl leading-relaxed font-medium",
              isDark ? "text-gray-300" : "text-[#4a6fa5]",
            )}
          >
            {t.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary text-white hover:bg-primary/90 border-none hover:-translate-y-0.5 font-bold"
            >
              <Link href="/products">{t.cta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn(
                "text-lg px-8 py-6 rounded-full border-2 transition-all backdrop-blur-md hover:-translate-y-0.5 font-bold",
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
              "flex gap-8 pt-6 mt-6 border-t",
              isDark ? "border-white/10" : "border-[#d6e6ff]",
            )}
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.value} className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-extrabold text-primary">
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "text-xs sm:text-sm font-medium",
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

// ─── Draggable Cards ────────────────────────────────────────

const Cards = ({ isDark }: { isDark: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = HERO_IMAGES;

  return (
    <div
      className="absolute inset-0 z-10 w-full h-full pointer-events-auto"
      ref={containerRef}
    >
      {images.map((img, i) => (
        <Card
          key={i}
          containerRef={containerRef}
          src={img.src}
          alt={img.alt}
          rotate={img.rotate}
          top={img.top}
          left={img.left}
          className={img.width}
          isDark={isDark}
          index={i}
        />
      ))}
    </div>
  );
};

// ─── Single Draggable Card ──────────────────────────────────

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
  isDark: boolean;
  index: number;
}

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
  isDark,
  index,
}: CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;
    els.forEach((el) => {
      const z = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index"),
      );
      if (!isNaN(z) && z > maxZIndex) {
        maxZIndex = z;
      }
    });
    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut" as const,
      }}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute rounded-xl cursor-grab active:cursor-grabbing transition-shadow duration-300",
        // Card frame styling — very different for light vs dark
        isDark
          ? "bg-[#0f1a3a] p-1.5 pb-2 border border-white/15 shadow-2xl shadow-black/40 hover:shadow-primary/20"
          : "bg-white p-1.5 pb-2 border border-[#d6e6ff] shadow-xl shadow-blue-900/10 hover:shadow-primary/20",
        className,
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="relative w-full h-auto rounded-lg overflow-hidden select-none">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover pointer-events-none select-none"
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
