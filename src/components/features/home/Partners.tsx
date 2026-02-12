"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/use-language";

export function Partners() {
  const { language } = useLanguage();

  const content = {
    en: {
      tag: "Partners",
      title: "Companies",
    },
    ar: {
      tag: "الشركاء",
      title: "الشركات",
    },
  };

  const t = language === "en" ? content.en : content.ar;

  const partners = [
    {
      name: "Ecom",
      logo: "/img/Companies and Products/download (1).jpg",
      bg: "/img/Companies and Products/EASY-DE-1-e1491479911670.jpg",
    },
    {
      name: "Casella",
      logo: "/img/Companies and Products/casella-new-green-grad-min.jpg",
      bg: "/img/Companies and Products/branding-familyproduct-hero.jpg",
    },
    {
      name: "Aeroqual",
      logo: "/img/Companies and Products/Aeroqual_1-logo.jpg",
      bg: "/img/Companies and Products/Aeroqual-Ozone-O3-Sensor-Heads.jpg",
    },
    // Add more as needed
  ];

  return (
    <section id="partners" className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            {t.tag}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group relative h-64 overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={partner.bg}
                alt={partner.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white p-2 shadow-xl">
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-lg">{partner.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
