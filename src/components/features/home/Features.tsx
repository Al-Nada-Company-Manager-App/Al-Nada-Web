"use client";

import { useLanguage } from "@/hooks/use-language";
import { CheckCircle2, Clock, MessageSquare, UserCheck } from "lucide-react";

export function Features() {
  const { language } = useLanguage();

  const content = {
    en: {
      tag: "Features",
      title: "Why Choose Us",
      description:
        "Al-Nada Scientific Office provides this supported by a number of professionals and experts working in the largest research centers in Egypt.",
      items: [
        {
          icon: UserCheck,
          title: "Environmental Engineers",
          subtitle: "Experience",
        },
        { icon: CheckCircle2, title: "Services", subtitle: "Quality" },
        { icon: MessageSquare, title: "Consultation", subtitle: "Positive" },
        { icon: Clock, title: "Support", subtitle: "24 Hours" },
      ],
    },
    ar: {
      tag: "المميزات",
      title: "لماذا تختارنا",
      description:
        "يوفر مكتب الندى العلمي خدماته بدعم من نخبة من المحترفين والخبراء العاملين في أكبر مراكز البحث في مصر.",
      items: [
        { icon: UserCheck, title: "مهندسون بيئيون", subtitle: "الخبرة" },
        { icon: CheckCircle2, title: "الخدمات", subtitle: "الجودة" },
        {
          icon: MessageSquare,
          title: "استشارة",
          subtitle: "الاستشارات الإيجابية",
        },
        { icon: Clock, title: "الدعم", subtitle: "دعم على مدار 24 ساعة" },
      ],
    },
  };

  const t = language === "en" ? content.en : content.ar;

  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
            {t.tag}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="text-primary-foreground/80 max-w-lg leading-relaxed">
            {t.description}
          </p>

          <div className="grid grid-cols-2 gap-8">
            {t.items.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground/80">
                    {item.subtitle}
                  </p>
                  <h4 className="font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Optional image or graphic side could go here, relying on text/icons for now for cleaner look */}
      </div>
    </section>
  );
}
