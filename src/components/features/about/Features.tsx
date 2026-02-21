"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { ABOUT_CONTENT, ABOUT_FEATURES } from "@/constants/about";

const featureIcons: Record<string, React.FC<{ className?: string }>> = {
  users: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "check-circle": (p) => <CheckCircle {...p} />,
  "message-circle": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  headphones: (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),
};

export interface AboutFeaturesProps {
  isDark: boolean;
  isCompact?: boolean; // If true, matches the original Home page aesthetics
}

export function AboutFeatures({
  isDark,
  isCompact = false,
}: AboutFeaturesProps) {
  const { language } = useLanguage();
  const about = language === "en" ? ABOUT_CONTENT.en : ABOUT_CONTENT.ar;
  const isRTL = language === "ar";

  return (
    <section
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#0a1433]"
          : isCompact
            ? "bg-gradient-to-b from-[#edf3ff] via-[#f0f6ff] to-white"
            : "bg-gradient-to-b from-white via-[#f6f9ff] to-[#edf3ff]",
      )}
    >
      {/* Decorative background for the Home page version */}
      {isCompact && !isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
      )}
      {isCompact && isDark && (
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
          initial={{ opacity: 0, y: isCompact ? 40 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isCompact ? "-80px" : undefined }}
          transition={{
            duration: isCompact ? 0.7 : 0.6,
            ease: isCompact ? "easeOut" : undefined,
          }}
          className={cn("text-center mb-14", isCompact && "mb-12 md:mb-16")}
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
            {about.featuresTag}
          </span>
          <h2
            className={cn(
              isCompact
                ? "text-3xl md:text-4xl font-extrabold tracking-tight"
                : "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {about.featuresTitle}
          </h2>
          <p
            className={cn(
              "mt-4 max-w-2xl mx-auto text-lg leading-relaxed",
              isDark ? "text-gray-400" : "text-[#4a6fa5]",
            )}
          >
            {about.featuresDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_FEATURES.map((feature, i) => {
            const IconComponent = featureIcons[feature.icon];
            const label =
              language === "en" ? feature.label.en : feature.label.ar;
            const title =
              language === "en" ? feature.title.en : feature.title.ar;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: isCompact ? "easeOut" : undefined,
                }}
                className={cn(
                  isCompact
                    ? "group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                    : "group relative p-8 rounded-2xl text-center transition-all duration-500",
                  isCompact &&
                    isDark &&
                    "bg-[#0c1a3d] border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10",
                  isCompact &&
                    !isDark &&
                    "bg-white border-[#d6e6ff] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
                  !isCompact &&
                    isDark &&
                    "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30",
                  !isCompact &&
                    !isDark &&
                    "bg-white hover:bg-primary/5 border border-gray-100 hover:border-primary/30 shadow-lg shadow-primary/5",
                )}
              >
                <div
                  className={cn(
                    isCompact
                      ? "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                      : "mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
                    isDark
                      ? "bg-primary/15 group-hover:bg-primary/25"
                      : "bg-primary/10 group-hover:bg-primary/20",
                  )}
                >
                  {IconComponent && (
                    <IconComponent
                      className={cn(
                        "text-primary",
                        isCompact ? "h-7 w-7" : "w-7 h-7",
                      )}
                    />
                  )}
                </div>

                <p
                  className={cn(
                    isCompact
                      ? "text-sm font-semibold mb-1"
                      : "text-xs font-bold uppercase tracking-wider mb-1",
                    isDark ? "text-primary/80" : "text-primary",
                  )}
                >
                  {label}
                </p>
                <h3
                  className={cn(
                    "text-lg font-bold",
                    isDark ? "text-white" : "text-[#0a1a4f]",
                  )}
                >
                  {title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
