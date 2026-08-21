import { SERVICES } from '@/constants/services';
import { notFound } from 'next/navigation';
import { ServiceDetailClient } from '@/components/features/services/ServiceDetailClient';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
