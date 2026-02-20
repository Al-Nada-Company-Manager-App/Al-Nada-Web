"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/LazyImage";
import { PARTNERS_CONTENT, PARTNERS } from "@/constants/partners";
import type { PartnerItem } from "@/constants/partners";

export function Partners() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = language === "en" ? PARTNERS_CONTENT.en : PARTNERS_CONTENT.ar;
  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;

  // Show first 3 on home page
  const previewPartners = PARTNERS.slice(0, 3);

  return (
    <section
      id="partners"
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#0a1433]"
          : "bg-gradient-to-b from-[#edf3ff] via-[#f6f9ff] to-white",
      )}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isDark ? (
          <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        ) : (
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        )}
      </div>

      <div
        className={cn(
          "container max-w-7xl mx-auto px-4 md:px-8 relative",
          isRTL && "rtl",
        )}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
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
            {t.tag}
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {t.title}
          </h2>
          <p
            className={cn(
              "mt-4 max-w-2xl mx-auto text-lg leading-relaxed",
              isDark ? "text-gray-400" : "text-[#4a6fa5]",
            )}
          >
            {t.description}
          </p>
        </motion.div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {previewPartners.map((partner, index) => (
            <PartnerCard
              key={index}
              partner={partner}
              index={index}
              language={language}
              isDark={isDark}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 text-center"
        >
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary text-white hover:bg-primary/90 border-none hover:-translate-y-0.5 font-bold gap-2"
          >
            <Link href="/partners">
              {t.cta}
              <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Shared Partner Card ────────────────────────────────────────────────────

export function PartnerCard({
  partner,
  index,
  language,
  isDark,
}: {
  partner: PartnerItem;
  index: number;
  language: string;
  isDark: boolean;
}) {
  const title = language === "en" ? partner.title.en : partner.title.ar;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/partners/${partner.slug}`}>
        <div
          className={cn(
            "relative h-72 md:h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500",
            isDark
              ? "shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-primary/15"
              : "shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20",
          )}
        >
          {/* Background Image */}
          <LazyImage
            src={partner.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/70 group-hover:via-black/30 z-[1]" />

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
            {/* Logo Circle */}
            <div
              className={cn(
                "mb-5 h-16 w-16 rounded-full overflow-hidden border-2 shadow-lg transition-transform duration-500 group-hover:scale-110",
                "bg-white border-white/80 shadow-black/20",
              )}
            >
              <LazyImage
                src={partner.logo}
                alt=""
                width={64}
                height={64}
                className="object-cover h-full w-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg leading-tight max-w-[280px]">
              {title}
            </h3>
          </div>

          {/* Subtle border glow on hover */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl border-2 transition-all duration-500 opacity-0 group-hover:opacity-100 z-[2]",
              "border-primary/40",
            )}
          />
        </div>
      </Link>
    </motion.div>
  );
}
