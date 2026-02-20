"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import { SERVICES, SERVICES_PAGE_CONTENT } from "@/constants/services";
import { ServiceCard } from "@/components/features/home/Services";

export default function ServicesPage() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t =
    language === "en" ? SERVICES_PAGE_CONTENT.en : SERVICES_PAGE_CONTENT.ar;
  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className={cn("flex flex-col min-h-screen", isRTL && "rtl")}>
      {/* ── Page Hero Banner ─────────────────────────────── */}
      <section
        className={cn(
          "relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden",
          isDark
            ? "bg-[#060f2e]"
            : "bg-gradient-to-br from-[#0a1a4f] via-[#0d2266] to-[#112d7a]",
        )}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-8">
              {t.heroSubtitle}
            </p>

            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
              >
                <Home className="h-4 w-4" />
                {t.breadcrumbHome}
              </Link>
              <ChevronRight
                className={cn("h-4 w-4 text-white/40", isRTL && "rotate-180")}
              />
              <span className="text-primary font-semibold">
                {t.breadcrumbCurrent}
              </span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────── */}
      <section
        className={cn(
          "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#070d24]"
            : "bg-gradient-to-b from-[#f0f6ff] via-[#f6f9ff] to-white",
        )}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isDark ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          ) : (
            <div className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          )}
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                language={language}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
