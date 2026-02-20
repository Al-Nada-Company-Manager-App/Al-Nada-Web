export interface HeroImage {
  src: string;
  alt: string;
  rotate: string;
  top: string;
  left: string;
  width: string;
}

export const HERO_CONTENT = {
  en: {
    title: "Al-Nada Scientific Office",
    description:
      "Exclusive agent for reputable international companies producing specialized instruments for laboratories and environmental measurements. Your trusted partner in Egypt and the Middle East.",
    cta: "Explore Products",
    secondaryCta: "Contact Us",
    bgText: "AL NADA",
  },
  ar: {
    title: "مكتب الندى العلمي",
    description:
      "الوكيل الحصري لشركات عالمية مرموقة تنتج أجهزة متخصصة للمختبرات والقياسات البيئية. شريكك الموثوق في مصر والشرق الأوسط.",
    cta: "استكشف المنتجات",
    secondaryCta: "اتصل بنا",
    bgText: "AL NADA",
  },
} as const;

export const HERO_STATS = [
  { value: "15+", label: { en: "Partners", ar: "شريك" } },
  { value: "500+", label: { en: "Products", ar: "منتج" } },
  { value: "20+", label: { en: "Years", ar: "سنوات خبرة" } },
] as const;

// Images organized by category:
// I1-I11: Personal/human fieldwork photos (largest, prime positions)
// I12-I19, I25-I27: Device/equipment images (medium, secondary positions)
// I20-I24: Sponsor/partner logos (smallest, bottom row)
export const HERO_IMAGES: HeroImage[] = [
  // ════════════════════════════════════════════
  // PERSONAL / FIELDWORK PHOTOS (I1-I11)
  // Large cards in prominent positions around edges
  // ════════════════════════════════════════════
  {
    src: "/img/Index/I1.jpg",
    alt: "Fieldwork 1",
    rotate: "-6deg",
    top: "2%",
    left: "1%",
    width: "w-32 md:w-48",
  },
  {
    src: "/img/Index/I2.jpg",
    alt: "Fieldwork 2",
    rotate: "5deg",
    top: "3%",
    left: "20%",
    width: "w-28 md:w-44",
  },
  {
    src: "/img/Index/I3.jpg",
    alt: "Fieldwork 3",
    rotate: "-4deg",
    top: "1%",
    left: "72%",
    width: "w-28 md:w-44",
  },
  {
    src: "/img/Index/I4.jpg",
    alt: "Fieldwork 4",
    rotate: "7deg",
    top: "2%",
    left: "88%",
    width: "w-28 md:w-44",
  },
  {
    src: "/img/Index/I5.jpg",
    alt: "Fieldwork 5",
    rotate: "3deg",
    top: "22%",
    left: "0%",
    width: "w-28 md:w-44",
  },
  {
    src: "/img/Index/I6.jpg",
    alt: "Fieldwork 6",
    rotate: "-5deg",
    top: "20%",
    left: "80%",
    width: "w-32 md:w-48",
  },
  {
    src: "/img/Index/I7.jpg",
    alt: "Fieldwork 7",
    rotate: "-7deg",
    top: "45%",
    left: "0%",
    width: "w-28 md:w-40",
  },
  {
    src: "/img/Index/I8.jpg",
    alt: "Fieldwork 8",
    rotate: "6deg",
    top: "42%",
    left: "83%",
    width: "w-28 md:w-44",
  },
  {
    src: "/img/Index/I9.jpg",
    alt: "Fieldwork 9",
    rotate: "4deg",
    top: "62%",
    left: "1%",
    width: "w-28 md:w-40",
  },
  {
    src: "/img/Index/I10.jpg",
    alt: "Fieldwork 10",
    rotate: "-6deg",
    top: "60%",
    left: "82%",
    width: "w-28 md:w-44",
  },
  {
    src: "/img/Index/I11.jpg",
    alt: "Fieldwork 11",
    rotate: "-3deg",
    top: "78%",
    left: "0%",
    width: "w-28 md:w-40",
  },

  // ════════════════════════════════════════════
  // DEVICE / EQUIPMENT IMAGES (I12-I19, I25-I27)
  // Medium cards in secondary positions
  // ════════════════════════════════════════════
  {
    src: "/img/Index/I12.jpg",
    alt: "Device 1",
    rotate: "3deg",
    top: "1%",
    left: "45%",
    width: "w-22 md:w-32",
  },
  {
    src: "/img/Index/I13.jpg",
    alt: "Device 2",
    rotate: "-4deg",
    top: "16%",
    left: "14%",
    width: "w-20 md:w-32",
  },
  {
    src: "/img/Index/I14.jpg",
    alt: "Device 3",
    rotate: "5deg",
    top: "18%",
    left: "66%",
    width: "w-20 md:w-32",
  },
  {
    src: "/img/Index/I15.jpg",
    alt: "Device 4",
    rotate: "-3deg",
    top: "62%",
    left: "14%",
    width: "w-20 md:w-32",
  },
  {
    src: "/img/Index/I16.jpg",
    alt: "Device 5",
    rotate: "6deg",
    top: "64%",
    left: "70%",
    width: "w-20 md:w-32",
  },
  {
    src: "/img/Index/I17.jpg",
    alt: "Device 6",
    rotate: "-5deg",
    top: "78%",
    left: "18%",
    width: "w-22 md:w-32",
  },
  {
    src: "/img/Index/I18.jpg",
    alt: "Device 7",
    rotate: "4deg",
    top: "76%",
    left: "80%",
    width: "w-22 md:w-36",
  },
  {
    src: "/img/Index/I19.jpg",
    alt: "Device 8",
    rotate: "-7deg",
    top: "78%",
    left: "62%",
    width: "w-20 md:w-32",
  },
  {
    src: "/img/Index/I25.jpg",
    alt: "Device 9",
    rotate: "3deg",
    top: "1%",
    left: "58%",
    width: "w-20 md:w-28",
  },
  {
    src: "/img/Index/I26.jpg",
    alt: "Device 10",
    rotate: "-4deg",
    top: "78%",
    left: "46%",
    width: "w-20 md:w-28",
  },
  {
    src: "/img/Index/I27.jpg",
    alt: "Device 11",
    rotate: "5deg",
    top: "62%",
    left: "65%",
    width: "w-18 md:w-28",
  },

  // ════════════════════════════════════════════
  // SPONSOR / PARTNER LOGOS (I20-I24)
  // Smallest cards along the bottom edge
  // ════════════════════════════════════════════
  {
    src: "/img/Index/I20.jpg",
    alt: "Partner 1",
    rotate: "-2deg",
    top: "90%",
    left: "5%",
    width: "w-18 md:w-24",
  },
  {
    src: "/img/Index/I21.jpg",
    alt: "Partner 2",
    rotate: "3deg",
    top: "91%",
    left: "22%",
    width: "w-18 md:w-24",
  },
  {
    src: "/img/Index/I22.jpg",
    alt: "Partner 3",
    rotate: "-3deg",
    top: "90%",
    left: "40%",
    width: "w-18 md:w-24",
  },
  {
    src: "/img/Index/I23.jpg",
    alt: "Partner 4",
    rotate: "2deg",
    top: "91%",
    left: "58%",
    width: "w-18 md:w-24",
  },
  {
    src: "/img/Index/I24.jpg",
    alt: "Partner 5",
    rotate: "-2deg",
    top: "90%",
    left: "76%",
    width: "w-18 md:w-24",
  },
];
