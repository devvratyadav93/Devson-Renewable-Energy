'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const CoverPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="cover-page">
      <div className="cv-top">
        <img
          src="/assets/logos/devson-logo.png"
          alt="DEVSON Renewable Energy Private Limited"
          className="cv-logo"
        />
        <div className="cv-top-right">
          <div className="cv-company-name">DEVSON Renewable Energy Private Limited</div>
          <div className="cv-credentials">
            CIN: U35105BR2026PTC087766 &nbsp;·&nbsp; GSTIN: 10AANCD0450H1Z5 &nbsp;·&nbsp; Bihar, India
          </div>
        </div>
      </div>
      <div className="cv-main">
        <div className="cv-eyebrow">
          {language === 'en'
            ? 'Turnkey Solar & Renewable Energy Proposal'
            : 'टर्नकी सोलर एवं नवीकरणीय ऊर्जा प्रस्ताव'}
        </div>
        <h1 className="cv-title">
          {language === 'en'
            ? '12,500 KWp DC Grid-Connected Ground Mount Turnkey Solar Project'
            : '12,500 किलोवाट डीसी ग्रिड-कनेक्टेड ग्राउंड माउंट टर्नकी सोलर प्रोजेक्ट'}
        </h1>
        <div className="cv-divider"></div>
        <p className="cv-subtitle">
          {language === 'en'
            ? 'A formal techno-commercial proposal prepared by DEVSON Renewable Energy Private Limited — Powering Future With Green Energy.'
            : 'देवसन रिन्यूएबल एनर्जी प्राइवेट लिमिटेड द्वारा प्रस्तुत औपचारिक तकनीकी-व्यावसायिक प्रस्ताव — हरित ऊर्जा से उज्ज्वल भविष्य।'}
        </p>
      </div>
      <div className="cv-bottom">
        <div className="cv-meta-grid">
          <div className="cv-meta-item">
            <div className="cv-meta-label">{language === 'en' ? 'Prepared For' : 'प्रस्तावित ग्राहक'}</div>
            <div className="cv-meta-value">D K Builders</div>
          </div>
          <div className="cv-meta-item">
            <div className="cv-meta-label">{language === 'en' ? 'Corporate Office' : 'कॉर्पोरेट कार्यालय'}</div>
            <div className="cv-meta-value">Rajgir, Nalanda, Bihar</div>
          </div>
          <div className="cv-meta-item">
            <div className="cv-meta-label">{language === 'en' ? 'Offer Date' : 'प्रस्ताव तिथि'}</div>
            <div className="cv-meta-value">22 October 2026</div>
          </div>
          <div className="cv-meta-item">
            <div className="cv-meta-label">{language === 'en' ? 'Project Scheme' : 'योजना'}</div>
            <div className="cv-meta-value">{language === 'en' ? 'Open Access / PM-KUSUM' : 'ओपन एक्सेस / पीएम-कुसुम'}</div>
          </div>
        </div>
        <div className="cv-stats-strip">
          <div className="cv-stat-item">
            <span className="cv-stat-num">{language === 'en' ? '25 yrs' : '25 वर्ष'}</span>
            <span className="cv-stat-lbl">{language === 'en' ? 'Free Electricity Guarantee' : 'मुफ्त बिजली वारंटी'}</span>
          </div>
          <div className="cv-stat-item">
            <span className="cv-stat-num">1 kW - 10+ MW</span>
            <span className="cv-stat-lbl">{language === 'en' ? 'Rooftop to Utility EPC' : 'रूफटॉप से उपयोगिता पैमाने तक'}</span>
          </div>
          <div className="cv-stat-item">
            <span className="cv-stat-num">Tier-1</span>
            <span className="cv-stat-lbl">{language === 'en' ? 'BOM & High-Efficiency Tech' : 'उच्च दक्षता तकनीक एवं बीओएम'}</span>
          </div>
          <div className="cv-stat-item">
            <span className="cv-stat-num">100%</span>
            <span className="cv-stat-lbl">{language === 'en' ? 'Concept to Commissioning' : 'अवधारणा से कमीशनिंग तक'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
