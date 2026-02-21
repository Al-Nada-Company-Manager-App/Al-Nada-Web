"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES_CONTENT, SERVICES } from "@/constants/services";
import { ServiceCard } from "@/components/features/services/ServiceCard";

export function Services() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = language === "en" ? SERVICES_CONTENT.en : SERVICES_CONTENT.ar;
  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;

  // Show only first 3 services on the home page
  const previewServices = SERVICES.slice(0, 3);

  return (
    <section
      id="services"
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#070d24]"
          : "bg-gradient-to-b from-white via-[#f6f9ff] to-[#edf3ff]",
      )}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isDark ? (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        ) : (
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
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

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {previewServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
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
            <Link href="/services">
              {t.cta}
              <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
