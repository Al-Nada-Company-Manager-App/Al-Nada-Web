"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import {
  Facebook,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Footer() {
  const { language } = useLanguage();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8 px-6 transition-colors duration-300">
      <div
        className={cn(
          "max-w-7xl mx-auto grid md:grid-cols-4 gap-12",
          language === "ar" ? "text-right" : "text-left",
          language === "ar" && "rtl",
        )}
      >
        {/* Brand */}
        <div className="space-y-4">
          <div
            className={cn(
              "flex items-center gap-3",
              language === "ar" && "flex-row-reverse justify-end",
            )}
          >
            <div className="relative w-18 h-18 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 bg-white dark:bg-transparent">
              {mounted && (
                <Image
                  src={
                    currentTheme === "dark"
                      ? "/img/alnadadr.png"
                      : "/img/alnada.png"
                  }
                  alt={language === "en" ? "Al Nada Logo" : "شعار الندى"}
                  fill
                  className="object-contain p-1 -mt-1"
                />
              )}
            </div>
            <span className="font-bold text-xl text-foreground">
              {language === "en" ? "Al Nada Scientific" : "الندى العلمية"}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {language === "en"
              ? "Providing integrated environmental and scientific solutions since 2012."
              : "نقدم حلولاً بيئية وعلمية متكاملة منذ عام 2012."}
          </p>
          <div
            className={cn(
              "flex gap-3",
              language === "ar" && "justify-start", // Flex direction might need handling if RTL doesn't handle it naturally
            )}
          >
            {[
              {
                icon: Facebook,
                href: "#",
                label: { en: "Facebook", ar: "فيسبوك" },
              },
              {
                icon: Linkedin,
                href: "#",
                label: { en: "LinkedIn", ar: "لينكد إن" },
              },
              {
                icon: Twitter,
                href: "#",
                label: { en: "Twitter", ar: "تويتر" },
              },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                aria-label={
                  language === "en" ? social.label.en : social.label.ar
                }
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-foreground mb-6 text-lg relative inline-block">
            {language === "en" ? "Quick Links" : "روابط سريعة"}
            <span
              className={cn(
                "absolute -bottom-2 w-1/2 h-1 bg-primary rounded-full",
                language === "ar" ? "right-0" : "left-0",
              )}
            ></span>
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: { en: "Home", ar: "الرئيسية" }, href: "/" },
              { label: { en: "About Us", ar: "من نحن" }, href: "/#about" },
              { label: { en: "Services", ar: "خدماتنا" }, href: "/#services" },
              { label: { en: "Partners", ar: "شركاؤنا" }, href: "/#partners" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group",
                    language === "ar" && "flex-row-reverse",
                  )}
                >
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:w-3 transition-all",
                      language === "ar" && "ml-2",
                    )}
                  />
                  {language === "en" ? link.label.en : link.label.ar}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources / Services */}
        <div>
          <h3 className="font-bold text-foreground mb-6 text-lg relative inline-block">
            {language === "en" ? "Services" : "خدماتنا"}
            <span
              className={cn(
                "absolute -bottom-2 w-1/2 h-1 bg-primary rounded-full",
                language === "ar" ? "right-0" : "left-0",
              )}
            ></span>
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              {
                label: { en: "Lab Equipment", ar: "معدات المعامل" },
                href: "#",
              },
              {
                label: { en: "Scientific Devices", ar: "أجهزة علمية" },
                href: "#",
              },
              { label: { en: "Maintenance", ar: "عقود صيانة" }, href: "#" },
              { label: { en: "Consultation", ar: "استشارات" }, href: "#" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group",
                    language === "ar" && "flex-row-reverse",
                  )}
                >
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary",
                      language === "ar" &&
                        "rotate-180 translate-x-2 group-hover:-translate-x-0",
                    )}
                  />
                  {language === "en" ? link.label.en : link.label.ar}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-foreground mb-6 text-lg relative inline-block">
            {language === "en" ? "Contact Us" : "تواصل معنا"}
            <span
              className={cn(
                "absolute -bottom-2 w-1/2 h-1 bg-primary rounded-full",
                language === "ar" ? "right-0" : "left-0",
              )}
            ></span>
          </h3>
          <ul className="space-y-4 text-sm">
            <li
              className={cn(
                "flex items-start gap-3 text-muted-foreground group",
                language === "ar" && "flex-row-reverse",
              )}
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="mt-1">
                {language === "en" ? "Cairo, Egypt" : "القاهرة، مصر"}
              </span>
            </li>
            <li
              className={cn(
                "flex items-center gap-3 text-muted-foreground group",
                language === "ar" && "flex-row-reverse",
              )}
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span
                dir="ltr"
                className="group-hover:text-foreground transition-colors"
              >
                +20 100 701 5047
              </span>
            </li>
            <li
              className={cn(
                "flex items-center gap-3 text-muted-foreground group",
                language === "ar" && "flex-row-reverse",
              )}
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="group-hover:text-foreground transition-colors">
                info@alnadascientific.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()}{" "}
          {language === "en"
            ? "Al Nada Scientific. All rights reserved."
            : "الندى العلمية. جميع الحقوق محفوظة."}
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-foreground transition-colors">
            {language === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            {language === "en" ? "Terms of Service" : "شروط الخدمة"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
