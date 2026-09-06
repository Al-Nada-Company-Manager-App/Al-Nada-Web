export const CONTACT_PAGE_CONTENT = {
  en: {
    heroTitle: "Contact Us",
    heroSubtitle:
      "Have questions or need assistance? Our dedicated team is here to help you with your environmental equipment needs and inquiries.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Contact",
  },
  ar: {
    heroTitle: "تواصل معنا",
    heroSubtitle:
      "هل لديك أسئلة أو تحتاج إلى مساعدة؟ فريقنا المتخصص هنا لمساعدتك في احتياجاتك واستفساراتك المتعلقة بالمعدات البيئية.",
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "تواصل معنا",
  },
} as const;

export const CONTACT_INFO_CARDS = [
  {
    icon: "map-pin" as const,
    label: { en: "Address", ar: "العنوان" },
    values: [
      {
        en: "67 Mahattet ElKoba, Cairo, Egypt",
        ar: "٦٧ محطة القبة، القاهرة، مصر",
      },
    ],
    href: "https://maps.google.com/?q=Al+Nada+Scientific+Office",
  },
  {
    icon: "whatsapp" as const,
    label: { en: "WhatsApp", ar: "واتساب" },
    values: [{ en: "+20 100 701 5047", ar: "+20 100 701 5047" }],
    href: "https://wa.me/+201007015047",
  },
  {
    icon: "phone" as const,
    label: { en: "Call Us Now", ar: "اتصل بنا الآن" },
    values: [{ en: "+202 24515545", ar: "+202 24515545" }],
    href: "tel:+20224515545",
  },
  {
    icon: "mail" as const,
    label: { en: "Mail Us Now", ar: "ارسل لنا الآن" },
    values: [
      { en: "sales@alnadascientific.com", ar: "sales@alnadascientific.com" },
      { en: "nada.scientific@yahoo.com", ar: "nada.scientific@yahoo.com" },
    ],
    href: "mailto:sales@alnadascientific.com",
  },
] as const;

export const CONTACT_FORM_CONTENT = {
  en: {
    tag: "Contact Us",
    title: "Have Any Query? Please Contact Us!",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    phonePlaceholder: "Your Phone Number (Optional)",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Message",
    submitButton: "Send Message",
    successMessage: "Thanks for your submission!",
    errorMessage: "Oops! There was a problem submitting your form.",
  },
  ar: {
    tag: "تواصل معنا",
    title: "عندك استفسار؟ من فضلك تواصل معنا!",
    namePlaceholder: "اسمك",
    emailPlaceholder: "الايميل الخاص بك",
    phonePlaceholder: "رقم الهاتف (اختياري)",
    subjectPlaceholder: "الموضوع",
    messagePlaceholder: "الرسالة",
    submitButton: "ارسل الرسالة",
    successMessage: "شكراً لتواصلك معنا!",
    errorMessage: "حدث خطأ أثناء إرسال النموذج.",
  },
} as const;

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE) {
  throw new Error('NEXT_PUBLIC_API_URL is not set');
}

export const BACKEND_CONTACT_ENDPOINT = `${API_BASE}/contact`;

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0000432516954!2d31.3023327!3d30.094185099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584041eaaaaaab%3A0xa1182256c0f53365!2sAl%20Nada%20Scientific%20Office!5e0!3m2!1sen!2seg!4v1706887706711!5m2!1sen!2seg";
