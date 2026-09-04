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
    image: "/img/Companies and Products/EASY-DE-1-e1491479911670.webp",
    logo: "/img/Companies and Products/download (1).webp",
    slug: "ecom",
  },
  {
    title: {
      en: "Casella - Air Quality Monitors",
      ar: "Casella - أجهزة مراقبة جودة الهواء",
    },
    image: "/img/Companies and Products/branding-familyproduct-hero.webp",
    logo: "/img/Companies and Products/casella-new-green-grad-min.webp",
    slug: "casella",
  },
  {
    title: {
      en: "Aeroqual - Air Quality Monitors",
      ar: "Aeroqual - أجهزة مراقبة جودة الهواء",
    },
    image: "/img/Companies and Products/Aeroqual-Ozone-O3-Sensor-Heads.webp",
    logo: "/img/Companies and Products/Aeroqual_1-logo.webp",
    slug: "aeroqual",
  },
  {
    title: {
      en: "Critical Environment Technologies - Gas Detectors",
      ar: "Critical Environment Technologies - أجهزة كشف الغاز",
    },
    image: "/img/Companies and Products/control.webp",
    logo: "/img/Companies and Products/critical.webp",
    slug: "critical",
  },
  {
    title: {
      en: "Tenmars - Environmental & Electrical Analyzers",
      ar: "Tenmars - أجهزة التحليل البيئي والكهربائي",
    },
    image: "/img/Companies and Products/61kmW0cIBoL._AC_UF1000,1000_QL80_.webp",
    logo: "/img/Companies and Products/download-_1_.webp",
    slug: "tenmars",
  },
  {
    title: {
      en: "Perfect Prime - Environmental & Electrical Analyzers",
      ar: "Perfect Prime - أجهزة التحليل البيئي والكهربائي",
    },
    image:
      "/img/Companies and Products/MixCollage-05-Feb-2024-01-52-PM-4364.webp",
    logo: "/img/Companies and Products/Perfect Prime.webp",
    slug: "perfect-prime",
  },
  {
    title: {
      en: "Senko - Gas Detectors",
      ar: "Senko - أجهزة كشف الغاز",
    },
    image: "/img/Companies and Products/capture-500x500.webp",
    logo: "/img/Companies and Products/senko.webp",
    slug: "senko",
  },
  {
    title: {
      en: "Gigahertz",
      ar: "Gigahertz",
    },
    image:
      "/img/Companies and Products/gigahertzsolutions_messtechnik_composing_v3_en.webp",
    logo: "/img/Companies and Products/md-sm-logo-gigahertz-solutions_web.webp",
    slug: "gigahertz",
  },
  {
    title: {
      en: "TEN - Automotive Emission",
      ar: "TEN - اجهزة قياس انبعاثات السيارات",
    },
    image: "/img/Companies and Products/ten.webp",
    logo: "/img/Companies and Products/ten8.webp",
    slug: "ten",
  },
  {
    title: {
      en: "Lovibond - Water Quality Analyzers",
      ar: "Lovibond - أجهزة تحليل جودة المياه",
    },
    image: "/img/Companies and Products/md600_mb2_02.webp",
    logo: "/img/Companies and Products/unnamed.webp",
    slug: "lovibond",
  },
  {
    title: {
      en: "Geotech - Landfill Gas Analyzers",
      ar: "Geotech - أجهزة تحليل غازات مدافن النفايات",
    },
    image: "/img/Companies and Products/35.webp",
    logo: "/img/Companies and Products/geotech_0.webp",
    slug: "geotech",
  },
  {
    title: {
      en: "Kitagawa - Gas Detection Tubes",
      ar: "Kitagawa - أنابيب كشف الغاز",
    },
    image: "/img/Companies and Products/product02_1.webp",
    logo: "/img/Companies and Products/logo (1).webp",
    slug: "kitagawa",
  },
  {
    title: {
      en: "Davis - Weather Stations",
      ar: "Davis - محطات الطقس",
    },
    image: "/img/Companies and Products/71wSg--3Q4L._AC_UF1000,1000_QL80_.webp",
    logo: "/img/Companies and Products/1-1_Davis_Logo_Web_Dark_Blue_1204x630.webp",
    slug: "davis",
  },
  {
    title: {
      en: "CHEMetrics",
      ar: "CHEMetrics",
    },
    image: "/img/Companies and Products/K-6002.webp",
    logo: "/img/Companies and Products/CHEMetricsLogo_Web_210-e1670596974522.webp",
    slug: "chemetrics",
  },
  {
    title: {
      en: "Arjayeng",
      ar: "Arjayeng",
    },
    image: "/img/Companies and Products/imageedit_1_6704716381-1536x1152-1.webp",
    logo: "/img/Companies and Products/Arjayeng.webp",
    slug: "arjayeng",
  },
  {
    title: {
      en: "Kestrel - Weather Meters",
      ar: "Kestrel - محطات الطقس",
    },
    image: "/img/Companies and Products/ki.webp",
    logo: "/img/Companies and Products/kestrelmeters-logo.webp",
    slug: "kestrel",
  },
  {
    title: {
      en: "Tisch",
      ar: "Tisch",
    },
    image: "/img/Companies and Products/pg.webp",
    logo: "/img/Companies and Products/tisch-environmental-500-x-98-300x94.webp",
    slug: "tisch",
  },
];
