'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const HomeHighlightsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const hero = t.hero;
  const spotlights = t.heroSpotlight;

  const cardIcons = ['🏛️', '📋', '☀️', '📍'];
  const cardLinkTextsEn = ['Explore Subsidy Matrix →', 'Generate Proposal →', 'Hardware Standards →', 'Contact Our Team →'];
  const cardLinkTextsHi = ['सब्सिडी तालिका देखें →', 'प्रस्ताव तैयार करें →', 'तकनीकी मानक →', 'संपर्क करें →'];

  const spotlightImages = [
    {
      src: '/assets/spotlight-pm-surya-ghar.jpg',
      alt: 'PM Surya Ghar Muft Bijli Yojana Rooftop Solar Bihar',
    },
    {
      src: '/assets/spotlight-get-quotation.jpg',
      alt: 'Instant Customized Solar Proposal & Engineering Survey',
    },
    {
      src: '/assets/spotlight-almm-panels.jpg',
      alt: 'ALMM Certified Monocrystalline Solar PV Modules',
    },
    {
      src: '/assets/offices/rajgir-head-office.jpg',
      alt: 'DEVSON Renewable Energy Corporate Headquarters Rajgir & Field Office',
    },
  ];

  return (
    <section id="highlights" className="home-highlights-section">
      <div className="wrap">
        <div className="section-head text-center" style={{ textAlign: 'center', margin: '0 auto 36px' }}>
          <div className="sec-num" style={{ justifyContent: 'center' }}>
            <span className="sec-num-text">
              {language === 'en' ? 'KEY HIGHLIGHTS & CREDENTIALS' : 'मुख्य विशेषताएं एवं प्रमाण'}
            </span>
          </div>
          <h2 className="sec-heading">
            {language === 'en'
              ? 'Everything You Need for Clean Solar Adoption in Bihar'
              : 'बिहार में सोलर अपनाने के लिए आवश्यक हर जानकारी'}
          </h2>
          <p style={{ maxWidth: '780px', margin: '0 auto' }}>
            {language === 'en'
              ? 'From central and state government direct subsidies to certified Tier-1 equipment and on-ground field engineering support across Bihar.'
              : 'केंद्र एवं राज्य सरकार की सीधी सब्सिडी से लेकर प्रमाणित टियर-1 उपकरण एवं पूरे बिहार में ऑन-ग्राउंड तकनीकी सेवा।'}
          </p>
        </div>

        {/* Top Tier: 4 Key Metric Pillar Cards */}
        <div className="highlights-stats-bar reveal">
          <div className="h-stat-card">
            <div className="h-stat-num">{hero.stat1Num}</div>
            <div className="h-stat-lbl">{hero.stat1Lbl}</div>
            <span className="h-stat-sub">
              {language === 'en' ? 'Central DBT + Bihar State' : 'केंद्र डीबीटी + बिहार सरकार'}
            </span>
          </div>

          <div className="h-stat-card">
            <div className="h-stat-num">{hero.stat2Num}</div>
            <div className="h-stat-lbl">{hero.stat2Lbl}</div>
            <span className="h-stat-sub">
              {language === 'en' ? 'Residential & MSME Systems' : 'घरेलू एवं लघु उद्योग संयंत्र'}
            </span>
          </div>

          <div className="h-stat-card">
            <div className="h-stat-num">{hero.stat3Num}</div>
            <div className="h-stat-lbl">{hero.stat3Lbl}</div>
            <span className="h-stat-sub">
              {language === 'en' ? 'Zero Daytime Electricity Bill' : 'शून्य मासिक बिजली बिल'}
            </span>
          </div>

          <div className="h-stat-card">
            <div className="h-stat-num">{hero.stat4Num}</div>
            <div className="h-stat-lbl">{hero.stat4Lbl}</div>
            <span className="h-stat-sub">
              {language === 'en' ? 'Rajgir HQ & Nawada Office' : 'राजगीर मुख्यालय व नवादा शाखा'}
            </span>
          </div>
        </div>

        {/* Bottom Tier: 4 Interactive Spotlight Cards with Live Photographic Previews */}
        <div className="highlights-cards-grid reveal">
          {spotlights.map((card, idx) => (
            <Link key={idx} href={card.link} className="h-spotlight-card">
              <div className="h-card-img-wrap">
                <img
                  src={spotlightImages[idx].src}
                  alt={spotlightImages[idx].alt}
                  className="h-card-img"
                  loading="lazy"
                />
                <span className="h-card-tag-badge">{card.tag}</span>
              </div>
              <div className="h-card-body">
                <div className="h-card-title-row">
                  <span className="h-card-icon">{cardIcons[idx]}</span>
                  <h3 className="h-card-title">{card.title}</h3>
                </div>
                <p className="h-card-desc">{card.desc}</p>
                <div className="h-card-footer">
                  <span className="h-card-cta">
                    {language === 'en' ? cardLinkTextsEn[idx] : cardLinkTextsHi[idx]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
