"use client";

import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Hero } from "@/components/features/home/Hero";
import { AboutStory } from "@/components/features/about/Story";
import { AboutFeatures } from "@/components/features/about/Features";
import { Services } from "@/components/features/home/Services";
import { Partners } from "@/components/features/home/Partners";

export default function Home() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const isRTL = language === "ar";

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutStory isDark={isDark} isRTL={isRTL} isCompact={true} />
      <AboutFeatures isDark={isDark} isCompact={true} />
      <Services />
      <Partners />
    </div>
  );
}
