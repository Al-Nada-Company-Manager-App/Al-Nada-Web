"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";
import { PARTNERS } from "@/constants/partners";
import { getPartnerDetail } from "@/constants/partner-details";
import { PartnerDetailContent } from "@/components/features/partners/PartnerDetailContent";

export default function PartnerPageClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const partner = PARTNERS.find((p) => p.slug === slug);
  const detail = getPartnerDetail(slug);

  if (!partner) {
    return null;
  }

  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const partnerName = language === "en" ? partner.title.en : partner.title.ar;
  const pageTitle = detail
    ? language === "en"
      ? detail.pageTitle.en
      : detail.pageTitle.ar
    : partnerName;

  return (
    <div className={cn("flex flex-col min-h-screen", isRTL && "rtl")}>
      <PageHero
        title={partnerName.split(" - ")[0] || partnerName}
        subtitle={pageTitle}
        breadcrumbHome={isRTL ? "الرئيسية" : "Home"}
        breadcrumbCurrent={partnerName.split(" - ")[0] || partnerName}
        isRTL={isRTL}
      />

      <PartnerDetailContent
        partner={partner}
        detail={detail}
        language={language}
        isDark={isDark}
        isRTL={isRTL}
      />
    </div>
  );
}
