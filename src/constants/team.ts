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

// TODO: Update with real data — name, position, photo, and social links
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: { en: "Team Member 1", ar: "عضو الفريق ١" },
    position: { en: "CEO & Founder", ar: "المدير التنفيذي والمؤسس" },
    photo: "/img/about/ChatGPT Image Jan 28, 2026, 12_29_39 PM.png",
    socials: {
      linkedin: "#",
      email: "info@alnadascientific.com",
    },
  },
  {
    name: { en: "Team Member 2", ar: "عضو الفريق ٢" },
    position: { en: "Operations Manager", ar: "مدير العمليات" },
    photo: "/img/about/ChatGPT Image Jan 28, 2026, 12_29_39 PM.png",
    socials: {
      linkedin: "#",
      email: "info@alnadascientific.com",
    },
  },
  {
    name: { en: "Team Member 3", ar: "عضو الفريق ٣" },
    position: { en: "Environmental Engineer", ar: "مهندس بيئي" },
    photo: "/img/about/ChatGPT Image Jan 28, 2026, 12_29_39 PM.png",
    socials: {
      linkedin: "#",
      email: "info@alnadascientific.com",
    },
  },
  {
    name: { en: "Team Member 4", ar: "عضو الفريق ٤" },
    position: { en: "Technical Support Lead", ar: "رئيس الدعم الفني" },
    photo: "/img/about/ChatGPT Image Jan 28, 2026, 12_29_39 PM.png",
    socials: {
      linkedin: "#",
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
