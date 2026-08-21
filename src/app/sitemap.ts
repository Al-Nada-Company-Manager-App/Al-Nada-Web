import { MetadataRoute } from "next";
import { SERVICES } from "@/constants/services";
import { PARTNERS } from "@/constants/partners";

const BASE_URL = "https://alnadascientific.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/partners",
    "/products",
    "/contact",
    "/training",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const partnerRoutes = PARTNERS.map((partner) => ({
    url: `${BASE_URL}/partners/${partner.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const partnerProductsRoutes = PARTNERS.map((partner) => ({
    url: `${BASE_URL}/partners/${partner.slug}/products`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...partnerRoutes, ...partnerProductsRoutes];
}
