'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Brand Identity */}
        <Link href="/" className="nav-brand" onClick={closeMenu}>
          <img
            src="/assets/logos/devson-logo.png"
            alt="DEVSON Renewable Energy Private Limited"
            className="nav-logo"
          />
          <div className="nav-brand-text">
            <span className="nav-brand-name">DEVSON</span>
            <span className="nav-brand-sub">{t.brandSub}</span>
          </div>
        </Link>

        {/* Clean Modern Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'show' : ''}`} id="nav-links">
          <Link
            href="/"
            onClick={closeMenu}
            className={isActive('/') ? 'active-link' : ''}
          >
            <span>{t.home}</span>
          </Link>

          <Link
            href="/energy-needs"
            onClick={closeMenu}
            className={isActive('/energy-needs') ? 'active-link' : ''}
          >
            <span>{t.energyNeeds}</span>
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className={isActive('/about') ? 'active-link' : ''}
          >
            <span>{t.aboutUs}</span>
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className={isActive('/contact') ? 'active-link' : ''}
          >
            <span>{t.contactUs}</span>
          </Link>

          {/* Mobile-only CTA */}
          <Link
            href="/energy-needs#quotation"
            onClick={closeMenu}
            className="mobile-only-link nav-mobile-cta"
          >
            <span>⚡ {t.getQuote}</span>
          </Link>
        </div>

        {/* Actions: Compact Language Switcher & Get Quotation CTA */}
        <div className="nav-actions">
          {/* Compact Globe Language Toggle */}
          <button
            type="button"
            className="lang-icon-btn"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English (EN)'}
            title={language === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English (EN)'}
          >
            <svg
              className="lang-globe-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="lang-code-text">{language === 'en' ? 'EN' : 'हिन्दी'}</span>
          </button>

          {/* Primary Get Quotation CTA */}
          <Link
            className="nav-cta-contact desktop-only"
            href="/energy-needs#quotation"
            onClick={closeMenu}
            aria-label={t.getQuote}
          >
            <svg
              className="nav-contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <span>{t.getQuote}</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
