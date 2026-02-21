import Link from "next/link";
import { motion } from "framer-motion";
import { LazyImage } from "@/components/ui/LazyImage";
import { cn } from "@/lib/utils";
import type { PartnerItem } from "@/constants/partners";

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
