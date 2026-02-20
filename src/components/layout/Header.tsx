"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { Globe, Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: { en: "Home", ar: "الرئيسية" }, href: "/" },
    { label: { en: "About", ar: "من نحن" }, href: "/about" },
    { label: { en: "Services", ar: "خدماتنا" }, href: "/services" },
    { label: { en: "Partners", ar: "شركاؤنا" }, href: "/partners" },
  ];

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const isLinkActive = (item: { href: string }) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-7 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1237px] h-[60px] rounded-full flex items-center px-4 md:px-6 lg:px-8 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl shadow-primary/5"
            : "bg-background/40 backdrop-blur-md border border-white/20 dark:border-white/5",
          language === "ar" ? "flex-row-reverse" : "flex-row",
        )}
      >
        {/* Centered Navigation Group */}
        <div
          className={cn(
            "flex-1 flex items-center gap-6 lg:gap-10",
            language === "ar"
              ? "justify-center flex-row-reverse"
              : "justify-center",
          )}
        >
          {/* Left Links (Desktop) */}
          <div
            className={cn(
              "hidden md:flex items-center gap-6 lg:gap-8",
              language === "ar" ? "flex-row-reverse" : "",
            )}
          >
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-all duration-300",
                  isLinkActive(item)
                    ? scrolled ? "text-ring"
                      : "text-primary"
                    : "text-foreground hover:text-primary dark:text-gray-300 dark:hover:text-white",
                )}
              >
                {language === "en" ? item.label.en : item.label.ar}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="shrink-0 mx-4 group relative z-10">
            <div
              className={cn(
                "flex items-center justify-center w-24 h-24 rounded-full transition-all duration-300",
                "bg-white dark:bg-background",
                "border-[4px] border-primary",
                "shadow-2xl shadow-primary/20",
              )}
            >
              <div className="relative w-25 h-25 -mt-2">
                {mounted && (
                  <Image
                    src={
                      currentTheme === "dark"
                        ? "/img/alnadadr.png"
                        : "/img/alnada.png"
                    }
                    alt="Al Nada Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
            </div>
          </Link>

          {/* Right Links (Desktop) */}
          <div
            className={cn(
              "hidden md:flex items-center gap-6 lg:gap-8",
              language === "ar" ? "flex-row-reverse" : "",
            )}
          >
            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-all duration-300",
                  isLinkActive(item)
                    ? scrolled ? "text-ring" :  "text-primary"
                    : "text-foreground hover:text-primary dark:text-gray-300 dark:hover:text-white",
                )}
              >
                {language === "en" ? item.label.en : item.label.ar}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div
          className={cn(
            "absolute flex items-center gap-3",
            language === "ar"
              ? "left-6 lg:left-8 flex-row-reverse"
              : "right-6 lg:right-8",
          )}
        >
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 text-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            {mounted &&
              (currentTheme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              ))}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-1 text-xs font-bold text-foreground hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors uppercase"
          >
            <Globe className="h-4 w-4" />
            <span>{language === "en" ? "AR" : "EN"}</span>
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 text-sm"
          >
            {language === "en" ? "Contact" : "اتصل بنا"}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary dark:text-gray-300 dark:hover:text-white p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden pt-32 px-6 transition-all duration-300">
          <div className="flex flex-col gap-8 items-center text-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-3xl font-bold transition-colors",
                  isLinkActive(item)
                    ? "text-primary"
                    : "text-foreground hover:text-primary",
                )}
              >
                {language === "en" ? item.label.en : item.label.ar}
              </Link>
            ))}

            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-primary"
            >
              <Globe className="h-5 w-5" />
              <span>
                {language === "en" ? "Switch to Arabic" : "التبديل للإنجليزية"}
              </span>
            </button>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full max-w-xs px-8 py-4 rounded-full font-bold bg-primary text-primary-foreground text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all"
            >
              {language === "en" ? "Contact Us" : "تواصل معنا"}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
