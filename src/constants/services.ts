export interface ServiceSection {
  id: string;
  title: { en: string; ar: string };
  content: { en: string[]; ar: string[] };
  list?: { en: string[]; ar: string[] };
}

export interface ServiceDetail {
  intro: { en: string[]; ar: string[] };
  sections: ServiceSection[];
}

export interface ServiceItem {
  title: { en: string; ar: string };
  image: string;
  icon: string;
  slug: string;
  detail: ServiceDetail;
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
    image: "/img/Applications/environmental-measurements.webp",
    icon: "/img/Applications/environmental-measurements-icon.webp",
    slug: "environmental-measurements",
    detail: {
      intro: {
        en: [
          "Environmental measurements form the basis for understanding and analyzing the conditions around us. Through these measurements, we can accurately assess air, water, and soil quality. These measurements are an essential step in protecting the environment and ensuring public health.",
          "Through our environmental measurements, we provide an accurate analysis of pollutant levels, enabling individuals and organizations to take proactive steps to reduce negative environmental impacts.",
        ],
        ar: [
          "تشكل القياسات البيئية الأساس لفهم وتحليل الظروف المحيطة بنا. من خلال هذه القياسات، يمكننا تقييم جودة الهواء والماء والتربة بدقة. هذه القياسات تعد خطوة أساسية في حماية البيئة وضمان الصحة العامة.",
          "من خلال قياساتنا البيئية، نقدم تحليلاً دقيقاً لمستويات الملوثات، مما يمكن الأفراد والمنظمات من اتخاذ خطوات استباقية للحد من التأثيرات البيئية السلبية.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "Importance of Environmental Measurements", ar: "أهمية القياسات البيئية" },
          content: {
            en: ["Environmental measurements play a crucial role in improving quality of life by:"],
            ar: ["تلعب القياسات البيئية دوراً حيوياً في تحسين جودة الحياة من خلال:"],
          },
          list: {
            en: [
              "Assessing Environmental Risks: Identifying potential hazards such as chemical or biological pollution.",
              "Regulatory Compliance: Helping institutions comply with local and international environmental laws.",
              "Guiding Policies: Providing necessary data for making informed decisions regarding public and environmental health.",
            ],
            ar: [
              "تقييم المخاطر البيئية: التعرف على الأخطار المحتملة مثل التلوث الكيميائي أو البيولوجي.",
              "التوافق مع اللوائح: مساعدة المؤسسات على الالتزام بالقوانين البيئية المحلية والدولية.",
              "توجيه السياسات: توفير البيانات اللازمة لاتخاذ قرارات مدروسة تتعلق بالصحة العامة والبيئة.",
            ],
          },
        },
        {
          id: "types",
          title: { en: "Types of Measurements", ar: "أنواع القياسات" },
          content: {
            en: ["Environmental measurements include various areas, the most prominent being:"],
            ar: ["تتضمن القياسات البيئية مجالات متعددة، أبرزها:"],
          },
          list: {
            en: [
              "Air Quality Measurements: Monitoring levels of polluting gases and particulate matter.",
              "Water Measurements: Analyzing drinking water and wastewater to determine their suitability.",
              "Soil Measurements: Examining the soil to ensure it is free from toxic chemicals.",
            ],
            ar: [
              "قياسات جودة الهواء: مراقبة مستويات الغازات الملوثة والجسيمات الدقيقة.",
              "قياسات المياه: تحليل مياه الشرب ومياه الصرف الصحي لتحديد مدى صلاحيتها.",
              "قياسات التربة: فحص التربة للتأكد من خلوها من المواد الكيميائية السامة.",
            ],
          },
        },
        {
          id: "technology",
          title: { en: "Technology Used", ar: "التكنولوجيا المستخدمة" },
          content: {
            en: ["Advanced technology ensures accurate and reliable measurements. The tools used include:"],
            ar: ["تضمن التكنولوجيا المتقدمة إجراء قياسات دقيقة وموثوقة. تشمل الأدوات المستخدمة:"],
          },
          list: {
            en: [
              "Smart Sensors: For monitoring environmental changes in real-time.",
              "Data Analysis Software: Transforming raw data into readable and understandable reports.",
              "Portable Devices: Enabling on-site measurements without the need to send samples to a lab.",
            ],
            ar: [
              "أجهزة استشعار ذكية: لمراقبة التغيرات البيئية في الوقت الفعلي.",
              "برمجيات تحليل البيانات: تحويل البيانات الخام إلى تقارير مقروءة ومفهومة.",
              "أجهزة محمولة: تتيح إجراء قياسات في الموقع دون الحاجة إلى إرسال العينات إلى المختبر.",
            ],
          },
        },
      ],
    },
  },
  {
    title: {
      en: "Laboratory Equipment",
      ar: "معدات المختبرات",
    },
    image: "/img/Applications/laboratory-equipment.webp",
    icon: "/img/Applications/laboratory-icon.webp",
    slug: "laboratory-equipment",
    detail: {
      intro: {
        en: [
          "Laboratory equipment encompasses a broad range of tools and devices that scientists and researchers use to conduct experiments, perform analyses, and carry out investigations.",
          "These tools are essential for ensuring accurate, reliable, and reproducible results in various scientific fields, including chemistry, biology, physics, and environmental science.",
        ],
        ar: [
          "تشمل معدات المختبرات مجموعة واسعة من الأدوات والأجهزة التي يستخدمها العلماء والباحثون لإجراء التجارب وإجراء التحليلات وإجراء التحقيقات.",
          "هذه الأدوات ضرورية لضمان نتائج دقيقة وموثوقة وقابلة للتكرار في مختلف المجالات العلمية، بما في ذلك الكيمياء وعلم الأحياء والفيزياء والعلوم البيئية.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "Importance of Laboratory Equipment", ar: "أهمية معدات المختبرات" },
          content: {
            en: ["Laboratory equipment plays a critical role in scientific research and experimentation by:"],
            ar: ["تلعب معدات المختبرات دوراً حاسماً في البحث العلمي والتجارب من خلال:"],
          },
          list: {
            en: [
              "Ensuring Precision and Accuracy: High-quality equipment provides precise measurements and accurate results, which are vital for the validity of scientific experiments.",
              "Enhancing Efficiency: Modern laboratory tools streamline experimental procedures, saving time and increasing productivity.",
              "Facilitating Complex Experiments: Advanced equipment enables researchers to perform sophisticated experiments and analyses that would be impossible with basic tools.",
              "Maintaining Safety: Proper equipment helps ensure the safety of laboratory personnel by minimizing exposure to hazardous substances and reducing the risk of accidents.",
            ],
            ar: [
              "ضمان الدقة والضبط: توفر المعدات عالية الجودة قياسات دقيقة ونتائج دقيقة، وهي حيوية لصحة التجارب العلمية.",
              "تحسين الكفاءة: تعمل أدوات المختبرات الحديثة على تبسيط الإجراءات التجريبية، مما يوفر الوقت ويزيد من الإنتاجية.",
              "تسهيل التجارب المعقدة: تتيح المعدات المتقدمة للباحثين أداء تجارب وتحليلات متطورة قد تكون مستحيلة باستخدام أدوات أساسية.",
              "الحفاظ على السلامة: تساعد المعدات المناسبة على ضمان سلامة موظفي المختبرات عن طريق تقليل التعرض للمواد الخطرة وتقليل مخاطر الحوادث.",
            ],
          },
        },
        {
          id: "types",
          title: { en: "Types of Laboratory Equipment", ar: "أنواع معدات المختبرات" },
          content: {
            en: [],
            ar: [],
          },
          list: {
            en: [
              "Basic Laboratory Equipment: Beakers, Flasks, Pipettes, Burettes, and Test Tubes.",
              "Analytical Instruments: Spectrophotometers, Chromatographs, and Precision Balances.",
              "Microscopy Equipment: Light Microscopes and Electron Microscopes.",
              "Heating and Cooling Equipment: Hot Plates, Incubators, Refrigerators, and Freezers.",
              "Safety Equipment: Fume Hoods, Safety Showers, Eyewash Stations, and PPE.",
            ],
            ar: [
              "معدات المختبرات الأساسية: الأكواب، الدوارق، الماصات، السحاحات، وأنابيب الاختبار.",
              "الأدوات التحليلية: أجهزة قياس الطيف الضوئي، الكروماتوجرافيا، والموازين الدقيقة.",
              "معدات الفحص المجهري: المجاهر الضوئية والمجاهر الإلكترونية.",
              "معدات التدفئة والتبريد: السخانات، الحاضنات، الثلاجات، والمجمدات.",
              "معدات السلامة: أغطية الدخان، حمامات السلامة، ومحطات غسيل العيون.",
            ],
          },
        },
        {
          id: "tools",
          title: { en: "Tools and Techniques Used", ar: "الأدوات والتقنيات المستخدمة" },
          content: {
            en: ["The tools and techniques used in laboratory settings are diverse and depend on the specific needs of the experiment or analysis being conducted. Some commonly used tools include:"],
            ar: ["الأدوات والتقنيات المستخدمة في إعدادات المختبرات متنوعة وتعتمد على الاحتياجات المحددة للتجربة أو التحليل الجاري. بعض الأدوات الشائعة تشمل:"],
          },
          list: {
            en: [
              "Autoclaves: Sterilize equipment and media using high-pressure steam.",
              "Centrifuges: Separate components of a mixture based on density by spinning at high speeds.",
              "pH Meters: Measure the acidity or alkalinity of a solution.",
              "Thermometers and Temperature Probes: Monitor and control temperature in various experiments.",
            ],
            ar: [
              "أجهزة التعقيم (الأوتوكلاف): تعقيم المعدات والوسائط باستخدام البخار عالي الضغط.",
              "أجهزة الطرد المركزي: فصل مكونات الخليط بناءً على الكثافة عن طريق الدوران بسرعات عالية.",
              "مقياس درجة الحموضة (pH): قياس حموضة أو قلوية المحلول.",
              "موازين الحرارة ومجسات الحرارة: مراقبة ومراقبة درجة الحرارة في مختلف التجارب.",
            ],
          },
        },
      ],
    },
  },
  {
    title: {
      en: "Controlling & Monitoring Equipment",
      ar: "معدات التحكم والمراقبة",
    },
    image: "/img/Applications/controlling-monitoring.webp",
    icon: "/img/Applications/controlling-monitoring-icon.webp",
    slug: "controlling-monitoring",
    detail: {
      intro: {
        en: [
          "Controlling and monitoring equipment is essential for providing effective environmental services. This equipment ensures smooth operations across a variety of applications, including water management, energy, and manufacturing industries.",
          "At Al Nada, we are committed to delivering the latest solutions in this field to achieve optimal results for our clients.",
        ],
        ar: [
          "معدات التحكم والمراقبة ضرورية لتقديم خدمات بيئية فعالة. تضمن هذه المعدات عمليات سلسة عبر مجموعة متنوعة من التطبيقات، بما في ذلك إدارة المياه والطاقة والصناعات التحويلية.",
          "في الندى، نحن ملتزمون بتقديم أحدث الحلول في هذا المجال لتحقيق أفضل النتائج لعملائنا.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "Importance of Controlling & Monitoring Equipment", ar: "أهمية معدات التحكم والمراقبة" },
          content: {
            en: ["Controlling and monitoring equipment plays a vital role in several areas, including:"],
            ar: ["تلعب معدات التحكم والمراقبة دوراً حيوياً في عدة مجالات، بما في ذلك:"],
          },
          list: {
            en: [
              "Efficiency Improvement: This equipment helps enhance operational performance and reduce waste.",
              "Regulatory Compliance: Ensures adherence to environmental laws and regulations.",
              "Increased Safety: Contributes to early risk detection and reduces accidents.",
            ],
            ar: [
              "تحسين الكفاءة: تساعد هذه المعدات على تعزيز الأداء التشغيلي وتقليل الهدر.",
              "الامتثال التنظيمي: تضمن الالتزام بالقوانين واللوائح البيئية.",
              "زيادة السلامة: تساهم في الكشف المبكر عن المخاطر وتقليل الحوادث.",
            ],
          },
        },
        {
          id: "types",
          title: { en: "Types of Equipment We Offer", ar: "أنواع المعدات التي نقدمها" },
          content: {
            en: ["Al Nada provides a variety of controlling and monitoring equipment, including:"],
            ar: ["تقدم الندى مجموعة متنوعة من معدات التحكم والمراقبة، بما في ذلك:"],
          },
          list: {
            en: [
              "Pressure Measurement Devices: Used to monitor fluid and gas pressures, helping maintain safety in industrial operations.",
              "Temperature Measurement Devices: Ensure that temperatures do not exceed allowable limits, preventing risks.",
              "Automation Systems: Include Programmable Logic Controllers (PLCs) that allow automatic control of processes.",
              "Air Quality Monitors: Used to track pollutant levels in the air.",
              "Security Cameras: Provide comprehensive monitoring of facilities and operations.",
            ],
            ar: [
              "أجهزة قياس الضغط: تُستخدم لمراقبة ضغط السوائل والغازات، مما يساعد على الحفاظ على السلامة في العمليات الصناعية.",
              "أجهزة قياس درجة الحرارة: تضمن عدم تجاوز درجات الحرارة للحدود المسموح بها، لمنع المخاطر.",
              "أنظمة الأتمتة: تشمل وحدات التحكم المنطقية القابلة للبرمجة (PLCs) التي تتيح التحكم التلقائي في العمليات.",
              "أجهزة مراقبة جودة الهواء: تُستخدم لتتبع مستويات الملوثات في الهواء.",
              "كاميرات المراقبة: توفر مراقبة شاملة للمرافق والعمليات.",
            ],
          },
        },
        {
          id: "applications",
          title: { en: "Practical Applications", ar: "التطبيقات العملية" },
          content: {
            en: ["The applications of controlling and monitoring equipment span various fields, including:"],
            ar: ["تمتد تطبيقات معدات التحكم والمراقبة إلى مجالات متنوعة، بما في ذلك:"],
          },
          list: {
            en: [
              "Water Industry: Used in water treatment plants to ensure water quality and suitability for use.",
              "Energy Sector: Helps monitor plant performance and track harmful gas emissions.",
              "Industrial Sectors: Ensures control over manufacturing processes and reduces waste.",
            ],
            ar: [
              "صناعة المياه: تُستخدم في محطات معالجة المياه لضمان جودة المياه وملاءمتها للاستخدام.",
              "قطاع الطاقة: يساعد في مراقبة أداء المحطات وتتبع انبعاثات الغازات الضارة.",
              "القطاعات الصناعية: يضمن التحكم في عمليات التصنيع ويقلل من الهدر.",
            ],
          },
        },
      ],
    },
  },
  {
    title: {
      en: "Measuring Instruments (Air - Water - Soil)",
      ar: "أدوات القياس (الهواء - الماء - التربة)",
    },
    image: "/img/Applications/measuring-instruments.webp",
    icon: "/img/Applications/measuring-instruments-icon.webp",
    slug: "measuring-instruments",
    detail: {
      intro: {
        en: [
          "Environmental equipment is essential tools in monitoring and analyzing environmental conditions. These devices help measure changes in air, water, and soil, contributing to environmental protection and sustainable development goals.",
        ],
        ar: [
          "المعدات البيئية هي أدوات أساسية في مراقبة وتحليل الظروف البيئية. تساعد هذه الأجهزة في قياس التغيرات في الهواء والماء والتربة، مما يساهم في حماية البيئة وأهداف التنمية المستدامة.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "Importance of Environmental Equipment", ar: "أهمية المعدات البيئية" },
          content: {
            en: ["Environmental equipment plays a vital role in various fields, including:"],
            ar: ["تلعب المعدات البيئية دوراً حيوياً في مجالات مختلفة، بما في ذلك:"],
          },
          list: {
            en: [
              "Continuous Monitoring: Provides accurate data on air and water quality.",
              "Compliance: Ensures adherence to environmental laws and regulations.",
              "Risk Analysis: Helps identify potential environmental risks and provide effective solutions.",
            ],
            ar: [
              "المراقبة المستمرة: توفر بيانات دقيقة حول جودة الهواء والماء.",
              "الامتثال: يضمن الالتزام بالقوانين واللوائح البيئية.",
              "تحليل المخاطر: يساعد في تحديد المخاطر البيئية المحتملة وتقديم حلول فعالة.",
            ],
          },
        },
        {
          id: "types",
          title: { en: "Types of Environmental Equipment", ar: "أنواع المعدات البيئية" },
          content: {
            en: ["Environmental equipment includes a variety of tools, such as:"],
            ar: ["تشمل المعدات البيئية مجموعة متنوعة من الأدوات، مثل:"],
          },
          list: {
            en: [
              "Air Quality Monitors: Used to track pollutant levels such as sulfur dioxide and ozone.",
              "Water Quality Testers: Include devices for measuring pH, conductivity, and toxic substances.",
              "Noise Pollution Meters: Used to monitor noise levels in various environments.",
              "Soil Pollution Testers: Identify pollutant levels in the soil, such as heavy metals.",
            ],
            ar: [
              "أجهزة مراقبة جودة الهواء: تستخدم لتتبع مستويات الملوثات مثل ثاني أكسيد الكبريت والأوزون.",
              "أجهزة اختبار جودة المياه: تشمل أجهزة لقياس درجة الحموضة والتوصيل والمواد السامة.",
              "أجهزة قياس التلوث الضوضائي: تستخدم لمراقبة مستويات الضوضاء في البيئات المختلفة.",
              "أجهزة اختبار تلوث التربة: تحديد مستويات الملوثات في التربة، مثل المعادن الثقيلة.",
            ],
          },
        },
      ],
    },
  },
  {
    title: {
      en: "Personal Protection Equipment (PPE)",
      ar: "معدات الحماية الشخصية (PPE)",
    },
    image: "/img/Applications/personal-protection-equipment.webp",
    icon: "/img/Applications/personal-protection-equipment-icon.webp",
    slug: "ppe",
    detail: {
      intro: {
        en: [
          "Personal Protection Equipment (PPE) is an essential element in any workplace concerned with safety and health.",
          "This equipment aims to protect individuals from hazards they may face while performing their daily tasks, whether those hazards arise from chemicals, sharp tools, or unsafe environmental conditions.",
        ],
        ar: [
          "معدات الحماية الشخصية (PPE) هي عنصر أساسي في أي مكان عمل يهتم بالسلامة والصحة.",
          "تهدف هذه المعدات إلى حماية الأفراد من المخاطر التي قد يواجهونها أثناء أداء مهامهم اليومية، سواء كانت تلك المخاطر ناجمة عن مواد كيميائية أو أدوات حادة أو ظروف بيئية غير آمنة.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "Importance of Personal Protection Equipment", ar: "أهمية معدات الحماية الشخصية" },
          content: {
            en: ["The importance of PPE comes from several aspects, including:"],
            ar: ["تأتي أهمية معدات الحماية الشخصية من عدة جوانب، منها:"],
          },
          list: {
            en: [
              "Health and Safety Protection: Provides effective protection against injuries and illnesses.",
              "Reduction of Accidents: Contributes to lowering accident rates in the workplace.",
              "Regulatory Compliance: Ensures adherence to local and international safety laws and regulations.",
            ],
            ar: [
              "حماية الصحة والسلامة: توفر حماية فعالة ضد الإصابات والأمراض.",
              "الحد من الحوادث: تساهم في خفض معدلات الحوادث في مكان العمل.",
              "الامتثال التنظيمي: يضمن الالتزام بقوانين ولوائح السلامة المحلية والدولية.",
            ],
          },
        },
        {
          id: "types",
          title: { en: "Types of PPE", ar: "أنواع معدات الحماية الشخصية" },
          content: {
            en: ["PPE comes in various forms to meet the needs of different industries and jobs. Some of the most notable equipment includes:"],
            ar: ["تأتي معدات الحماية الشخصية بأشكال مختلفة لتلبية احتياجات مختلف الصناعات والوظائف. تشمل بعض أبرز المعدات:"],
          },
          list: {
            en: [
              "Safety Helmets: Protect the head from impacts and falls.",
              "Safety Goggles: Provide eye protection from dust and chemicals.",
              "Protective Gloves: Used to protect hands from chemicals and sharp tools.",
              "Safety Shoes: Protect feet from injuries caused by falling objects or compression.",
              "Respiratory Masks: Protect the respiratory system from harmful gases and toxic materials.",
              "Protective Clothing: Used to protect the body from chemicals or hazardous environments.",
            ],
            ar: [
              "خوذات السلامة: حماية الرأس من الصدمات والسقوط.",
              "نظارات السلامة: توفر حماية للعين من الغبار والمواد الكيميائية.",
              "القفازات الواقية: تستخدم لحماية الأيدي من المواد الكيميائية والأدوات الحادة.",
              "أحذية السلامة: حماية القدمين من الإصابات الناجمة عن الأجسام المتساقطة.",
              "أقنعة الجهاز التنفسي: حماية الجهاز التنفسي من الغازات الضارة والمواد السامة.",
              "الملابس الواقية: تستخدم لحماية الجسم من المواد الكيميائية أو البيئات الخطرة.",
            ],
          },
        },
      ],
    },
  },
  {
    title: {
      en: "Maintenance & Support",
      ar: "دعم وصيانة",
    },
    image: "/img/Applications/maintenance-support.webp",
    icon: "/img/Applications/maintenance-support-icon.webp",
    slug: "maintenance-support",
    detail: {
      intro: {
        en: [
          "Maintenance and support services are an essential part of any organization’s success strategies, especially in the field of scientific and environmental equipment.",
          "At Al Nada, we are committed to providing comprehensive solutions to ensure the continuity and quality of equipment operation, contributing to the overall performance of our clients.",
        ],
        ar: [
          "تعد خدمات الصيانة والدعم جزءًا أساسيًا من استراتيجيات نجاح أي مؤسسة، لا سيما في مجال المعدات العلمية والبيئية.",
          "في الندى، نحن ملتزمون بتقديم حلول شاملة لضمان استمرارية وجودة تشغيل المعدات، مما يساهم في الأداء العام لعملائنا.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "Importance of Maintenance and Support Services", ar: "أهمية خدمات الصيانة والدعم" },
          content: {
            en: ["The importance of maintenance and support services goes beyond merely keeping equipment in good condition, including the following benefits:"],
            ar: ["أهمية خدمات الصيانة والدعم تتجاوز مجرد الحفاظ على المعدات في حالة جيدة، وتشمل الفوائد التالية:"],
          },
          list: {
            en: [
              "Increased Efficiency: Regular maintenance ensures high equipment performance, leading to improved work results and reduced waste.",
              "Cost Savings: By avoiding sudden breakdowns, clients can reduce costs associated with emergency repairs and equipment replacements.",
              "Enhanced Safety: Regular maintenance helps ensure worker safety by reducing risks associated with malfunctioning or unsafe equipment.",
            ],
            ar: [
              "زيادة الكفاءة: الصيانة الدورية تضمن أداءً عاليًا للمعدات، مما يؤدي إلى تحسين نتائج العمل وتقليل الهدر.",
              "توفير التكاليف: من خلال تجنب الأعطال المفاجئة، يمكن للعملاء تقليل التكاليف المرتبطة بالإصلاحات الطارئة واستبدال المعدات.",
              "تعزيز السلامة: الصيانة الدورية تساعد على ضمان سلامة العمال من خلال تقليل المخاطر المرتبطة بالمعدات المعطلة أو غير الآمنة.",
            ],
          },
        },
        {
          id: "services",
          title: { en: "Offered Maintenance and Support Services", ar: "خدمات الصيانة والدعم المقدمة" },
          content: {
            en: ["At Al Nada, we provide a variety of maintenance and support services, including:"],
            ar: ["في الندى، نقدم مجموعة متنوعة من خدمات الصيانة والدعم، بما في ذلك:"],
          },
          list: {
            en: [
              "Regular Maintenance: Scheduled maintenance programs that include inspection, cleaning, and necessary updates.",
              "Technical Support: A team of specialized experts providing direct technical support to clients, either over the phone or on-site.",
              "Employee Training: Providing training sessions for employees on how to use and maintain equipment.",
              "Parts Replacement: Offering parts replacement services for damaged or lost components.",
              "Assessment and Analysis: Conducting regular equipment evaluations and performance analysis.",
            ],
            ar: [
              "الصيانة الدورية: برامج صيانة مجدولة تتضمن الفحص والتنظيف والتحديثات الضرورية.",
              "الدعم الفني: فريق من الخبراء المتخصصين يقدم دعمًا فنيًا مباشرًا للعملاء، إما عبر الهاتف أو في الموقع.",
              "تدريب الموظفين: تقديم جلسات تدريبية للموظفين حول كيفية استخدام المعدات وصيانتها.",
              "استبدال القطع: تقديم خدمات استبدال القطع للمكونات التالفة أو المفقودة.",
              "التقييم والتحليل: إجراء تقييمات دورية للمعدات وتحليل الأداء.",
            ],
          },
        },
      ],
    },
  },
  {
    title: {
      en: "Training",
      ar: "تدريب",
    },
    image: "/img/Applications/training-services.webp",
    icon: "/img/Applications/training-icon.webp",
    slug: "training",
    detail: {
      intro: {
        en: [
          "In the face of rapid advancements in science and technology, training has become an essential part of any company’s strategy that seeks to excel in its service offerings.",
          "At Al Nada Scientific Office, we recognize the importance of providing comprehensive and specialized training for our clients to ensure optimal use of the equipment and technologies we provide.",
        ],
        ar: [
          "في ظل التقدم السريع في العلوم والتكنولوجيا، أصبح التدريب جزءًا أساسيًا من استراتيجية أي شركة تسعى إلى التميز في عروض خدماتها.",
          "في مكتب الندى العلمي، ندرك أهمية توفير تدريب شامل ومتخصص لعملائنا لضمان الاستخدام الأمثل للمعدات والتقنيات التي نقدمها.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "Importance of Training", ar: "أهمية التدريب" },
          content: {
            en: ["Training plays a pivotal role in achieving success and sustainable development in any organization. The key benefits of training include:"],
            ar: ["يلعب التدريب دوراً محورياً في تحقيق النجاح والتنمية المستدامة في أي منظمة. تشمل الفوائد الرئيسية للتدريب ما يلي:"],
          },
          list: {
            en: [
              "Increased Efficiency: Through specialized training, employees can use equipment more effectively, improving operational efficiency and reducing errors.",
              "Enhanced Safety: Training helps improve safety in the workplace by teaching employees the correct way to handle equipment and technologies.",
              "Skill Development: Continuous training helps employees develop their skills and knowledge.",
            ],
            ar: [
              "زيادة الكفاءة: من خلال التدريب المتخصص، يمكن للموظفين استخدام المعدات بشكل أكثر فعالية، وتحسين الكفاءة التشغيلية وتقليل الأخطاء.",
              "تعزيز السلامة: التدريب يساعد على تحسين السلامة في مكان العمل من خلال تعليم الموظفين الطريقة الصحيحة للتعامل مع المعدات والتقنيات.",
              "تنمية المهارات: التدريب المستمر يساعد الموظفين على تطوير مهاراتهم ومعرفتهم.",
            ],
          },
        },
        {
          id: "services",
          title: { en: "Training Services Offered", ar: "خدمات التدريب المقدمة" },
          content: {
            en: ["At Al Nada Scientific Office, we offer a variety of training services designed to meet our clients’ needs, including:"],
            ar: ["في مكتب الندى العلمي، نقدم مجموعة متنوعة من خدمات التدريب المصممة لتلبية احتياجات عملائنا، بما في ذلك:"],
          },
          list: {
            en: [
              "Hands-on Training: On-site practical training programs where employees receive direct training on how to use equipment.",
              "Workshops: Organizing specialized workshops covering various topics such as regular maintenance and operation.",
              "Remote Training: Providing online training courses that allow clients to benefit from our expertise.",
              "Continuous Training: Ongoing training programs to ensure that employees' knowledge and skills are up-to-date.",
              "Certification: Offering certified programs that confirm employees' successful completion of the training courses.",
            ],
            ar: [
              "التدريب العملي: برامج تدريب عملية في الموقع حيث يتلقى الموظفون تدريبًا مباشرًا حول كيفية استخدام المعدات.",
              "ورش العمل: تنظيم ورش عمل متخصصة تغطي مواضيع مختلفة مثل الصيانة الدورية والتشغيل.",
              "التدريب عن بعد: تقديم دورات تدريبية عبر الإنترنت تتيح للعملاء الاستفادة من خبراتنا.",
              "التدريب المستمر: برامج تدريب مستمرة للتأكد من أن معرفة ومهارات الموظفين محدثة.",
              "الاعتماد: تقديم برامج معتمدة تؤكد اجتياز الموظفين بنجاح للدورات التدريبية.",
            ],
          },
        },
      ],
    },
  },
  {
    title: {
      en: "Calibration",
      ar: "معايرة",
    },
    image: "/img/Applications/calibration-services.webp",
    icon: "/img/Applications/calibration-icon.webp",
    slug: "calibration",
    detail: {
      intro: {
        en: [
          "In the modern world of technology and industry, precision in measurements is crucial to ensure quality and high performance. Therefore, calibration services are essential to ensure the accuracy and safety of equipment and tools.",
          "At Al Nada Scientific Office, we offer comprehensive and integrated calibration services that meet the highest international standards, ensuring our clients can fully rely on their equipment in various applications.",
        ],
        ar: [
          "في العالم الحديث للتكنولوجيا والصناعة، تعد الدقة في القياسات أمرًا بالغ الأهمية لضمان الجودة والأداء العالي. لذلك، فإن خدمات المعايرة ضرورية لضمان دقة وسلامة المعدات والأدوات.",
          "في مكتب الندى العلمي، نقدم خدمات معايرة شاملة ومتكاملة تلبي أعلى المعايير الدولية، مما يضمن لعملائنا الاعتماد الكامل على معداتهم في مختلف التطبيقات.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "The Importance of Calibration", ar: "أهمية المعايرة" },
          content: {
            en: ["Calibration plays a key role in many industries and sectors, and its importance is highlighted in the following points:"],
            ar: ["تلعب المعايرة دوراً رئيسياً في العديد من الصناعات والقطاعات، وتبرز أهميتها في النقاط التالية:"],
          },
          list: {
            en: [
              "Ensuring Accuracy: Calibration guarantees the accuracy of measurements and the optimal performance of equipment.",
              "Compliance with Standards: Calibration helps in complying with international and national standards and regulations.",
              "Improving Safety: Regular calibration helps in detecting any deviations or potential errors before they cause significant problems.",
              "Reducing Costs: By early detection of errors and deviations, calibration helps in reducing maintenance and emergency repair costs.",
            ],
            ar: [
              "ضمان الدقة: المعايرة تضمن دقة القياسات والأداء الأمثل للمعدات.",
              "الامتثال للمعايير: المعايرة تساعد في الامتثال للمعايير واللوائح الدولية والوطنية.",
              "تحسين السلامة: المعايرة الدورية تساعد في الكشف عن أي انحرافات أو أخطاء محتملة قبل أن تسبب مشاكل كبيرة.",
              "تقليل التكاليف: من خلال الكشف المبكر عن الأخطاء والانحرافات، تساعد المعايرة في تقليل تكاليف الصيانة والإصلاح في حالات الطوارئ.",
            ],
          },
        },
        {
          id: "services",
          title: { en: "Calibration Services Offered", ar: "خدمات المعايرة المقدمة" },
          content: {
            en: ["At Al Nada Scientific Office, we offer a wide range of calibration services covering various devices and equipment, including:"],
            ar: ["في مكتب الندى العلمي، نقدم مجموعة واسعة من خدمات المعايرة التي تغطي مختلف الأجهزة والمعدات، بما في ذلك:"],
          },
          list: {
            en: [
              "Industrial Equipment Calibration: Includes calibration of measurement and control devices in factories and production lines.",
              "Laboratory Equipment Calibration: Includes calibration of tools and devices used in scientific laboratories.",
              "Environmental Measurement Devices Calibration: Includes calibration of air quality, dust, and noise measurement devices.",
              "Field Services: We offer field calibration services where our specialized team visits the client's site.",
            ],
            ar: [
              "معايرة المعدات الصناعية: تشمل معايرة أجهزة القياس والتحكم في المصانع وخطوط الإنتاج.",
              "معايرة معدات المختبرات: تشمل معايرة الأدوات والأجهزة المستخدمة في المختبرات العلمية.",
              "معايرة أجهزة القياس البيئية: تشمل معايرة أجهزة قياس جودة الهواء والغبار والضوضاء.",
              "الخدمات الميدانية: نقدم خدمات المعايرة الميدانية حيث يزور فريقنا المتخصص موقع العميل.",
            ],
          },
        },
      ],
    },
  },
  {
    title: {
      en: "Glassware & Chemicals",
      ar: "الأواني الزجاجية والمواد الكيميائية",
    },
    image: "/img/Applications/glassware-chemicals.webp",
    icon: "/img/Applications/glassware-chemicals-icon.webp",
    slug: "glassware-chemicals",
    detail: {
      intro: {
        en: [
          "In the world of laboratories and scientific research, glassware and chemicals are indispensable parts of daily experiments and procedures.",
          "Providing these tools with reliability and high quality is crucial to ensuring the success of research and the safety of laboratory personnel. At Al Nada Scientific Office, we offer comprehensive glassware and chemical supply services, contributing to the highest standards of quality and safety for our clients.",
        ],
        ar: [
          "في عالم المختبرات والبحث العلمي، تعد الأواني الزجاجية والمواد الكيميائية أجزاء لا غنى عنها من التجارب والإجراءات اليومية.",
          "يعد توفير هذه الأدوات بموثوقية وجودة عالية أمرًا بالغ الأهمية لضمان نجاح البحث وسلامة موظفي المختبر. في مكتب الندى العلمي، نقدم خدمات توريد الأواني الزجاجية والمواد الكيميائية الشاملة، مما يساهم في تحقيق أعلى معايير الجودة والسلامة لعملائنا.",
        ],
      },
      sections: [
        {
          id: "importance",
          title: { en: "The Importance of Glassware and Chemicals", ar: "أهمية الأواني الزجاجية والمواد الكيميائية" },
          content: {
            en: ["Glassware and chemicals are used in a wide range of laboratory applications, and their importance lies in the following points:"],
            ar: ["تُستخدم الأواني الزجاجية والمواد الكيميائية في مجموعة واسعة من التطبيقات المعملية، وتكمن أهميتها في النقاط التالية:"],
          },
          list: {
            en: [
              "Measurement Accuracy and Experiments: Glassware helps ensure the accuracy of measurements and scientific experiments.",
              "Personnel Safety: High-quality chemicals ensure the safety of laboratory personnel by reducing potential risks.",
              "Compliance with International Standards: Reliable glassware and chemicals help comply with international and local standards.",
            ],
            ar: [
              "دقة القياس والتجارب: الأواني الزجاجية تساعد على ضمان دقة القياسات والتجارب العلمية.",
              "سلامة الموظفين: تضمن المواد الكيميائية عالية الجودة سلامة موظفي المختبر من خلال تقليل المخاطر المحتملة.",
              "الامتثال للمعايير الدولية: الأواني الزجاجية والمواد الكيميائية الموثوقة تساعد على الامتثال للمعايير الدولية والمحلية.",
            ],
          },
        },
        {
          id: "services",
          title: { en: "Glassware and Chemical Supply Services Offered", ar: "خدمات توريد الأواني الزجاجية والمواد الكيميائية المقدمة" },
          content: {
            en: ["At Al Nada Scientific Office, we provide a comprehensive range of glassware and chemical supply services to meet the needs of our clients' laboratories, including:"],
            ar: ["في مكتب الندى العلمي، نقدم مجموعة شاملة من خدمات توريد الأواني الزجاجية والمواد الكيميائية لتلبية احتياجات مختبرات عملائنا، بما في ذلك:"],
          },
          list: {
            en: [
              "Providing Glassware: We offer a variety of high-quality glassware, including tubes, beakers, dishes, and flasks.",
              "Providing Chemicals: We supply pure and reliable chemicals for use in scientific and industrial experiments.",
              "Technical Consultations: We provide specialized technical consultations to help our clients select the appropriate glassware and chemicals.",
              "Training and Technical Support: We offer training programs and technical support to ensure safe and proper use.",
            ],
            ar: [
              "توفير الأواني الزجاجية: نقدم مجموعة متنوعة من الأواني الزجاجية عالية الجودة، بما في ذلك الأنابيب والأكواب والأطباق والدوارق.",
              "توفير المواد الكيميائية: نقوم بتوريد مواد كيميائية نقية وموثوقة للاستخدام في التجارب العلمية والصناعية.",
              "الاستشارات الفنية: نقدم استشارات فنية متخصصة لمساعدة عملائنا على اختيار الأواني الزجاجية والمواد الكيميائية المناسبة.",
              "التدريب والدعم الفني: نقدم برامج تدريبية ودعمًا فنيًا لضمان الاستخدام الآمن والسليم.",
            ],
          },
        },
      ],
    },
  },
];
