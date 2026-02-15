export const ABOUT_CONTENT = {
  en: {
    tag: "About Us",
    title: "Why You Should Trust Us? Get To Know About Us!",
    description:
      "Al Nada Scientific Office is one of the specialized companies that implements integrated scientific and environmental applications and engineering services for customers by a group of engineers and experts in scientific and environmental fields.",
    points: [
      "Integrated scientific and environmental solutions",
      "Supplying measuring and controlling equipment in factories and production lines",
      "Laboratory Equipment, Glassware and Chemicals",
    ],
    cta: "Read More",
    featuresTag: "Features",
    featuresTitle: "Why Choose Us",
    featuresDescription:
      "Al-Nada Scientific Office provides this supported by a number of professionals and experts working in the largest research centers in Egypt. And behind it a group of skilled engineers to do the work of installation, maintenance, and repair.",
  },
  ar: {
    tag: "من نحن",
    title: "لماذا تختارنا؟",
    description:
      "مكتب الندى العلمي هو واحد من الشركات الرائدة والمتخصصة في المنطقة، والتي تلتزم بتقديم تطبيقات علمية وبيئية متكاملة وخدمات هندسية متميزة لعملائها. نحن نفخر بفريق عملنا المكون من مهندسين متخصصين وخبراء.",
    points: [
      "حلول علمية وبيئية متكاملة",
      "توريد معدات القياس والتحكم في المصانع وخطوط الإنتاج",
      "معدات المختبرات، الأواني الزجاجية والمواد الكيميائية",
    ],
    cta: "اقرأ المزيد",
    featuresTag: "المميزات",
    featuresTitle: "لماذا تختارنا",
    featuresDescription:
      "يقدم مكتب الندى العلمي خدماته بدعم من عدد من المتخصصين والخبراء العاملين في أكبر مراكز الأبحاث في مصر. ويقف خلفه فريق من المهندسين المهرة للقيام بأعمال التركيب والصيانة والإصلاح.",
  },
} as const;

export const ABOUT_FEATURES = [
  {
    icon: "users" as const,
    label: { en: "Experience", ar: "الخبرة" },
    title: { en: "Environmental Engineers", ar: "مهندسون بيئيون" },
  },
  {
    icon: "check-circle" as const,
    label: { en: "Quality", ar: "الجودة" },
    title: { en: "Services", ar: "خدمات" },
  },
  {
    icon: "message-circle" as const,
    label: { en: "Positive", ar: "إيجابية" },
    title: { en: "Consultation", ar: "استشارات" },
  },
  {
    icon: "headphones" as const,
    label: { en: "24 Hours", ar: "٢٤ ساعة" },
    title: { en: "Support", ar: "دعم فني" },
  },
] as const;

export const ABOUT_IMAGES = {
  main: "/img/about/about-1.jpg",
  secondary: "/img/about/about-2.jpg",
} as const;

export const ABOUT_PAGE_CONTENT = {
  en: {
    heroTitle: "About Us",
    heroSubtitle:
      "Committed to excellence in environmental and scientific solutions since 2008",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "About Us",
    story: [
      "Al Nada Scientific Office is one of the specialized companies that implements integrated scientific and environmental applications and engineering services for customers by a group of engineers and experts in scientific and environmental fields.",
      "The office was established in 2008.",
      "The activity of our office is to provide technical support and technical and scientific consultancy and integrated engineering through the import and supply of all environmental and scientific devices which selection of the largest international companies that manufacture such devices and we have representatives in Egypt.",
      "We are pleased to put all the capabilities of the office in the service of our valued customers.",
    ],
    storyAr: [
      "مكتب الندى العلمي هو واحد من الشركات الرائدة والمتخصصة في المنطقة، والتي تلتزم بتقديم تطبيقات علمية وبيئية متكاملة وخدمات هندسية متميزة لعملائها. نحن نفخر بفريق عملنا المكون من مهندسين متخصصين وخبراء في المجالات العلمية والبيئية.",
      "تأسس المكتب في عام 2008.",
      "نشاط مكتبنا يتمثل في تقديم الدعم الفني والاستشارات الفنية والعلمية والهندسية المتكاملة من خلال استيراد وتوفير جميع الأجهزة البيئية والعلمية والتي يتم اختيار أكبر الشركات الدولية التي تصنع مثل هذه الأجهزة ولدينا ممثلين في مصر.",
      "يسعدنا أن نضع جميع إمكانيات المكتب في خدمة عملائنا الكرام.",
    ],
    departmentsTag: "Our Departments",
    departmentsTitle: "What We Do",
  },
  ar: {
    heroTitle: "من نحن",
    heroSubtitle: "ملتزمون بالتميز في الحلول البيئية والعلمية منذ عام 2008",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "من نحن",
    story: [], // en story is the array, ar story uses storyAr from en block
    storyAr: [],
    departmentsTag: "أقسامنا",
    departmentsTitle: "ماذا نفعل",
  },
} as const;
