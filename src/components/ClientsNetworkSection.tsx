'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface NetworkPartner {
  name: string;
  category: 'banking' | 'technology' | 'institutional';
  tagEn: string;
  tagHi: string;
  roleEn: string;
  roleHi: string;
  icon: string;
}

const networkPartners: NetworkPartner[] = [
  {
    name: 'State Bank of India (SBI)',
    category: 'banking',
    tagEn: 'Primary Corporate Banker',
    tagHi: 'प्रमुख कॉर्पोरेट बैंक',
    roleEn: 'Dedicated Solar Rooftop Loans & PM Surya Ghar Subsidy Direct Credit',
    roleHi: 'सोलर रूफटॉप ऋण एवं पीएम सूर्य घर सब्सिडी प्रत्यक्ष जमा सुविधा',
    icon: '🏦',
  },
  {
    name: 'IREDA & Power Finance Corp (PFC)',
    category: 'banking',
    tagEn: 'Renewable Development Finance',
    tagHi: 'नवीकरणीय विकास वित्त',
    roleEn: 'Institutional Renewable Financing & Low-Interest Green Credits',
    roleHi: 'नवीकरणीय ऊर्जा वित्तीय पोषण एवं हरित रियायती ऋण',
    icon: '🏛️',
  },
  {
    name: 'Waaree Energies Limited',
    category: 'technology',
    tagEn: 'Tier-1 Module Partner',
    tagHi: 'टियर-1 सोलर मॉड्यूल',
    roleEn: 'High-Efficiency Monocrystalline & Bi-Facial Solar PV Modules',
    roleHi: 'उच्च क्षमता वाले मोनोक्रिस्टलाइन एवं बाई-फेशियल सोलर पैनल',
    icon: '☀️',
  },
  {
    name: 'Sungrow & Schneider Electric',
    category: 'technology',
    tagEn: 'Inverters & Switchgear',
    tagHi: 'इनवर्टर एवं सुरक्षा उपकरण',
    roleEn: 'Grid-Tied Smart String Inverters & HT Protection Switchgears',
    roleHi: 'ग्रिड-टाइड स्मार्ट स्ट्रिंग इनवर्टर एवं उच्च सुरक्षा स्विचगियर',
    icon: '⚡',
  },
  {
    name: 'BREDA (Bihar Renewable Energy)',
    category: 'institutional',
    tagEn: 'State Nodal Agency',
    tagHi: 'राज्य नोडल एजेंसी',
    roleEn: 'Bihar State Renewable Energy Accreditation & Subsidy Coordination',
    roleHi: 'बिहार राज्य अक्षय ऊर्जा प्रत्यायन एवं राज्य सब्सिडी समन्वय',
    icon: '📜',
  },
  {
    name: 'NBPDCL & SBPDCL (Bihar DISCOMs)',
    category: 'institutional',
    tagEn: 'Power Distribution Utilities',
    tagHi: 'विद्युत वितरण कंपनियां',
    roleEn: 'Bi-Directional Net Metering Approvals & Grid Feasibility Feeder Link',
    roleHi: 'नेट-मीटरिंग स्वीकृति एवं ग्रिड कनेक्टिविटी अनुमोदन',
    icon: '🔌',
  },
];

export const ClientsNetworkSection: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'banking' | 'technology' | 'institutional'>('all');

  const filteredPartners = activeTab === 'all'
    ? networkPartners
    : networkPartners.filter((p) => p.category === activeTab);

  return (
    <section id="clients-network" className="clients-network-section">
      <div className="wrap">
        <div className="section-head text-center" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
          <div className="sec-num" style={{ justifyContent: 'center' }}>
            <span className="sec-num-text">
              {language === 'en' ? 'VALUABLE NETWORK' : 'हमारा नेटवर्क'}
            </span>
          </div>
          <h2 className="sec-heading">
            {language === 'en' ? 'Institutional Affiliations & Technology Alliances' : 'संस्थागत संबद्धताएं एवं तकनीकी सहयोग'}
          </h2>
          <p style={{ maxWidth: '780px', margin: '0 auto' }}>
            {language === 'en'
              ? 'Backed by premier banking institutions for seamless customer solar loans, accredited with Bihar state utilities for net-metering, and partnered with Bloomberg Tier-1 equipment manufacturers.'
              : 'ग्राहकों के लिए सुगम सोलर ऋण हेतु प्रमुख बैंकों से संबद्ध, नेट-मीटरिंग के लिए बिहार डिस्कॉम से अधिकृत एवं ब्लूमबर्ग टियर-1 उपकरण निर्माताओं से अनुबंधित।'}
          </p>
        </div>

        {/* Network Category Tabs */}
        <div className="network-tabs-bar reveal">
          <button
            type="button"
            className={`net-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            {language === 'en' ? 'All Partners (6)' : 'सभी साझेदार (6)'}
          </button>
          <button
            type="button"
            className={`net-tab-btn ${activeTab === 'banking' ? 'active' : ''}`}
            onClick={() => setActiveTab('banking')}
          >
            🏦 {language === 'en' ? 'Banking & Green Finance' : 'बैंक एवं ग्रीन फाइनेंस'}
          </button>
          <button
            type="button"
            className={`net-tab-btn ${activeTab === 'technology' ? 'active' : ''}`}
            onClick={() => setActiveTab('technology')}
          >
            ☀️ {language === 'en' ? 'Tier-1 Equipment & Inverters' : 'टियर-1 उपकरण एवं इनवर्टर'}
          </button>
          <button
            type="button"
            className={`net-tab-btn ${activeTab === 'institutional' ? 'active' : ''}`}
            onClick={() => setActiveTab('institutional')}
          >
            🏛️ {language === 'en' ? 'DISCOMs & State Agencies' : 'डिस्कॉम एवं राज्य एजेंसियां'}
          </button>
        </div>

        {/* Partner Cards Grid */}
        <div className="network-cards-grid reveal">
          {filteredPartners.map((p, idx) => (
            <div key={idx} className="partner-card">
              <div className="partner-card-top">
                <span className="partner-icon">{p.icon}</span>
                <span className="partner-badge">
                  {language === 'en' ? p.tagEn : p.tagHi}
                </span>
              </div>
              <h4 className="partner-name">{p.name}</h4>
              <p className="partner-role">
                {language === 'en' ? p.roleEn : p.roleHi}
              </p>
            </div>
          ))}
        </div>

        {/* Official Affiliation Document Card with Animated Scanner Shimmer */}
        <div className="clients-dossier-card reveal">
          <div className="dossier-header-bar">
            <div className="dossier-tag">
              <span className="live-pulse-dot"></span>
              <span>{language === 'en' ? 'VERIFIED AFFILIATION MATRIX' : 'अधिकृत संबद्धता तालिका'}</span>
            </div>
            <div className="dossier-meta">
              <span>{language === 'en' ? 'Official DEVSON Ecosystem · Updated 2026' : 'देवसन अधिकृत नेटवर्क · संस्करण 2026'}</span>
            </div>
          </div>

          <div className="clients-image-wrap">
            <div className="network-scan-beam"></div>
            <img
              src="/assets/clients-affiliations.png"
              alt="Valuable Clients and Banking Affiliations"
              className="clients-affiliations-img"
            />
          </div>

          <div className="dossier-footer-features">
            <div className="feature-item">
              <span className="fi-icon">✓</span>
              <span>{language === 'en' ? '100% DISCOM Net-Metering Compliance' : '100% डिस्कॉम नेट-मीटरिंग तकनीकी अनुपालन'}</span>
            </div>
            <div className="feature-item">
              <span className="fi-icon">✓</span>
              <span>{language === 'en' ? 'Direct Benefit Transfer (DBT) Portal Support' : 'पीएम सूर्य घर डीबीटी पोर्टल प्रत्यक्ष सहयोग'}</span>
            </div>
            <div className="feature-item">
              <span className="fi-icon">✓</span>
              <span>{language === 'en' ? 'SBI & PSU Bank Direct Rooftop Loan Linkage' : 'एसबीआई एवं राष्ट्रीयकृत बैंक सोलर लोन सुविधा'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
