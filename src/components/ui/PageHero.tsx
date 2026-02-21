"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  isRTL?: boolean;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbHome,
  breadcrumbCurrent,
  isRTL = false,
}: PageHeroProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section
      className={cn(
        "relative pt-32 pb-28 md:pt-44 md:pb-36 overflow-hidden",
        isDark
          ? "bg-[#060f2e]"
          : "bg-gradient-to-br from-[#edf2ff] via-[#e0eaff] to-[#d4dffa]",
      )}
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={cn(
            "absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[120px] animate-pulse",
            isDark ? "bg-primary/15" : "bg-primary/10",
          )}
        />
        <div
          className={cn(
            "absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[100px]",
            isDark ? "bg-blue-600/10" : "bg-blue-400/10",
          )}
        />
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px]",
            isDark ? "bg-primary/5" : "bg-primary/8",
          )}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className={cn(
          "absolute inset-0",
          isDark ? "opacity-[0.03]" : "opacity-[0.06]",
        )}
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,20,80,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,20,80,.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Breadcrumb pill */}
          <nav className="flex items-center justify-center gap-2 text-xs mb-8">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all",
                isDark
                  ? "bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10"
                  : "bg-white/60 border-[#0a1a4f]/10 text-[#0a1a4f]/60 hover:text-[#0a1a4f] hover:bg-white/80",
              )}
            >
              <Home className="h-3 w-3" />
              {breadcrumbHome}
            </Link>
            <ChevronRight
              className={cn(
                "h-3 w-3",
                isDark ? "text-white/30" : "text-[#0a1a4f]/30",
                isRTL && "rotate-180",
              )}
            />
            <span
              className={cn(
                "px-3 py-1.5 rounded-full font-semibold",
                isDark
                  ? "bg-primary/15 border border-primary/30 text-primary"
                  : "bg-primary/10 border border-primary/20 text-primary",
              )}
            >
              {breadcrumbCurrent}
            </span>
          </nav>

          <h1
            className={cn(
              "text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "text-base md:text-lg max-w-xl mx-auto leading-relaxed",
              isDark ? "text-white/50" : "text-[#4a6fa5]",
            )}
          >
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
