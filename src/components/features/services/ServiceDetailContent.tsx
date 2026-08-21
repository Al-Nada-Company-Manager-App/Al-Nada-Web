"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '@/constants/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LazyImage } from '@/components/ui/LazyImage';
import { ArrowRight, ChevronRight, ArrowLeft } from 'lucide-react';

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen ${rtl ? 'text-right' : 'text-left'}`} dir={rtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section
        className={cn(
          "relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#070d24]"
            : "bg-gradient-to-b from-[#f0f6ff] via-[#f6f9ff] to-white",
        )}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isDark ? (
            <>
              <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
              <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
            </>
          ) : (
            <>
              <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-blue-400/5 blur-[100px]" />
            </>
          )}
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Stack */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <div
                  className={cn(
                    "relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]",
                    isDark ? "shadow-black/40" : "shadow-primary/15",
                  )}
                >
                  <LazyImage
                    src={service.image}
                    alt={service.title[language]}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content intro */}
            <motion.div
              initial={{ opacity: 0, x: rtl ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span
                className={cn(
                  "inline-block px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6",
                  isDark
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "bg-primary/10 text-primary border border-primary/20",
                )}
              >
                {rtl ? "الخدمات" : "Services"}
              </span>
              <h1
                className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight",
                  isDark ? "text-white" : "text-[#0a1a4f]",
                )}
              >
                {service.title[language]}
              </h1>
              
              <div className="space-y-4 mt-6">
                {service.detail.intro[language].map((paragraph, index) => (
                  <p 
                    key={index}
                    className={cn(
                      "text-base md:text-lg leading-relaxed",
                      isDark ? "text-white/60" : "text-[#4a6fa5]",
                    )}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section 
        className={cn(
          "relative py-16 md:py-24 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#060b20]"
            : "bg-gradient-to-t from-[#f0f6ff] via-[#f6f9ff] to-white",
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-16 max-w-5xl mx-auto"
          >
            {/* Dynamic Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {service.detail.sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  className={cn(
                    "rounded-2xl p-8 md:p-10 border transition-all duration-500",
                    isDark
                      ? "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05]"
                      : "bg-white/60 border-[#0a1a4f]/[0.06] hover:bg-white/80 shadow-sm hover:shadow-md",
                  )}
                >
                  <h3
                    className={cn(
                      "text-xl md:text-2xl font-bold mb-6 flex items-center gap-3",
                      isDark ? "text-white" : "text-[#0a1a4f]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold",
                        isDark
                          ? "bg-primary/20 text-primary"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      {idx + 1}
                    </span>
                    {section.title[language]}
                  </h3>
                  
                  <div className="space-y-5">
                    {section.content[language].length > 0 && section.content[language].map((text, i) => (
                      <p 
                        key={i}
                        className={cn(
                          "text-base leading-relaxed",
                          isDark ? "text-white/55" : "text-[#4a6fa5]",
                        )}
                      >
                        {text}
                      </p>
                    ))}
                    
                    {section.list && (
                      <ul className="mt-6 space-y-4">
                        {section.list[language].map((item, i) => {
                          const colonIndex = item.indexOf(':');
                          const isRtlColon = item.indexOf('：') > -1;
                          
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
                            <li 
                              key={i} 
                              className={cn(
                                "flex items-start gap-3 text-sm md:text-base",
                                isDark ? "text-white/55" : "text-[#4a6fa5]",
                              )}
                            >
                              <ChevronRight
                                className={cn(
                                  "flex-shrink-0 w-5 h-5 mt-0.5 text-primary",
                                  rtl && "rotate-180",
                                )}
                              />
                              <span className="leading-relaxed">
                                {textPart ? (
                                  <>
                                    <strong className={isDark ? "text-white/90" : "text-[#0a1a4f]"}>
                                      {boldPart}
                                    </strong>
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
              className={cn(
                "mt-20 p-10 md:p-14 rounded-3xl text-center border relative overflow-hidden transition-colors duration-500",
                isDark 
                  ? "bg-gradient-to-br from-[#0a1a4f]/40 to-[#070d24]/60 border-white/10" 
                  : "bg-gradient-to-br from-primary/5 to-[#f0f6ff] border-[#0a1a4f]/10 shadow-lg"
              )}
            >
              <div className="relative z-10 max-w-2xl mx-auto">
                <span
                  className={cn(
                    "inline-block px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6",
                    isDark
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "bg-primary/10 text-primary border border-primary/20",
                  )}
                >
                  {language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
                </span>
                <h2 
                  className={cn(
                    "text-3xl md:text-4xl font-bold mb-6",
                    isDark ? "text-white" : "text-[#0a1a4f]"
                  )}
                >
                  {language === 'ar' ? 'هل تحتاج إلى استشارة؟' : 'Need a Consultation?'}
                </h2>
                <p 
                  className={cn(
                    "text-lg mb-10",
                    isDark ? "text-white/60" : "text-[#4a6fa5]"
                  )}
                >
                  {language === 'ar' 
                    ? 'فريقنا من الخبراء جاهز لمساعدتك في العثور على الحلول المثالية لاحتياجاتك البيئية والصناعية.'
                    : 'Our team of experts is ready to help you find the perfect solutions for your environmental and industrial needs.'}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300",
                      "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
                    )}
                  >
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                    {rtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </Link>
                  <Link
                    href="/products"
                    className={cn(
                      "inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300",
                      isDark 
                        ? "bg-white/10 text-white hover:bg-white/20"
                        : "bg-white text-[#0a1a4f] border border-[#0a1a4f]/10 hover:bg-[#f8faff] hover:shadow-md",
                    )}
                  >
                    {language === 'ar' ? 'تصفح منتجاتنا' : 'Browse Products'}
                  </Link>
                </div>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
