export interface TeamMember {
  name: { en: string; ar: string };
  position: { en: string; ar: string };
  photo: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    facebook?: string;
  };
}

export const TEAM_CONTENT = {
  en: {
    tag: "Our Team",
    title: "Meet Our Experts",
    description:
      "A dedicated team of professionals and engineers driving innovation in environmental and scientific solutions.",
  },
  ar: {
    tag: "فريقنا",
    title: "تعرف على خبرائنا",
    description:
      "فريق متميز من المتخصصين والمهندسين يقودون الابتكار في الحلول البيئية والعلمية.",
    },
  } as const;
  
  export const TEAM_MEMBERS: TeamMember[] = [
    {
      name: { en: "Abdelfatah Salah", ar: "عبدالفتاح صلاح" },
      position: { en: "CEO & Founder", ar: "المدير التنفيذي والمؤسس" },
      photo: "/img/team/CEO&Founder.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/abdelfattah-salah-005b5441/",
        email: "sales@alnadascientific.com",
      },
    },
    {
      name: { en: "Nada Abdelfatah", ar: "ندى عبدالفتاح" },
      position: { en: "Executive Secretary", ar: "السكرتيرة التنفيذية" },
      photo: "/img/team/secretary.png", // TODO: add photo later
      socials: {
        linkedin: "https://www.linkedin.com/in/nada-abdelfattah-971981268/",
        email: "nada@alnadascientific.com",
      },
    },
    {
      name: { en: "Basant Mohamed", ar: "بسنت محمد" },
      position: { en: "Operations Manager", ar: "مدير العمليات" },
      photo: "/img/team/hrmanger.png",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/basant-mahmoud-hassan-a7833b186/",
        email: "basant@alnadascientific.com",
      },
    },
    // {
    //   name: { en: "Mostafa Mohamed", ar: "مصطفى محمد" },
    //   position: { en: "Technical Support", ar: "الدعم التقني" },
    //   photo: "/img/team/technialsupport.png",
    //   socials: {
    //     linkedin: "#",
    //     email: "info@alnadascientific.com",
    //   },
    // },
    {
      name: { en: "Hamada Yasser", ar: "حمادة ياسر" },
      position: { en: "Environmental Engineer", ar: "مهندس بيئي" },
      photo: "/img/team/environmentalEngineer.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/hamada-yasser-426560321/",
        email: "h.yasser@alnadascientific.com",
      },
    },
    {
      name: { en: "Ahmed Fathi", ar: "أحمد فتحي" },
      position: { en: "IT Manager", ar: "مدير تقنية المعلومات" },
      photo: "/img/team/IT Manager.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/ahmedfathy-x1",
        email: "it@alnadascientific.com",
      },
    },
    {
      name: { en: "Ahmed ElSayed", ar: "أحمد سيد" },
      position: { en: "Digital Marketing", ar: "التسويق الرقمي" },
      photo: "/img/team/digitalMarketing.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/ahmed-elsayed-1049463b5/",
        email: "info@alnadascientific.com",
      },
    },
  ];

export const DEPARTMENTS = [
  {
    title: { en: "Supply", ar: "التوريد" },
    subtitle: { en: "Department", ar: "القسم" },
    image: "/img/about/about-3.jpg",
  },
  {
    title: { en: "Environmental Measurements", ar: "القياسات البيئية" },
    subtitle: { en: "Department", ar: "القسم" },
    image: "/img/about/about-4.jpg",
  },
  {
    title: {
      en: "Environmental Consultations & Courses",
      ar: "الاستشارات والدورات البيئية",
    },
    subtitle: { en: "Department", ar: "القسم" },
    image: "/img/about/about-5.jpg",
  },
  {
    title: { en: "Maintenance & Calibration", ar: "الصيانة والمعايرة" },
    subtitle: { en: "Department", ar: "القسم" },
    image: "/img/about/about-6.jpg",
  },
];
