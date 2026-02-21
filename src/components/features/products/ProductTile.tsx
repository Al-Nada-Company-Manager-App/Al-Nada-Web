"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { LazyImage } from "@/components/ui/LazyImage";
import type { CompanyProduct } from "@/constants/products";

interface ProductTileProps {
  product: CompanyProduct;
  index: number;
  language: string;
  isDark: boolean;
}

export function ProductTile({
  product,
  index,
  language,
  isDark,
}: ProductTileProps) {
  const title = language === "en" ? product.title.en : product.title.ar;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: "easeOut" }}
    >
      <Link href={`/partners/${product.slug}`} className="block group">
        <div
          className={cn(
            "relative aspect-square rounded-2xl overflow-hidden transition-all duration-500",
            isDark
              ? "ring-1 ring-white/10 hover:ring-primary/40"
              : "ring-1 ring-gray-200 hover:ring-primary/30 hover:shadow-xl hover:shadow-primary/10",
          )}
        >
          {/* Image */}
          <LazyImage
            src={product.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Default gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <h3 className="text-sm font-bold text-white whitespace-pre-line leading-snug">
              {title}
            </h3>
          </div>

          {/* Arrow — appears on hover */}
          <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
