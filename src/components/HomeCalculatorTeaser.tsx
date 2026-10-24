'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const HomeCalculatorTeaser: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].homeCalculatorTeaser;

  return (
    <section className="home-calculator-section">
      <div className="wrap">
        <div className="calculator-teaser-showcase reveal">
          {/* Left Column: Value Proposition & Direct Navigation */}
          <div className="teaser-content-col">
            <span className="teaser-pill-badge">{t.badge}</span>
            <h2 className="teaser-heading">{t.title}</h2>
            <p className="teaser-subtext">{t.subtitle}</p>

            <div className="teaser-benefits-list">
              <div className="t-benefit-item">
                <span className="t-check-icon">✓</span>
                <span>{t.benefit1}</span>
              </div>
              <div className="t-benefit-item">
                <span className="t-check-icon">✓</span>
                <span>{t.benefit2}</span>
              </div>
              <div className="t-benefit-item">
                <span className="t-check-icon">✓</span>
                <span>{t.benefit3}</span>
              </div>
            </div>

            <div className="teaser-actions-row">
              <Link href="/energy-needs" className="btn-teaser-primary">
                {t.btnFullCalc}
              </Link>
              <Link href="/energy-needs#quotation" className="btn-teaser-secondary">
                {t.btnQuote}
              </Link>
            </div>
          </div>

          {/* Right Column: Reuploaded Official 30 Lakh Homes Milestone Campaign Photo */}
          <div className="teaser-poster-col">
            <a
              href="/assets/pm-surya-ghar-30-lakh-homes.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="milestone-poster-frame"
              title={
                language === 'en'
                  ? 'Official National Campaign: 30 Lakh Homes Illuminated (Click to View Full-Size)'
                  : 'राष्ट्रीय अभियान: 30 लाख घर रोशन (बड़ा देखने के लिए क्लिक करें)'
              }
            >
              <img
                src="/assets/pm-surya-ghar-30-lakh-homes.jpg"
                alt="30 Lakh Homes Illuminated Under PM Surya Ghar Muft Bijli Yojana"
                className="milestone-poster-img"
                loading="lazy"
              />
              <div className="milestone-hover-badge">
                <span className="badge-sparkle">★</span>
                <span>
                  {language === 'en'
                    ? '30 Lakh+ Homes Illuminated Under PM Surya Ghar'
                    : 'पीएम सूर्य घर: 30 लाख से अधिक घर रोशन'}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
