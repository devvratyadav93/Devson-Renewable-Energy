'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export const FloatingDock: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useLanguage();

  const handleJump = (hash: string) => {
    if (pathname === '/energy-needs') {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    router.push(`/energy-needs#${hash}`);
  };

  return (
    <>
      {/* Right Edge Action Widgets (Waaree Style) */}
      <div className="waaree-side-dock" aria-label="Quick Actions">
        {/* Quick Calculator Jump */}
        <button
          type="button"
          className="dock-item-btn calc-btn"
          onClick={() => handleJump('subsidy')}
          title={language === 'en' ? 'Subsidy Calculator' : 'सब्सिडी कैलकुलेटर'}
          aria-label={language === 'en' ? 'Subsidy Calculator' : 'सब्सिडी कैलकुलेटर'}
        >
          <svg
            className="dock-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="16" y1="14" x2="16" y2="18" />
            <path d="M16 10h.01" />
            <path d="M12 10h.01" />
            <path d="M8 10h.01" />
            <path d="M12 14h.01" />
            <path d="M8 14h.01" />
            <path d="M12 18h.01" />
            <path d="M8 18h.01" />
          </svg>
          <span className="dock-tooltip">
            {language === 'en' ? 'Solar Subsidy Calculator' : 'सोलर सब्सिडी कैलकुलेटर'}
          </span>
        </button>

        {/* Quick Quotation Form Jump */}
        <button
          type="button"
          className="dock-item-btn quote-btn"
          onClick={() => handleJump('quotation')}
          title={language === 'en' ? 'Get Instant Quotation' : 'तुरंत कोटेशन प्राप्त करें'}
          aria-label={language === 'en' ? 'Get Instant Quotation' : 'तुरंत कोटेशन प्राप्त करें'}
        >
          <svg
            className="dock-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="dock-tooltip">
            {language === 'en' ? 'Get Instant Quotation' : 'तुरंत कोटेशन प्राप्त करें'}
          </span>
        </button>
      </div>

      {/* Floating Bottom-Right WhatsApp Bubble */}
      <a
        href="https://wa.me/919296950833?text=Hello%20DEVSON%20Renewable%20Energy,%20I%20am%20interested%20in%20PM%20Surya%20Ghar%20solar%20rooftop%20in%20Bihar."
        target="_blank"
        rel="noopener noreferrer"
        className="waaree-whatsapp-bubble"
        aria-label={language === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर बात करें'}
        title={language === 'en' ? 'Chat on WhatsApp: +91 92969 50833' : 'व्हाट्सएप पर बात करें: +91 92969 50833'}
      >
        <svg
          className="whatsapp-icon-svg"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.668.747 5.165 2.043 7.288L2.094 29.5a1 1 0 001.218 1.218l6.212-1.949A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.455 11.455 0 01-5.836-1.597l-.423-.251-4.329 1.359 1.359-4.329-.251-.423A11.45 11.45 0 014.5 16C4.5 9.659 9.659 4.5 16 4.5S27.5 9.659 27.5 16 22.341 27.5 16 27.5zm6.544-8.817c-.36-.18-2.128-1.05-2.459-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.521-.561-2.897-1.789-1.071-.955-1.794-2.136-2.004-2.496-.21-.36-.022-.555.158-.734.162-.162.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.293-.702-.59-.607-.81-.618l-.69-.012c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.15 5.44.86.37 1.53.59 2.06.76.87.28 1.66.24 2.29.15.7-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
        </svg>
      </a>
    </>
  );
};
