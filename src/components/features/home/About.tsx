"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";

export function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      tag: "About Us",
      title: "Why You Should Trust Us? Get To Know About Us!",
      p1: "Al Nada Scientific Office is one of the specialized companies that implements integrated scientific and environmental applications and engineering services for customers by a group of engineers and experts in scientific and environmental fields.",
      points: [
        "Integrated scientific and environmental solutions",
        "Supplying measuring and controlling equipment in factories and production lines",
        "Laboratory Equipment, Glassware and Chemicals",
      ],
    },
    ar: {
      tag: "من نحن",
      title: "لماذا تختارنا ؟",
      p1: "مكتب الندى العلمي هو واحد من الشركات الرائدة والمتخصصة في المنطقة، والتي تلتزم بتقديم تطبيقات علمية وبيئية متكاملة وخدمات هندسية متميزة لعملائها. نحن نفخر بفريق عملنا المكون من مهندسين متخصصين وخبراء.",
      points: [
        "حلول علمية وبيئية متكاملة",
        "توريد معدات القياس والتحكم في المصانع وخطوط الإنتاج",
        "معدات المختبرات، الأواني الزجاجية والمواد الكيميائية",
      ],
    },
  };

  const t = language === "en" ? content.en : content.ar;

  return (
    <section id="about" className="py-20 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 w-full rounded-lg overflow-hidden translate-y-8">
              <Image
                src="/img/about/about-1.jpg"
                alt="About 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/img/about/about-2.jpg"
                alt="About 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            {t.tag}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t.p1}</p>
          <ul className="space-y-4">
            {t.points.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
