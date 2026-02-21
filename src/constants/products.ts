export interface ProductArticle {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
}

export interface CompanyProduct {
  title: { en: string; ar: string };
  image: string;
  slug: string;
}

export const PRODUCTS_PAGE_CONTENT = {
  en: {
    heroTitle: "Products",
    heroSubtitle:
      "Environmental measuring devices used across various industries for monitoring and maintaining environmental quality",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Products",
    articleTag: "Article",
    articleTitle: "Comprehensive Guide to Environmental Measuring Devices",
    articleIntro:
      "Environmental measuring devices are indispensable tools that play a crucial role in monitoring and maintaining the quality of our surroundings. These instruments are utilized across various industries such as environmental science, manufacturing, automotive, and public health. They provide essential data that helps in assessing environmental impact, ensuring regulatory compliance, and safeguarding public health.",
    companiesTag: "Products",
    companiesTitle: "Companies",
    conclusionTitle: "Conclusion",
    conclusion:
      "Environmental measuring devices are indispensable tools for monitoring and maintaining the quality of our environment, supporting sustainable development, and protecting public health. Regular calibration, maintenance, and accurate measurements provided by these devices are essential for ensuring compliance with regulatory standards, mitigating environmental impacts, and promoting environmental stewardship. Our company specializes in the promotion, maintenance, and calibration of these essential environmental instruments, supporting industries and organizations in achieving environmental sustainability and regulatory compliance.",
  },
  ar: {
    heroTitle: "المنتجات",
    heroSubtitle:
      "أجهزة القياسات البيئية المستخدمة في مختلف الصناعات لمراقبة والحفاظ على جودة البيئة",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "المنتجات",
    articleTag: "مقال",
    articleTitle: "دليل شامل لأجهزة قياس البيئة",
    articleIntro:
      "أجهزة قياس البيئة هي أدوات لا غنى عنها تلعب دورًا حيويًا في مراقبة والحفاظ على جودة بيئتنا. تُستخدم هذه الأجهزة في مختلف الصناعات مثل علم البيئة، التصنيع، السيارات، والصحة العامة. توفر هذه الأجهزة بيانات دقيقة وأساسية تساعد في تقييم تأثيرات البيئة، وضمان الامتثال للتشريعات، وحماية صحة الجمهور.",
    companiesTag: "المنتجات",
    companiesTitle: "الشركات",
    conclusionTitle: "الخاتمة",
    conclusion:
      "أجهزة قياس البيئة هي أدوات لا غنى عنها لمراقبة والحفاظ على جودة بيئتنا، ودعم التنمية المستدامة، وحماية صحة الجمهور. تُعتبر الصيانة والمعايرة الدورية، والقياسات الدقيقة التي توفرها هذه الأجهزة أموراً أساسية لضمان الامتثال للمعايير التشريعية، والتخفيف من التأثيرات البيئية، وتعزيز الرعاية بالبيئة. تختص شركتنا في الترويج والصيانة والمعايرة لهذه الأدوات البيئية الأساسية، ودعم الصناعات والمنظمات في تحقيق الاستدامة البيئية والامتثال للتشريعات.",
  },
} as const;

export const PRODUCT_ARTICLES: ProductArticle[] = [
  {
    title: {
      en: "Flue Gas Analyzers",
      ar: "محللات غاز المداخن",
    },
    description: {
      en: "Flue gas analyzers are specialized instruments designed to measure the composition of exhaust gases produced from combustion processes. These devices are critical for industries such as power generation, manufacturing, and automotive, where efficient combustion and emissions control are essential. Flue gas analyzers help in monitoring emissions of gases like carbon dioxide (CO2), oxygen (O2), sulfur dioxide (SO2), nitrogen oxides (NOx), and particulate matter.",
      ar: "محللات غاز المداخن هي أدوات متخصصة تُستخدم لقياس تكوين الغازات المنبعثة من عمليات الاحتراق. تلعب هذه الأجهزة دورًا حاسمًا في الصناعات مثل توليد الطاقة، التصنيع، والسيارات، حيث يُعد الاحتراق الفعّال ومراقبة الانبعاثات أمرين أساسيين. تقوم محللات غاز المداخن بمراقبة انبعاثات الغازات مثل ثاني أكسيد الكربون (CO2)، الأكسجين (O2)، ثاني أكسيد الكبريت (SO2)، أكاسيد النيتروجين (NOx)، والمواد الجسيمية.",
    },
    image: "/img/Companies and Products/EASY-DE-1-e1491479911670.jpg",
  },
  {
    title: {
      en: "Air Quality Monitors",
      ar: "أجهزة مراقبة جودة الهواء",
    },
    description: {
      en: "Air quality monitors are essential tools used to assess the levels of pollutants present in the air we breathe. These devices are deployed in both indoor and outdoor environments to monitor particulate matter (PM2.5 and PM10), volatile organic compounds (VOCs), carbon monoxide (CO), sulfur dioxide (SO2), nitrogen dioxide (NO2), and ozone (O3). They play a crucial role in environmental health assessments, urban planning, and regulatory compliance monitoring.",
      ar: "أجهزة مراقبة جودة الهواء هي أدوات ضرورية لتقييم مستويات الملوثات في الهواء الذي نتنفسه. تُستخدم هذه الأجهزة في البيئات الداخلية والخارجية لمراقبة المواد الجسيمية (PM2.5 وPM10)، المركبات العضوية المتطايرة (VOCs)، أول أكسيد الكربون (CO)، ثاني أكسيد الكبريت (SO2)، ثاني أكسيد النيتروجين (NO2)، والأوزون (O3).",
    },
    image: "/img/Companies and Products/branding-familyproduct-hero.jpg",
  },
  {
    title: {
      en: "Gas Detectors",
      ar: "كاشفات الغاز",
    },
    description: {
      en: "Gas detectors are vital safety devices used to detect and alert users to the presence of hazardous gases in various settings, including industrial facilities, laboratories, and residential areas. These devices are available in portable and fixed configurations, equipped with sensors capable of detecting gases such as methane (CH4), propane, carbon monoxide (CO), hydrogen sulfide (H2S), and ammonia (NH3).",
      ar: "كاشفات الغاز هي أدوات حيوية للسلامة تُستخدم لاكتشاف وإنذار المستخدمين بوجود غازات ضارة في مختلف البيئات، بما في ذلك المنشآت الصناعية، المختبرات، والمناطق السكنية. تتوفر هذه الأجهزة في تشكيلات محمولة وثابتة، ومزودة بأجهزة استشعار قادرة على الكشف عن غازات مثل الميثان (CH4)، البروبان، أول أكسيد الكربون (CO)، كبريتيد الهيدروجين (H2S)، والأمونيا (NH3).",
    },
    image: "/img/Companies and Products/control.jpg",
  },
  {
    title: {
      en: "Environmental Electrical Analyzers",
      ar: "أجهزة قياس الكهربائية البيئية",
    },
    description: {
      en: "Environmental electrical analyzers encompass a range of specialized instruments used to measure and analyze environmental factors related to sound, light, vibration, electromagnetic fields (EMF), and radio frequencies (RF). Sound meters measure noise levels in decibels (dB), light meters quantify illumination levels, vibration meters assess vibration intensity in machinery, and EMF/RF devices detect electromagnetic radiation.",
      ar: "أجهزة قياس الكهربائية البيئية تشمل مجموعة من الأدوات المتخصصة المستخدمة لقياس وتحليل العوامل البيئية المتعلقة بالصوت، الضوء، الاهتزاز، الحقول الكهرومغناطيسية والترددات اللاسلكية. مقاييس الصوت تُقيس مستويات الضوضاء بالديسيبل، مقاييس الضوء تقيس مستويات الإضاءة، مقاييس الاهتزاز تُقيس شدة الاهتزازات في الآلات، وأجهزة قياس EMF/RF تكتشف الإشعاعات الكهرومغناطيسية.",
    },
    image:
      "/img/Companies and Products/MixCollage-05-Feb-2024-01-52-PM-4364.jpg",
  },
  {
    title: {
      en: "Automotive Emission Analyzers",
      ar: "محلل انبعاثات السيارات",
    },
    description: {
      en: "Automotive emission analyzers are specialized tools used to measure and analyze exhaust emissions from vehicles, including cars, trucks, and motorcycles. These analyzers quantify pollutants such as carbon monoxide (CO), carbon dioxide (CO2), hydrocarbons (HC), nitrogen oxides (NOx), and particulate matter (PM). They are essential for vehicle emissions testing, regulatory compliance verification, and engine performance tuning.",
      ar: "محللات الانبعاثات السيارية هي أدوات متخصصة تُستخدم لقياس وتحليل الانبعاثات الناتجة عن العوادم من السيارات، بما في ذلك السيارات والشاحنات والدراجات النارية. تُقيس هذه الأجهزة ملوثات مثل أول أكسيد الكربون (CO)، ثاني أكسيد الكربون (CO2)، الهيدروكربونات (HC)، أكاسيد النيتروجين (NOx)، والمواد الجسيمية (PM).",
    },
    image: "/img/Companies and Products/ten.jpeg",
  },
  {
    title: {
      en: "Water Quality Analyzers",
      ar: "أجهزة قياس جودة المياه",
    },
    description: {
      en: "Water quality analyzers are advanced instruments designed to monitor and analyze various parameters affecting the quality of water in lakes, rivers, reservoirs, and drinking water treatment facilities. These analyzers measure parameters such as pH, dissolved oxygen (DO), turbidity, conductivity, and levels of chemical contaminants including heavy metals and pesticides.",
      ar: "أجهزة قياس جودة المياه هي أدوات متطورة تُستخدم لمراقبة وتحليل مختلف المعايير التي تؤثر على جودة المياه في البحيرات، الأنهار، والخزانات، ومنشآت معالجة مياه الشرب. تقيس هذه الأجهزة معايير مثل الأس الهيدروجيني (pH)، الأكسجين المذاب (DO)، العكارة، التوصيل الكهربائي، ومستويات الملوثات الكيميائية.",
    },
    image: "/img/Companies and Products/md600_mb2_02.jpg",
  },
  {
    title: {
      en: "Landfill Gas Analyzers",
      ar: "محللات غاز النفايات",
    },
    description: {
      en: "Landfill gas analyzers are specialized instruments used to monitor and analyze gases emitted from landfill sites, including methane (CH4), carbon dioxide (CO2), and other volatile organic compounds (VOCs). These analyzers are essential for environmental monitoring and regulatory compliance, helping to mitigate greenhouse gas emissions and prevent air and groundwater pollution.",
      ar: "محللات غاز النفايات هي أدوات متخصصة تُستخدم لمراقبة وتحليل الغازات المنبعثة من مواقع النفايات، بما في ذلك الميثان (CH4)، ثاني أكسيد الكربون (CO2)، والمركبات العضوية المتطايرة (VOCs). تُعد هذه الأجهزة حيوية لمراقبة البيئة والامتثال للتشريعات.",
    },
    image: "/img/Companies and Products/35.jpg",
  },
  {
    title: {
      en: "Gas Detection Tubes",
      ar: "أنابيب كاشفة للغاز",
    },
    description: {
      en: "Gas detection tubes are cost-effective, portable tools used for the rapid detection and measurement of specific gases in air samples. These tubes contain chemical reagents that undergo color changes when exposed to target gases, providing a visual indication of gas concentration levels. They are widely used in industrial hygiene assessments, emergency response scenarios, and environmental monitoring.",
      ar: "أنابيب كاشفة للغاز هي أدوات محمولة وفعالة من حيث التكلفة تُستخدم للكشف السريع وقياس الغازات المحددة في عينات الهواء. تحتوي هذه الأنابيب على كواشف كيميائية تتغير لونها عند التعرض للغاز المستهدف، مما يوفر إشارة بصرية لتركيز الغاز.",
    },
    image: "/img/Companies and Products/product02_1.jpg",
  },
  {
    title: {
      en: "Weather Stations",
      ar: "محطات الطقس",
    },
    description: {
      en: "Weather stations are sophisticated instruments used to measure and record various atmospheric parameters and weather conditions at specific locations. These stations collect data on temperature, humidity, atmospheric pressure, wind speed and direction, rainfall, solar radiation, and UV index. They are crucial for meteorological research, climate monitoring, agricultural planning, and environmental impact assessments.",
      ar: "محطات الطقس هي أدوات متطورة تُستخدم لقياس وتسجيل مختلف المعلمات الجوية وظروف الطقس في المواقع الخاصة. تجمع هذه المحطات بيانات عن درجة الحرارة، الرطوبة، الضغط الجوي، سرعة واتجاه الرياح، كمية الأمطار، الإشعاع الشمسي، ومؤشر الأشعة فوق البنفسجية.",
    },
    image: "/img/Companies and Products/ki.jpg",
  },
  {
    title: {
      en: "High and Low Air Samplers",
      ar: "أجهزة جمع عينات الهواء العالية والمنخفضة",
    },
    description: {
      en: "High-volume and low-volume air samplers are specialized instruments used to collect air samples for the analysis of airborne pollutants, particulate matter, and atmospheric contaminants. High-volume air samplers are employed in outdoor air quality monitoring, while low-volume air samplers are used for indoor air quality assessments and workplace exposure monitoring.",
      ar: "جمع عينات الهواء عالية ومنخفضة الحجم هي أدوات متخصصة تُستخدم لجمع عينات الهواء لتحليل الملوثات الجوية والمواد الجسيمية. تُستخدم مجمعات الهواء عالية الحجم في برامج مراقبة جودة الهواء الخارجية، بينما تُستخدم مجمعات الهواء منخفضة الحجم لتقييم جودة الهواء الداخلي.",
    },
    image: "/img/Companies and Products/Air Sampler.jpg",
  },
  {
    title: {
      en: "Oil and Hydrocarbon in Water Measurement",
      ar: "قياس النفط والهيدروكربونات في المياه",
    },
    description: {
      en: "Devices for measuring oil and hydrocarbons in water are essential tools used in environmental monitoring and pollution control efforts. These instruments quantify the concentration of oil spills, petroleum products, and organic pollutants in water bodies such as oceans, rivers, lakes, and groundwater sources.",
      ar: "أجهزة قياس النفط والهيدروكربونات في المياه هي أدوات أساسية تُستخدم في مراقبة البيئة وجهود السيطرة على التلوث. تقيس هذه الأجهزة تركيز التسربات النفطية، المنتجات البترولية، والملوثات العضوية في المسطحات المائية مثل المحيطات، الأنهار، البحيرات، والمصادر الجوفية.",
    },
    image: "/img/Companies and Products/imageedit_1_6704716381-1536x1152-1.jpg",
  },
];

export const COMPANY_PRODUCTS: CompanyProduct[] = [
  {
    title: {
      en: "Flue Gas Analyzers\n(Ecom)",
      ar: "أجهزة تحليل غازات العادم\n(Ecom)",
    },
    image: "/img/Companies and Products/EASY-DE-1-e1491479911670.jpg",
    slug: "ecom",
  },
  {
    title: {
      en: "Air Quality Monitors\n(Casella)",
      ar: "أجهزة مراقبة جودة الهواء\n(Casella)",
    },
    image: "/img/Companies and Products/branding-familyproduct-hero.jpg",
    slug: "casella",
  },
  {
    title: {
      en: "Air Quality Monitors\n(Aeroqual)",
      ar: "أجهزة مراقبة جودة الهواء\n(Aeroqual)",
    },
    image: "/img/Companies and Products/Aeroqual-Ozone-O3-Sensor-Heads.jpg",
    slug: "aeroqual",
  },
  {
    title: {
      en: "Gas Detectors\n(Critical Environment)",
      ar: "أجهزة قياس نسب الغازات\n(Critical Environment)",
    },
    image: "/img/Companies and Products/control.jpg",
    slug: "critical",
  },
  {
    title: {
      en: "Environmental & Electrical Analyzers\n(Tenmars)",
      ar: "أجهزة التحليل البيئي والكهربائي\n(Tenmars)",
    },
    image: "/img/Companies and Products/61kmW0cIBoL._AC_UF1000,1000_QL80_.jpg",
    slug: "tenmars",
  },
  {
    title: {
      en: "Environmental & Electrical Analyzers\n(Perfect Prime)",
      ar: "أجهزة التحليل البيئي والكهربائي\n(Perfect Prime)",
    },
    image:
      "/img/Companies and Products/MixCollage-05-Feb-2024-01-52-PM-4364.jpg",
    slug: "perfect-prime",
  },
  {
    title: {
      en: "Gas Detectors\n(Senko)",
      ar: "أجهزة قياس نسب الغازات\n(Senko)",
    },
    image: "/img/Companies and Products/capture-500x500.jpg",
    slug: "senko",
  },
  {
    title: {
      en: "EMF-/RF Measurement\n(Gigahertz)",
      ar: "اجهزة قياس EMF-/RF\n(Gigahertz)",
    },
    image: "/img/Companies and Products/RF1.jpg",
    slug: "gigahertz",
  },
  {
    title: {
      en: "Automotive Emission\n(TEN)",
      ar: "أجهزة قياس انبعاثات السيارات\n(TEN)",
    },
    image: "/img/Companies and Products/ten.jpeg",
    slug: "ten",
  },
  {
    title: {
      en: "Water Quality Analyzers\n(LoviBond)",
      ar: "أجهزة تحليل جودة المياه\n(LoviBond)",
    },
    image: "/img/Companies and Products/md600_mb2_02.jpg",
    slug: "lovibond",
  },
  {
    title: {
      en: "Landfill Gas Analyzers\n(Geotech)",
      ar: "أجهزة تحليل غازات مدافن النفايات\n(Geotech)",
    },
    image: "/img/Companies and Products/35.jpg",
    slug: "geotech",
  },
  {
    title: {
      en: "Gas Detection Tubes\n(Kitagawa)",
      ar: "أنابيب كشف الغاز\n(Kitagawa)",
    },
    image: "/img/Companies and Products/product02_1.jpg",
    slug: "kitagawa",
  },
  {
    title: { en: "Weather Stations\n(Davis)", ar: "محطات الطقس\n(Davis)" },
    image: "/img/Companies and Products/71wSg--3Q4L._AC_UF1000,1000_QL80_.jpg",
    slug: "davis",
  },
  {
    title: {
      en: "Water Quality Measuring Devices\n(CHEMetrics)",
      ar: "أجهزة قياس جودة المياه\n(CHEMetrics)",
    },
    image: "/img/Companies and Products/K-6002.jpg",
    slug: "chemetrics",
  },
  {
    title: {
      en: "Oil and Hydrocarbon in Water Measuring\n(Arjayeng)",
      ar: "أجهزة قياس الزيت والهيدروكربون في الماء\n(Arjayeng)",
    },
    image: "/img/Companies and Products/imageedit_1_6704716381-1536x1152-1.jpg",
    slug: "arjayeng",
  },
  {
    title: {
      en: "High and Low Air Samplers\n(Tisch)",
      ar: "أجهزة أخذ عينات الهواء المرتفعة والمنخفضة\n(Tisch)",
    },
    image: "/img/Companies and Products/Air Sampler.jpg",
    slug: "tisch",
  },
  {
    title: { en: "Weather Meters\n(Kestrel)", ar: "محطات الطقس\n(Kestrel)" },
    image: "/img/Companies and Products/ki.jpg",
    slug: "kestrel",
  },
];
