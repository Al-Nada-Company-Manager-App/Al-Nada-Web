import { PARTNERS } from "@/constants/partners";
import { Metadata } from "next";
import PartnerPageClient from "./PartnerPageClient";

export function generateStaticParams() {
  return PARTNERS.map((partner) => ({
    slug: partner.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const partner = PARTNERS.find((p) => p.slug === resolvedParams.slug);
  
  if (!partner) {
    return {
      title: 'Partner Not Found',
    };
  }

  return {
    title: partner.title.en,
    description: `Learn more about our partner ${partner.title.en} and their scientific instruments at Al-Nada Scientific Office.`,
  };
}

export default function PartnerPage() {
  return <PartnerPageClient />;
}
