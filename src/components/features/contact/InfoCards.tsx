"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO_CARDS } from "@/constants/contact";

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

interface ContactInfoCardsProps {
  language: string;
  isDark: boolean;
}

export function ContactInfoCards({ language, isDark }: ContactInfoCardsProps) {
  return (
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

                <p
                  className={cn(
                    "text-xs font-bold uppercase tracking-wider mb-2",
                    isDark ? "text-primary/80" : "text-primary",
                  )}
                >
                  {label}
                </p>

                {card.values.map((val, j) => (
                  <h5
                    key={j}
                    dir="ltr"
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
  );
}
