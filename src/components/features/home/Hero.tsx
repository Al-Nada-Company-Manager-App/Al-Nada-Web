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

export function Hero() {
  const { language } = useLanguage();
  const { theme, resolvedTheme } = useTheme();

  const content = {
    en: {
      title: "Al-Nada Scientific Office",
      description:
        "Exclusive agent for reputable international companies producing specialized instruments for laboratories and environmental measurements. Your trusted partner in Egypt and the Middle East.",
      cta: "Explore Products",
      secondaryCta: "Contact Us",
      bgText: "AL NADA",
    },
    ar: {
      title: "مكتب الندى العلمي",
      description:
        "الوكيل الحصري لشركات عالمية مرموقة تنتج أجهزة متخصصة للمختبرات والقياسات البيئية. شريكك الموثوق في مصر والشرق الأوسط.",
      cta: "استكشف المنتجات",
      secondaryCta: "اتصل بنا",
      bgText: "AL NADA",
    },
  };

  const t = language === "en" ? content.en : content.ar;
  const isRTL = language === "ar";

  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/header-page.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Background Large Text */}
      <h2 className="relative z-0 text-[15vw] md:text-[200px] font-black text-white/10 select-none transition-colors duration-300">
        {t.bgText}
        <span className="text-primary">.</span>
      </h2>

      {/* Draggable Cards Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Cards />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div
          className={cn(
            "container relative flex flex-col items-center text-center p-6 md:p-10 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl pointer-events-auto max-w-4xl mx-4 transition-all duration-300",
            isRTL && "rtl",
          )}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 leading-tight py-2 drop-shadow-sm">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md font-medium">
            {t.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary text-white hover:bg-primary/90 border-none"
            >
              <Link href="/products">{t.cta}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md"
            >
              <Link href="#contact">{t.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const Cards = () => {
  const containerRef = useRef(null);

  const images = Array.from({ length: 27 }, (_, i) => {
    const idx = i + 1;
    return {
      src: `/img/Index/I${idx}.jpg`,
      alt: `Gallery Image ${idx}`,
      rotate: `${((i * 13) % 20) - 10}deg`,
      top: `${((i * 17) % 75) + 5}%`,
      left: `${((i * 23) % 80) + 5}%`,
      width: [6, 11, 22].includes(idx) ? "w-48 md:w-72" : "w-24 md:w-48",
    };
  });

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
        />
      ))}
    </div>
  );
};

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index"),
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute bg-background p-1.5 pb-2 shadow-2xl border border-white/20 rounded-xl cursor-grab active:cursor-grabbing transition-transform",
        className,
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0}
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
