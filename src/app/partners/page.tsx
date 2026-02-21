"use client";

import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { PARTNERS, PARTNERS_PAGE_CONTENT } from "@/constants/partners";
import { PartnerCard } from "@/components/features/partners/PartnerCard";

export default function PartnersPage() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t =
    language === "en" ? PARTNERS_PAGE_CONTENT.en : PARTNERS_PAGE_CONTENT.ar;
  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className={cn("flex flex-col min-h-screen", isRTL && "rtl")}>
      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        breadcrumbHome={t.breadcrumbHome}
        breadcrumbCurrent={t.breadcrumbCurrent}
        isRTL={isRTL}
      />

      {/* ── Partners Grid ────────────────────────────────── */}
      <section
        className={cn(
          "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#070d24]"
            : "bg-gradient-to-b from-[#f0f6ff] via-[#f6f9ff] to-white",
        )}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isDark ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          ) : (
            <div className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          )}
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PARTNERS.map((partner, index) => (
              <PartnerCard
                key={index}
                partner={partner}
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
