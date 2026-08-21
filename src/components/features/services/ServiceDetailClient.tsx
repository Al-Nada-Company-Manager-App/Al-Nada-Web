"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { useTheme } from 'next-themes';
import { ServiceItem } from '@/constants/services';
import { ServiceDetailContent } from './ServiceDetailContent';

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const { language } = useLanguage();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRTL = language === 'ar';
  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (!mounted) {
    // Avoid hydration mismatch by rendering a simple div before client mount
    return <div className="min-h-screen" />;
  }

  return (
    <ServiceDetailContent 
      service={service} 
      language={language} 
      rtl={isRTL} 
      theme={currentTheme} 
    />
  );
}
