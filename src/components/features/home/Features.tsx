"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, Users, MessageCircle, Headphones } from "lucide-react";
import { ABOUT_CONTENT, ABOUT_FEATURES } from "@/constants/about";

const featureIcons = {
  users: Users,
  "check-circle": CheckCircle,
  "message-circle": MessageCircle,
  headphones: Headphones,
} as const;

export function Features() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = language === "en" ? ABOUT_CONTENT.en : ABOUT_CONTENT.ar;
  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#0a1433]"
          : "bg-gradient-to-b from-[#edf3ff] via-[#f0f6ff] to-white",
      )}
    >
      {/* Decorative background */}
      {!isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
      )}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-3xl" />
        </div>
      )}

      <div
        className={cn(
          "container max-w-7xl mx-auto px-4 md:px-8",
          isRTL && "rtl",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
                isDark
                  ? "bg-primary/15 text-primary border border-primary/25"
                  : "bg-primary/10 text-primary border border-primary/20",
              )}
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {t.featuresTag}
            </span>
            <h3
              className={cn(
                "text-3xl md:text-4xl font-extrabold tracking-tight",
                isDark ? "text-white" : "text-[#0a1a4f]",
              )}
            >
              {t.featuresTitle}
            </h3>
            <p
              className={cn(
                "mt-4 max-w-2xl mx-auto text-lg leading-relaxed",
                isDark ? "text-gray-400" : "text-[#4a6fa5]",
              )}
            >
              {t.featuresDescription}
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_FEATURES.map((feature, index) => {
              const Icon = featureIcons[feature.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1",
                    isDark
                      ? "bg-[#0c1a3d] border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                      : "bg-white border-[#d6e6ff] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
                      isDark
                        ? "bg-primary/15 group-hover:bg-primary/25"
                        : "bg-primary/10 group-hover:bg-primary/20",
                    )}
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Label */}
                  <p
                    className={cn(
                      "text-sm font-semibold mb-1",
                      isDark ? "text-primary/80" : "text-primary",
                    )}
                  >
                    {language === "en" ? feature.label.en : feature.label.ar}
                  </p>

                  {/* Title */}
                  <h4
                    className={cn(
                      "text-lg font-bold",
                      isDark ? "text-white" : "text-[#0a1a4f]",
                    )}
                  >
                    {language === "en" ? feature.title.en : feature.title.ar}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
