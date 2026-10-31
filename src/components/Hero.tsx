'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <header className="hero" id="home">
      <div className="hero-video-wrap screen-only reveal">
        <img
          src="/assets/solar-hero-loop.gif"
          alt="DEVSON Clean Solar Energy Powering Future"
          className="hero-video-player"
        />
        <div className="hero-video-overlay"></div>
      </div>
      <div className="hero-inner">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>
          {t.headlinePrefix} <em>{t.headlineEmphasis}</em>
        </h1>
        <p className="hero-sub">{t.subtitle}</p>
        <div className="hero-meta">
          <div>
            <div className="hm-label">{t.preparedForLabel}</div>
            <div className="hm-value" style={{ color: 'var(--amber)', fontWeight: 700 }}>
              {t.preparedForValue}
            </div>
          </div>
          <div>
            <div className="hm-label">{t.locationLabel}</div>
            <div className="hm-value">{t.locationValue}</div>
          </div>
          <div>
            <div className="hm-label">{t.offerDateLabel}</div>
            <div className="hm-value">{t.offerDateValue}</div>
          </div>
          <div>
            <div className="hm-label">{t.schemeLabel}</div>
            <div className="hm-value">{t.schemeValue}</div>
          </div>
        </div>

        {/* Direct Action CTAs */}
        <div className="hero-cta-row">
          <Link href="/energy-needs#subsidy" className="btn-hero-primary">
            ⚡ {language === 'en' ? 'Explore 1–10 kW Subsidy Schedule →' : '1–10 kW सब्सिडी तालिका देखें →'}
          </Link>
          <Link href="/energy-needs#quotation" className="btn-hero-secondary">
            📋 {language === 'en' ? 'Get Instant Quotation' : 'कोटेशन प्राप्त करें'}
          </Link>
        </div>
      </div>
    </header>
  );
};
