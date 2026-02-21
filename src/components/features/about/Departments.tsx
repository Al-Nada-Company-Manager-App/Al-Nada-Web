"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";
import { LazyImage } from "@/components/ui/LazyImage";
import { ABOUT_PAGE_CONTENT } from "@/constants/about";
import { DEPARTMENTS } from "@/constants/team";

interface AboutDepartmentsProps {
  isDark: boolean;
}

export function AboutDepartments({ isDark }: AboutDepartmentsProps) {
  const { language } = useLanguage();

  return (
    <section
      className={cn(
        "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
        isDark
          ? "bg-[#070d24]"
          : "bg-gradient-to-b from-[#edf3ff] via-[#f6f9ff] to-white",
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            {language === "en"
              ? ABOUT_PAGE_CONTENT.en.departmentsTag
              : ABOUT_PAGE_CONTENT.ar.departmentsTag}
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {language === "en"
              ? ABOUT_PAGE_CONTENT.en.departmentsTitle
              : ABOUT_PAGE_CONTENT.ar.departmentsTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept, i) => {
            const title = language === "en" ? dept.title.en : dept.title.ar;
            const subtitle =
              language === "en" ? dept.subtitle.en : dept.subtitle.ar;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <div
                  className={cn(
                    "relative h-72 rounded-2xl overflow-hidden transition-all duration-500",
                    isDark
                      ? "shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-primary/15"
                      : "shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20",
                  )}
                >
                  <LazyImage
                    src={dept.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
