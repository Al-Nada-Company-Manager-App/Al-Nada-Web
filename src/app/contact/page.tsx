"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Home,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {
  CONTACT_PAGE_CONTENT,
  CONTACT_INFO_CARDS,
  CONTACT_FORM_CONTENT,
  FORMSPREE_ENDPOINT,
  GOOGLE_MAPS_EMBED_URL,
} from "@/constants/contact";

/* ────────────────────────────────────────────────────
   Icon mapping for the contact info cards
──────────────────────────────────────────────────── */
const cardIcons: Record<string, React.FC<{ className?: string }>> = {
  "map-pin": (p) => <MapPin {...p} />,
  whatsapp: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  phone: (p) => <Phone {...p} />,
  mail: (p) => <Mail {...p} />,
};

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
      {/* ══════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════ */}
      <section
        className={cn(
          "relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden",
          isDark
            ? "bg-[#060f2e]"
            : "bg-gradient-to-br from-[#0a1a4f] via-[#0d2266] to-[#112d7a]",
        )}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              {page.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-8">
              {page.heroSubtitle}
            </p>

            <nav className="flex items-center justify-center gap-2 text-sm">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
              >
                <Home className="h-4 w-4" />
                {page.breadcrumbHome}
              </Link>
              <ChevronRight
                className={cn("h-4 w-4 text-white/40", isRTL && "rotate-180")}
              />
              <span className="text-primary font-semibold">
                {page.breadcrumbCurrent}
              </span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT INFO CARDS
      ══════════════════════════════════════════════════ */}
      <section
        className={cn(
          "relative py-16 md:py-24 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#070d24]"
            : "bg-gradient-to-b from-[#f0f6ff] via-[#f6f9ff] to-white",
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_INFO_CARDS.map((card, i) => {
              const IconComponent = cardIcons[card.icon];
              const label = language === "en" ? card.label.en : card.label.ar;

              return (
                <motion.a
                  key={i}
                  href={card.href}
                  target={card.icon === "map-pin" ? "_blank" : undefined}
                  rel={
                    card.icon === "map-pin" ? "noopener noreferrer" : undefined
                  }
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={cn(
                    "group relative p-8 rounded-2xl text-center transition-all duration-500 cursor-pointer block",
                    isDark
                      ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30"
                      : "bg-white hover:bg-primary/5 border border-gray-100 hover:border-primary/30 shadow-lg shadow-primary/5",
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
                      isDark
                        ? "bg-primary/15 group-hover:bg-primary/25"
                        : "bg-primary/10 group-hover:bg-primary/20",
                    )}
                  >
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-primary" />
                    )}
                  </div>

                  {/* Label */}
                  <p
                    className={cn(
                      "text-xs font-bold uppercase tracking-wider mb-2",
                      isDark ? "text-primary/80" : "text-primary",
                    )}
                  >
                    {label}
                  </p>

                  {/* Values */}
                  {card.values.map((val, j) => (
                    <h5
                      key={j}
                      className={cn(
                        "text-sm font-bold leading-relaxed",
                        isDark ? "text-white" : "text-[#0a1a4f]",
                      )}
                    >
                      {language === "en" ? val.en : val.ar}
                    </h5>
                  ))}
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT FORM + MAP
      ══════════════════════════════════════════════════ */}
      <section
        className={cn(
          "relative py-16 md:py-24 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#0a1433]"
            : "bg-gradient-to-b from-white via-[#f6f9ff] to-[#edf3ff]",
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <ContactForm language={language} isDark={isDark} />
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="min-h-[400px] lg:min-h-0"
            >
              <div
                className={cn(
                  "h-full rounded-2xl overflow-hidden border transition-colors duration-500",
                  isDark
                    ? "border-white/10"
                    : "border-gray-100 shadow-lg shadow-primary/5",
                )}
              >
                <iframe
                  className="w-full h-full min-h-[400px]"
                  src={GOOGLE_MAPS_EMBED_URL}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Nada Scientific Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   CONTACT FORM COMPONENT
──────────────────────────────────────────────────── */
function ContactForm({
  language,
  isDark,
}: {
  language: string;
  isDark: boolean;
}) {
  const form =
    language === "en" ? CONTACT_FORM_CONTENT.en : CONTACT_FORM_CONTENT.ar;

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData(e.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses = cn(
    "w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300 border",
    isDark
      ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-white/8"
      : "bg-white border-gray-200 text-[#0a1a4f] placeholder:text-gray-400 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/5",
  );

  return (
    <div
      className={cn(
        "h-full rounded-2xl p-8 md:p-10 transition-colors duration-500",
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-gray-100 shadow-lg shadow-primary/5",
      )}
    >
      {/* Tag */}
      <span
        className={cn(
          "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
          isDark
            ? "bg-primary/15 text-primary border border-primary/25"
            : "bg-primary/10 text-primary border border-primary/20",
        )}
      >
        <span className="w-2 h-2 rounded-full bg-primary" />
        {form.tag}
      </span>

      <h2
        className={cn(
          "text-2xl md:text-3xl font-extrabold tracking-tight mb-8",
          isDark ? "text-white" : "text-[#0a1a4f]",
        )}
      >
        {form.title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            required
            placeholder={form.namePlaceholder}
            className={inputClasses}
          />
          <input
            type="email"
            name="_replyto"
            required
            placeholder={form.emailPlaceholder}
            className={inputClasses}
          />
        </div>

        <input
          type="text"
          name="subject"
          required
          placeholder={form.subjectPlaceholder}
          className={inputClasses}
        />

        <textarea
          name="message"
          required
          rows={5}
          placeholder={form.messagePlaceholder}
          className={cn(inputClasses, "resize-none")}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "w-full py-4 rounded-xl font-bold text-white text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2",
            "bg-primary hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed",
            "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
          )}
        >
          {status === "loading" ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <Send className="h-4 w-4" />
              {form.submitButton}
            </>
          )}
        </button>

        {/* Status messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-emerald-500 text-sm font-medium"
          >
            <CheckCircle className="h-5 w-5" />
            {form.successMessage}
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-500 text-sm font-medium"
          >
            <AlertCircle className="h-5 w-5" />
            {form.errorMessage}
          </motion.div>
        )}
      </form>
    </div>
  );
}
