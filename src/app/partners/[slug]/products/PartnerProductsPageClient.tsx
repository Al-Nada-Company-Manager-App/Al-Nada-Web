"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { PARTNERS } from "@/constants/partners";
import { getPartnerDetail } from "@/constants/partner-details";
import { PartnerProductCard } from "@/components/features/partners/PartnerProductCard";
import { motion } from "framer-motion";

export default function PartnerProductsPageClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const partner = PARTNERS.find((p) => p.slug === slug);
  const detail = getPartnerDetail(slug);

  if (!partner || !detail) {
    return null;
  }

  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const partnerName = (
    language === "en" ? partner.title.en : partner.title.ar
  ).split(" - ")[0];

  return (
    <div className={cn("flex flex-col min-h-screen", isRTL && "rtl")}>
      <PageHero
        title={isRTL ? `منتجات ${partnerName}` : `${partnerName} Products`}
        subtitle={
          isRTL
            ? `تصفح جميع المنتجات المتاحة من ${partnerName}`
            : `Browse all available products from ${partnerName}`
        }
        breadcrumbHome={isRTL ? "الرئيسية" : "Home"}
        breadcrumbCurrent={isRTL ? "المنتجات" : "Products"}
        isRTL={isRTL}
      />

      <section
        className={cn(
          "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#070d24]"
            : "bg-gradient-to-b from-[#f0f6ff] via-[#f6f9ff] to-white",
        )}
      >
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isDark ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          ) : (
            <div className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          )}
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className={cn(
                "inline-block px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6",
                isDark
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "bg-primary/10 text-primary border border-primary/20",
              )}
            >
              {isRTL ? "المنتجات" : "Products"}
            </span>
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4",
                isDark ? "text-white" : "text-[#0a1a4f]",
              )}
            >
              {isRTL
                ? `جميع منتجات ${partnerName}`
                : `All ${partnerName} Products`}
            </h2>
            <p
              className={cn(
                "text-base max-w-2xl mx-auto",
                isDark ? "text-white/50" : "text-[#4a6fa5]",
              )}
            >
              {detail.products.length}{" "}
              {isRTL ? "منتج متاح" : "products available"}
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {detail.products.map((product, index) => (
              <PartnerProductCard
                key={index}
                product={product}
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
