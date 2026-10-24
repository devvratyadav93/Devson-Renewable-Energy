'use client';

import React, { useEffect } from 'react';
import { EnergyNeedsSection } from '@/components/EnergyNeedsSection';
import { RooftopSubsidySection } from '@/components/RooftopSubsidySection';
import { DetailedSchemesSection } from '@/components/DetailedSchemesSection';
import { GetQuotationSection } from '@/components/GetQuotationSection';
import { useLanguage } from '@/context/LanguageContext';

export default function EnergyNeedsPage() {
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
    <div className="subpage-wrapper">
      {/* Subpage Banner Header */}
      <header className="subpage-banner">
        <div className="wrap">
          <span className="subpage-tag">
            {language === 'en' ? 'ENERGY ESTIMATOR & SCHEMES' : 'ऊर्जा आकलन एवं सरकारी योजनाएं'}
          </span>
          <h1 className="subpage-title">
            {language === 'en'
              ? 'Calculate Your Energy Needs & DEVSON Solar Schemes'
              : 'अपनी सौर ऊर्जा आवश्यकताओं की गणना करें एवं देवसन सोलर योजनाएं'}
          </h1>
          <p className="subpage-desc">
            {language === 'en'
              ? 'Estimate your daily appliance consumption, explore PM Surya Ghar & Bihar State subsidies, review the official 1–10 kW pricing schedule, and generate an instant quotation.'
              : 'दैनिक घरेलू उपकरणों की खपत का आकलन करें, पीएम सूर्य घर एवं बिहार सरकार सब्सिडी देखें, अधिकृत 1–10 kW मूल्य तालिका समझें और तुरंत कोटेशन प्राप्त करें।'}
          </p>
        </div>
      </header>

      {/* Part 1: Comprehensive Government Solar Schemes Guide with Photo References */}
      <DetailedSchemesSection />

      {/* Part 2: Appliance Load & Capacity Estimator */}
      <EnergyNeedsSection />

      {/* Part 3: DEVSON Subsidy & Pricing Calculator (with scheme tabs) */}
      <RooftopSubsidySection />

      {/* Part 4: Interactive Get Quotation Form (with email notification) */}
      <GetQuotationSection />
    </div>
  );
}
