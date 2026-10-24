'use client';

import React, { useEffect } from 'react';
import { AboutSection } from '@/components/AboutSection';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') return;

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
      {/* Subpage Banner */}
      <header className="subpage-banner">
        <div className="wrap">
          <span className="subpage-tag">
            {language === 'en' ? 'CORPORATE PROFILE & CREDENTIALS' : 'कंपनी परिचय एवं वैधानिक विवरण'}
          </span>
          <h1 className="subpage-title">
            {language === 'en'
              ? 'About DEVSON Renewable Energy Private Limited'
              : 'देवसन रिन्यूएबल एनर्जी प्राइवेट लिमिटेड के बारे में'}
          </h1>
          <p className="subpage-desc">
            {language === 'en'
              ? 'A registered clean energy startup incorporated in Bihar, committed to driving honest, high-yield rooftop solar adoption with full government subsidies and local accountability.'
              : 'बिहार में निगमित एक स्वच्छ ऊर्जा स्टार्टअप, जो पूरी सरकारी सब्सिडी और स्थानीय जवाबदेही के साथ ईमानदार, टिकाऊ रूफटॉप सोलर स्थापना के लिए समर्पित है।'}
          </p>
        </div>
      </header>

      {/* Corporate Profile & Leadership */}
      <AboutSection />
    </div>
  );
}
