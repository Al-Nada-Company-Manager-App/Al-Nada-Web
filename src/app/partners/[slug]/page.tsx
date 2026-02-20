import UnderConstruction from "@/app/under-construction/page";
import { PARTNERS } from "@/constants/partners";

export function generateStaticParams() {
  return PARTNERS.map((partner) => ({
    slug: partner.slug,
  }));
}

export default function PartnerPage() {
  return <UnderConstruction />;
}
