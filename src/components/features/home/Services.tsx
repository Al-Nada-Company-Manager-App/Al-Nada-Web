"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

export function Services() {
  const { language } = useLanguage();

  const content = {
    en: {
      tag: "Services",
      title: "Applications",
      cta: "Read More",
      services: [
        {
          title: "Carrying out environmental measurements and studies",
          image: "/img/Applications/consult.jpg",
          icon: "/img/Applications/planet-earth.jpg",
          link: "/services",
        },
        {
          title: "Laboratory Equipment",
          image: "/img/Applications/lab.jpg",
          icon: "/img/Applications/laboratory.jpg",
          link: "/services",
        },
        {
          title: "Controlling & Monitoring Equipment",
          image: "/img/Applications/control.jpg",
          icon: "/img/Applications/tablet.jpg",
          link: "/services",
        },
      ],
    },
    ar: {
      tag: "الخدمات",
      title: "التطبيقات",
      cta: "اقرأ المزيد",
      services: [
        {
          title: "إجراء القياسات والدراسات البيئية",
          image: "/img/Applications/consult.jpg",
          icon: "/img/Applications/planet-earth.jpg",
          link: "/services",
        },
        {
          title: "معدات المختبرات",
          image: "/img/Applications/lab.jpg",
          icon: "/img/Applications/laboratory.jpg",
          link: "/services",
        },
        {
          title: "معدات التحكم والمراقبة",
          image: "/img/Applications/control.jpg",
          icon: "/img/Applications/tablet.jpg",
          link: "/services",
        },
      ],
    },
  };

  const t = language === "en" ? content.en : content.ar;

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            {t.tag}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-30" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 h-16 w-16 rounded-full bg-white p-1 shadow-lg">
                    <div className="relative h-full w-full rounded-full overflow-hidden">
                      <Image
                        src={service.icon}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/services">{t.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
