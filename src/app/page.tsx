'use client';

import React, { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { HomeHighlightsSection } from '@/components/HomeHighlightsSection';
import { GovernmentSchemesSection } from '@/components/GovernmentSchemesSection';
import { HomeCalculatorTeaser } from '@/components/HomeCalculatorTeaser';
import { TemplateDownloadCard } from '@/components/TemplateDownloadCard';
import { TrackRecordSection } from '@/components/TrackRecordSection';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Scroll reveal observer
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              entry.target.classList.remove('animate-in');
            }
          });
        },
        { threshold: 0.05, rootMargin: '100px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          el.classList.add('animate-in');
          observer?.observe(el);
        } else {
          el.classList.add('is-visible');
        }
      });
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Highlights & Spotlight Section (just below Hero in Home only) */}
      <HomeHighlightsSection />

      {/* 3. Flagship Government Solar Schemes (PM Surya Ghar, Bihar Subsidy, PM-KUSUM, MSME) */}
      <GovernmentSchemesSection />

      {/* 4. Interactive Quick Sizing & Subsidy Estimator Showcase */}
      <HomeCalculatorTeaser />

      {/* 5. Official DEVSON Pricing Template Download */}
      <TemplateDownloadCard />

      {/* 6. Track Record, Client Logos Marquee & Commissioned Projects */}
      <TrackRecordSection />
    </>
  );
}
