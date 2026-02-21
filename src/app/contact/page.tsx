"use client";

import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { CONTACT_PAGE_CONTENT } from "@/constants/contact";
import { ContactInfoCards } from "@/components/features/contact/InfoCards";
import { ContactFormMap } from "@/components/features/contact/FormMap";

export default function ContactPage() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const page =
    language === "en" ? CONTACT_PAGE_CONTENT.en : CONTACT_PAGE_CONTENT.ar;

  return (
    <div className={cn("flex flex-col min-h-screen", isRTL && "rtl")}>
      <PageHero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        breadcrumbHome={page.breadcrumbHome}
        breadcrumbCurrent={page.breadcrumbCurrent}
        isRTL={isRTL}
      />
      <ContactInfoCards language={language} isDark={isDark} />
      <ContactFormMap language={language} isDark={isDark} isRTL={isRTL} />
    </div>
  );
}
