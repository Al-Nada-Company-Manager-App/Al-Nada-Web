import { SERVICES } from '@/constants/services';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ServiceDetailClient } from '@/components/features/services/ServiceDetailClient';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title.en,
    description: service.detail.intro.en[0] || `Learn more about ${service.title.en} services at Al-Nada Scientific Office.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
