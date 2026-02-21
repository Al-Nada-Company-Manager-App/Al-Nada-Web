"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";
import { PRODUCTS_PAGE_CONTENT, COMPANY_PRODUCTS } from "@/constants/products";
import { ProductTile } from "./ProductTile";

export function ProductsCompanies({ isDark }: { isDark: boolean }) {
  const { language } = useLanguage();
  const t =
    language === "en" ? PRODUCTS_PAGE_CONTENT.en : PRODUCTS_PAGE_CONTENT.ar;

  return (
    <section
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark ? "bg-[#0a1230]" : "bg-gradient-to-b from-white to-[#f0f6ff]",
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className={cn(
              "inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5",
              isDark
                ? "bg-white/5 text-primary border border-white/10"
                : "bg-[#0a1a4f]/5 text-primary border border-[#0a1a4f]/10",
            )}
          >
            {t.companiesTag}
          </span>
          <h2
            className={cn(
              "text-4xl md:text-5xl font-black tracking-tight",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {t.companiesTitle}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {COMPANY_PRODUCTS.map((product, index) => (
            <ProductTile
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
  );
}
