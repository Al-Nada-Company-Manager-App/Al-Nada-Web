"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LazyImage } from "@/components/ui/LazyImage";
import { ExternalLink, FileText } from "lucide-react";
import type { PartnerProduct } from "@/constants/partner-details";

interface PartnerProductCardProps {
  product: PartnerProduct;
  index: number;
  language: string;
  isDark: boolean;
}

export function PartnerProductCard({
  product,
  index,
  language,
  isDark,
}: PartnerProductCardProps) {
  const name = language === "en" ? product.name.en : product.name.ar;
  const isRTL = language === "ar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="group h-full"
    >
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col",
          isDark
            ? "bg-white/[0.04] border border-white/[0.08] hover:border-primary/30 hover:bg-white/[0.06] shadow-lg shadow-black/20"
            : "bg-white border border-[#0a1a4f]/[0.06] hover:border-primary/20 hover:shadow-xl shadow-md shadow-primary/5",
        )}
      >
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <LazyImage
            src={product.image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
            {product.detailUrl && (
              <a
                href={product.detailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300",
                  "bg-white/95 text-[#0a1a4f] hover:bg-white shadow-lg backdrop-blur-sm",
                  "transform translate-y-4 group-hover:translate-y-0",
                )}
              >
                {isRTL ? "عرض التفاصيل" : "View Details"}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            
            <a
              href={`/contact?subject=${encodeURIComponent(isRTL ? `طلب تسعير: ${name}` : `Quote Request: ${name}`)}`}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300",
                "bg-primary text-white hover:bg-primary/90 shadow-lg",
                "transform translate-y-4 group-hover:translate-y-0",
              )}
            >
              {isRTL ? "طلب تسعير" : "Request Quote"}
              <FileText className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <h4
            className={cn(
              "font-semibold text-sm md:text-base leading-snug text-center",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {name}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}
