"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ServiceItem } from '@/constants/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceDetailContentProps {
  service: ServiceItem;
  language: 'en' | 'ar';
  rtl: boolean;
  theme: string | undefined;
}

export function ServiceDetailContent({ service, language, rtl, theme }: ServiceDetailContentProps) {
  const isDark = theme === 'dark';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen ${rtl ? 'text-right' : 'text-left'}`} dir={rtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title[language]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md">
              <Image
                src={service.icon}
                alt=""
                width={32}
                height={32}
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {service.title[language]}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Intro Section */}
          <motion.section variants={itemVariants} className="prose prose-lg md:prose-xl max-w-none dark:prose-invert">
            {service.detail.intro[language].map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.section>

          {/* Dynamic Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.detail.sections.map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className={`p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:shadow-lg
                  ${isDark 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-black/5 border-black/10 hover:bg-black/10'
                  }`}
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                  {section.title[language]}
                </h3>
                
                <div className="space-y-4">
                  {section.content[language].length > 0 && section.content[language].map((text, i) => (
                    <p key={i} className="text-muted-foreground">
                      {text}
                    </p>
                  ))}
                  
                  {section.list && (
                    <ul className="mt-4 space-y-3">
                      {section.list[language].map((item, i) => {
                        const colonIndex = item.indexOf(':');
                        const isRtlColon = item.indexOf('：') > -1; // Sometimes Arabic uses fullwidth colon
                        
                        let boldPart = item;
                        let textPart = '';
                        
                        if (colonIndex > -1) {
                          boldPart = item.substring(0, colonIndex + 1);
                          textPart = item.substring(colonIndex + 1);
                        } else if (isRtlColon) {
                           const cIndex = item.indexOf('：');
                           boldPart = item.substring(0, cIndex + 1);
                           textPart = item.substring(cIndex + 1);
                        }

                        return (
                          <li key={i} className="flex gap-3 text-muted-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span>
                              {textPart ? (
                                <>
                                  <strong className="text-foreground">{boldPart}</strong>
                                  {textPart}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className={`mt-16 p-8 md:p-12 rounded-3xl text-center border backdrop-blur-xl relative overflow-hidden
              ${isDark 
                ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-white/10' 
                : 'bg-gradient-to-br from-primary/10 to-secondary/10 border-black/10'
              }`}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'ar' ? 'هل تحتاج إلى استشارة؟' : 'Need a Consultation?'}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                {language === 'ar' 
                  ? 'فريقنا من الخبراء جاهز لمساعدتك في العثور على الحلول المثالية لاحتياجاتك.'
                  : 'Our team of experts is ready to help you find the perfect solutions for your needs.'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 text-lg" asChild>
                  <Link href="/contact">
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg" asChild>
                  <Link href="/products">
                    {language === 'ar' ? 'تصفح منتجاتنا' : 'Browse Products'}
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
