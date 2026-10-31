'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const coreValues = [
    {
      num: '01',
      title: t.val1,
      image: '/assets/values/transparency.jpg',
      descEn: 'Transparent pricing schedules, clear subsidy breakdowns, and zero hidden costs.',
      descHi: 'पारदर्शी मूल्य निर्धारण, स्पष्ट सब्सिडी विवरण और कोई छुपा हुआ शुल्क नहीं।',
    },
    {
      num: '02',
      title: t.val2,
      image: '/assets/values/hardware.jpg',
      descEn: 'Strictly Tier-1 ALMM mono PERC modules & certified European/Indian inverters.',
      descHi: 'केवल टियर-1 एएलएमएम मोनो पर्क पैनल और प्रमाणित उच्च दक्षता वाले इनवर्टर।',
    },
    {
      num: '03',
      title: t.val3,
      image: '/assets/values/customer.jpg',
      descEn: 'Dedicated DISCOM liaisons, rapid paperwork, and lifelong client support.',
      descHi: 'समर्पित डिस्कॉम समन्वय, त्वरित कागजी कार्रवाई और आजीवन ग्राहक सेवा।',
    },
    {
      num: '04',
      title: t.val4,
      image: '/assets/offices/rajgir-head-office.jpg',
      descEn: 'Permanent Rajgir & Nawada offices with responsive local Bihar engineering.',
      descHi: 'राजगीर व नवादा में स्थायी कार्यालय और तत्पर स्थानीय इंजीनियरिंग सहायता।',
    },
    {
      num: '05',
      title: t.val5,
      image: '/assets/values/sustainability.jpg',
      descEn: 'Decarbonizing Bihar through clean, reliable solar energy for every home & farm.',
      descHi: 'हर घर, दुकान व खेत तक स्वच्छ सौर ऊर्जा पहुंचाकर बिहार का हरित विकास।',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head reveal">
          <div className="sec-num">
            <span className="sec-num-text">{t.badge}</span>
          </div>
          <h2 className="sec-heading">{t.heading}</h2>
          <p>{t.subheading}</p>
        </div>

        {/* Corporate Profile Split Grid */}
        <div className="info-grid reveal">
          <div>
            <p className="lede">
              <strong>{t.lede1}</strong> {t.lede2}
            </p>
            <div className="pillar-list">
              <div className="pillar">
                <div className="ic">01</div>
                <div>
                  <strong>{t.pillar1Title}</strong>
                  <span>{t.pillar1Desc}</span>
                </div>
              </div>
              <div className="pillar">
                <div className="ic">02</div>
                <div>
                  <strong>{t.pillar2Title}</strong>
                  <span>{t.pillar2Desc}</span>
                </div>
              </div>
              <div className="pillar">
                <div className="ic">03</div>
                <div>
                  <strong>{t.pillar3Title}</strong>
                  <span>{t.pillar3Desc}</span>
                </div>
              </div>
              <div className="pillar">
                <div className="ic">04</div>
                <div>
                  <strong>{t.pillar4Title}</strong>
                  <span>{t.pillar4Desc}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Corporate Credentials Dossier Card */}
            <div className="summary-card">
              <div className="summary-card-head">
                <span className="sc-head-icon">🏛️</span>
                <span>{t.cardHead}</span>
              </div>
              <div className="summary-rows-container">
                <div className="summary-row">
                  <span className="k">{t.row1Label}</span>
                  <span className="v highlight-company-name">DEVSON Renewable Energy Private Limited</span>
                </div>
                <div className="summary-row">
                  <span className="k">{t.row2Label}</span>
                  <span className="v">U35105BR2026PTC087766</span>
                </div>
                <div className="summary-row">
                  <span className="k">{t.row3Label}</span>
                  <span className="v">10AANCD0450H1Z5</span>
                </div>
                <div className="summary-row">
                  <span className="k">{t.row4Label}</span>
                  <span className="v">AANCD0450H / PTND07707A</span>
                </div>
                <div className="summary-row">
                  <span className="k">{t.row5Label}</span>
                  <span className="v">SBIN0003499 (SBI Rajgir)</span>
                </div>
                <div className="summary-row">
                  <span className="k">{t.row6Label}</span>
                  <span className="v">{t.row6Value}</span>
                </div>
                <div className="summary-row">
                  <span className="k">{t.row7Label}</span>
                  <span className="v">{t.row7Value}</span>
                </div>
                <div className="summary-row">
                  <span className="k">{t.row8Label}</span>
                  <span className="v highlight-email">devson.energy@gmail.com</span>
                </div>
              </div>
              <div className="summary-card-footer">
                <span className="sc-badge-chip">✓ MCA Registered</span>
                <span className="sc-badge-chip">✓ GSTIN Verified</span>
                <span className="sc-badge-chip">✓ NBPDCL / SBPDCL Liaison</span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Trust & Compliance Strip (Clean Light B2B Layout) */}
        <div className="trust-compliance-strip reveal">
          <div className="tcs-item">
            <span className="tcs-icon">🏛️</span>
            <div>
              <strong className="tcs-title">
                {language === 'en' ? 'Bihar Registered Startup' : 'बिहार पंजीकृत स्टार्टअप'}
              </strong>
              <span className="tcs-sub">CIN: U35105BR2026PTC087766</span>
            </div>
          </div>
          <div className="tcs-item">
            <span className="tcs-icon">☀️</span>
            <div>
              <strong className="tcs-title">
                {language === 'en' ? 'PM Surya Ghar & BREDA' : 'पीएम सूर्य घर एवं ब्रेडा'}
              </strong>
              <span className="tcs-sub">
                {language === 'en' ? 'Up to ₹98,000 Direct Subsidy' : '₹98,000 तक सीधा अनुदान'}
              </span>
            </div>
          </div>
          <div className="tcs-item">
            <span className="tcs-icon">🔌</span>
            <div>
              <strong className="tcs-title">
                {language === 'en' ? 'DISCOM Net-Metering' : 'डिस्कॉम नेट-मीटरिंग'}
              </strong>
              <span className="tcs-sub">NBPDCL &amp; SBPDCL Liaison</span>
            </div>
          </div>
          <div className="tcs-item">
            <span className="tcs-icon">🛡️</span>
            <div>
              <strong className="tcs-title">
                {language === 'en' ? 'Tier-1 ALMM Panels' : 'टियर-1 प्रमाणित उपकरण'}
              </strong>
              <span className="tcs-sub">
                {language === 'en' ? '25-Year Linear Warranty' : '25 वर्ष की परफॉर्मेंस वारंटी'}
              </span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid (Light Luxury Cards) */}
        <div className="vm-grid reveal">
          <div className="vm-card vision">
            <div className="vm-card-label">
              <span>🎯</span>
              <span>{t.visionLabel}</span>
            </div>
            <div className="vm-card-head">{t.visionHead}</div>
            <p className="vm-card-text">{t.visionText}</p>
          </div>
          <div className="vm-card mission">
            <div className="vm-card-label">
              <span>⚡</span>
              <span>{t.missionLabel}</span>
            </div>
            <div className="vm-card-head">{t.missionHead}</div>
            <p className="vm-card-text">{t.missionText}</p>
          </div>
        </div>

        {/* Core Values with Photographic Reference Cards */}
        <div className="core-values-wrap reveal">
          <div className="cv-strip-label">{t.valuesLabel}</div>
          <div className="cv-grid">
            {coreValues.map((val) => (
              <div key={val.num} className="cv-photo-card">
                <div className="cv-photo-wrap">
                  <img src={val.image} alt={val.title} className="cv-photo" />
                  <span className="cv-step-pill">{val.num}</span>
                </div>
                <div className="cv-body">
                  <h5>{val.title}</h5>
                  <p>{language === 'en' ? val.descEn : val.descHi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Animated Solar Showcase (Light Theme) */}
        <div className="about-animation-showcase screen-only reveal">
          <div className="about-anim-card">
            <div className="about-anim-media">
              <img
                src="/assets/solar-energy-animation.gif"
                alt="DEVSON Clean Solar Energy Generation Architecture"
                className="about-anim-img"
              />
            </div>
            <div className="about-anim-info">
              <div className="about-anim-badge">
                <span className="live-pulse-dot"></span>
                <span>{language === 'en' ? 'CLEAN ENERGY ARCHITECTURE' : 'हरित ऊर्जा उत्पादन तकनीक'}</span>
              </div>
              <h3 className="about-anim-title">
                {language === 'en'
                  ? 'Continuous Solar Energy Harnessing & Grid Transmission'
                  : 'निरंतर सौर ऊर्जा संचयन एवं ग्रिड संचरण'}
              </h3>
              <p className="about-anim-desc">
                {language === 'en'
                  ? 'DEVSON systems are engineered with high-efficiency Tier-1 monocrystalline PV cells, smart string inverters, and DISCOM-certified bi-directional net-metering — ensuring maximum kilowatt-hour yield per square foot across Bihar.'
                  : 'देवसन के सौर संयंत्र उच्च दक्षता वाले टियर-1 मोनोक्रिस्टलाइन पीवी सेल, आधुनिक स्मार्ट इनवर्टर एवं डिस्कॉम अधिकृत बाई-डायरेक्शनल नेट-मीटरिंग तकनीक से सुसज्जित हैं — जो बिहार में अधिकतम ऊर्जा उत्पादन सुनिश्चित करते हैं।'}
              </p>
              <div className="about-anim-specs">
                <div className="spec-pill">
                  <strong>30+ Yrs</strong> {language === 'en' ? 'Linear Yield' : 'उत्पादन जीवनकाल'}
                </div>
                <div className="spec-pill">
                  <strong>99.2%</strong> {language === 'en' ? 'Inverter Efficiency' : 'इनवर्टर दक्षता'}
                </div>
                <div className="spec-pill">
                  <strong>MNRE &amp; BREDA</strong> {language === 'en' ? 'Approved' : 'अनुमोदित'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
