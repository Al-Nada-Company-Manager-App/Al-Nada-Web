import { PARTNERS } from "@/constants/partners";
import PartnerProductsPageClient from "./PartnerProductsPageClient";

export function generateStaticParams() {
  return PARTNERS.map((partner) => ({
    slug: partner.slug,
  }));
}

export default function PartnerProductsPage() {
  return <PartnerProductsPageClient />;
}
