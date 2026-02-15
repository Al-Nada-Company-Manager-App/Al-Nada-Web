export interface ServiceItem {
  title: { en: string; ar: string };
  image: string;
  icon: string;
  slug: string;
}

export const SERVICES_CONTENT = {
  en: {
    tag: "Services",
    title: "Our Applications",
    description:
      "Al-Nada Scientific Office offers a comprehensive range of environmental, scientific, and engineering services to meet all your needs.",
    cta: "View All Services",
  },
  ar: {
    tag: "الخدمات",
    title: "تطبيقاتنا",
    description:
      "يقدم مكتب الندى العلمي مجموعة شاملة من الخدمات البيئية والعلمية والهندسية لتلبية جميع احتياجاتكم.",
    cta: "عرض جميع الخدمات",
  },
} as const;

export const SERVICES_PAGE_CONTENT = {
  en: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive scientific and environmental solutions",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Services",
  },
  ar: {
    heroTitle: "خدماتنا",
    heroSubtitle: "حلول علمية وبيئية شاملة",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "الخدمات",
  },
} as const;

export const SERVICES: ServiceItem[] = [
  {
    title: {
      en: "Environmental Measurements & Studies",
      ar: "إجراء القياسات والدراسات البيئية",
    },
    image: "/img/Applications/consult.jpg",
    icon: "/img/Applications/planet-earth.jpg",
    slug: "environmental-measurements",
  },
  {
    title: {
      en: "Laboratory Equipment",
      ar: "معدات المختبرات",
    },
    image: "/img/Applications/lab.jpg",
    icon: "/img/Applications/laboratory.jpg",
    slug: "laboratory-equipment",
  },
  {
    title: {
      en: "Controlling & Monitoring Equipment",
      ar: "معدات التحكم والمراقبة",
    },
    image: "/img/Applications/control.jpg",
    icon: "/img/Applications/tablet.jpg",
    slug: "controlling-monitoring",
  },
  {
    title: {
      en: "Measuring Instruments (Air - Water - Soil)",
      ar: "أدوات القياس (الهواء - الماء - التربة)",
    },
    image: "/img/Applications/3.jpg",
    icon: "/img/Applications/meter.jpg",
    slug: "measuring-instruments",
  },
  {
    title: {
      en: "Personal Protection Equipment (PPE)",
      ar: "معدات الحماية الشخصية (PPE)",
    },
    image: "/img/Applications/Personal-Protection-Equipment-scaled.jpg",
    icon: "/img/Applications/personal-protective-equipment.jpg",
    slug: "ppe",
  },
  {
    title: {
      en: "Maintenance & Support",
      ar: "دعم وصيانة",
    },
    image: "/img/Applications/repairs.jpg",
    icon: "/img/Applications/repair-service.jpg",
    slug: "maintenance-support",
  },
  {
    title: {
      en: "Training",
      ar: "تدريب",
    },
    image: "/img/Applications/training.jpg",
    icon: "/img/Applications/presentation.jpg",
    slug: "training",
  },
  {
    title: {
      en: "Calibration",
      ar: "معايرة",
    },
    image: "/img/Applications/5.jpg",
    icon: "/img/Applications/instrumentation.jpg",
    slug: "calibration",
  },
  {
    title: {
      en: "Glassware & Chemicals",
      ar: "الأواني الزجاجية والمواد الكيميائية",
    },
    image: "/img/Applications/Laboratory-glassware.jpg",
    icon: "/img/Applications/glassware.jpg",
    slug: "glassware-chemicals",
  },
];
