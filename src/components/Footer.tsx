'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="closing" id="footer">
      <div className="wrap closing-grid">
        {/* Column 1: Brand Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <img
              src="/assets/logos/devson-logo.png"
              alt="DEVSON Renewable Energy Private Limited"
              className="footer-logo"
              style={{ width: '56px', height: '56px', objectFit: 'contain' }}
            />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--white)', letterSpacing: '0.04em', lineHeight: 1.1 }}>
                DEVSON
              </div>
              <div style={{ fontSize: '0.74rem', letterSpacing: '0.04em', fontWeight: 500, color: '#FFFFFF', marginTop: '3px' }}>
                {t.brandSub}
              </div>
            </div>
          </div>
          <p>{t.brandDesc}</p>
          <p style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--amber)', fontWeight: 600 }}>
            {t.motto}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <div className="closing-col-label">{t.quickLinksTitle}</div>
          <ul className="footer-nav-list">
            <li>
              <Link href="/">{t.linkHome}</Link>
            </li>
            <li>
              <Link href="/energy-needs">{t.linkEnergyNeeds}</Link>
            </li>
            <li>
              <Link href="/about">{t.linkAbout}</Link>
            </li>
            <li>
              <Link href="/contact">{t.linkContact}</Link>
            </li>
            <li>
              <a href="/assets/devson-flyer.png" download="DEVSON-Pricing-Template.png" style={{ color: 'var(--amber)' }}>
                {t.linkDownload}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Bihar Offices */}
        <div>
          <div className="closing-col-label">{t.officesTitle}</div>
          <p style={{ fontWeight: 600, color: 'var(--white)', marginBottom: '4px' }}>{t.corpOfficeLabel}</p>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>{t.corpOfficeValue}</p>
          <div style={{ marginTop: '6px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.9rem' }}>📍</span>
            <span style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.7)' }}>GPS:</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=25.039889,85.41975"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: 700, fontSize: '0.82rem' }}
              title="Open Devson Head Office in Google Maps"
            >
              25°02'23.6"N 85°25'11.1"E
            </a>
          </div>
          <p style={{ fontWeight: 600, color: 'var(--white)', marginTop: '8px', marginBottom: '4px' }}>{t.regOfficeLabel}</p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>{t.regOfficeValue}</p>
        </div>

        {/* Column 4: Contact & Statutory */}
        <div>
          <div className="closing-col-label">{t.contactTitle}</div>
          <p>
            <a href="mailto:devson.energy@gmail.com" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: 600 }}>
              ✉ devson.energy@gmail.com
            </a>
          </p>
          <p style={{ marginTop: '8px' }}>
            📞 <a href="tel:+919296950833" style={{ color: 'inherit', textDecoration: 'none' }}>+91 92969 50833</a> /{' '}
            <a href="tel:+919973050833" style={{ color: 'inherit', textDecoration: 'none' }}>99730 50833</a>
          </p>
          <p style={{ marginTop: '4px' }}>
            💬 <a href="https://wa.me/919296950833" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>
              {t.whatsappLabel}
            </a>
          </p>
          <div style={{ marginTop: '12px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
            <strong>{t.cinLabel}</strong> U35105BR2026PTC087766<br />
            <strong>{t.gstinLabel}</strong> 10AANCD0450H1Z5<br />
            <strong>{t.panLabel}</strong> AANCD0450H &nbsp;|&nbsp; <strong>{t.tanLabel}</strong> PTND07707A<br />
            <strong>{t.bankLabel}</strong>
          </div>
        </div>
      </div>

      <div className="wrap closing-bottom">
        <div>{t.rightsReserved}</div>
        <div style={{ color: 'var(--amber)' }}>{t.guaranteeNotice}</div>
      </div>
    </footer>
  );
};
