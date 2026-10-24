'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const FaqSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;

  const [activeFilter, setActiveFilter] = useState<'all' | 'subsidy' | 'epc'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const filteredItems = t.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-badge">{t.badge}</div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-sub" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="faq-filter-wrap">
          <button
            type="button"
            className={`faq-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter('all');
              setOpenIndex(0);
            }}
          >
            {t.tabAll || 'All Questions'}
          </button>
          <button
            type="button"
            className={`faq-filter-btn ${activeFilter === 'subsidy' ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter('subsidy');
              setOpenIndex(0);
            }}
          >
            ☀️ {t.tabSubsidy || 'Rooftop & Subsidies'}
          </button>
          <button
            type="button"
            className={`faq-filter-btn ${activeFilter === 'epc' ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter('epc');
              setOpenIndex(0);
            }}
          >
            ⚡ {t.tabEpc || 'Solar Systems & Commercial'}
          </button>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-container">
          {filteredItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${item.category}-${index}`}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">
                    <span className="faq-cat-tag">
                      {item.category === 'subsidy' ? 'Rooftop' : 'EPC'}
                    </span>
                    {item.q}
                  </span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div className={`faq-answer-collapse ${isOpen ? 'show' : ''}`}>
                  <div className="faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Helpline Banner */}
        <div className="faq-footer-card">
          <div className="faq-footer-text">
            <h4>{language === 'en' ? 'Have a specific question not listed here?' : 'क्या आपका कोई विशेष प्रश्न है जो यहाँ सूचीबद्ध नहीं है?'}</h4>
            <p>
              {language === 'en'
                ? 'Speak directly with DEVSON renewable energy engineers for custom rooftop or utility feasibility.'
                : 'कस्टम रूफटॉप या यूटिलिटी फिजिबिलिटी के लिए सीधे देवसन रिन्यूएबल एनर्जी इंजीनियरों से बात करें।'}
            </p>
          </div>
          <div className="faq-footer-actions">
            <a
              href="https://wa.me/919296950833?text=Hello%20Devson%20Energy,%20I%20have%20a%20question%20regarding%20solar%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="faq-cta-btn whatsapp"
            >
              <span>💬 {language === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर पूछें'}</span>
            </a>
            <a href="tel:+919973050833" className="faq-cta-btn call">
              <span>📞 +91 99730 50833</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
