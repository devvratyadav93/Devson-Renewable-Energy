'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const TemplateDownloadCard: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].templateDownload;

  return (
    <section className="download-template-section">
      <div className="wrap">
        <div className="dossier-document-card reveal">
          {/* Top Security Banner */}
          <div className="dossier-gold-strip">
            <div className="dossier-stamp">
              <span className="stamp-icon">🛡️</span>
              <span className="stamp-text">
                {language === 'en'
                  ? 'OFFICIAL BIHAR PRICING SCHEDULE · 2026 EDITION'
                  : 'आधिकारिक बिहार सोलर मूल्य तालिका · 2026 संस्करण'}
              </span>
            </div>
            <div className="dossier-meta-id">DEVSON-SCH-2026-BR</div>
          </div>

          <div className="dossier-grid">
            {/* Left Content Column (Streamlined & Concise) */}
            <div className="dossier-content-col">
              <span className="dossier-badge-pill">{t.badge}</span>
              <h3 className="dossier-title">{t.title}</h3>
              <p className="dossier-desc">
                {language === 'en'
                  ? 'Comprehensive 1 kW to 10 kW turnkey solar pricing matrix with combined Central DBT and Bihar State subsidy schedules.'
                  : '1 kW से 10 kW संपूर्ण रूफटॉप सोलर मूल्य तालिका, केंद्रीय डीबीटी एवं बिहार सरकार सब्सिडी विवरण सहित।'}
              </p>

              {/* Verified Points List (Reduced & Focused) */}
              <div className="dossier-checklist">
                <div className="dossier-check-item">
                  <span className="dossier-bullet">✓</span>
                  <span>
                    {language === 'en'
                      ? 'Approved 1 kW–10 kW Turnkey Price Matrix & Net Costs'
                      : 'अनुमोदित 1 kW से 10 kW टर्नकी मूल्य एवं शुद्ध लागत'}
                  </span>
                </div>
                <div className="dossier-check-item">
                  <span className="dossier-bullet">✓</span>
                  <span>
                    {language === 'en'
                      ? 'PM Surya Ghar Central + Bihar State Additional Subsidy'
                      : 'पीएम सूर्य घर केंद्रीय सब्सिडी + बिहार राज्य अतिरिक्त अनुदान'}
                  </span>
                </div>
                <div className="dossier-check-item">
                  <span className="dossier-bullet">✓</span>
                  <span>
                    {language === 'en'
                      ? 'DISCOM Net-Metering & Single-Window DBT Guidelines'
                      : 'डिस्कॉम नेट-मीटरिंग एवं सिंगल-विंडो डीबीटी प्रक्रिया'}
                  </span>
                </div>
              </div>

              {/* Download Action & Quick Info */}
              <div className="dossier-action-wrap">
                <a
                  href="/assets/devson-flyer.png"
                  download="DEVSON-Solar-Pricing-Schedule-Bihar.png"
                  className="btn-dossier-download"
                  aria-label={t.btnDownload}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{t.btnDownload}</span>
                </a>
              </div>
              <span className="dossier-file-hint">
                📄 {language === 'en' ? 'Direct PNG / PDF Document · 2.3 MB · Instant Access' : 'उच्च-गुणवत्ता दस्तावेज़ · 2.3 MB · सीधा डाउनलोड'}
              </span>
            </div>

            {/* Right Flyer Mockup Column (Enlarged & Prominent) */}
            <div className="dossier-preview-col">
              <a
                href="/assets/devson-flyer.png"
                target="_blank"
                rel="noopener noreferrer"
                className="dossier-preview-frame"
                title={language === 'en' ? 'Click to View Full-Size Flyer' : 'पूर्ण फ्लायर देखने के लिए क्लिक करें'}
              >
                <img
                  src="/assets/devson-flyer.png"
                  alt="DEVSON Official Pricing Schedule & Flyer"
                  className="dossier-flyer-img"
                  loading="lazy"
                />
                <div className="dossier-hover-hint">
                  <span className="hint-icon">🔍</span>
                  <span>{language === 'en' ? 'Click to View Full Resolution' : 'बड़ा देखने के लिए क्लिक करें'}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
