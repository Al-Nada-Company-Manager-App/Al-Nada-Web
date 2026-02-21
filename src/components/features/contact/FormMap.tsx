"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import {
  CONTACT_FORM_CONTENT,
  FORMSPREE_ENDPOINT,
  GOOGLE_MAPS_EMBED_URL,
} from "@/constants/contact";

interface ContactFormMapProps {
  language: string;
  isDark: boolean;
  isRTL: boolean;
}

export function ContactFormMap({
  language,
  isDark,
  isRTL,
}: ContactFormMapProps) {
  return (
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
            <ContactFormInner language={language} isDark={isDark} />
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
  );
}

// ─── Contact Form Inner ────────────────────────────────────────────────────────

function ContactFormInner({
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
