"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LazyImage } from "@/components/ui/LazyImage";
import { PartnerProductCard } from "@/components/features/partners/PartnerProductCard";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { PartnerItem } from "@/constants/partners";
import type { PartnerDetail } from "@/constants/partner-details";

interface PartnerDetailContentProps {
  partner: PartnerItem;
  detail: PartnerDetail | undefined;
  language: string;
  isDark: boolean;
  isRTL: boolean;
}

export function PartnerDetailContent({
  partner,
  detail,
  language,
  isDark,
  isRTL,
}: PartnerDetailContentProps) {
  const t = (obj: { en: string; ar: string }) =>
    language === "en" ? obj.en : obj.ar;

  return (
    <>
      {/* ── About Section ──────────────────────────────── */}
      <section
        className={cn(
          "relative py-20 md:py-28 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#070d24]"
            : "bg-gradient-to-b from-[#f0f6ff] via-[#f6f9ff] to-white",
        )}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isDark ? (
            <>
              <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
              <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
            </>
          ) : (
            <>
              <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-blue-400/5 blur-[100px]" />
            </>
          )}
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          {/* Partner hero with images and intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image Stack */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative">
                <div
                  className={cn(
                    "relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]",
                    isDark ? "shadow-black/40" : "shadow-primary/15",
                  )}
                >
                  <LazyImage
                    src={partner.image}
                    alt={t(partner.title)}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Logo overlay */}
                <div
                  className={cn(
                    "absolute -bottom-6 rounded-xl overflow-hidden shadow-xl border-4 w-24 h-24 md:w-28 md:h-28",
                    isRTL ? "-right-4 md:-right-6" : "-left-4 md:-left-6",
                    isDark
                      ? "bg-white/95 border-[#0d1a3a] shadow-black/30"
                      : "bg-white border-white shadow-primary/10",
                  )}
                >
                  <LazyImage
                    src={partner.logo}
                    alt=""
                    width={112}
                    height={112}
                    className="object-cover h-full w-full p-2"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content intro */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span
                className={cn(
                  "inline-block px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6",
                  isDark
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "bg-primary/10 text-primary border border-primary/20",
                )}
              >
                {isRTL ? "الشركة" : "Company"}
              </span>
              <h2
                className={cn(
                  "text-3xl md:text-4xl font-bold mb-6 leading-tight",
                  isDark ? "text-white" : "text-[#0a1a4f]",
                )}
              >
                {detail ? t(detail.pageTitle) : t(partner.title)}
              </h2>
              {detail && detail.sections.length > 0 && (
                <p
                  className={cn(
                    "text-base md:text-lg leading-relaxed",
                    isDark ? "text-white/60" : "text-[#4a6fa5]",
                  )}
                >
                  {t(detail.sections[0].content)}
                </p>
              )}
            </motion.div>
          </div>

          {/* ── Content Sections ──────────────────────── */}
          {detail && detail.sections.length > 1 && (
            <div className="space-y-12 md:space-y-16">
              {detail.sections.slice(1).map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={cn(
                    "rounded-2xl p-8 md:p-10 border transition-colors duration-500",
                    isDark
                      ? "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05]"
                      : "bg-white/60 border-[#0a1a4f]/[0.06] hover:bg-white/80 shadow-sm",
                  )}
                >
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-bold mb-4 flex items-center gap-3",
                      isDark ? "text-white" : "text-[#0a1a4f]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold",
                        isDark
                          ? "bg-primary/20 text-primary"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      {index + 1}
                    </span>
                    {t(section.heading)}
                  </h3>

                  {t(section.content) && (
                    <p
                      className={cn(
                        "text-base leading-relaxed mb-4",
                        isDark ? "text-white/55" : "text-[#4a6fa5]",
                      )}
                    >
                      {t(section.content)}
                    </p>
                  )}

                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-3 mt-4">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={cn(
                            "flex items-start gap-3 text-sm md:text-base",
                            isDark ? "text-white/55" : "text-[#4a6fa5]",
                          )}
                        >
                          <ChevronRight
                            className={cn(
                              "flex-shrink-0 w-4 h-4 mt-1 text-primary",
                              isRTL && "rotate-180",
                            )}
                          />
                          <span>{t(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Products Preview Section ─────────────────── */}
      {detail && detail.products.length > 0 && (
        <section
          className={cn(
            "relative py-20 md:py-28 overflow-hidden transition-colors duration-500",
            isDark
              ? "bg-[#060b20]"
              : "bg-gradient-to-t from-[#f0f6ff] via-[#f6f9ff] to-white",
          )}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {isDark ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
            ) : (
              <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
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
                  ? `منتجات ${t(partner.title).split(" - ")[0]}`
                  : `${t(partner.title).split(" - ")[0]} Products`}
              </h2>
            </motion.div>

            {/* Products grid (show first 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
              {detail.products.slice(0, 4).map((product, index) => (
                <PartnerProductCard
                  key={`${partner.slug}-${index}`}
                  product={product}
                  index={index}
                  language={language}
                  isDark={isDark}
                />
              ))}
            </div>

            {/* View All Products CTA */}
            {detail.products.length > 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link
                  href={`/partners/${partner.slug}/products`}
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300",
                    "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
                  )}
                >
                  {isRTL
                    ? `عرض جميع المنتجات (${detail.products.length})`
                    : `View All Products (${detail.products.length})`}
                  <ArrowRight
                    className={cn("w-4 h-4", isRTL && "rotate-180")}
                  />
                </Link>
              </motion.div>
            )}

            {/* If 4 or fewer products, still show View All link */}
            {detail.products.length <= 4 && detail.products.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link
                  href={`/partners/${partner.slug}/products`}
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300",
                    "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
                  )}
                >
                  {isRTL ? "صفحة المنتجات" : "Products Page"}
                  <ArrowRight
                    className={cn("w-4 h-4", isRTL && "rotate-180")}
                  />
                </Link>
              </motion.div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
