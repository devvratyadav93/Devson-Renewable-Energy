'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const GovernmentSchemesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].govtSchemes;

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const schemes = [
    {
      id: 0,
      tag: t.scheme1Tag,
      title: t.scheme1Title,
      sub: t.scheme1Sub,
      desc: t.scheme1Desc,
      subsidy: t.scheme1Subsidy,
      icon: '☀️',
      ctaText: t.ctaCalculate,
      ctaLink: '/energy-needs#subsidy',
      pointsEn: [
        'Direct Benefit Transfer (DBT) credited directly into homeowner bank account',
        'Up to 300 units free monthly electricity with bidirectional net metering',
        'DEVSON handles 100% DISCOM paperwork and inspection liaison',
      ],
      pointsHi: [
        'सीधा डीबीटी (DBT) अनुदान उपभोक्ता के बैंक खाते में जमा',
        'बाय-डायरेक्शनल नेट-मीटरिंग द्वारा हर महीने 300 यूनिट तक मुफ्त बिजली',
        'देवसन द्वारा डिस्कॉम निरीक्षण व आवेदन की पूर्ण कागजी प्रक्रिया',
      ],
      themeClass: 'theme-gold',
    },
    {
      id: 1,
      tag: t.scheme2Tag,
      title: t.scheme2Title,
      sub: t.scheme2Sub,
      desc: t.scheme2Desc,
      subsidy: t.scheme2Subsidy,
      icon: '🏛️',
      ctaText: t.ctaCalculate,
      ctaLink: '/energy-needs#subsidy',
      pointsEn: [
        'Exclusive top-up subsidy provided by Government of Bihar (BREDA)',
        '₹10,000 for 1 kW and ₹20,000 extra for 2 kW and higher capacities',
        'Total combined savings up to ₹98,000 for Bihar residential homes',
      ],
      pointsHi: [
        'बिहार सरकार (BREDA) द्वारा प्रदत्त विशेष अतिरिक्त अनुदान',
        '1 kW पर ₹10,000 तथा 2 kW व अधिक पर ₹20,000 अतिरिक्त सब्सिडी',
        'बिहार के घरेलू उपभोक्ताओं के लिए ₹98,000 तक कुल सरकारी लाभ',
      ],
      themeClass: 'theme-state',
    },
    {
      id: 2,
      tag: t.scheme3Tag,
      title: t.scheme3Title,
      sub: t.scheme3Sub,
      desc: t.scheme3Desc,
      subsidy: t.scheme3Subsidy,
      icon: '🌾',
      ctaText: t.ctaQuotation,
      ctaLink: '/energy-needs#quotation',
      pointsEn: [
        'Replaces expensive diesel generator irrigation costs with clean daytime power',
        'Subsidized standalone & grid-tied solar pump sets (Component B & C)',
        'Proven agricultural installations across Nalanda, Nawada and South Bihar',
      ],
      pointsHi: [
        'महंगे डीजल पंपों के खर्च से मुक्ति, दिन में विश्वसनीय सिंचाई ऊर्जा',
        'सब्सिडी युक्त स्टैंडअलोन एवं ग्रिड-संबद्ध सोलर कृषि पंप (घटक बी व सी)',
        'नालंदा, नवादा एवं दक्षिण बिहार में प्रमाणित सफल कृषि संयंत्र',
      ],
      themeClass: 'theme-agri',
    },
    {
      id: 3,
      tag: t.scheme4Tag,
      title: t.scheme4Title,
      sub: t.scheme4Sub,
      desc: t.scheme4Desc,
      subsidy: t.scheme4Subsidy,
      icon: '🏢',
      ctaText: t.ctaQuotation,
      ctaLink: '/energy-needs#quotation',
      pointsEn: [
        'Accelerated Depreciation (40%) corporate tax write-off in Year 1',
        'Cut commercial electricity tariffs (₹8-10/unit) down to near-zero',
        'Surplus weekend power exported to NBPDCL / SBPDCL grid with net credits',
      ],
      pointsHi: [
        'वित्तीय वर्ष 1 में 40% त्वरित मूल्यह्रास (Accelerated Depreciation) कर लाभ',
        'व्यावसायिक बिजली दरों (₹8-10 प्रति यूनिट) को शून्य के निकट लाएं',
        'सप्ताहांत की अधिशेष बिजली एनबीपीडीसीएल / एसबीपीडीसीएल ग्रिड को निर्यात',
      ],
      themeClass: 'theme-msme',
    },
  ];

  // Auto-advance scheme every 4.5 seconds unless user hovers
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % schemes.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, schemes.length]);

  const current = schemes[activeIdx];

  return (
    <section id="schemes" className="govt-schemes-split-section">
      <div className="wrap">
        <div className="section-head text-center" style={{ textAlign: 'center', margin: '0 auto 36px' }}>
          <div className="sec-num" style={{ justifyContent: 'center' }}>
            <span className="sec-num-text">{t.badge}</span>
          </div>
          <h2 className="sec-heading">{t.title}</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>{t.subtitle}</p>
        </div>

        {/* 2-Column Split: Auto-Changing Schemes (Left) + Leadership Endorsement (Right) */}
        <div className="schemes-two-col-layout reveal">
          {/* LEFT COLUMN: Auto-Changing Schemes Showcase */}
          <div
            className="schemes-rotator-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Active Scheme Display Card */}
            <div className={`active-scheme-card ${current.themeClass}`}>
              <div className="scheme-card-top-bar">
                <span className="scheme-tag-pill">{current.tag}</span>
                <span className="scheme-step-indicator">
                  {language === 'en'
                    ? `Scheme ${activeIdx + 1} of ${schemes.length}`
                    : `योजना ${activeIdx + 1} / ${schemes.length}`}
                </span>
              </div>

              <div className="scheme-title-group">
                <span className="scheme-primary-icon">{current.icon}</span>
                <div>
                  <h3 className="scheme-card-title">{current.title}</h3>
                  <div className="scheme-card-sub">{current.sub}</div>
                </div>
              </div>

              <p className="scheme-card-desc">{current.desc}</p>

              {/* Subsidy Highlight Banner */}
              <div className="scheme-subsidy-highlight">
                <span className="subsidy-badge-icon">💰</span>
                <div>
                  <span className="subsidy-tag-label">
                    {language === 'en' ? 'Direct Subsidy Guarantee:' : 'प्रत्यक्ष सब्सिडी गारंटी:'}
                  </span>
                  <div className="subsidy-amount-text">{current.subsidy}</div>
                </div>
              </div>

              {/* Verified Checklist Points */}
              <div className="scheme-points-list">
                {(language === 'en' ? current.pointsEn : current.pointsHi).map((pt, i) => (
                  <div key={i} className="scheme-point-item">
                    <span className="point-bullet">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons & Manual Arrows */}
              <div className="scheme-card-footer">
                <Link href={current.ctaLink} className="btn-scheme-action">
                  {current.ctaText}
                </Link>

                <div className="scheme-controls-inline">
                  <button
                    type="button"
                    className="scheme-arrow-btn"
                    onClick={() =>
                      setActiveIdx((prev) => (prev - 1 + schemes.length) % schemes.length)
                    }
                    aria-label="Previous Scheme"
                  >
                    ←
                  </button>
                  <div className="scheme-dots">
                    {schemes.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`scheme-dot ${activeIdx === i ? 'active' : ''}`}
                        onClick={() => setActiveIdx(i)}
                        aria-label={`Go to scheme ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="scheme-arrow-btn"
                    onClick={() => setActiveIdx((prev) => (prev + 1) % schemes.length)}
                    aria-label="Next Scheme"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Official Leadership & National Solar Mission Photo Card */}
          <div className="schemes-leader-col">
            <div className="leader-endorsement-card">
              <div className="leader-photo-wrap">
                <img
                  src="/assets/pm-modi-solar.webp"
                  alt="Hon'ble Prime Minister Narendra Modi - PM Surya Ghar Muft Bijli Yojana"
                  className="leader-photo"
                />
                <div className="leader-badge-strip">
                  <span className="govt-emblem">🏛️</span>
                  <span>
                    {language === 'en'
                      ? 'NATIONAL SOLAR ROOFTOP INITIATIVE'
                      : 'राष्ट्रीय सौर ऊर्जा मिशन'}
                  </span>
                </div>
              </div>

              <div className="leader-content">
                <div className="leader-quote-tag">
                  {language === 'en'
                    ? '“Har Ghar Solar, Roshan Bihar”'
                    : '“हर घर सौर ऊर्जा, रोशन बिहार”'}
                </div>
                <h4 className="leader-headline">
                  {language === 'en'
                    ? 'PM Surya Ghar: Muft Bijli Yojana'
                    : 'पीएम सूर्य घर: मुफ्त बिजली योजना'}
                </h4>
                <p className="leader-desc">
                  {language === 'en'
                    ? 'A visionary national mission empowering 1 Crore Indian homes with up to 300 units of free clean solar electricity per month through direct bank subsidies.'
                    : '1 करोड़ भारतीय परिवारों को प्रति माह 300 यूनिट तक मुफ्त सौर ऊर्जा और प्रत्यक्ष बैंक सब्सिडी से सशक्त बनाने का ऐतिहासिक राष्ट्रीय संकल्प।'}
                </p>

                <div className="leader-highlights-grid">
                  <div className="lh-item">
                    <span className="lh-num">₹98,000</span>
                    <span className="lh-lbl">
                      {language === 'en' ? 'Max Total Subsidy (Central + Bihar)' : 'अधिकतम कुल सब्सिडी'}
                    </span>
                  </div>
                  <div className="lh-item">
                    <span className="lh-num">1 Crore</span>
                    <span className="lh-lbl">
                      {language === 'en' ? 'Households Targeted Nationally' : 'राष्ट्रीय लक्ष्य (परिवार)'}
                    </span>
                  </div>
                  <div className="lh-item">
                    <span className="lh-num">100%</span>
                    <span className="lh-lbl">
                      {language === 'en' ? 'Direct Bank Transfer (DBT)' : 'सीधा बैंक खाता हस्तांतरण'}
                    </span>
                  </div>
                  <div className="lh-item">
                    <span className="lh-num">Tier-1</span>
                    <span className="lh-lbl">
                      {language === 'en' ? 'ALMM Approved PV Modules' : 'प्रमाणित सोलर उपकरण'}
                    </span>
                  </div>
                </div>

                <div className="leader-compliance-pills">
                  <span className="comp-pill">✓ MNRE Compliant</span>
                  <span className="comp-pill">✓ BREDA Accredited</span>
                  <span className="comp-pill">✓ NBPDCL / SBPDCL Net-Metering</span>
                </div>

                <Link href="/energy-needs#subsidy" className="btn-leader-action">
                  {language === 'en'
                    ? 'Check Your Rooftop Subsidy Eligibility →'
                    : 'अपनी सब्सिडी पात्रता जांचें →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
