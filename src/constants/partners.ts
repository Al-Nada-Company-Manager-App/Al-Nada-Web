export interface PartnerItem {
  title: { en: string; ar: string };
  image: string;
  logo: string;
  slug: string;
}

export const PARTNERS_CONTENT = {
  en: {
    tag: "Partners",
    title: "Our Partners",
    description:
      "We collaborate with world-leading manufacturers of environmental, scientific, and industrial instruments to deliver cutting-edge solutions.",
    cta: "View All Partners",
  },
  ar: {
    tag: "الشركاء",
    title: "شركاؤنا",
    description:
      "نتعاون مع كبرى الشركات المصنعة لأجهزة القياس البيئية والعلمية والصناعية لتقديم أحدث الحلول.",
    cta: "عرض جميع الشركاء",
  },
} as const;

export const PARTNERS_PAGE_CONTENT = {
  en: {
    heroTitle: "Our Partners",
    heroSubtitle: "Trusted global partnerships powering scientific excellence",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Partners",
  },
  ar: {
    heroTitle: "شركاؤنا",
    heroSubtitle: "شراكات عالمية موثوقة تدعم التميز العلمي",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "الشركاء",
  },
} as const;

export const PARTNERS: PartnerItem[] = [
  {
    title: {
      en: "Ecom - Flue Gas Analyzers",
      ar: "Ecom - أجهزة تحليل غازات العادم",
    },
    image: "/img/partners/ecom-flue-gas-analyzers-hero.webp",
    logo: "/img/partners/ecom-flue-gas-analyzers-logo.webp",
    slug: "ecom",
  },
  {
    title: {
      en: "Casella - Air Quality Monitors",
      ar: "Casella - أجهزة مراقبة جودة الهواء",
    },
    image: "/img/partners/casella-air-quality-monitors-hero.webp",
    logo: "/img/partners/casella-air-quality-monitors-logo.webp",
    slug: "casella",
  },
  {
    title: {
      en: "Aeroqual - Air Quality Monitors",
      ar: "Aeroqual - أجهزة مراقبة جودة الهواء",
    },
    image: "/img/partners/aeroqual-air-quality-monitors-hero.webp",
    logo: "/img/partners/aeroqual-air-quality-monitors-logo.webp",
    slug: "aeroqual",
  },
  {
    title: {
      en: "Critical Environment Technologies - Gas Detectors",
      ar: "Critical Environment Technologies - أجهزة كشف الغاز",
    },
    image: "/img/partners/critical-environment-technologies-gas-detectors-hero.webp",
    logo: "/img/partners/critical-environment-technologies-gas-detectors-logo.webp",
    slug: "critical",
  },
  {
    title: {
      en: "Tenmars - Environmental & Electrical Analyzers",
      ar: "Tenmars - أجهزة التحليل البيئي والكهربائي",
    },
    image: "/img/partners/tenmars-environmental-electrical-analyzers-hero.webp",
    logo: "/img/partners/tenmars-environmental-electrical-analyzers-logo.webp",
    slug: "tenmars",
  },
  {
    title: {
      en: "Perfect Prime - Environmental & Electrical Analyzers",
      ar: "Perfect Prime - أجهزة التحليل البيئي والكهربائي",
    },
    image:
      "/img/partners/perfect-prime-environmental-electrical-analyzers-hero.webp",
    logo: "/img/partners/perfect-prime-environmental-electrical-analyzers-logo.webp",
    slug: "perfect-prime",
  },
  {
    title: {
      en: "Senko - Gas Detectors",
      ar: "Senko - أجهزة كشف الغاز",
    },
    image: "/img/partners/senko-gas-detectors-hero.webp",
    logo: "/img/partners/senko-gas-detectors-logo.webp",
    slug: "senko",
  },
  {
    title: {
      en: "Gigahertz",
      ar: "Gigahertz",
    },
    image:
      "/img/partners/gigahertz-hero.webp",
    logo: "/img/partners/gigahertz-logo.webp",
    slug: "gigahertz",
  },
  {
    title: {
      en: "TEN - Automotive Emission",
      ar: "TEN - اجهزة قياس انبعاثات السيارات",
    },
    image: "/img/partners/ten.webp",
    logo: "/img/partners/ten8.webp",
    slug: "ten",
  },
  {
    title: {
      en: "Lovibond - Water Quality Analyzers",
      ar: "Lovibond - أجهزة تحليل جودة المياه",
    },
    image: "/img/partners/lovibond-water-quality-analyzers-hero.webp",
    logo: "/img/partners/lovibond-water-quality-analyzers-logo.webp",
    slug: "lovibond",
  },
  {
    title: {
      en: "Geotech - Landfill Gas Analyzers",
      ar: "Geotech - أجهزة تحليل غازات مدافن النفايات",
    },
    image: "/img/partners/geotech-landfill-gas-analyzers-hero.webp",
    logo: "/img/partners/geotech-landfill-gas-analyzers-logo.webp",
    slug: "geotech",
  },
  {
    title: {
      en: "Kitagawa - Gas Detection Tubes",
      ar: "Kitagawa - أنابيب كشف الغاز",
    },
    image: "/img/partners/kitagawa-gas-detection-tubes-hero.webp",
    logo: "/img/partners/kitagawa-gas-detection-tubes-logo.webp",
    slug: "kitagawa",
  },
  {
    title: {
      en: "Davis - Weather Stations",
      ar: "Davis - محطات الطقس",
    },
    image: "/img/partners/davis-weather-stations-hero.webp",
    logo: "/img/partners/davis-weather-stations-logo.webp",
    slug: "davis",
  },
  {
    title: {
      en: "CHEMetrics",
      ar: "CHEMetrics",
    },
    image: "/img/partners/K-6002.webp",
    logo: "/img/partners/CHEMetricsLogo_Web_210-e1670596974522.webp",
    slug: "chemetrics",
  },
  {
    title: {
      en: "Arjayeng",
      ar: "Arjayeng",
    },
    image: "/img/partners/arjayeng-hero.webp",
    logo: "/img/partners/arjayeng-logo.webp",
    slug: "arjayeng",
  },
  {
    title: {
      en: "Kestrel - Weather Meters",
      ar: "Kestrel - محطات الطقس",
    },
    image: "/img/partners/ki.webp",
    logo: "/img/partners/kestrelmeters-logo.webp",
    slug: "kestrel",
  },
  {
    title: {
      en: "Tisch",
      ar: "Tisch",
    },
    image: "/img/partners/tisch-hero.webp",
    logo: "/img/partners/tisch-logo.webp",
    slug: "tisch",
  },
];
