export interface PartnerSection {
  heading: { en: string; ar: string };
  content: { en: string; ar: string };
  items?: { en: string; ar: string }[];
}

export interface PartnerProduct {
  name: { en: string; ar: string };
  image: string;
  detailUrl?: string;
}

export interface PartnerDetail {
  slug: string;
  pageTitle: { en: string; ar: string };
  metaDescription: { en: string; ar: string };
  sections: PartnerSection[];
  products: PartnerProduct[];
}

export const PARTNER_DETAILS: Record<string, PartnerDetail> = {
  'ecom': {
    slug: 'ecom',
    pageTitle: {
      en: 'Exhaust Gas Analyzers from Ecom',
      ar: 'أجهزة تحليل غازات العادم من شركة Ecom',
    },
    metaDescription: {
      en: 'Ecom provides advanced exhaust gas analyzers for emission monitoring and analysis to improve air quality and ensure compliance with environmental standards.',
      ar: 'شركة Ecom تقدم أجهزة تحليل غازات العادم المتقدمة لمراقبة وتحليل الانبعاثات لتحسين جودة الهواء وضمان الامتثال للمعايير البيئية.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'With the global concern about the environmental impact of gaseous emissions from vehicles and industries, exhaust gas analyzers have become essential tools for monitoring and improving air quality. Ecom is a leading company in the manufacture of exhaust gas analyzers, offering advanced solutions for emission monitoring and analysis.', ar: 'في ظل تزايد القلق العالمي حول التأثير البيئي للانبعاثات الغازية من المركبات والصناعات، أصبحت أجهزة تحليل غازات العادم أدوات حيوية لمراقبة وتحسين جودة الهواء. تعد شركة Ecom من الشركات الرائدة في تصنيع أجهزة تحليل غازات العادم، وتقدم حلولاً متقدمة لمراقبة الانبعاثات وتحليلها.' },
      },
      {
        heading: { en: 'What Are Exhaust Gas Analyzers?', ar: 'ما هي أجهزة تحليل غازات العادم؟' },
        content: { en: 'Exhaust gas analyzers are technical devices used to measure the concentrations of various gases emitted from combustion processes in engines and factories. The gases typically measured include carbon monoxide (CO), carbon dioxide (CO₂), oxygen (O₂), nitrogen oxides (NOx), and hydrocarbons (HC).', ar: 'أجهزة تحليل غازات العادم هي أجهزة تقنية تُستخدم لقياس تركيزات الغازات المختلفة المنبعثة من عمليات الاحتراق في المحركات والمصانع. تشمل الغازات التي يتم قياسها عادةً أول أكسيد الكربون (CO)، وثاني أكسيد الكربون (CO₂)، والأكسجين (O₂)، وأكاسيد النيتروجين (NOx)، والهيدروكربونات (HC).' },
      },
      {
        heading: { en: 'Why Do We Need Exhaust Gas Analysis?', ar: 'لماذا نحتاج إلى تحليل غازات العادم؟' },
        content: { en: '', ar: '' },
        items: [
          { en: 'Environmental Protection: Analyzing exhaust gases helps reduce harmful emissions and improve air quality.', ar: 'الحفاظ على البيئة: يساعد تحليل غازات العادم في تقليل الانبعاثات الضارة وتحسين جودة الهواء.' },
          { en: 'Compliance with Standards: Ensures compliance with national and international environmental regulations.', ar: 'الامتثال للمعايير: يساعد في ضمان الامتثال للمعايير واللوائح البيئية الوطنية والدولية.' },
          { en: 'Fuel Efficiency Improvement: Monitoring emissions can improve engine performance and reduce fuel consumption.', ar: 'تحسين كفاءة الوقود: من خلال مراقبة الانبعاثات، يمكن تحسين أداء المحركات وتقليل استهلاك الوقود.' },
          { en: 'Fault Detection: Helps in early detection of faults in combustion systems, reducing maintenance costs.', ar: 'الكشف عن الأعطال: يساعد في الكشف المبكر عن الأعطال في أنظمة الاحتراق وتقليل تكاليف الصيانة.' },
        ],
      },
      {
        heading: { en: 'Advantages of Ecom\'s Exhaust Gas Analyzers', ar: 'مزايا أجهزة تحليل غازات العادم من Ecom' },
        content: { en: '', ar: '' },
        items: [
          { en: 'High Accuracy: Ecom\'s analyzers provide precise and reliable measurements of various gases.', ar: 'دقة عالية: توفر أجهزة Ecom قياسات دقيقة وموثوقة للغازات المختلفة.' },
          { en: 'Ease of Use: Featuring user-friendly designs and advanced software for easy analysis and monitoring.', ar: 'سهولة الاستخدام: تتميز بتصميم سهل الاستخدام وبرمجيات متقدمة تسهل عملية التحليل والمراقبة.' },
          { en: 'Durability and Efficiency: Built to withstand harsh environmental conditions and ensure high performance over long periods.', ar: 'متانة وكفاءة: مصممة لتحمل الظروف البيئية القاسية وضمان الأداء العالي لفترات طويلة.' },
          { en: 'Excellent Technical Support: Ecom offers specialized technical support and after-sales services to ensure customer satisfaction.', ar: 'دعم فني ممتاز: تقدم Ecom دعمًا فنيًا متخصصًا وخدمات ما بعد البيع لضمان رضا العملاء.' },
        ],
      },
      {
        heading: { en: 'Applications', ar: 'التطبيقات' },
        content: { en: 'Ecom\'s exhaust gas analyzers are used in a wide range of applications, including:', ar: 'تُستخدم أجهزة تحليل غازات العادم من Ecom في مجموعة واسعة من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Industries: Monitoring emissions from industrial combustion processes.', ar: 'الصناعات: لمراقبة الانبعاثات الناتجة عن عمليات الاحتراق في المصانع.' },
          { en: 'Power Plants: Analyzing gases emitted from power generation stations.', ar: 'محطات توليد الطاقة: لتحليل الغازات المنبعثة من محطات توليد الطاقة.' },
          { en: 'Technical Inspection Centers: Inspecting vehicle emissions to ensure compliance with standards.', ar: 'مراكز الفحص الفني: لفحص الانبعاثات من المركبات وضمان الامتثال للمعايير.' },
          { en: 'Environmental Research: Analyzing the environmental impact of emissions in research and studies.', ar: 'البحوث البيئية: في الأبحاث والدراسات البيئية لتحليل تأثيرات الانبعاثات على البيئة.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Ecom\'s exhaust gas analyzers are the perfect choice for companies and institutions aiming to protect the environment and improve the efficiency of their operations. By providing advanced solutions and excellent technical support, Ecom helps its clients achieve their environmental and economic goals.', ar: 'تعد أجهزة تحليل غازات العادم من شركة Ecom الخيار الأمثل للشركات والمؤسسات التي تسعى للحفاظ على البيئة وتحسين كفاءة عملياتها. من خلال تقديم حلول متقدمة ودعم فني ممتاز، تساعد Ecom عملاءها في تحقيق أهدافهم البيئية والاقتصادية.' },
      },
    ],
    products: [
      {
        name: { en: 'Portable Flue Gas Analyzer', ar: 'Portable Flue Gas Analyzer' },
        image: '/img/Companies and Products/Portable Flue Gas Analyzer.webp',
        detailUrl: 'https://www.ecom.de/en/productcats/abgasanalyse/',
      },
      {
        name: { en: 'Fixed Gas Analyzer', ar: 'Fixed Gas Analyzer' },
        image: '/img/Companies and Products/Fixed Continues Gas Analyzer.webp',
        detailUrl: 'https://ecomusa.com/ecom-products/ecom-rack/',
      },
      {
        name: { en: 'Pressure Meters', ar: 'Pressure Meters' },
        image: '/img/Companies and Products/Recording.webp',
        detailUrl: 'https://www.ecom.de/en/productcats/pressure-measurement/',
      },
    ],
  },
  'casella': {
    slug: 'casella',
    pageTitle: {
      en: 'Air Quality Monitoring Equipment, Dust, Noise, and Vibration Measurement Devices, and Air Sampling Equipment from Casella',
      ar: 'أجهزة مراقبة جودة الهواء وقياس الأتربة والضوضاء والاهتزازات وتجميع عينات الهواء من شركة Casella',
    },
    metaDescription: {
      en: 'Casella provides advanced solutions for air quality monitoring, dust, noise, and vibration measurement, and air sampling to help improve quality of life.',
      ar: 'شركة Casella تقدم أجهزة متقدمة لمراقبة جودة الهواء وقياس الأتربة والضوضاء والاهتزازات وتجميع عينات الهواء، مما يساعد على تحسين جودة الحياة.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'In a world increasingly aware of the importance of maintaining a healthy and clean environment, Casella stands at the forefront of companies providing advanced solutions for air quality monitoring, dust, noise, and vibration measurement, as well as air sampling. These devices are crucial for gaining an accurate understanding of environmental pollutants and their impacts, facilitating the necessary actions to improve the quality of life.', ar: 'في عالم يتزايد فيه الوعي بأهمية الحفاظ على بيئة صحية ونظيفة، تأتي شركة Casella في مقدمة الشركات التي توفر حلولاً متقدمة لمراقبة جودة الهواء وقياس الأتربة والضوضاء والاهتزازات، بالإضافة إلى تجميع عينات الهواء. تُعنى هذه الأجهزة بتحقيق فهم دقيق للملوثات البيئية وتأثيراتها، مما يساعد في اتخاذ الإجراءات اللازمة لتحسين جودة الحياة.' },
      },
      {
        heading: { en: 'What Are Air Quality Monitoring Devices?', ar: 'ما هي أجهزة مراقبة جودة الهواء؟' },
        content: { en: 'Air quality monitoring devices are technical tools used to measure concentrations of various pollutants in the air, such as harmful gases and fine particles. These devices provide continuous monitoring of ambient air in both industrial and urban areas.', ar: 'أجهزة مراقبة جودة الهواء هي أدوات تقنية تُستخدم لقياس تركيزات الملوثات المختلفة في الهواء، مثل الغازات الضارة والجسيمات الدقيقة. تتيح هذه الأجهزة مراقبة مستمرة للهواء المحيط في المناطق الصناعية والحضرية على حد سواء.' },
      },
      {
        heading: { en: 'What Are Dust Measurement Devices?', ar: 'ما هي أجهزة قياس الأتربة؟' },
        content: { en: 'Dust measurement devices are used to measure concentrations of solid particles suspended in the air. These devices are essential in industrial sites and construction areas where dust is prevalent.', ar: 'أجهزة قياس الأتربة تُستخدم لقياس تركيزات الجسيمات الصلبة العالقة في الهواء. تعتبر هذه الأجهزة ضرورية في المواقع الصناعية ومواقع البناء حيث تكون الأتربة متواجدة بكثافة.' },
      },
      {
        heading: { en: 'What Are Noise Measurement Devices?', ar: 'ما هي أجهزة قياس الضوضاء؟' },
        content: { en: 'Noise measurement devices are used to measure noise levels in the surrounding environment. These devices are utilized in urban, industrial, and construction areas to ensure compliance with environmental noise standards.', ar: 'أجهزة قياس الضوضاء تُستخدم لقياس مستويات الضوضاء في البيئة المحيطة. تُستخدم هذه الأجهزة في المناطق الحضرية والصناعية ومواقع البناء لضمان الامتثال لمعايير الضوضاء البيئية.' },
      },
      {
        heading: { en: 'What Are Vibration Measurement Devices?', ar: 'ما هي أجهزة قياس الاهتزازات؟' },
        content: { en: 'Vibration measurement devices are used to measure vibration levels in the surrounding environment. These devices are employed in construction sites and industrial areas to ensure the safety of structures and machinery.', ar: 'أجهزة قياس الاهتزازات تُستخدم لقياس مستويات الاهتزازات في البيئة المحيطة. تُستخدم هذه الأجهزة في مواقع البناء والمناطق الصناعية لضمان سلامة الهياكل والآلات.' },
      },
      {
        heading: { en: 'Why Do We Need These Devices?', ar: 'لماذا نحتاج إلى هذه الأجهزة؟' },
        content: { en: '', ar: '' },
        items: [
          { en: 'Public Health Protection: Helps reduce exposure to harmful pollutants that can cause respiratory and other diseases.', ar: 'الحفاظ على الصحة العامة: تساعد في تقليل التعرض للملوثات الضارة التي قد تسبب أمراضًا تنفسية وأمراضًا أخرى.' },
          { en: 'Compliance with Environmental Standards: Ensures adherence to environmental standards and regulations.', ar: 'الامتثال للمعايير البيئية: تساهم في التأكد من الامتثال للمعايير واللوائح البيئية.' },
          { en: 'Improving Quality of Life: By identifying pollution sources and taking appropriate measures to mitigate them.', ar: 'تحسين جودة الحياة: من خلال تحديد مصادر التلوث واتخاذ التدابير المناسبة للحد منها.' },
        ],
      },
      {
        heading: { en: 'Advantages of Casella Devices', ar: 'مزايا أجهزة Casella' },
        content: { en: '', ar: '' },
        items: [
          { en: 'High Accuracy: Casella provides devices with high accuracy in measuring pollutants.', ar: 'دقة عالية: توفر Casella أجهزة ذات دقة عالية في قياس الملوثات.' },
          { en: 'Ease of Use: Featuring ergonomic designs and advanced software that facilitate analysis and monitoring.', ar: 'سهولة الاستخدام: تتميز بتصميم مريح وبرمجيات متقدمة تسهل عملية التحليل والمراقبة.' },
          { en: 'Durability and Efficiency: Built to withstand harsh environmental conditions and ensure sustainable performance.', ar: 'متانة وكفاءة: مصممة لتحمل الظروف البيئية القاسية وضمان الأداء المستدام.' },
          { en: 'Excellent Technical Support: Casella offers specialized technical support and after-sales services to ensure customer satisfaction.', ar: 'دعم فني ممتاز: تقدم Casella دعمًا فنيًا متخصصًا وخدمات ما بعد البيع لضمان رضا العملاء.' },
        ],
      },
      {
        heading: { en: 'Applications of Casella Devices', ar: 'تطبيقات أجهزة Casella' },
        content: { en: 'Casella\'s devices are used in a wide range of applications, including:', ar: 'تُستخدم أجهزة Casella في مجموعة واسعة من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Industries: Monitoring air quality in factories and industrial areas.', ar: 'الصناعات: لمراقبة جودة الهواء في المصانع والمناطق الصناعية.' },
          { en: 'Environmental Research: In studies and research analyzing the impacts of pollutants on the environment.', ar: 'البحوث البيئية: في الأبحاث والدراسات البيئية لتحليل تأثيرات الملوثات على البيئة.' },
          { en: 'Urban Areas: Monitoring air quality in cities and residential areas.', ar: 'المناطق الحضرية: لمراقبة الهواء في المدن والمناطق السكنية.' },
          { en: 'Construction Sites: Measuring dust, noise, and vibrations at construction sites.', ar: 'مواقع البناء: لقياس الأتربة والضوضاء والاهتزازات في مواقع الإنشاءات.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Casella\'s air quality monitoring equipment, dust, noise, and vibration measurement devices, and air sampling equipment are the ideal choice for companies and institutions aiming to improve the surrounding environment. By offering innovative solutions and excellent technical support, Casella contributes to achieving clean and healthy environmental goals.', ar: 'تُعد أجهزة مراقبة جودة الهواء وقياس الأتربة والضوضاء والاهتزازات وتجميع عينات الهواء من شركة Casella الخيار الأمثل للشركات والمؤسسات التي تسعى لتحسين جودة البيئة المحيطة بها. من خلال تقديم حلول مبتكرة ودعم فني ممتاز، تساهم Casella في تحقيق أهداف البيئة النظيفة والصحية.' },
      },
    ],
    products: [
      {
        name: { en: 'Sound Level Meter', ar: 'Sound Level Meter' },
        image: '/img/Companies and Products/Sound Level Meter1.webp',
        detailUrl: '../EN/https://www.casellasolutions.com/categories/noisemonitoring1.html',
      },
      {
        name: { en: 'Sampling Pump', ar: 'Sampling Pump' },
        image: '/img/Companies and Products/Sampling Pump.webp',
        detailUrl: '../EN/https://www.casellasolutions.com/uk/en/products/apex2-standard.html',
      },
      {
        name: { en: 'Personal Noise Dosimeter', ar: 'Personal Noise Dosimeter' },
        image: '/img/Companies and Products/Personal Noise Dosimeter.webp',
        detailUrl: '../EN/https://casellasolutions.com/uk/en/products/dbadge2-standard-single-kit.html',
      },
      {
        name: { en: 'Dust Meter', ar: 'Dust Meter' },
        image: '/img/Companies and Products/Dust Meter.webp',
        detailUrl: '../EN/https://www.casellasolutions.com/uk/en/products/cel-712-microdust-pro-kit.html',
      },
      {
        name: { en: 'Fixed (Sound – Dust - Vibration )', ar: 'Fixed (Sound – Dust - Vibration )' },
        image: '/img/Companies and Products/Fixed (Sound –Dust ).webp',
        detailUrl: '../EN/https://www.casellasolutions.com/categories/boundarymonitoring1.html',
      },
      {
        name: { en: 'Vibration Meter', ar: 'Vibration Meter' },
        image: '/img/Companies and Products/Vibration Meter1.webp',
        detailUrl: '../EN/https://www.casellasolutions.com/categories/vibrationmonitoring1.html',
      },
      {
        name: { en: 'Sampling Accessory', ar: 'Sampling Accessory' },
        image: '/img/Companies and Products/Sampling Accessory.webp',
        detailUrl: '../EN/https://www.casellasolutions.com/uk/en/products/by-product/air-sampling-media/apex2/accessories.html',
      },
    ],
  },
  'aeroqual': {
    slug: 'aeroqual',
    pageTitle: {
      en: 'Gas and Dust Measurement Devices in the Workplace from Aeroqual',
      ar: 'أجهزة قياس الغازات والأتربة في بيئة العمل من شركة Aeroqual',
    },
    metaDescription: {
      en: 'أجهزة قياس الغازات والأتربة من شركة Aeroqual لضمان بيئة عمل صحية وآمنة.',
      ar: 'Gas and dust measurement devices from Aeroqual ensure a healthy and safe work environment.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Gas and dust measurement devices are essential components of any strategy aimed at maintaining employee health and safety in the workplace. Aeroqual provides advanced and reliable solutions for air quality measurement, helping companies comply with environmental standards and ensure a healthy work environment.', ar: 'تُعتبر أجهزة قياس الغازات والأتربة جزءًا أساسيًا من أي استراتيجية للحفاظ على صحة وسلامة الموظفين في بيئة العمل. تقدم شركة Aeroqual حلولاً متقدمة وموثوقة لقياس جودة الهواء، مما يساعد الشركات على الالتزام بالمعايير البيئية وضمان بيئة عمل صحية.' },
      },
      {
        heading: { en: 'What Are Gas Measurement Devices?', ar: 'ما هي أجهزة قياس الغازات؟' },
        content: { en: 'Gas measurement devices are tools used to determine the concentration of various gases in the air, such as carbon monoxide, carbon dioxide, nitrogen oxides, and others. These devices are utilized to monitor pollution levels in the air and ensure worker safety.', ar: 'أجهزة قياس الغازات هي أدوات تستخدم لتحديد تركيز الغازات المختلفة في الهواء، مثل أول أكسيد الكربون، وثاني أكسيد الكربون، وأكاسيد النيتروجين، وغيرها. تُستخدم هذه الأجهزة لمراقبة مستويات التلوث في الهواء وضمان سلامة العاملين.' },
      },
      {
        heading: { en: 'What Are Dust Measurement Devices?', ar: 'ما هي أجهزة قياس الأتربة؟' },
        content: { en: 'Dust measurement devices measure the concentration of solid particles suspended in the air. These devices are vital in industries dealing with dry materials, such as construction and mining, where dust can impact worker health.', ar: 'أجهزة قياس الأتربة تقيس تركيز الجسيمات الصلبة العالقة في الهواء. تُعتبر هذه الأجهزة حيوية في الصناعات التي تتعامل مع المواد الجافة، مثل البناء والتعدين، حيث يمكن أن تؤثر الأتربة على صحة العاملين.' },
      },
      {
        heading: { en: 'Why Do Companies Need These Devices?', ar: 'لماذا تحتاج الشركات إلى هذه الأجهزة؟' },
        content: { en: '', ar: '' },
        items: [
          { en: 'Protecting Employee Health: Helps reduce exposure to harmful pollutants that can cause respiratory diseases.', ar: 'الحفاظ على صحة الموظفين: تساعد في تقليل التعرض للملوثات الضارة التي قد تسبب أمراضًا تنفسية.' },
          { en: 'Compliance with Environmental Standards: Assists in adhering to local and international regulations.', ar: 'الامتثال للمعايير البيئية: تساهم في الالتزام باللوائح والمعايير المحلية والدولية.' },
          { en: 'Improving the Work Environment: By providing accurate information about air quality, effective measures can be taken to improve conditions.', ar: 'تحسين بيئة العمل: من خلال تقديم معلومات دقيقة حول جودة الهواء، يمكن اتخاذ تدابير فعالة لتحسين الظروف.' },
        ],
      },
      {
        heading: { en: 'Advantages of Aeroqual Devices', ar: 'مزايا أجهزة Aeroqual' },
        content: { en: '', ar: '' },
        items: [
          { en: 'High Accuracy: Aeroqual devices provide precise and reliable measurements of gas and dust levels.', ar: 'دقة عالية: تقدم أجهزة Aeroqual قياسات دقيقة وموثوقة لمستويات الغازات والأتربة.' },
          { en: 'Ease of Use: Featuring a user-friendly interface and advanced software that facilitate monitoring.', ar: 'سهولة الاستخدام: تتميز بواجهة مستخدم بسيطة وبرمجيات متقدمة تسهل عملية المراقبة.' },
          { en: 'Diverse Applications: Suitable for use in a variety of industries, including construction, manufacturing, and healthcare.', ar: 'تنوع التطبيقات: يمكن استخدامها في مجموعة متنوعة من الصناعات، بما في ذلك البناء، التصنيع، والرعاية الصحية.' },
        ],
      },
      {
        heading: { en: 'Applications of Aeroqual Devices', ar: 'تطبيقات أجهزة Aeroqual' },
        content: { en: 'Aeroqual\'s devices are used in numerous applications, including:', ar: 'تُستخدم أجهزة Aeroqual في العديد من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Industries: Monitoring air quality at job sites.', ar: 'الصناعات: لمراقبة جودة الهواء في مواقع العمل.' },
          { en: 'Environmental Research: In studies aimed at understanding the impact of pollutants on public health.', ar: 'الأبحاث البيئية: في الدراسات التي تهدف إلى فهم تأثير الملوثات على الصحة العامة.' },
          { en: 'Environmental Analysis: To collect accurate data on pollution levels in the air.', ar: 'التحليل البيئي: لجمع بيانات دقيقة عن مستويات التلوث في الهواء.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Aeroqual\'s gas and dust measurement devices are the ideal choice for companies seeking to improve air quality in the workplace. By providing innovative and reliable solutions, Aeroqual contributes to achieving a healthy and safe work environment.', ar: 'تُعد أجهزة قياس الغازات والأتربة من شركة Aeroqual الخيار المثالي للشركات التي تسعى لتحسين جودة الهواء في بيئة العمل. من خلال توفير حلول مبتكرة وموثوقة، تساهم Aeroqual في تحقيق بيئة عمل صحية وآمنة.' },
      },
    ],
    products: [
      {
        name: { en: 'Portable Air Quality Monitor', ar: 'Portable Air Quality Monitor' },
        image: '/img/Companies and Products/Portable Air Quality Monitor.webp',
        detailUrl: 'https://www.aeroqual.com/products/s-series-portable-air-monitors/series-500-portable-air-pollution-monitor',
      },
      {
        name: { en: 'Portable Dust Monitor', ar: 'Portable Dust Monitor' },
        image: '/img/Companies and Products/Portable Dust Monitor.webp',
        detailUrl: 'https://www.aeroqual.com/products/ranger-portable-air-monitor/ranger-portable-dust-monitor',
      },
      {
        name: { en: 'Ambient Air Monitoring Station', ar: 'Ambient Air Monitoring Station' },
        image: '/img/Companies and Products/aeroqual-aqm-65-with-integrated-calibration.webp',
        detailUrl: 'https://www.aeroqual.com/products/aqm-stations/aqm-65-air-quality-monitoring-station',
      },
      {
        name: { en: 'Dust Sentry', ar: 'Dust Sentry' },
        image: '/img/Companies and Products/Dust Sentry.webp',
        detailUrl: 'https://www.aeroqual.com/particulate-dust-monitors/dust-sentry',
      },
      {
        name: { en: 'Air Quality Monitor', ar: 'Air Quality Monitor' },
        image: '/img/Companies and Products/Air Quality Monitor.webp',
        detailUrl: 'https://www.aeroqual.com/products/aqs-mini-air-quality-stations/aqs-air-quality-monitor',
      },
      {
        name: { en: 'Outdoor Air Quality Test Kit (Starter)', ar: 'Outdoor Air Quality Test Kit (Starter)' },
        image: '/img/Companies and Products/Outdoor Air Quality Test Kit (Starter).webp',
        detailUrl: 'https://www.aeroqual.com/products/s-series-portable-air-monitors/outdoor-portable-monitor-starter-kit',
      },
      {
        name: { en: 'Indoor Air Quality Test Kit for WELL', ar: 'Indoor Air Quality Test Kit for WELL' },
        image: '/img/Companies and Products/Indoor Air Quality Test Kit for WELL.webp',
        detailUrl: 'https://www.aeroqual.com/products/ranger-portable-air-monitor/indoor-portable-monitor-well-compliance-kit',
      },
      {
        name: { en: 'Ammonia Sensor 0-100ppm', ar: 'Ammonia Sensor 0-100ppm' },
        image: '/img/Companies and Products/Ammonia Sensor 0-100ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Ammonia Sensor 0-1000ppm', ar: 'Ammonia Sensor 0-1000ppm' },
        image: '/img/Companies and Products/Ammonia Sensor 0-1000ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Carbon Dioxide Detector 0-2000ppm', ar: 'Carbon Dioxide Detector 0-2000ppm' },
        image: '/img/Companies and Products/Carbon Dioxide Detector 0-2000ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'CO2 Detector 0-5000ppm', ar: 'CO2 Detector 0-5000ppm' },
        image: '/img/Companies and Products/CO2 Detector 0-5000ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Carbon Monoxide Sensor 0-25ppm', ar: 'Carbon Monoxide Sensor 0-25ppm' },
        image: '/img/Companies and Products/Carbon Monoxide Sensor 0-25ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Carbon Monoxide Sensor 0-100ppm', ar: 'Carbon Monoxide Sensor 0-100ppm' },
        image: '/img/Companies and Products/Carbon Monoxide Sensor 0-100ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Chlorine Sensor 0-10ppm', ar: 'Chlorine Sensor 0-10ppm' },
        image: '/img/Companies and Products/Chlorine Sensor 0-10ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Formaldehyde Sensor 0-10ppm', ar: 'Formaldehyde Sensor 0-10ppm' },
        image: '/img/Companies and Products/Formaldehyde Sensor 0-10ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Hydrogen Detector 0-5000ppm', ar: 'Hydrogen Detector 0-5000ppm' },
        image: '/img/Companies and Products/Hydrogen Detector 0-5000ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Hydrogen-Sulfide-H2S-Sensor', ar: 'Hydrogen-Sulfide-H2S-Sensor' },
        image: '/img/Companies and Products/Hydrogen-Sulfide-H2S-Sensor.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'VOC Sensor 0-500ppm', ar: 'VOC Sensor 0-500ppm' },
        image: '/img/Companies and Products/VOC Sensor 0-500ppm.webp',
      },
      {
        name: { en: 'Particulate Matter Sensor PM10 / PM2.5', ar: 'Particulate Matter Sensor PM10 / PM2.5' },
        image: '/img/Companies and Products/Particulate Matter Sensor PM10 PM2.5.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'PID Sensor 0-30ppm', ar: 'PID Sensor 0-30ppm' },
        image: '/img/Companies and Products/PID Sensor 0-30ppm.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
      {
        name: { en: 'Sulfur Dioxide Sensor', ar: 'Sulfur Dioxide Sensor' },
        image: '/img/Companies and Products/Sulfur Dioxide Sensor.webp',
        detailUrl: 'https://www.aeroqual.com/products/sensors',
      },
    ],
  },
  'critical': {
    slug: 'critical',
    pageTitle: {
      en: 'Gas Detection Devices from Critical Environment Technologies',
      ar: 'أجهزة كشف الغازات من شركة Critical Environment Technologies',
    },
    metaDescription: {
      en: 'Gas detection devices from Critical Environment Technologies ensure individual safety and compliance with standards.',
      ar: 'أجهزة كشف الغازات من شركة Critical Environment Technologies لضمان سلامة الأفراد والامتثال للمعايير.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Critical Environment Technologies Canada Inc. (CETCI) is a leader in the design and manufacturing of gas detection systems, offering a wide range of solutions for indoor air quality monitoring and fixed gas detection. These devices are designed to ensure high safety and reliability in environments where detecting hazardous gases is critical.', ar: 'تُعد شركة Critical Environment Technologies Canada Inc. (CETCI) رائدة في تصميم وتصنيع أنظمة كشف الغازات، حيث تقدم مجموعة واسعة من الحلول لمراقبة جودة الهواء الداخلي وكشف الغازات الثابتة. تهدف هذه الأجهزة إلى توفير أمان وموثوقية عالية في البيئات التي تتطلب كشف الغازات الخطرة.' },
      },
      {
        heading: { en: 'What Are Gas Detection Devices?', ar: 'ما هي أجهزة كشف الغازات؟' },
        content: { en: 'Gas detection devices are tools used to monitor the presence and concentration of various gases in the air, including carbon monoxide, nitrogen dioxide, refrigerants, and volatile organic compounds (VOCs). These devices are essential for ensuring the safety of individuals and compliance with environmental standards.', ar: 'أجهزة كشف الغازات هي أدوات تستخدم لرصد وجود وتركيز مجموعة من الغازات في الهواء، بما في ذلك أول أكسيد الكربون، ثاني أكسيد النيتروجين، المبردات، ومركبات عضوية متطايرة (VOCs). تُعتبر هذه الأجهزة ضرورية لضمان سلامة الأفراد والامتثال للمعايير البيئية.' },
      },
      {
        heading: { en: 'Importance of Gas Detection Devices', ar: 'أهمية أجهزة كشف الغازات' },
        content: { en: 'CETCI\'s devices are utilized in many vital applications, including:', ar: 'تُستخدم أجهزة CETCI في العديد من التطبيقات الحيوية، بما في ذلك:' },
        items: [
          { en: 'Parking Garages: To monitor gas levels produced by vehicles.', ar: 'مرائب السيارات: لمراقبة مستويات الغازات الناتجة عن المركبات.' },
          { en: 'Refrigeration Plants: Where safety from hazardous gases is paramount.', ar: 'مصانع التبريد: حيث تعتبر السلامة من الغازات الخطرة أمرًا أساسيًا.' },
          { en: 'Commercial Kitchens: To monitor emissions of harmful gases.', ar: 'المطابخ التجارية: لمراقبة انبعاثات الغازات الضارة.' },
          { en: 'HVAC Systems: To ensure a safe and healthy indoor environment.', ar: 'أنظمة التدفئة والتهوية وتكييف الهواء: لضمان بيئة داخلية آمنة وصحية.' },
        ],
      },
      {
        heading: { en: 'Advantages of CETCI Devices', ar: 'مزايا أجهزة CETCI' },
        content: { en: '', ar: '' },
        items: [
          { en: 'Real-Time Monitoring: CETCI systems provide continuous monitoring of gas levels, aiding in early hazard detection.', ar: 'مراقبة في الوقت الفعلي: توفر أنظمة CETCI رصدًا مستمرًا لمستويات الغاز، مما يساعد في الكشف المبكر عن المخاطر.' },
          { en: 'Effective Alerts: Designed to alert individuals to hazardous levels of toxic or flammable gases.', ar: 'تحذيرات فعالة: مصممة لتنبيه الأفراد عند وجود مستويات خطرة من الغازات السامة أو القابلة للاشتعال.' },
          { en: 'Compliance with Standards: The devices ensure adherence to local and international safety regulations.', ar: 'التوافق مع المعايير: تضمن الأجهزة الامتثال للمعايير واللوائح المحلية والدولية المتعلقة بالسلامة.' },
        ],
      },
      {
        heading: { en: 'Applications of Gas Detection Devices', ar: 'تطبيقات أجهزة كشف الغازات' },
        content: { en: 'CETCI\'s products are used in a variety of sectors, including:', ar: 'تستخدم منتجات CETCI في مجموعة متنوعة من المجالات، بما في ذلك:' },
        items: [
          { en: 'Commercial Markets: To maintain the safety of employees and customers.', ar: 'الأسواق التجارية: للحفاظ على سلامة الموظفين والعملاء.' },
          { en: 'Industrial Markets: To ensure the safety of operations and equipment.', ar: 'الأسواق الصناعية: لضمان سلامة العمليات والمعدات.' },
          { en: 'Institutional Markets: To guarantee safe and healthy work environments.', ar: 'الأسواق المؤسسية: لضمان بيئات عمل آمنة وصحية.' },
          { en: 'Residential Markets: To protect households from hazardous gases.', ar: 'الأسواق السكنية: لحماية الأسر من الغازات الخطرة.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Gas detection devices from Critical Environment Technologies are an ideal choice for organizations seeking to ensure individual safety and compliance with environmental standards. By providing reliable and innovative solutions, CETCI contributes to protecting assets and ensuring a safe environment for all.', ar: 'تُعتبر أجهزة كشف الغازات من شركة Critical Environment Technologies خيارًا مثاليًا للمؤسسات التي تسعى لضمان سلامة الأفراد والامتثال للمعايير البيئية. من خلال تقديم حلول موثوقة ومبتكرة، تساهم CETCI في حماية الأصول وضمان بيئة آمنة للجميع.' },
      },
    ],
    products: [
      {
        name: { en: 'Indoor Air Quality Monitor', ar: 'Indoor Air Quality Monitor' },
        image: '/img/Companies and Products/indoor air quality monitor.webp',
        detailUrl: 'https://www.critical-environment.com/products/indoor-air-quality-monitors',
      },
      {
        name: { en: 'cGas', ar: 'cGas' },
        image: '/img/Companies and Products/MixCollage-05-Feb-2024-01-14-PM-7930.webp',
        detailUrl: 'https://www.critical-environment.com/products/gas-detectors',
      },
    ],
  },
  'tenmars': {
    slug: 'tenmars',
    pageTitle: {
      en: 'Tenmars Company and Environmental and Digital Measurement Devices',
      ar: 'شركة Tenmars وأجهزة التحليل البيئي والرقمي',
    },
    metaDescription: {
      en: 'Tenmars Company offers environmental and digital measurement devices such as noise measurement, illumination intensity, temperature measurement, vibration measurement, and RF electromagnetic wave measurement.',
      ar: 'شركة Tenmars تقدم أجهزة التحليل البيئي والرقمي مثل قياس الضوضاء، شدة الاستنضاءة، درجات الحرارة، الاهتزازات والموجات الكهرومغناطيسية.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Tenmars is a leading company in the development and manufacturing of environmental and digital measurement devices, significantly contributing to the provision of comprehensive solutions for monitoring various environments. Founded to meet market demands for accurate and reliable devices, Tenmars offers a wide range of products, including noise and sound measurement devices, illumination intensity meters, temperature measurement devices, vibration measurement tools, and radio frequency (RF) electromagnetic wave meters. These devices aim to improve quality of life and enhance safety across different settings.', ar: 'تُعتبر شركة Tenmars من الشركات الرائدة في مجال تطوير وتصنيع أجهزة التحليل البيئي والرقمي، حيث تساهم بشكل كبير في توفير حلول متكاملة لمراقبة البيئات المختلفة. تأسست Tenmars لتلبية احتياجات السوق من الأجهزة الدقيقة والموثوقة، وتقدم مجموعة واسعة من المنتجات التي تشمل أجهزة قياس الضوضاء والصوت، وشدة الاستنضاءة، ودرجات الحرارة، وقياس الاهتزازات، بالإضافة إلى قياس الموجات الكهرومغناطيسية (RF). تهدف هذه الأجهزة إلى تحسين جودة الحياة وتعزيز السلامة في مختلف البيئات.' },
      },
      {
        heading: { en: 'Noise and Sound Measurement Devices', ar: 'أجهزة قياس الضوضاء والصوت' },
        content: { en: 'Noise measurement devices from Tenmars are essential tools used to assess sound levels in various environments. These devices are utilized in many applications, such as: Tenmars noise measurement devices are characterized by their high accuracy and ease of use, making them ideal for professionals and researchers.', ar: 'تعتبر أجهزة قياس الضوضاء من Tenmars أدوات حيوية تستخدم لقياس مستوى الصوت في البيئات المختلفة. تُستخدم هذه الأجهزة في العديد من التطبيقات، مثل: تتميز أجهزة قياس الضوضاء من Tenmars بدقتها العالية وسهولة استخدامها، مما يجعلها الخيار المثالي للمهنيين والباحثين.' },
        items: [
          { en: 'Environmental Analysis: To evaluate noise levels in residential and industrial areas.', ar: 'التحليل البيئي: لتقييم مستويات الضوضاء في المناطق السكنية والصناعية.' },
          { en: 'Industrial Applications: To ensure compliance with safety standards and reduce the adverse effects of noise on workers.', ar: 'التطبيقات الصناعية: لضمان الامتثال لمعايير السلامة وتقليل التأثيرات السلبية للضوضاء على العمال.' },
          { en: 'Research and Studies: To support studies focused on the negative impacts of noise on public health.', ar: 'الأبحاث والدراسات: لدعم الدراسات التي تركز على التأثيرات السلبية للضوضاء على الصحة العامة.' },
        ],
      },
      {
        heading: { en: 'Illumination Intensity Measurement Devices', ar: 'أجهزة قياس شدة الاستنضاءة' },
        content: { en: 'Illumination intensity meters are used to measure light levels in different locations, such as offices, schools, and public areas. These devices play a crucial role in: Tenmars illumination intensity devices are designed for user-friendliness, making them suitable for everyday use.', ar: 'تُستخدم أجهزة قياس شدة الاستنضاءة لقياس مستوى الإضاءة في الأماكن المختلفة، مثل المكاتب والمدارس والأماكن العامة. تلعب هذه الأجهزة دورًا حيويًا في: تأتي أجهزة قياس شدة الاستنضاءة من Tenmars بتصاميم مريحة وسهلة الاستخدام، مما يجعلها ملائمة للاستخدام اليومي.' },
        items: [
          { en: 'Improving Work Environments: Ensuring adequate lighting that positively impacts productivity and comfort for individuals.', ar: 'تحسين بيئات العمل: حيث تساهم في ضمان توفير الإضاءة المناسبة التي تؤثر بشكل إيجابي على الإنتاجية وراحة الأفراد.' },
          { en: 'Compliance with Standards: Helping organizations adhere to required lighting standards.', ar: 'الامتثال للمعايير: تساعد المؤسسات على الالتزام بالمعايير المطلوبة فيما يتعلق بالإضاءة.' },
        ],
      },
      {
        heading: { en: 'Temperature Measurement Devices', ar: 'أجهزة قياس درجات الحرارة' },
        content: { en: 'Tenmars offers a variety of temperature measurement devices used in multiple applications, such as: Tenmars temperature measurement devices are known for their high precision, assisting users in making informed decisions based on reliable data.', ar: 'تقدم Tenmars مجموعة متنوعة من أجهزة قياس درجات الحرارة التي تُستخدم في تطبيقات متعددة، مثل: تتميز أجهزة قياس درجات الحرارة من Tenmars بدقتها العالية، مما يساعد على اتخاذ القرارات الصحيحة بناءً على بيانات موثوقة.' },
        items: [
          { en: 'Environmental Monitoring: For observing temperature levels in natural settings.', ar: 'الرصد البيئي: لمراقبة درجات الحرارة في البيئات الطبيعية.' },
          { en: 'Food and Medical Industries: To ensure the safety of products and processes.', ar: 'الصناعات الغذائية والطبية: لضمان سلامة المنتجات والعمليات.' },
        ],
      },
      {
        heading: { en: 'Vibration Measurement Devices', ar: 'أجهزة قياس الاهتزازات' },
        content: { en: 'Tenmars vibration measurement devices are essential for monitoring vibrations in equipment and machinery across various industries. These devices are used for: Vibration measurement devices contribute to achieving the highest safety and reliability standards.', ar: 'تعتبر أجهزة قياس الاهتزازات من Tenmars ضرورية لرصد اهتزازات المعدات والآلات في مختلف الصناعات. تُستخدم هذه الأجهزة في: تساهم أجهزة قياس الاهتزازات في تحقيق أعلى معايير السلامة والموثوقية.' },
        items: [
          { en: 'Performance Analysis: Ensuring equipment operates efficiently without issues that may affect functionality.', ar: 'تحليل أداء المعدات: للتأكد من أن المعدات تعمل بكفاءة وعدم وجود مشكلات قد تؤثر على التشغيل.' },
          { en: 'Preventive Monitoring: Reducing the risks of failures and enhancing equipment performance.', ar: 'المراقبة الوقائية: لتقليل مخاطر الأعطال وتحسين أداء المعدات.' },
        ],
      },
      {
        heading: { en: 'Radio Frequency (RF) Electromagnetic Wave Measurement Devices', ar: 'أجهزة قياس الموجات الكهرومغناطيسية (RF)' },
        content: { en: 'Tenmars provides RF electromagnetic wave measurement devices used to assess levels of electromagnetic radiation in different environments. These devices play a vital role in: Tenmars RF measurement devices are reliable tools that help maintain the safety of individuals and the environment.', ar: 'توفر Tenmars أجهزة قياس الموجات الكهرومغناطيسية، التي تُستخدم لقياس مستوى الإشعاع الكهرومغناطيسي في البيئات المختلفة. تلعب هذه الأجهزة دورًا هامًا في: تعتبر أجهزة قياس الموجات الكهرومغناطيسية من Tenmars أدوات موثوقة تسهم في الحفاظ على سلامة الأفراد والبيئة.' },
        items: [
          { en: 'Compliance with Health Standards: Ensuring the safety of individuals in areas exposed to radiation.', ar: 'الامتثال للمعايير الصحية: لضمان سلامة الأفراد في المناطق التي يتعرضون فيها للإشعاع.' },
          { en: 'Environmental Monitoring: Ensuring that radiation levels do not exceed established thresholds.', ar: 'مراقبة البيئة: لضمان عدم تجاوز مستويات الإشعاع المعايير المحددة.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Tenmars is an ideal choice for organizations and individuals seeking reliable and accurate environmental and digital measurement devices. By offering a wide range of advanced devices, Tenmars contributes to improving quality of life and enhancing safety in various environments. The company’s commitment to quality and innovation makes it a trusted partner for professionals across multiple fields.', ar: 'تُعد شركة Tenmars خيارًا مثاليًا للمؤسسات والأفراد الذين يسعون للحصول على أجهزة تحليل بيئي ورقمي موثوقة ودقيقة. من خلال تقديم مجموعة واسعة من الأجهزة المتطورة، تساهم Tenmars في تحسين جودة الحياة وتعزيز السلامة في مختلف البيئات. إن التزام الشركة بالجودة والابتكار يجعلها شريكًا موثوقًا للمهنيين في مجالات متعددة.' },
      },
    ],
    products: [
      {
        name: { en: 'Air Velocity Meter', ar: 'Air Velocity Meter' },
        image: '/img/Companies and Products/air velocity meter.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19124.php?Lang=en',
      },
      {
        name: { en: 'Radiation Monitor', ar: 'Radiation Monitor' },
        image: '/img/Companies and Products/Radiation Monitor.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19123.php?Lang=en',
      },
      {
        name: { en: 'Light Meter', ar: 'Light Meter' },
        image: '/img/Companies and Products/Light Meter.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19126.php?Lang=en',
      },
      {
        name: { en: 'Sound Level Meter', ar: 'Sound Level Meter' },
        image: '/img/Companies and Products/Sound Level Meter.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19586.php?Lang=en',
      },
      {
        name: { en: 'Heat Stress WBGT Meter', ar: 'Heat Stress WBGT Meter' },
        image: '/img/Companies and Products/HEAT STRESS WBGT METER.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-20496.php?Lang=en',
      },
      {
        name: { en: 'Thermometer', ar: 'Thermometer' },
        image: '/img/Companies and Products/Thermometer.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19127.php?Lang=en',
      },
      {
        name: { en: 'Carbon Monoxide Meter', ar: 'Carbon Monoxide Meter' },
        image: '/img/Companies and Products/Carbon Monoxide Meter.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19119.php?Lang=en',
      },
      {
        name: { en: 'Air Quality (IAQ) Monitor', ar: 'Air Quality (IAQ) Monitor' },
        image: '/img/Companies and Products/Air Quality (IAQ) Monitor.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19120.php?Lang=en',
      },
      {
        name: { en: 'Vibration Meter', ar: 'Vibration Meter' },
        image: '/img/Companies and Products/Vibration Meter.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19139.php?Lang=en',
      },
      {
        name: { en: 'Hot Wire Anemometer', ar: 'Hot Wire Anemometer' },
        image: '/img/Companies and Products/Hot Wire Anemometer.webp',
        detailUrl: 'https://www.tenmars.com/m/2001-1682-689935-1.php?Lang=en',
      },
      {
        name: { en: '3 - Axis RF Field Strength Meter', ar: '3 - Axis RF Field Strength Meter' },
        image: '/img/Companies and Products/3 - Axis RF Field Strength Meter.webp',
        detailUrl: 'https://www.tenmars.com/m/2000-1682-19121.php?Lang=en',
      },
      {
        name: { en: 'Tacho Meter', ar: 'Tacho Meter' },
        image: '/img/Companies and Products/Tacho Meter.webp',
        detailUrl: 'https://www.tenmars.com/m/2001-1682-689922-1.php?Lang=en',
      },
    ],
  },
  'perfect-prime': {
    slug: 'perfect-prime',
    pageTitle: {
      en: 'Perfect Prime and Environmental and Digital Analysis Devices',
      ar: 'شركة Perfect Prime وأجهزة التحليل البيئي والرقمي',
    },
    metaDescription: {
      en: 'Perfect Prime offers environmental and digital analysis devices such as noise measurement, light intensity, temperature measurement, vibration, and radio wave devices.',
      ar: 'شركة Perfect Prime تقدم أجهزة التحليل البيئي والرقمي مثل قياس الضوضاء، الإضاءة، درجات الحرارة، الاهتزازات، وموجات الراديو.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Perfect Prime is a leading company in the development and manufacturing of environmental and digital analysis devices. The company offers a comprehensive range of innovative instruments that meet the needs of various industries. Its products include noise and sound measurement devices, light intensity meters, temperature measuring devices, vibration meters, and radio wave measuring devices. Perfect Prime contributes to improving the quality of life and enhancing safety across different environments.', ar: 'تُعتبر شركة Perfect Prime من الشركات الرائدة في تطوير وتصنيع أجهزة التحليل البيئي والرقمي. تقدم الشركة مجموعة شاملة من الأجهزة المبتكرة التي تلبي احتياجات مختلف الصناعات. تشمل منتجاتها أجهزة قياس الضوضاء والصوت، أجهزة قياس شدة الإضاءة، أجهزة قياس درجات الحرارة، أجهزة قياس الاهتزازات، وأجهزة قياس موجات الراديو. تساهم Perfect Prime في تحسين جودة الحياة وتعزيز السلامة في مختلف البيئات.' },
      },
      {
        heading: { en: 'Noise and Sound Measurement Devices', ar: 'أجهزة قياس الضوضاء والصوت' },
        content: { en: 'Perfect Prime\'s noise and sound measurement devices are used to assess sound levels in various environments. Their applications include: These devices are known for their accuracy and ease of use, making them ideal for professionals and researchers.', ar: 'تستخدم أجهزة قياس الضوضاء والصوت من Perfect Prime لتقييم مستويات الصوت في بيئات متعددة. تشمل تطبيقاتها: تتميز هذه الأجهزة بالدقة وسهولة الاستخدام، مما يجعلها مثالية للمحترفين والباحثين.' },
        items: [
          { en: 'Environmental Analysis: Helping measure noise levels in residential and industrial areas to identify the main sources of sound pollution.', ar: 'تحليل البيئة: تساهم في قياس الضوضاء في المناطق السكنية والصناعية، مما يساعد في تحديد المصادر الرئيسية للتلوث السمعي.' },
          { en: 'Industrial Applications: Ensuring compliance with safety standards and reducing the negative impacts of noise on workers. High noise levels are one of the leading causes of occupational stress.', ar: 'التطبيقات الصناعية: تستخدم لضمان الامتثال لمعايير السلامة وتقليل الآثار السلبية للضوضاء على العمال. تُعتبر الضوضاء العالية أحد الأسباب الرئيسية للإجهاد الوظيفي.' },
          { en: 'Research and Studies: Supporting research related to the effects of noise on public health, helping to establish strategies to mitigate sound pollution.', ar: 'البحوث والدراسات: تدعم الأبحاث المتعلقة بتأثيرات الضوضاء على الصحة العامة، مما يساعد على وضع استراتيجيات للحد من التلوث السمعي.' },
        ],
      },
      {
        heading: { en: 'Light Intensity Measuring Devices', ar: 'أجهزة قياس شدة الإضاءة' },
        content: { en: 'Light intensity measuring devices are used to assess light levels in various locations such as offices and schools. These devices play a crucial role in: Perfect Prime\'s light intensity meters are designed for easy use, making them suitable for daily applications.', ar: 'تُستخدم أجهزة قياس شدة الإضاءة لقياس مستويات الإضاءة في أماكن مختلفة مثل المكاتب والمدارس. تلعب هذه الأجهزة دورًا هامًا في: تتميز أجهزة قياس شدة الإضاءة من Perfect Prime بتصميم سهل الاستخدام، مما يجعلها مناسبة للاستخدام اليومي.' },
        items: [
          { en: 'Improving Work Environments: Ensuring adequate lighting positively affects productivity and comfort. Sufficient lighting reduces fatigue and eye strain.', ar: 'تحسين بيئات العمل: تساهم في ضمان وجود إضاءة كافية تؤثر إيجابيًا على الإنتاجية وراحة الأفراد. إضاءة كافية تقلل من التعب والإجهاد البصري.' },
          { en: 'Compliance with Standards: Helping organizations adhere to required lighting standards, especially in public spaces and offices.', ar: 'الامتثال للمعايير: تساعد المؤسسات على الالتزام بالمعايير المطلوبة للإضاءة، خاصة في الأماكن العامة والمكاتب.' },
        ],
      },
      {
        heading: { en: 'Temperature Measuring Devices', ar: 'أجهزة قياس درجات الحرارة' },
        content: { en: 'Perfect Prime offers a variety of temperature measuring devices used in multiple applications, such as: Perfect Prime\'s temperature measuring devices are renowned for their high accuracy, assisting users in making informed decisions based on reliable data.', ar: 'تقدم Perfect Prime مجموعة متنوعة من أجهزة قياس درجات الحرارة المستخدمة في تطبيقات متعددة مثل: تُعرف أجهزة قياس درجات الحرارة من Perfect Prime بدقتها العالية، مما يساعد المستخدمين في اتخاذ قرارات مستنيرة بناءً على بيانات موثوقة.' },
        items: [
          { en: 'Environmental Monitoring: Used to track temperatures in natural environments, such as weather stations or environmental facilities.', ar: 'مراقبة البيئة: تُستخدم لرصد درجات الحرارة في البيئات الطبيعية، مثل محطات الأرصاد الجوية أو المرافق البيئية.' },
          { en: 'Food and Medical Industries: Considered vital tools to ensure product and process safety, such as storing medicines and foods at appropriate temperatures.', ar: 'الصناعات الغذائية والطبية: تُعتبر أدوات حيوية لضمان سلامة المنتجات والعمليات، مثل تخزين الأدوية والأطعمة في درجات حرارة مناسبة.' },
        ],
      },
      {
        heading: { en: 'Vibration Measuring Devices', ar: 'أجهزة قياس الاهتزازات' },
        content: { en: 'Perfect Prime\'s vibration measuring devices are essential for monitoring vibrations in equipment and machinery across various industries. These devices are used for: Vibration measuring devices play a key role in achieving high safety and reliability standards.', ar: 'تُعتبر أجهزة قياس الاهتزازات من Perfect Prime ضرورية لمراقبة الاهتزازات في المعدات والآلات عبر الصناعات المختلفة. تُستخدم هذه الأجهزة من أجل: تساهم أجهزة قياس الاهتزازات في تحقيق أعلى معايير السلامة والموثوقية.' },
        items: [
          { en: 'Performance Analysis: Ensuring equipment operates efficiently without issues affecting operation. Abnormal vibrations may indicate potential failures.', ar: 'تحليل الأداء: تساهم في التأكد من أن المعدات تعمل بكفاءة دون مشكلات تؤثر على التشغيل. الاهتزازات غير الطبيعية يمكن أن تشير إلى وجود أعطال محتملة.' },
          { en: 'Preventive Monitoring: Helping reduce the risks of breakdowns and improving equipment performance, contributing to lower operational costs.', ar: 'المراقبة الوقائية: تساعد في تقليل مخاطر الأعطال وتحسين أداء المعدات، مما يسهم في تقليل التكاليف التشغيلية.' },
        ],
      },
      {
        heading: { en: 'Radio Wave Measuring Devices', ar: 'أجهزة قياس موجات الراديو' },
        content: { en: 'Perfect Prime\'s radio wave measuring devices are used to monitor electromagnetic radiation levels in different environments. These devices play a vital role in: Perfect Prime\'s radio wave measuring devices are reliable tools that help maintain individual and environmental safety.', ar: 'تُستخدم أجهزة قياس موجات الراديو من Perfect Prime لرصد مستويات الإشعاع الكهرومغناطيسي في البيئات المختلفة. تلعب هذه الأجهزة دورًا حيويًا في: تُعتبر أجهزة قياس موجات الراديو من Perfect Prime أدوات موثوقة تساهم في الحفاظ على سلامة الأفراد والبيئة.' },
        items: [
          { en: 'Compliance with Health Standards: Ensuring the safety of individuals in radiation-exposed areas, such as locations near transmission stations.', ar: 'الامتثال للمعايير الصحية: تضمن سلامة الأفراد في المناطق المعرضة للإشعاع، مثل المواقع القريبة من محطات الإرسال.' },
          { en: 'Environmental Monitoring: Ensuring that radiation levels do not exceed specified standards, protecting both the environment and the community.', ar: 'مراقبة البيئة: تساعد في ضمان عدم تجاوز مستويات الإشعاع للمعايير المحددة، مما يحمي البيئة والمجتمع.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Perfect Prime is an ideal choice for organizations and individuals seeking reliable and accurate environmental and digital analysis devices. By offering a wide range of advanced instruments, Perfect Prime contributes to improving the quality of life and enhancing safety in various environments. The company\'s commitment to quality and innovation makes it a trusted partner for professionals in multiple fields.', ar: 'تُعد شركة Perfect Prime خيارًا مثاليًا للمؤسسات والأفراد الذين يسعون للحصول على أجهزة تحليل بيئي ورقمي موثوقة ودقيقة. من خلال تقديم مجموعة واسعة من الأجهزة المتطورة، تساهم Perfect Prime في تحسين جودة الحياة وتعزيز السلامة في مختلف البيئات. إن التزام الشركة بالجودة والابتكار يجعلها شريكًا موثوقًا للمهنيين في مجالات متعددة.' },
      },
    ],
    products: [
      {
        name: { en: 'Indoor Air Quality Meter', ar: 'Indoor Air Quality Meter' },
        image: '/img/Companies and Products/Indoor Air Quality Meter11.webp',
        detailUrl: 'https://perfectprime.com/products/aq9600',
      },
      {
        name: { en: 'Air Pressure Manometer', ar: 'Air Pressure Manometer' },
        image: '/img/Companies and Products/Air Pressure Manometer.webp',
        detailUrl: 'https://perfectprime.com/collections/air-quality-meter-1',
      },
      {
        name: { en: 'Digital Manometer Air Pressure Gauge', ar: 'Digital Manometer Air Pressure Gauge' },
        image: '/img/Companies and Products/Digital Manometer Air Pressure Gauge.webp',
        detailUrl: 'https://perfectprime.com/products/ar1895',
      },
      {
        name: { en: 'Anemometer', ar: 'Anemometer' },
        image: '/img/Companies and Products/Anemometer.webp',
        detailUrl: 'https://perfectprime.com/products/wd9819',
      },
      {
        name: { en: '4 Channels Thermocouple Thermometer', ar: '4 Channels Thermocouple Thermometer' },
        image: '/img/Companies and Products/4 Channels Thermocouple Thermometer.webp',
        detailUrl: 'https://perfectprime.com/products/tc9815',
      },
      {
        name: { en: 'Light Meters', ar: 'Light Meters' },
        image: '/img/Companies and Products/MixCollage-05-Feb-2024-01-37-PM-4205.webp',
        detailUrl: 'https://perfectprime.com/products/530-light-meter',
      },
      {
        name: { en: 'Microwave Oven Leakage Detector', ar: 'Microwave Oven Leakage Detector' },
        image: '/img/Companies and Products/Microwave Oven Leakage Detector.webp',
        detailUrl: 'https://perfectprime.com/products/mw0002',
      },
      {
        name: { en: 'Thermo Anemometer CFM/CMM', ar: 'Thermo Anemometer CFM/CMM' },
        image: '/img/Companies and Products/Thermo Anemometer CFM CMM.webp',
        detailUrl: 'https://perfectprime.com/products/wd9819',
      },
      {
        name: { en: 'CO2 Meter', ar: 'CO2 Meter' },
        image: '/img/Companies and Products/CO2 Home Use Meter.webp',
        detailUrl: 'https://perfectprime.com/products/co2390',
      },
    ],
  },
  'senko': {
    slug: 'senko',
    pageTitle: {
      en: 'Gas Detection Devices from Senko',
      ar: 'أجهزة كشف الغازات من شركة Senko',
    },
    metaDescription: {
      en: 'Senko Co., Ltd. offers advanced gas detection devices for industrial safety, environmental monitoring, and home safety, protecting individuals from hazardous gases.',
      ar: 'تقدم شركة Senko Co., Ltd. أجهزة كشف الغازات المتقدمة للسلامة الصناعية والرصد البيئي والسلامة المنزلية، لحماية الأفراد من الغازات الخطرة.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Senko Co., Ltd. is a renowned company based in South Korea, recognized for its expertise in the development and manufacturing of gas detection sensors and related security equipment. With a strong international reputation, Senko contributes significantly to gas detection technology, operating in various sectors, including industrial safety, environmental monitoring, and home safety. Their solutions are designed to protect individuals and assets from hazardous gases, ensuring a safer environment for all.', ar: 'شركة Senko Co., Ltd. هي شركة معروفة بخبرتها في تطوير وتصنيع أجهزة استشعار الغازات والمعدات الأمنية ذات الصلة. تقع الشركة في كوريا الجنوبية وقد حازت على اعتراف دولي بفضل مساهماتها في تكنولوجيا كشف الغازات. تعمل Senko في قطاعات متنوعة، بما في ذلك السلامة الصناعية، والرصد البيئي، والسلامة المنزلية، موفرة حلولاً تساعد في حماية الأشخاص والأصول من الغازات الخطرة.' },
      },
      {
        heading: { en: 'Overview of Gas Detection Devices', ar: 'نظرة عامة على أجهزة كشف الغازات' },
        content: { en: 'Senko\'s gas detection devices are engineered to monitor and identify the presence of harmful gases in various settings. These devices are essential for maintaining safety standards and compliance in industrial, commercial, and residential environments.', ar: 'تم تصميم أجهزة كشف الغازات من Senko لمراقبة وتحديد وجود الغازات الضارة في بيئات مختلفة. هذه الأجهزة ضرورية للحفاظ على معايير السلامة والامتثال في البيئات الصناعية والتجارية والسكنية.' },
        items: [
          { en: 'Advanced Technology: Senko utilizes cutting-edge technology to ensure accurate and reliable detection of gases, providing real-time data for effective decision-making.', ar: 'تكنولوجيا متقدمة: تستخدم Senko تكنولوجيا متطورة لضمان دقة وموثوقية الكشف عن الغازات، مما يوفر بيانات في الوقت الحقيقي لاتخاذ قرارات فعالة.' },
          { en: 'Wide Range of Gas Detection: The devices can detect various gases, including carbon monoxide (CO), hydrogen sulfide (H₂S), ammonia (NH₃), and volatile organic compounds (VOCs).', ar: 'مجموعة واسعة من كشف الغازات: يمكن للأجهزة اكتشاف مجموعة متنوعة من الغازات، بما في ذلك أول أكسيد الكربون (CO)، وكبريتيد الهيدروجين (H₂S)، والأمونيا (NH₃)، والمركبات العضوية المتطايرة (VOCs).' },
          { en: 'User-Friendly Interface: Designed with the end-user in mind, Senko\'s devices feature intuitive interfaces that make operation simple and efficient.', ar: 'واجهة مستخدم سهلة: تم تصميم أجهزة Senko مع مراعاة المستخدم النهائي، حيث تتميز بواجهات بديهية تجعل التشغيل بسيطًا وفعالًا.' },
        ],
      },
      {
        heading: { en: 'Applications of Senko Gas Detection Devices', ar: 'تطبيقات أجهزة كشف الغازات من Senko' },
        content: { en: 'Senko\'s gas detectors serve multiple purposes across different sectors: In industrial environments, gas detection devices are crucial for ensuring the safety of workers. These devices help monitor the air quality in manufacturing plants, refineries, and chemical processing facilities, alerting personnel to potential gas leaks or harmful concentrations. Senko\'s solutions contribute to environmental protection by monitoring gas emissions in various settings. By detecting harmful pollutants, these devices play a vital role in maintaining compliance with environmental regulations and promoting sustainable practices. In residential applications, Senko\'s gas detectors protect families from dangerous gas exposure. These devices are essential for monitoring carbon monoxide and other hazardous gases, providing peace of mind to homeowners.', ar: 'تخدم أجهزة كشف الغازات من Senko عدة أغراض عبر مختلف القطاعات: في البيئات الصناعية، تعتبر أجهزة كشف الغازات ضرورية لضمان سلامة العمال. تساعد هذه الأجهزة في مراقبة جودة الهواء في المصانع ومصافي النفط ومنشآت معالجة الكيميائيات، مما ينبه الموظفين إلى تسربات الغاز المحتملة أو تركيزات ضارة. تساهم حلول Senko في حماية البيئة من خلال مراقبة انبعاثات الغازات في بيئات مختلفة. من خلال اكتشاف الملوثات الضارة، تلعب هذه الأجهزة دورًا حيويًا في الحفاظ على الامتثال للوائح البيئية وتعزيز الممارسات المستدامة. في التطبيقات السكنية، تحمي أجهزة كشف الغازات من Senko الأسر من التعرض للغازات الخطرة. تُعتبر هذه الأجهزة ضرورية لمراقبة أول أكسيد الكربون وغيرها من الغازات الضارة، مما يوفر راحة البال لأصحاب المنازل.' },
      },
      {
        heading: { en: 'Benefits of Using Senko Gas Detection Devices', ar: 'فوائد استخدام أجهزة كشف الغازات من Senko' },
        content: { en: '', ar: '' },
        items: [
          { en: 'Enhanced Safety: By providing real-time monitoring, Senko\'s devices help prevent accidents and ensure a safe working and living environment.', ar: 'تعزيز السلامة: من خلال توفير مراقبة في الوقت الحقيقي، تساعد أجهزة Senko في منع الحوادث وضمان بيئة عمل وعيش آمنة.' },
          { en: 'Regulatory Compliance: Utilizing gas detection technology aids organizations in meeting safety and environmental regulations, reducing the risk of penalties.', ar: 'الامتثال للمعايير: تساعد تكنولوجيا كشف الغازات المؤسسات في الالتزام بمعايير السلامة والبيئة، مما يقلل من خطر العقوبات.' },
          { en: 'Cost-Effective Solutions: By preventing gas-related incidents, Senko\'s devices contribute to significant cost savings in terms of potential damages and liability.', ar: 'حلول فعالة من حيث التكلفة: من خلال منع الحوادث المتعلقة بالغاز، تساهم أجهزة Senko في تحقيق توفير كبير في التكاليف من حيث الأضرار المحتملة والمسؤوليات.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Senko Co., Ltd. stands out as a trusted provider of gas detection devices, committed to ensuring safety across various industries. With a focus on innovation and quality, Senko\'s products are essential tools for protecting individuals and assets from hazardous gases. Their dedication to advancing gas detection technology makes them a reliable partner for organizations striving to maintain safe and compliant environments.', ar: 'تُعتبر شركة Senko Co., Ltd. مزودًا موثوقًا لأجهزة كشف الغازات، ملتزمة بضمان السلامة عبر مختلف الصناعات. مع التركيز على الابتكار والجودة، تُعتبر منتجات Senko أدوات أساسية لحماية الأفراد والأصول من الغازات الخطرة. إن التزامهم بتطوير تكنولوجيا كشف الغازات يجعلهم شريكًا موثوقًا للمؤسسات التي تسعى للحفاظ على بيئات آمنة ومتوافقة.' },
      },
    ],
    products: [
      {
        name: { en: 'SGT Single Gas Detector (O2,C0,H2S,H2,SO2,NH3,NO2)', ar: 'SGT Single Gas Detector (O2,C0,H2S,H2,SO2,NH3,NO2)' },
        image: '/img/Companies and Products/SGT.webp',
        detailUrl: 'https://www.senko-detection.com/sgt',
      },
      {
        name: { en: 'MGT Multi Gas Detector', ar: 'MGT Multi Gas Detector' },
        image: '/img/Companies and Products/MGT.webp',
        detailUrl: 'https://www.senko-detection.com/mgt',
      },
      {
        name: { en: 'MGT-Pump', ar: 'MGT-Pump' },
        image: '/img/Companies and Products/MGT-Pump.webp',
        detailUrl: 'https://www.senkoeu.com/products',
      },
      {
        name: { en: 'iGas Detector CO2 Single Gas Detector', ar: 'iGas Detector CO2 Single Gas Detector' },
        image: '/img/Companies and Products/iGas.webp',
        detailUrl: 'https://www.senko-detection.com/igasdetector',
      },
      {
        name: { en: 'SP Secure Detector', ar: 'SP Secure Detector' },
        image: '/img/Companies and Products/SP Secure Detector.webp',
        detailUrl: 'https://www.senkoeu.com/products',
      },
      {
        name: { en: 'Fixed Gas Detectors', ar: 'Fixed Gas Detectors' },
        image: '/img/Companies and Products/MixCollage-05-Feb-2024-02-09-PM-5679.webp',
        detailUrl: 'https://www.senkoeu.com/products',
      },
    ],
  },
  'gigahertz': {
    slug: 'gigahertz',
    pageTitle: {
      en: 'LF and RF Analyzers from Gigahertz',
      ar: 'أجهزة قياس LF و RF من شركة Gigahertz',
    },
    metaDescription: {
      en: 'Gigahertz Solutions GmbH provides high-quality LF and RF analyzers for environmental monitoring, industrial safety, and telecommunications.',
      ar: 'توفر شركة Gigahertz Solutions GmbH أجهزة قياس LF و RF عالية الجودة للمراقبة البيئية، السلامة الصناعية، والاتصالات.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Gigahertz Solutions GmbH is a leading company in the field of electromagnetic field measurement and analysis. With a strong commitment to innovation and quality, Gigahertz specializes in Low Frequency (LF) and Radio Frequency (RF) analyzers. These devices play a crucial role in various applications, including environmental monitoring, industrial safety, and telecommunications.', ar: 'شركة Gigahertz Solutions GmbH هي شركة رائدة في مجال قياس وتحليل الحقول الكهرومغناطيسية. تلتزم Gigahertz بالابتكار والجودة، وتخصصت في أجهزة قياس الترددات المنخفضة (LF) والترددات الراديوية (RF). تلعب هذه الأجهزة دورًا حيويًا في العديد من التطبيقات، بما في ذلك المراقبة البيئية، السلامة الصناعية، والاتصالات.' },
      },
      {
        heading: { en: 'Overview of LF and RF Analyzers', ar: 'نظرة عامة على أجهزة قياس LF و RF' },
        content: { en: 'LF and RF analyzers are sophisticated instruments designed to measure electromagnetic fields across a wide range of frequencies. Gigahertz\'s analyzers provide accurate and reliable data, essential for compliance with safety standards and regulations.', ar: 'تُعد أجهزة قياس LF و RF أدوات متطورة مصممة لقياس الحقول الكهرومغناطيسية عبر مجموعة واسعة من الترددات. توفر أجهزة Gigahertz بيانات دقيقة وموثوقة، مما يجعلها ضرورية لضمان الامتثال لمعايير السلامة والتنظيم.' },
        items: [
          { en: 'Wide Frequency Range: Gigahertz analyzers cover a broad spectrum of frequencies, making them suitable for various applications, from LF to RF measurement.', ar: 'نطاق تردد واسع: تغطي أجهزة Gigahertz مجموعة واسعة من الترددات، مما يجعلها مناسبة لمجموعة متنوعة من التطبيقات، بدءًا من قياسات LF إلى RF.' },
          { en: 'High Sensitivity: The devices are engineered for high sensitivity, ensuring the detection of even the weakest electromagnetic fields.', ar: 'حساسية عالية: تم تصميم الأجهزة لتحقيق حساسية عالية، مما يضمن اكتشاف حتى أضعف الحقول الكهرومغناطيسية.' },
          { en: 'User-Friendly Interface: With intuitive controls and displays, Gigahertz analyzers are designed for ease of use, enabling quick and accurate measurements.', ar: 'واجهة مستخدم سهلة: تتميز أجهزة Gigahertz بالتحكمات والعرض البديهية، مما يجعل عملية الاستخدام بسيطة وسريعة للحصول على القياسات الدقيقة.' },
        ],
      },
      {
        heading: { en: 'Applications of LF and RF Analyzers', ar: 'تطبيقات أجهزة قياس LF و RF' },
        content: { en: 'Gigahertz\'s LF and RF analyzers are utilized in diverse fields, including: These analyzers are vital for assessing electromagnetic pollution in urban and industrial areas. By providing real-time data, they help organizations maintain compliance with environmental regulations and protect public health. In industrial settings, LF and RF analyzers ensure the safety of workers by monitoring exposure to electromagnetic fields. This is particularly important in industries where high-frequency equipment is used, such as telecommunications and broadcasting. Telecommunication companies use Gigahertz analyzers to ensure their equipment operates within safe electromagnetic limits. These devices help in optimizing the performance of communication networks while ensuring compliance with regulatory standards.', ar: 'تُستخدم أجهزة LF و RF من Gigahertz في مجالات متنوعة، بما في ذلك: تعتبر هذه الأجهزة ضرورية لتقييم التلوث الكهرومغناطيسي في المناطق الحضرية والصناعية. من خلال توفير بيانات في الوقت الحقيقي، تساعد على الحفاظ على الامتثال للوائح البيئية وحماية الصحة العامة. في البيئات الصناعية، تضمن أجهزة LF و RF سلامة العمال من خلال مراقبة التعرض للحقول الكهرومغناطيسية. هذا أمر مهم بشكل خاص في الصناعات التي تستخدم معدات ذات ترددات عالية، مثل الاتصالات والبث. تستخدم شركات الاتصالات أجهزة Gigahertz لضمان عمل معداتها ضمن حدود كهرومغناطيسية آمنة. تساعد هذه الأجهزة في تحسين أداء شبكات الاتصالات مع ضمان الامتثال للمعايير التنظيمية.' },
      },
      {
        heading: { en: 'Benefits of Using Gigahertz Analyzers', ar: 'فوائد استخدام أجهزة Gigahertz' },
        content: { en: '', ar: '' },
        items: [
          { en: 'Enhanced Safety: By monitoring electromagnetic fields, Gigahertz analyzers contribute to the safety of workers and the public.', ar: 'تعزيز السلامة: من خلال مراقبة الحقول الكهرومغناطيسية، تساهم أجهزة Gigahertz في سلامة العمال والجمهور.' },
          { en: 'Regulatory Compliance: The use of these analyzers aids organizations in adhering to safety regulations and standards related to electromagnetic exposure.', ar: 'الامتثال للمعايير: تساعد هذه الأجهزة المؤسسات على الالتزام باللوائح والمعايير المتعلقة بالتعرض الكهرومغناطيسي.' },
          { en: 'Cost-Effective Solutions: By identifying potential issues early, Gigahertz analyzers help prevent costly incidents related to electromagnetic exposure.', ar: 'حلول فعالة من حيث التكلفة: من خلال الكشف المبكر عن المشكلات المحتملة، تساعد أجهزة Gigahertz في منع الحوادث المكلفة المتعلقة بالتعرض الكهرومغناطيسي.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Gigahertz Solutions GmbH stands out as a trusted provider of LF and RF analyzers, committed to delivering high-quality instruments for various applications. Their focus on innovation and precision makes them a reliable partner for organizations aiming to ensure safety and compliance in electromagnetic field measurement.', ar: 'تُعتبر شركة Gigahertz Solutions GmbH مزودًا موثوقًا لأجهزة قياس LF و RF، ملتزمة بتقديم أدوات عالية الجودة لمجموعة متنوعة من التطبيقات. إن تركيزهم على الابتكار والدقة يجعلهم شريكًا موثوقًا للمؤسسات التي تهدف إلى ضمان السلامة والامتثال في قياس الحقول الكهرومغناطيسية.' },
      },
    ],
    products: [
      {
        name: { en: 'RF analyzers', ar: 'RF analyzers' },
        image: '/img/Companies and Products/MixCollage-05-Feb-2024-03-15-PM-6845.webp',
        detailUrl: 'https://gigahertz-solutions.com/Measurement/High-Frequency',
      },
      {
        name: { en: 'LF analyzers', ar: 'LF analyzers' },
        image: '/img/Companies and Products/MixCollage-05-Feb-2024-03-18-PM-6000.webp',
        detailUrl: 'https://gigahertz-solutions.com/Measurement/Low-Frequency',
      },
    ],
  },
  'ten': {
    slug: 'ten',
    pageTitle: {
      en: 'Vehicle Emission Measurement Devices from Ten',
      ar: 'أجهزة قياس انبعاثات السيارات من شركة Ten',
    },
    metaDescription: {
      en: 'Ten provides vehicle emission measurement devices to protect the environment and ensure compliance with environmental standards.',
      ar: 'تقدم شركة Ten أجهزة قياس انبعاثات السيارات لحماية البيئة وتحقيق الامتثال للمعايير البيئية.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Ten is a leading company in the development and manufacturing of vehicle emission measurement devices. The company focuses on providing innovative and reliable solutions for monitoring harmful gas emissions from vehicles, contributing to environmental preservation and compliance with global environmental standards.', ar: 'تُعتبر شركة Ten واحدة من الشركات الرائدة في مجال تطوير وتصنيع أجهزة قياس انبعاثات السيارات. تركز الشركة على تقديم حلول مبتكرة وموثوقة لمراقبة انبعاثات الغازات الضارة الناتجة عن المركبات، مما يسهم في الحفاظ على البيئة وتحقيق الامتثال للمعايير البيئية العالمية.' },
      },
      {
        heading: { en: 'Importance of Measuring Vehicle Emissions', ar: 'أهمية قياس انبعاثات السيارات' },
        content: { en: 'Measuring vehicle emissions is crucial for maintaining air quality and protecting public health. Emission measurement devices help determine levels of pollutants such as carbon monoxide (CO), nitrogen oxides (NOx), and particulate matter (PM), aiding in evaluating engine performance and ensuring compliance with allowable limits.', ar: 'تأتي أهمية قياس انبعاثات السيارات من ضرورة الحفاظ على جودة الهواء وحماية الصحة العامة. تعمل أجهزة قياس الانبعاثات على تحديد مستويات الملوثات مثل أكسيد الكربون (CO)، وأكسيدات النيتروجين (NOx)، والجزئيات الدقيقة (PM)، مما يساعد في تقييم أداء المحركات والتأكد من أنها تعمل ضمن الحدود المسموح بها.' },
        items: [
          { en: 'Improving Air Quality: Emission measurement helps reduce pollutants that affect air quality and community health.', ar: 'تحسين جودة الهواء: يساهم قياس الانبعاثات في تقليل الملوثات التي تؤثر على جودة الهواء وصحة المجتمع.' },
          { en: 'Compliance with Environmental Standards: It assists manufacturers and users in adhering to emission regulations and standards.', ar: 'الامتثال للمعايير البيئية: يساعد الشركات المصنعة والمستخدمين على الالتزام باللوائح والمعايير المتعلقة بالانبعاثات.' },
          { en: 'Technology Development: Measurement data fosters research and development of new technologies that help reduce emissions.', ar: 'تطوير التكنولوجيا: تعزز بيانات القياس من البحث والتطوير في تقنيات جديدة تساهم في تقليل الانبعاثات.' },
        ],
      },
      {
        heading: { en: 'Advantages of Ten\'s Vehicle Emission Measurement Devices', ar: 'مزايا أجهزة قياس انبعاثات السيارات من Ten' },
        content: { en: 'Ten\'s vehicle emission measurement devices offer several advantages that make them the ideal choice for users:', ar: 'تتميز أجهزة قياس انبعاثات السيارات من شركة Ten بعدد من المزايا التي تجعلها الخيار الأمثل للمستخدمين:' },
        items: [
          { en: 'High Accuracy: Ten\'s devices provide accurate and reliable measurements, facilitating data-driven decision-making.', ar: 'دقة عالية: توفر أجهزة Ten قياسات دقيقة وموثوقة، مما يسهل اتخاذ القرارات المستندة إلى البيانات.' },
          { en: 'Ease of Use: They feature an intuitive design that allows users to conduct measurements quickly and easily.', ar: 'سهولة الاستخدام: تتميز بتصميم بديهي يتيح للمستخدمين إجراء القياسات بسهولة وسرعة.' },
          { en: 'Compliance with Standards: The devices meet global and local standards, ensuring their applicability in various contexts.', ar: 'توافق مع المعايير: تلبي الأجهزة المعايير العالمية والمحلية، مما يضمن استخدامها في مختلف التطبيقات.' },
        ],
      },
      {
        heading: { en: 'Applications of Vehicle Emission Measurement Devices', ar: 'تطبيقات أجهزة قياس انبعاثات السيارات' },
        content: { en: 'Ten\'s vehicle emission measurement devices are used in a wide range of applications, including:', ar: 'تُستخدم أجهزة قياس انبعاثات السيارات من Ten في مجموعة واسعة من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Vehicle Testing: Used in inspection stations to ensure vehicles meet emission standards.', ar: 'اختبارات المركبات: تستخدم في محطات الفحص للتأكد من أن المركبات تستوفي معايير الانبعاثات.' },
          { en: 'Research and Studies: Employed in research to analyze the impact of emissions on the environment and health.', ar: 'البحوث والدراسات: تُستخدم في الأبحاث لتحليل تأثيرات الانبعاثات على البيئة والصحة.' },
          { en: 'Industrial Compliance: Used by manufacturers to ensure their products meet environmental standards.', ar: 'الامتثال الصناعي: تستخدمها الشركات المصنعة لضمان التزام منتجاتها بالمعايير البيئية.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Ten\'s vehicle emission measurement devices are essential tools for contributing to a clean and safe environment. By providing accurate data and reliable solutions, Ten plays a vital role in improving air quality and reducing harmful emissions.', ar: 'تُعد أجهزة قياس انبعاثات السيارات من شركة Ten أداة أساسية للمساهمة في تحقيق بيئة نظيفة وآمنة. من خلال توفير بيانات دقيقة وحلول موثوقة، تلعب Ten دورًا حيويًا في تحسين جودة الهواء وتقليل الانبعاثات الضارة.' },
      },
    ],
    products: [
      {
        name: { en: 'Diesel smoke meter', ar: 'Diesel smoke meter' },
        image: '/img/Companies and Products/Diesel smoke meter.webp',
        detailUrl: 'https://www.ten-automotive.nl/ten-aem-particle-counter',
      },
      {
        name: { en: 'Emission Analysers', ar: 'Emission Analysers' },
        image: '/img/Companies and Products/innova-500-2.webp',
        detailUrl: 'https://www.ten-automotive.nl/gas-analysers',
      },
      {
        name: { en: 'Zero Emission', ar: 'Zero Emission' },
        image: '/img/Companies and Products/Zero Emission.webp',
        detailUrl: 'https://www.ten-automotive.nl/zero-emission-unit',
      },
      {
        name: { en: 'Multigas analyzer', ar: 'Multigas analyzer' },
        image: '/img/Companies and Products/Multigas analyzer.webp',
        detailUrl: 'https://www.ten-automotive.nl/gas-analysers',
      },
      {
        name: { en: 'Brake tester', ar: 'Brake tester' },
        image: '/img/Companies and Products/Brake tester.webp',
        detailUrl: 'https://www.ten-automotive.nl/pti',
      },
    ],
  },
  'lovibond': {
    slug: 'lovibond',
    pageTitle: {
      en: 'Water Quality Analysis Devices from Lovibond',
      ar: 'أجهزة تحليل جودة المياه من شركة Lovibond',
    },
    metaDescription: {
      en: 'Lovibond provides water quality analysis devices to ensure water safety across various applications.',
      ar: '',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Lovibond is a leading company globally in the development and manufacturing of water quality analysis devices. The company provides comprehensive solutions for monitoring water quality, ensuring the safety of water across various applications, including drinking water, swimming pools, and industrial water.', ar: 'تُعتبر شركة Lovibond واحدة من الشركات الرائدة عالميًا في مجال تطوير وتصنيع أجهزة تحليل جودة المياه. تتميز الشركة بتقديم حلول متكاملة لمراقبة جودة المياه، مما يساعد في ضمان سلامة المياه في مجموعة متنوعة من التطبيقات، بما في ذلك مياه الشرب، والمسابح، والمياه الصناعية.' },
      },
      {
        heading: { en: 'Importance of Water Quality Analysis', ar: 'أهمية تحليل جودة المياه' },
        content: { en: 'Analyzing water quality is vital for ensuring water safety and health. Many uses, such as drinking water, industrial applications, and agriculture, require specific quality levels to avoid contamination and protect public health and the environment. Lovibond\'s water analysis devices provide accurate data on water components and quality.', ar: 'تحليل جودة المياه أمر حيوي لضمان سلامة المياه وصحتها. تتطلب العديد من الاستخدامات، مثل مياه الشرب والصناعة والزراعة، مستويات محددة من الجودة لتجنب التلوث وحماية صحة الأفراد والبيئة. توفر أجهزة تحليل المياه من Lovibond بيانات دقيقة حول مكونات المياه وجودتها.' },
        items: [
          { en: 'Public Health Protection: Water quality analysis helps identify harmful contaminants that can affect human health.', ar: 'حماية الصحة العامة: يساهم تحليل جودة المياه في الكشف عن الملوثات الضارة التي يمكن أن تؤثر على صحة الإنسان.' },
          { en: 'Compliance with Standards: It assists organizations in adhering to environmental and health standards.', ar: 'الامتثال للمعايير: يساعد الشركات والمؤسسات على الالتزام بالمعايير البيئية والصحية المطلوبة.' },
          { en: 'Improved Water Management: Quality analysis provides essential data for better management and efficiency of water resources.', ar: 'تحسين إدارة المياه: يوفر تحليل الجودة بيانات ضرورية لتحسين إدارة الموارد المائية وكفاءتها.' },
        ],
      },
      {
        heading: { en: 'Advantages of Lovibond\'s Water Quality Analysis Devices', ar: 'مزايا أجهزة تحليل جودة المياه من Lovibond' },
        content: { en: 'Lovibond\'s water quality analysis devices offer several advantages that make them the ideal choice for monitoring water quality:', ar: 'تتميز أجهزة Lovibond بتحقيق مجموعة من المزايا التي تجعلها الخيار المثالي لمراقبة جودة المياه:' },
        items: [
          { en: 'High Accuracy: Lovibond devices deliver precise and reliable measurements, facilitating informed decision-making.', ar: 'دقة عالية: توفر أجهزة Lovibond قياسات دقيقة وموثوقة، مما يسهل اتخاذ القرارات الصحيحة.' },
          { en: 'User-Friendly Design: The devices feature intuitive designs that allow users to perform analyses with ease.', ar: 'تصميم سهل الاستخدام: تتميز الأجهزة بتصميم بديهي يتيح للمستخدمين إجراء التحليلات بسهولة.' },
          { en: 'Versatility: The devices meet the needs of a wide range of applications, from drinking water analysis to industrial water monitoring.', ar: 'تنوع التطبيقات: تلبي الأجهزة احتياجات مجموعة واسعة من التطبيقات، بدءًا من تحليل مياه الشرب وصولًا إلى مراقبة المياه الصناعية.' },
        ],
      },
      {
        heading: { en: 'Applications of Water Quality Analysis Devices', ar: 'تطبيقات أجهزة تحليل جودة المياه' },
        content: { en: 'Lovibond\'s water quality analysis devices are used in various applications, including:', ar: 'تُستخدم أجهزة Lovibond في العديد من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Drinking Water: Used to ensure the safety and quality of drinking water.', ar: 'مياه الشرب: تستخدم لضمان سلامة وجودة مياه الشرب.' },
          { en: 'Swimming Pools: Employed to monitor water quality in pools and ensure safety for users.', ar: 'المسابح: تُستخدم لمراقبة جودة المياه في المسابح وضمان سلامتها للاستخدام.' },
          { en: 'Industrial Water: Utilized in factories for analyzing water used in industrial processes.', ar: 'المياه الصناعية: تُستخدم في المصانع لتحليل المياه المستخدمة في العمليات الصناعية.' },
          { en: 'Environmental Monitoring: Used to monitor water quality in rivers, lakes, and other natural environments.', ar: 'البيئة: تُستخدم لمراقبة جودة المياه في الأنهار والبحيرات والبيئات الطبيعية الأخرى.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Lovibond\'s water quality analysis devices are essential tools for ensuring water safety and quality. By providing accurate data and reliable solutions, Lovibond contributes significantly to achieving water preservation goals and community health.', ar: 'تُعد أجهزة تحليل جودة المياه من شركة Lovibond أداة أساسية لضمان سلامة المياه وجودتها. من خلال توفير بيانات دقيقة وحلول موثوقة، تساهم Lovibond في تحقيق أهداف الحفاظ على المياه وصحة المجتمع.' },
      },
    ],
    products: [
      {
        name: { en: 'Spectrophotometer', ar: 'Spectrophotometer' },
        image: '/img/Companies and Products/xd7500_mb2_04.webp',
        detailUrl: 'https://www.lovibond.com/en/PW/Water-Testing/Products/Lab-Portable-Instruments/XD-Spectrophotometers',
      },
      {
        name: { en: 'Digital COD System', ar: 'Digital COD System' },
        image: '/img/Companies and Products/codsetup_md200_mb2_01.webp',
        detailUrl: 'https://www.lovibond.com/en/PW/Water-Testing/Products/Lab-Portable-Instruments/ColorimetersPhotometers/COD-Set-Ups',
      },
      {
        name: { en: 'Photometers', ar: 'Photometers' },
        image: '/img/Companies and Products/md100_cod_mb2_01.webp',
        detailUrl: 'https://www.lovibond.com/en/PW/Water-Testing/Products/Lab-Portable-Instruments/ColorimetersPhotometers',
      },
      {
        name: { en: 'PH , Conductivity , DO', ar: 'PH , Conductivity , DO' },
        image: '/img/Companies and Products/sd150_case_mb2_01.webp',
        detailUrl: 'https://www.lovibond.com/en/PW/Water-Testing/Products/Lab-Portable-Instruments/Electrochemistry/Portable-Hand-held-Meters',
      },
      {
        name: { en: 'Turbidity', ar: 'Turbidity' },
        image: '/img/Companies and Products/turbidity.webp',
        detailUrl: 'https://www.lovibond.com/en/PW/Water-Testing/Parameter/Parameter/Turbidity',
      },
      {
        name: { en: 'Incubators', ar: 'Incubators' },
        image: '/img/Companies and Products/Incubators.webp',
        detailUrl: 'https://www.lovibond.com/en/PW/Water-Testing/Products/Incubators-Reactors',
      },
      {
        name: { en: 'Digital BOD System', ar: 'Digital BOD System' },
        image: '/img/Companies and Products/Digital BOD System.webp',
        detailUrl: 'https://www.lovibond.com/PW/Water-Testing/Products/Lab-Portable-Instruments/BOD-determination/BD-600',
      },
      {
        name: { en: 'Jar Test', ar: 'Jar Test' },
        image: '/img/Companies and Products/Jar Test.webp',
        detailUrl: 'https://www.lovibond.com/en/PW/Water-Testing/Products/Lab-Portable-Instruments/Floc-Tester/ET-750',
      },
      {
        name: { en: 'Reagents', ar: 'Reagents' },
        image: '/img/Companies and Products/Reagent.webp',
        detailUrl: 'https://www.lovibond.com/en/PW/Water-Testing/Products/Reagents',
      },
    ],
  },
  'geotech': {
    slug: 'geotech',
    pageTitle: {
      en: 'Waste Landfill Gas Analysis Devices from Geotech',
      ar: 'أجهزة تحليل غازات مدافن النفايات من شركة Geotech',
    },
    metaDescription: {
      en: 'Geotech provides landfill gas analysis devices to ensure environmental safety and public health.',
      ar: 'تقدم شركة Geotech أجهزة تحليل غازات مدافن النفايات لضمان سلامة البيئة وصحة المجتمع.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Geotech is a leading company in the development and manufacturing of waste landfill gas analysis devices. The company provides comprehensive solutions for monitoring and analyzing gases emitted from landfills, helping to protect the environment and public health.', ar: 'تُعتبر شركة Geotech من الشركات الرائدة في مجال تطوير وتصنيع أجهزة تحليل غازات مدافن النفايات. تقدم الشركة حلولاً متكاملة لمراقبة وتحليل الغازات المنبعثة من المدافن، مما يساعد في الحفاظ على البيئة وصحة المجتمع.' },
      },
      {
        heading: { en: 'Importance of Waste Landfill Gas Analysis', ar: 'أهمية تحليل غازات مدافن النفايات' },
        content: { en: 'Landfills are a significant source of harmful gases, such as methane and carbon dioxide, which can negatively impact the environment and human health. Continuous monitoring of these gases is essential to ensure compliance with environmental standards and mitigate potential risks.', ar: 'تُعد مدافن النفايات مصدرًا رئيسيًا للغازات الضارة، مثل الميثان وثاني أكسيد الكربون، والتي يمكن أن تؤثر سلبًا على البيئة وصحة الإنسان. يتطلب الأمر مراقبة دقيقة لهذه الغازات لضمان الامتثال للمعايير البيئية والحد من المخاطر المحتملة.' },
        items: [
          { en: 'Environmental Protection: Gas analysis helps reduce the negative environmental impacts resulting from landfill emissions.', ar: 'حماية البيئة: يساعد تحليل الغازات في تقليل التأثيرات البيئية السلبية الناتجة عن انبعاثات المدافن.' },
          { en: 'Regulatory Compliance: Ensures adherence to environmental regulations regarding waste management.', ar: 'الامتثال للمعايير: يضمن الامتثال للوائح البيئية المتعلقة بإدارة النفايات.' },
          { en: 'Public Health Improvement: Reduces exposure to pollutants emitted from landfills.', ar: 'تحسين الصحة العامة: من خلال تقليل التعرض للملوثات الناتجة عن المدافن.' },
        ],
      },
      {
        heading: { en: 'Advantages of Geotech\'s Landfill Gas Analysis Devices', ar: 'مزايا أجهزة تحليل غازات المدافن من Geotech' },
        content: { en: 'Geotech\'s landfill gas analysis devices offer several advantages that make them the ideal choice for monitoring landfill gases:', ar: 'تتميز أجهزة Geotech بمجموعة من المزايا التي تجعلها الخيار المثالي لتحليل غازات المدافن:' },
        items: [
          { en: 'High Accuracy: The devices provide precise and reliable measurements of emitted gases.', ar: 'دقة عالية: توفر الأجهزة قياسات دقيقة وموثوقة للغازات المنبعثة.' },
          { en: 'Robust Design: Built to withstand the harsh environmental conditions associated with landfills.', ar: 'تصميم متين: مصممة لتحمل الظروف البيئية القاسية المرتبطة بالمدافن.' },
          { en: 'User-Friendly: The devices feature simple interfaces that make it easy for users to conduct necessary analyses.', ar: 'سهولة الاستخدام: تأتي الأجهزة مع واجهات بسيطة تجعل من السهل على المستخدمين إجراء التحليلات اللازمة.' },
        ],
      },
      {
        heading: { en: 'Applications of Landfill Gas Analysis Devices', ar: 'تطبيقات أجهزة تحليل غازات المدافن' },
        content: { en: 'Geotech\'s devices are used in various applications, including:', ar: 'تُستخدم أجهزة Geotech في مجموعة متنوعة من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Methane Analysis: Measuring methane levels in the air surrounding landfills.', ar: 'تحليل الميثان: قياس مستويات الميثان في الهواء المحيط بالمدافن.' },
          { en: 'Emission Monitoring: Tracking gas emissions to ensure they do not exceed allowable limits.', ar: 'رصد الانبعاثات: مراقبة الانبعاثات الغازية للتأكد من عدم تجاوزها الحدود المسموح بها.' },
          { en: 'Environmental Studies: Used in research to understand the impact of landfills on the surrounding environment.', ar: 'الدراسات البيئية: تُستخدم في الأبحاث والدراسات لفهم تأثير المدافن على البيئة المحيطة.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Geotech\'s landfill gas analysis devices are essential tools for environmental protection and public health. By providing accurate and reliable solutions, Geotech contributes significantly to sustainable waste management goals.', ar: 'تُعد أجهزة تحليل غازات مدافن النفايات من شركة Geotech أداة أساسية للحفاظ على البيئة وصحة المجتمع. من خلال توفير حلول دقيقة وموثوقة، تساهم Geotech في تحقيق أهداف إدارة النفايات بشكل مستدام.' },
      },
    ],
    products: [
      {
        name: { en: 'Portable Landfill Gas Analyzers', ar: 'Portable Landfill Gas Analyzers' },
        image: '/img/Companies and Products/Portable Landfill Gas Analyzers.webp',
        detailUrl: 'https://www.qedenv.com/products/?tags=2770',
      },
      {
        name: { en: 'Fixed Landfill Gas Analyzers', ar: 'Fixed Landfill Gas Analyzers' },
        image: '/img/Companies and Products/Fixed Landfill Gas Analyzers.webp',
        detailUrl: 'https://www.qedenv.com/products/?tags=2770',
      },
      {
        name: { en: 'Portable Biogas Analyzers', ar: 'Portable Biogas Analyzers' },
        image: '/img/Companies and Products/Portable Biogas Analyzers.webp',
        detailUrl: 'https://www.qedenv.com/products/?tags=2770',
      },
      {
        name: { en: 'Fixed Biogas Analyzers', ar: 'Fixed Biogas Analyzers' },
        image: '/img/Companies and Products/Fixed Biogas Analyzers.webp',
        detailUrl: 'https://www.qedenv.com/products/?tags=2770',
      },
      {
        name: { en: 'Portable Gas Detector &Personal protection for hazardous environments', ar: 'Portable Gas Detector &Personal protection for hazardous environments' },
        image: '/img/Companies and Products/Portable Gas Detector &Personal protection for hazardous environments.webp',
        detailUrl: 'https://www.qedenv.com/products/?tags=2770',
      },
      {
        name: { en: 'Analyzer For : N2O, H2 , CH4 ,CO, CO2 ,H2S ,O2 , NH3', ar: 'Analyzer For : N2O, H2 , CH4 ,CO, CO2 ,H2S ,O2 , NH3' },
        image: '/img/Companies and Products/Analyzer For N2O, H2 , CH4 ,CO, CO2 ,H2S ,O2 , NH3.webp',
        detailUrl: 'https://www.qedenv.com/products/?tags=2770',
      },
    ],
  },
  'kitagawa': {
    slug: 'kitagawa',
    pageTitle: {
      en: 'Gas Detection Tubes from Kitagawa',
      ar: 'أنابيب كشف الغاز من شركة Kitagawa',
    },
    metaDescription: {
      en: 'Gas detection tubes from Kitagawa provide accurate and effective solutions for monitoring gases.',
      ar: 'أنابيب كشف الغاز من شركة Kitagawa توفر حلول دقيقة ومثالية لمراقبة الغازات.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Kitagawa is a leading company in the development and manufacturing of gas detection tubes. The company offers a comprehensive range of solutions used for measuring and analyzing various gases across many industrial and environmental applications.', ar: 'تُعتبر شركة Kitagawa واحدة من الشركات الرائدة في مجال تطوير وتصنيع أنابيب كشف الغاز. تقدم الشركة مجموعة متكاملة من الحلول التي تُستخدم في قياس وتحليل الغازات المختلفة في العديد من التطبيقات الصناعية والبيئية.' },
      },
      {
        heading: { en: 'Importance of Gas Detection Tubes', ar: 'أهمية أنابيب كشف الغاز' },
        content: { en: 'Gas detection tubes are essential for monitoring gas levels in various environments, including industrial settings and workplaces. These tubes help in the early detection of harmful gases, contributing to the protection of individuals and the environment.', ar: 'تُستخدم أنابيب كشف الغاز في مراقبة مستويات الغازات في البيئات المختلفة، بما في ذلك الأماكن الصناعية ومواقع العمل. تساعد هذه الأنابيب في الكشف المبكر عن الغازات الضارة، مما يساهم في حماية الأفراد والبيئة.' },
        items: [
          { en: 'Occupational Safety: Protects workers from exposure to harmful and hazardous gases.', ar: 'السلامة المهنية: تساهم في حماية العمال من التعرض للغازات الضارة والخطيرة.' },
          { en: 'Regulatory Compliance: Helps companies adhere to environmental standards and regulations.', ar: 'الامتثال للمعايير: تساعد الشركات على الالتزام بالمعايير واللوائح البيئية.' },
          { en: 'Environmental Quality Improvement: By monitoring gas levels, measures can be taken to improve environmental conditions.', ar: 'تحسين جودة البيئة: من خلال مراقبة مستويات الغاز، يمكن اتخاذ تدابير لتحسين الظروف البيئية.' },
        ],
      },
      {
        heading: { en: 'Advantages of Kitagawa\'s Gas Detection Tubes', ar: 'مزايا أنابيب كشف الغاز من Kitagawa' },
        content: { en: 'Kitagawa\'s gas detection tubes offer several advantages that make them the ideal choice for gas detection:', ar: 'تتميز أنابيب كشف الغاز من Kitagawa بمجموعة من المزايا التي تجعلها الخيار الأمثل للكشف عن الغازات:' },
        items: [
          { en: 'High Accuracy: Provides precise and reliable measurements of various gas levels.', ar: 'دقة عالية: توفر قياسات دقيقة وموثوقة لمستويات الغازات المختلفة.' },
          { en: 'Versatility: Can be used in a wide range of applications, from industrial use to environmental research.', ar: 'تعدد الاستخدامات: يمكن استخدامها في مجموعة متنوعة من التطبيقات، من الصناعات إلى البحوث البيئية.' },
          { en: 'Ease of Use: Simple design ensures minimal training is required for operation.', ar: 'سهولة الاستخدام: تصميم سهل الاستخدام يضمن عدم الحاجة لتدريب معقد.' },
        ],
      },
      {
        heading: { en: 'Applications of Gas Detection Tubes', ar: 'تطبيقات أنابيب كشف الغاز' },
        content: { en: 'Kitagawa\'s tubes are utilized in various applications, including:', ar: 'تُستخدم أنابيب Kitagawa في العديد من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Chemical Industries: Monitoring toxic or flammable gases.', ar: 'الصناعات الكيميائية: لمراقبة الغازات السامة أو القابلة للاشتعال.' },
          { en: 'Construction Sites: Ensuring worker safety in construction environments.', ar: 'الإنشاءات: لضمان سلامة العمال في مواقع البناء.' },
          { en: 'Environmental Studies: Used in research to understand the impact of gases on surrounding environments.', ar: 'البيئة: في الدراسات البيئية لفهم تأثير الغازات على البيئة المحيطة.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Gas detection tubes from Kitagawa are essential tools for maintaining safety for individuals and the environment. With their accuracy and ease of use, Kitagawa contributes significantly to achieving occupational safety and compliance with environmental standards.', ar: 'تُعد أنابيب كشف الغاز من شركة Kitagawa أداة أساسية في الحفاظ على سلامة الأفراد والبيئة. بفضل دقتها وسهولة استخدامها، تُساهم Kitagawa في تحقيق أهداف السلامة المهنية والامتثال للمعايير البيئية.' },
      },
    ],
    products: [
      {
        name: { en: 'Gas Detector Tube', ar: 'Gas Detector Tube' },
        image: '/img/Companies and Products/Gas Detector Tube.webp',
        detailUrl: '../EN/https://www.komyokk.co.jp/en/product/001/index.html',
      },
      {
        name: { en: 'Single-Gas Monitors', ar: 'Single-Gas Monitors' },
        image: '/img/Companies and Products/Single-Gas Monitors.webp',
        detailUrl: '../EN/https://www.komyokk.co.jp/en/product/002/index.html',
      },
      {
        name: { en: 'Multi-Gas Monitors', ar: 'Multi-Gas Monitors' },
        image: '/img/Companies and Products/Multi-Gas Monitors.webp',
        detailUrl: '../EN/https://www.komyokk.co.jp/en/product/002/index.html',
      },
      {
        name: { en: 'Gas Alarm Meters', ar: 'Gas Alarm Meters' },
        image: '/img/Companies and Products/Gas Alarm Meters.webp',
        detailUrl: '../EN/https://www.komyokk.co.jp/en/product/003/index.html',
      },
    ],
  },
  'davis': {
    slug: 'davis',
    pageTitle: {
      en: 'Weather Stations from Davis Instruments',
      ar: 'أجهزة محطات الطقس من شركة Davis',
    },
    metaDescription: {
      en: 'Davis weather stations provide accurate and reliable weather data for various applications.',
      ar: 'أجهزة محطات الطقس من شركة Davis توفر بيانات دقيقة وموثوقة حول الأحوال الجوية.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Davis Instruments is a leading company in the manufacturing of weather stations and related devices. The company offers a wide range of advanced solutions designed to provide accurate and reliable weather data, helping individuals and professionals make informed decisions.', ar: 'تُعد شركة Davis Instruments من الشركات الرائدة في مجال تصنيع أجهزة ومحطات الطقس. تقدم الشركة مجموعة متنوعة من الحلول المتطورة التي تهدف إلى توفير بيانات دقيقة وموثوقة حول الأحوال الجوية، مما يساعد الأفراد والمستخدمين المحترفين على اتخاذ قرارات مستنيرة.' },
      },
      {
        heading: { en: 'Importance of Weather Stations', ar: 'أهمية محطات الطقس' },
        content: { en: 'Weather stations are essential tools for monitoring atmospheric conditions. They provide precise data on temperature, humidity, wind speed, and air pressure. This information is used in various fields such as agriculture, scientific research, urban planning, and meteorology.', ar: 'تعتبر محطات الطقس أدوات أساسية في رصد الأحوال الجوية. توفر بيانات دقيقة حول درجات الحرارة، الرطوبة، سرعة الرياح، وضغط الهواء. تستخدم هذه المعلومات في مجالات متعددة مثل الزراعة، البحث العلمي، التخطيط الحضري، والأرصاد الجوية.' },
        items: [
          { en: 'Data Accuracy: Weather stations provide precise measurements that enhance our understanding of atmospheric conditions.', ar: 'دقة البيانات: توفر محطات الطقس بيانات دقيقة تساعد في فهم الأحوال الجوية بشكل أفضل.' },
          { en: 'Climate Change Monitoring: They play a crucial role in tracking and predicting climate changes.', ar: 'مراقبة التغيرات المناخية: تساهم في رصد التغيرات المناخية والتنبؤ بها.' },
          { en: 'Improved Planning: They aid in making data-driven decisions in areas like agriculture and transportation.', ar: 'تحسين التخطيط: تساعد في اتخاذ قرارات مستندة إلى بيانات موثوقة في مجالات مثل الزراعة والنقل.' },
        ],
      },
      {
        heading: { en: 'Advantages of Davis Weather Stations', ar: 'مزايا أجهزة محطات الطقس من Davis' },
        content: { en: 'Davis weather stations offer several advantages that make them the ideal choice for weather monitoring:', ar: 'تتميز أجهزة محطات الطقس من Davis بعدة مزايا تجعلها الخيار الأمثل لمراقبة الأحوال الجوية:' },
        items: [
          { en: 'High Precision: Davis devices deliver accurate measurements for various atmospheric elements.', ar: 'دقة عالية: توفر أجهزة Davis قياسات دقيقة لمختلف العناصر الجوية.' },
          { en: 'Durable Design: Built to withstand harsh environmental conditions, ensuring reliable performance at all times.', ar: 'تصميم متين: مصممة لتحمل الظروف البيئية القاسية، مما يضمن أداءً موثوقًا في جميع الأوقات.' },
          { en: 'Ease of Use: Equipped with user-friendly interfaces, making them suitable for both beginners and professionals.', ar: 'سهولة الاستخدام: تحتوي على واجهات سهلة الاستخدام، مما يجعلها مناسبة للمبتدئين والمحترفين على حد سواء.' },
        ],
      },
      {
        heading: { en: 'Applications of Weather Stations', ar: 'تطبيقات أجهزة محطات الطقس' },
        content: { en: 'Davis devices are utilized in a variety of applications, including:', ar: 'تُستخدم أجهزة Davis في مجموعة متنوعة من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Agriculture: Monitoring weather conditions that impact crop growth.', ar: 'الزراعة: لمراقبة الظروف الجوية التي تؤثر على نمو المحاصيل.' },
          { en: 'Scientific Research: Used in environmental and climatic studies to understand the effects of weather changes.', ar: 'البحث العلمي: في الدراسات البيئية والمناخية لفهم تأثيرات التغيرات الجوية.' },
          { en: 'Outdoor Activities: Assisting hobbyists and professionals in planning activities based on weather conditions.', ar: 'الأنشطة الخارجية: لمساعدة الهواة والمحترفين في التخطيط للأنشطة بناءً على الظروف الجوية.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Davis weather stations are essential tools for obtaining accurate information about atmospheric conditions. With their precision and ease of use, Davis contributes significantly to enhancing our understanding of weather and its variations, leading to more effective decision-making.', ar: 'تُعتبر أجهزة محطات الطقس من شركة Davis أداة أساسية للحصول على معلومات دقيقة حول الأحوال الجوية. بفضل دقتها وسهولة استخدامها، تسهم Davis في تحسين فهمنا للطقس وتغيراته، مما يساعد في اتخاذ قرارات أكثر فاعلية.' },
      },
    ],
    products: [
      {
        name: { en: 'Weather Stations', ar: 'Weather Stations' },
        image: '/img/Companies and Products/71wSg--3Q4L._AC_UF1000,1000_QL80_.webp',
        detailUrl: 'https://www.davisinstruments.com/pages/weather-stations',
      },
    ],
  },
  'chemetrics': {
    slug: 'chemetrics',
    pageTitle: {
      en: 'Water Quality Testing Equipment from Chemetrics',
      ar: 'أجهزة قياس جودة المياه من شركة Chemetrics',
    },
    metaDescription: {
      en: 'Chemetrics offers reliable water quality testing equipment for accurate analysis and environmental protection.',
      ar: 'أجهزة قياس جودة المياه من شركة Chemetrics تضمن دقة وسهولة في تحليل المياه.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'CHEMetrics was founded in 1969 by Gordon Rambi and specializes in developing and manufacturing water testing equipment. The company’s extensive product line relies on its original invention, the self-filling ampoule, which allows analysts to perform colorimetric water analysis with ease, speed, and increased safety, whether in the field or in the laboratory.', ar: 'تأسست CHEMetrics في عام 1969 على يد جوردون رامبي، وهي شركة متخصصة في تطوير وتصنيع أجهزة اختبار جودة المياه. تعتمد الشركة على اختراعها الرائد، الأمبولة الذاتية التعبئة، التي تتيح للمحللين إجراء تحليلات مياه ملونة بسهولة وسرعة، سواء في الموقع أو في المختبر.' },
      },
      {
        heading: { en: 'Importance of Water Quality Testing', ar: 'أهمية قياس جودة المياه' },
        content: { en: 'Measuring water quality is essential for maintaining environmental health and public safety. Water quality testing equipment is used to determine levels of various contaminants in water sources, such as drinking water, wastewater, and environmental samples. These measurements are crucial for ensuring safe water for drinking, agriculture, and industrial use.', ar: 'قياس جودة المياه هو عنصر أساسي للحفاظ على صحة البيئة وسلامة الأفراد. تستخدم أجهزة قياس جودة المياه لتحديد مستويات الملوثات المختلفة في مصادر المياه، مثل المياه العذبة والمياه المستعملة. هذه القياسات مهمة لضمان سلامة المياه المستخدمة للشرب، الزراعة، والصناعة.' },
        items: [
          { en: 'Public Health Protection: Water quality measurements help detect contaminants that may affect human health.', ar: 'حماية الصحة العامة: تساعد قياسات جودة المياه في الكشف عن الملوثات التي قد تؤثر على صحة الأفراد.' },
          { en: 'Regulatory Compliance: Testing ensures adherence to environmental and health regulations.', ar: 'الامتثال للمعايير: تساهم في ضمان الامتثال للمعايير البيئية والصحية.' },
          { en: 'Resource Management: Provides decision-makers with the information needed to manage water resources effectively.', ar: 'تحسين إدارة الموارد: تتيح للمسؤولين اتخاذ قرارات مستنيرة بشأن إدارة موارد المياه.' },
        ],
      },
      {
        heading: { en: 'Advantages of Chemetrics Equipment', ar: 'مزايا أجهزة Chemetrics' },
        content: { en: 'Chemetrics water quality testing equipment offers numerous advantages, making it the ideal choice for various applications:', ar: 'تتميز أجهزة قياس جودة المياه من Chemetrics بالعديد من المزايا، مما يجعلها الخيار المثالي للعديد من التطبيقات:' },
        items: [
          { en: 'Ease of Use: The self-filling ampoule simplifies and speeds up the analysis process, reducing the time and effort required.', ar: 'سهولة الاستخدام: توفر الأمبولة الذاتية التعبئة عملية تحليل بسيطة وسريعة، مما يقلل من الوقت والجهد المطلوبين.' },
          { en: 'Accurate Results: The equipment provides precise and reliable measurements of contaminant levels, aiding in informed decision-making.', ar: 'دقة النتائج: تقدم الأجهزة قياسات دقيقة وموثوقة لمستويات الملوثات، مما يساعد في اتخاذ قرارات مبنية على بيانات دقيقة.' },
          { en: 'Innovative Design: Chemetrics employs exclusive manufacturing technologies that ensure high quality and reliability of the equipment.', ar: 'تصميم مبتكر: تعتمد Chemetrics على تقنيات تصنيع حصرية تضمن الجودة العالية والاعتمادية للأجهزة.' },
        ],
      },
      {
        heading: { en: 'Applications of Chemetrics Equipment', ar: 'تطبيقات أجهزة Chemetrics' },
        content: { en: 'Chemetrics devices are utilized in a variety of applications, including:', ar: 'تُستخدم أجهزة Chemetrics في مجموعة متنوعة من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Laboratories: For analyzing water quality in research environments.', ar: 'المختبرات: لتحليل جودة المياه في بيئات البحث.' },
          { en: 'Industry: To monitor water quality used in industrial processes.', ar: 'الصناعة: لمراقبة جودة المياه المستخدمة في العمليات الصناعية.' },
          { en: 'Environmental Monitoring: To track changes in water quality at different environmental sites.', ar: 'البيئة: لرصد التغيرات في جودة المياه في المواقع البيئية المختلفة.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Chemetrics water quality testing equipment is the ideal choice for any organization seeking to maintain and ensure water quality and safety. With its advanced innovations and accuracy, Chemetrics plays a vital role in enhancing public health and protecting the environment.', ar: 'تُعتبر أجهزة قياس جودة المياه من شركة Chemetrics الخيار الأمثل لأي جهة تسعى للحفاظ على جودة المياه وضمان سلامتها. بفضل ابتكاراتها المتقدمة ودقتها، تساهم Chemetrics في تعزيز الصحة العامة وحماية البيئة.' },
      },
    ],
    products: [
      {
        name: { en: 'Multi-Analyte Photometers', ar: 'Multi-Analyte Photometers' },
        image: '/img/Companies and Products/Multi-Analyte Photometers.webp',
        detailUrl: 'https://www.chemetrics.com/product/v-2000-multi-analyte-photometer-for-water-quality-analysis/',
      },
      {
        name: { en: 'SAM Single Analyte Meters', ar: 'SAM Single Analyte Meters' },
        image: '/img/Companies and Products/SAM Single Analyte Meters.webp',
        detailUrl: 'https://www.chemetrics.com/sam-single-analyte-meters/',
      },
      {
        name: { en: 'Reagents for Water Testing', ar: 'Reagents for Water Testing' },
        image: '/img/Companies and Products/K-60022.webp',
        detailUrl: 'https://www.chemetrics.com/',
      },
    ],
  },
  'arjayeng': {
    slug: 'arjayeng',
    pageTitle: {
      en: 'Oil and Hydrocarbon Measurement Equipment from Arjayeng',
      ar: 'أجهزة قياس الزيت والهيدروكربونات في الماء من شركة Arjayeng',
    },
    metaDescription: {
      en: 'Arjayeng  provides precise oil and hydrocarbon measurement equipment for analyzing water quality and ensuring environmental protection.',
      ar: 'أجهزة قياس الزيت والهيدروكربونات من شركة Arjayeng  توفر دقة وموثوقية في تحليل جودة المياه.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Arjayeng is a leading manufacturer of oil and hydrocarbon measurement equipment in water. The company’s products play a crucial role in enhancing water quality by providing precise and reliable tools for analyzing pollution levels. These devices utilize advanced techniques to ensure accurate results that help protect the environment and assets.', ar: 'تعتبر شركة Arjayeng رائدة في تصنيع أجهزة قياس الزيت والهيدروكربونات في الماء. تسهم منتجات الشركة في تعزيز جودة المياه من خلال توفير أدوات دقيقة وموثوقة لتحليل مستويات التلوث. تعتمد هذه الأجهزة على تقنيات متطورة تضمن نتائج دقيقة تساعد في حماية البيئة والممتلكات.' },
      },
      {
        heading: { en: 'Importance of Measuring Oil and Hydrocarbons in Water', ar: 'أهمية قياس الزيت والهيدروكربونات في الماء' },
        content: { en: 'Measuring oil and hydrocarbons in water is essential for maintaining water quality and protecting aquatic life. These measurements are used to identify water contamination by organic compounds and hydrocarbons, which aids in taking appropriate actions to safeguard the environment.', ar: 'تعتبر قياسات الزيت والهيدروكربونات في الماء أمرًا بالغ الأهمية للحفاظ على جودة المياه وحماية الحياة المائية. تُستخدم هذه القياسات لتحديد تلوث المياه بالمركبات العضوية والهيدروكربونية، مما يساعد في اتخاذ الإجراءات المناسبة لحماية البيئة.' },
        items: [
          { en: 'Environmental Protection: Helps detect pollution levels in surface and groundwater.', ar: 'حماية البيئة: يساعد في الكشف عن مستويات التلوث بالمياه السطحية والجوفية.' },
          { en: 'Regulatory Compliance: Ensures adherence to environmental standards such as ISO 9377-2 and EPA 1664 Rev A.', ar: 'الامتثال للمعايير: يساهم في التأكد من الامتثال للمعايير البيئية مثل ISO 9377-2 وEPA 1664 Rev A.' },
          { en: 'Improved Water Management: Provides accurate information for decision-makers regarding resource management.', ar: 'تحسين إدارة المياه: يوفر معلومات دقيقة لصانعي القرار بشأن إدارة الموارد المائية.' },
        ],
      },
      {
        heading: { en: 'Advantages of Arjayeng Equipment', ar: 'مزايا أجهزة Arjayeng' },
        content: { en: 'Arjayeng’s oil and hydrocarbon measurement devices offer numerous advantages:', ar: 'تتميز أجهزة قياس الزيت والهيدروكربونات من Arjayeng بالعديد من المزايا:' },
        items: [
          { en: 'High Accuracy: Provides precise measurements that contribute to informed decision-making.', ar: 'دقة عالية: تقدم الأجهزة قياسات دقيقة تساهم في اتخاذ قرارات مدروسة.' },
          { en: 'Ease of Use: Designed for user-friendliness, reducing the need for extensive training.', ar: 'سهولة الاستخدام: صممت لتكون سهلة الاستخدام، مما يقلل من الحاجة إلى التدريب المكثف.' },
          { en: 'Standards Compliance: Adheres to international standards to ensure reliable results.', ar: 'امتثال للمعايير: تلتزم الأجهزة بالمعايير الدولية لضمان موثوقية النتائج.' },
        ],
      },
      {
        heading: { en: 'Applications of Arjayeng Equipment', ar: 'تطبيقات أجهزة Arjayeng' },
        content: { en: 'Arjayeng devices are utilized in a variety of applications, including:', ar: 'تُستخدم أجهزة قياس الزيت والهيدروكربونات في مجموعة متنوعة من التطبيقات، منها:' },
        items: [
          { en: 'Laboratories: For analyzing water quality in research environments.', ar: 'المختبرات: لتحليل جودة المياه في البيئات البحثية.' },
          { en: 'Industries: To monitor wastewater and industrial processes.', ar: 'الصناعات: لمراقبة المياه المستعملة والعمليات الصناعية.' },
          { en: 'Environmental Monitoring: To track pollution in water bodies.', ar: 'البيئة: لرصد التلوث في المسطحات المائية.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Arjayeng’s oil and hydrocarbon measurement equipment is the ideal choice for any organization seeking to maintain and ensure water quality and safety. With advanced technologies and high precision, Arjay contributes to environmental protection and public health.', ar: 'تُعتبر أجهزة قياس الزيت والهيدروكربونات من شركة Arjayeng الخيار الأمثل لكل جهة تسعى للحفاظ على جودة المياه وضمان سلامتها. بفضل تقنياتها المتطورة ودقتها العالية، تسهم Arjay في حماية البيئة وتعزيز الصحة العامة.' },
      },
    ],
    products: [
      {
        name: { en: 'FluoroCheck II Benchtop Unit for Petroleum Oils', ar: 'FluoroCheck II Benchtop Unit for Petroleum Oils' },
        image: '/img/Companies and Products/Arjayeng1.webp',
        detailUrl: 'https://arjayeng.com/product/fluorocheck-ii-benchtop-unit-for-petroleum-oils/',
      },
      {
        name: { en: 'HydroSense 4420-OCM/4410-OCM Continuous Closed-Loop for All Oil Types', ar: 'HydroSense 4420-OCM/4410-OCM Continuous Closed-Loop for All Oil Types' },
        image: '/img/Companies and Products/HydroSense 4420-OCM Continuous Closed-Loop for All Oil Types.webp',
        detailUrl: 'https://arjayeng.com/product/hydrosense-4420-ocm-continuous-closed-loop-for-all-oil-types/',
      },
      {
        name: { en: 'On-line alarm for Oil in Water Monitor', ar: 'On-line alarm for Oil in Water Monitor' },
        image: '/img/Companies and Products/On-line alarm for Oil in Water Monitor.webp',
        detailUrl: 'https://arjayeng.com/categories/oil-water-separator-sump-monitors/',
      },
      {
        name: { en: 'Level monitors & controls for both liquid and solid', ar: 'Level monitors & controls for both liquid and solid' },
        image: '/img/Companies and Products/Level monitors & controls for both liquid and solid.webp',
        detailUrl: 'https://arjayeng.com/categories/level-controls/',
      },
    ],
  },
  'kestrel': {
    slug: 'kestrel',
    pageTitle: {
      en: 'Weather Stations from Kestrel',
      ar: 'أجهزة محطات الطقس من شركة Kestrel',
    },
    metaDescription: {
      en: 'Kestrel weather stations provide accurate and reliable weather data for various applications.',
      ar: 'أجهزة محطات الطقس من شركة Kestrel توفر بيانات دقيقة وموثوقة حول الأحوال الجوية.',
    },
    sections: [
      {
        heading: { en: 'Introduction', ar: 'مقدمة' },
        content: { en: 'Kestrel is a leading company in the manufacturing of portable weather stations and related devices. Kestrel offers a wide range of equipment designed to provide users with accurate weather data, helping individuals and professionals make informed decisions in various fields such as sports, agriculture, and environmental planning.', ar: 'تُعتبر شركة Kestrel واحدة من الشركات الرائدة في تصنيع أجهزة ومحطات الطقس المحمولة. توفر Kestrel مجموعة متنوعة من الأجهزة التي تهدف إلى تزويد المستخدمين ببيانات دقيقة حول الأحوال الجوية، مما يساعد في اتخاذ قرارات مستنيرة في مجالات متعددة مثل الرياضة، الزراعة، والتخطيط البيئي.' },
      },
      {
        heading: { en: 'Importance of Weather Stations', ar: 'أهمية محطات الطقس' },
        content: { en: 'Weather stations are essential tools for monitoring atmospheric conditions. They provide vital information on temperature, humidity, wind speed, and air pressure. This data is used in many applications, including scientific research, outdoor activities, and environmental monitoring.', ar: 'تعتبر محطات الطقس أدوات حيوية لرصد الظروف الجوية، حيث توفر معلومات حيوية حول درجات الحرارة، الرطوبة، سرعة الرياح، والضغط الجوي. تُستخدم هذه البيانات في العديد من التطبيقات، بما في ذلك الأبحاث العلمية، الأنشطة الخارجية، والمراقبة البيئية.' },
        items: [
          { en: 'Data Accuracy: Kestrel weather stations deliver precise measurements that enhance our understanding of weather conditions.', ar: 'دقة البيانات: تقدم محطات الطقس من Kestrel قياسات دقيقة تساعد في فهم أفضل للظروف الجوية.' },
          { en: 'Flexibility: Kestrel devices are designed to be portable and easy to use, making them suitable for various applications.', ar: 'المرونة: تم تصميم أجهزة Kestrel لتكون محمولة وسهلة الاستخدام، مما يجعلها مناسبة لمختلف التطبيقات.' },
          { en: 'Improved Planning: Accurate data contributes to better decision-making in areas like agriculture and urban planning.', ar: 'تحسين التخطيط: تساهم البيانات الدقيقة في تحسين اتخاذ القرارات في مجالات مثل الزراعة والتخطيط العمراني.' },
        ],
      },
      {
        heading: { en: 'Advantages of Kestrel Weather Stations', ar: 'مزايا أجهزة محطات الطقس من Kestrel' },
        content: { en: 'Kestrel weather stations offer numerous advantages that make them the ideal choice for weather monitoring:', ar: 'تتميز أجهزة Kestrel بالعديد من المزايا التي تجعلها الخيار الأمثل لرصد الأحوال الجوية:' },
        items: [
          { en: 'Durable Design: Constructed from robust materials to withstand harsh environmental conditions.', ar: 'تصميم متين: مصنوعة من مواد قوية لتحمل الظروف البيئية القاسية.' },
          { en: 'Ease of Use: Feature intuitive user interfaces, making them accessible for both beginners and professionals.', ar: 'سهولة الاستخدام: توفر واجهات مستخدم بديهية، مما يجعل استخدامها سهلاً للمبتدئين والمحترفين.' },
          { en: 'Multifunctionality: Capable of measuring various parameters such as temperature, humidity, wind speed, and air pressure.', ar: 'تعدد الوظائف: تشمل قياسات مختلفة مثل درجة الحرارة، الرطوبة، سرعة الرياح، وضغط الهواء.' },
        ],
      },
      {
        heading: { en: 'Applications of Weather Stations', ar: 'تطبيقات أجهزة محطات الطقس' },
        content: { en: 'Kestrel devices are utilized in a variety of applications, including:', ar: 'تُستخدم أجهزة Kestrel في مجموعة متنوعة من التطبيقات، بما في ذلك:' },
        items: [
          { en: 'Agriculture: Monitoring weather conditions that impact crop growth.', ar: 'الزراعة: لمراقبة الظروف الجوية التي تؤثر على نمو المحاصيل.' },
          { en: 'Outdoor Activities: Ideal for athletes and climbers to track weather conditions.', ar: 'الأنشطة الخارجية: مثالية للرياضيين والمتسلقين لمراقبة الأحوال الجوية.' },
          { en: 'Scientific Research: Used in environmental studies to understand the effects of weather changes.', ar: 'البحث العلمي: في الدراسات البيئية لفهم تأثيرات التغيرات الجوية.' },
        ],
      },
      {
        heading: { en: 'Conclusion', ar: 'الخاتمة' },
        content: { en: 'Kestrel weather stations are essential tools for obtaining accurate information about atmospheric conditions. With their precision and ease of use, Kestrel significantly contributes to enhancing our understanding of weather and its variations, leading to more effective decision-making.', ar: 'تُعتبر أجهزة محطات الطقس من شركة Kestrel أداة أساسية للحصول على معلومات دقيقة حول الأحوال الجوية. بفضل دقتها وسهولة استخدامها، تسهم Kestrel في تحسين فهمنا للطقس وتغيراته، مما يساعد في اتخاذ قرارات أكثر فاعلية.' },
      },
    ],
    products: [
      {
        name: { en: 'Weather Meters', ar: 'Weather Meters' },
        image: '/img/Companies and Products/Weather Meter.webp',
        detailUrl: 'https://kestrelmeters.com/#:~:text=About%20Kestrel%20Weather%20Meters&text=Hand%20held%20wind%20and%20weather,humidity%20and%20heat%20stress%20information.',
      },
      {
        name: { en: 'Weather Stations', ar: 'Weather Stations' },
        image: '/img/Companies and Products/Weather Stations123.webp',
        detailUrl: 'https://kestrelinstruments.com/kestrelmet-weather-stations',
      },
      {
        name: { en: 'Heat Stress Tracker', ar: 'Heat Stress Tracker' },
        image: '/img/Companies and Products/Heat Stress Tracker.webp',
        detailUrl: 'https://kestrelinstruments.com/kestrel-5400-heat-stress-tracker',
      },
    ],
  },
  'tisch': {
    slug: 'tisch',
    pageTitle: {
      en: 'High and Low Air Samplers from Tisch Environmental',
      ar: 'أجهزة أخذ عينات الهواء المرتفعة والمنخفضة من Tisch Environmental',
    },
    metaDescription: {
      en: 'Tisch Environmental is a leading provider of air sampling equipment and monitoring solutions for environmental safety.',
      ar: 'Tisch Environmental هي شركة رائدة في توفير معدات أخذ عينات الهواء وحلول المراقبة للسلامة البيئية.',
    },
    sections: [
      {
        heading: { en: 'About Tisch Environmental', ar: 'حول Tisch Environmental' },
        content: { en: 'Tisch Environmental is the benchmark for high volume air sampling, particulate, metals, volatiles, and specialty monitoring equipment. Since the company\'s inception in 1954 as General Metal Works, our product line has expanded from the first high volume air sampler to include high-tech and custom samplers. Our clients are professionals from every sector of the regulatory and industrial markets.', ar: 'Tisch Environmental هي المعيار لأخذ عينات الهواء عالية الحجم، والجسيمات، والمعادن، والمواد المتطايرة، ومعدات المراقبة المتخصصة. منذ تأسيس الشركة في عام 1954 باسم General Metal Works، توسع خط إنتاجنا من أول جهاز أخذ عينات هواء عالي الحجم ليشمل أجهزة عالية التقنية ومخصصة.' },
      },
      {
        heading: { en: 'Our Expertise', ar: 'خبراتنا' },
        content: { en: 'We are the experts in high volume air sampling, lead sampling, lead samplers, particulate monitoring, particulate emissions, pesticide monitoring, pesticide sampling, total suspended particles, particulate samplers, Federal Reference Method PM-10, Federal Reference Method PM2.5, EPA Method TO-4A, EPA Method TO-9A, EPA Method TO-13A, and much more.', ar: 'نحن خبراء في أخذ عينات الهواء عالي الحجم، وأخذ عينات الرصاص، ومراقبة الجسيمات، وانبعاثات الجسيمات، ومراقبة المبيدات الحشرية، والجسيمات العالقة الكلية، وأجهزة أخذ عينات الجسيمات، والطريقة المرجعية الفيدرالية PM-10، والطريقة المرجعية الفيدرالية PM2.5، وأكثر من ذلك.' },
      },
      {
        heading: { en: 'About the Company', ar: 'عن الشركة' },
        content: { en: 'TEI is a family business located in the Village of Cleves, Ohio. TEI employs skilled personnel who average over 20 years of experience each in the design, manufacture, and support of air pollution monitoring equipment. Our modern well-equipped factory, quality philosophy, and experience have made TEI the supplier of choice for air pollution monitoring equipment.', ar: 'TEI هي شركة عائلية تقع في قرية  Cleves، أوهايو. توظف TEI موظفين مهرة يتمتعون بمتوسط خبرة يزيد عن 20 عامًا في تصميم وتصنيع ودعم معدات مراقبة تلوث الهواء. مصنعنا الحديث المجهز، وفلسفة الجودة، والخبرة جعلت TEI المورد المفضل لمعدات مراقبة تلوث الهواء.' },
      },
    ],
    products: [
      {
        name: { en: 'High and Low Air Samplers for TSP, PM 10, PM 2.5 Lead sampling', ar: 'أجهزة أخذ عينات الهواء المرتفعة والمنخفضة لـ TSP و PM 10 و PM 2.5 وأخذ عينات الرصاص' },
        image: '/img/Companies and Products/Air Sampler.webp',
        detailUrl: 'https://tisch-env.com/shop/',
      },
    ],
  },
};

export function getPartnerDetail(slug: string): PartnerDetail | undefined {
  return PARTNER_DETAILS[slug];
}
