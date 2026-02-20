import UnderConstruction from "@/app/under-construction/page";
import { SERVICES } from "@/constants/services";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage() {
  return <UnderConstruction />;
}
