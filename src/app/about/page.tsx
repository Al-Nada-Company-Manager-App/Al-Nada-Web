"use client";

import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { ABOUT_PAGE_CONTENT } from "@/constants/about";
import { AboutStory } from "@/components/features/about/Story";
import { AboutFeatures } from "@/components/features/about/Features";
import { AboutDepartments } from "@/components/features/about/Departments";
import { AboutTeam } from "@/components/features/about/Team";

export default function AboutPage() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const page =
    language === "en" ? ABOUT_PAGE_CONTENT.en : ABOUT_PAGE_CONTENT.ar;

  return (
    <div className={cn("flex flex-col min-h-screen", isRTL && "rtl")}>
      <PageHero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        breadcrumbHome={page.breadcrumbHome}
        breadcrumbCurrent={page.breadcrumbCurrent}
        isRTL={isRTL}
      />
      <AboutStory isDark={isDark} isRTL={isRTL} />
      <AboutFeatures isDark={isDark} />
      <AboutDepartments isDark={isDark} />
      <AboutTeam isDark={isDark} />
    </div>
  );
}
