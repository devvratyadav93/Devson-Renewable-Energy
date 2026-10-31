'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const clients = [
  {
    name: 'Waaree Energies',
    category: 'Tier-1 Solar Modules',
    logo: '/assets/logos/clients/waaree.png',
  },
  {
    name: 'L&T Construction',
    category: 'EPC Infrastructure',
    logo: '/assets/logos/clients/lt_construction.png',
  },
  {
    name: 'State Bank of India',
    category: 'Solar Loans & DBT Linkage',
    logo: '/assets/logos/clients/sbi.png',
  },
  {
    name: 'Bajaj',
    category: 'Commercial Client',
    logo: '/assets/logos/clients/bajaj.png',
  },
  {
    name: 'Shyam Steel',
    category: 'Industrial Client',
    logo: '/assets/logos/clients/shyam_steel.png',
  },
  {
    name: 'Envisol',
    category: 'Renewable Engineering',
    logo: '/assets/logos/clients/envisol.png',
  },
  {
    name: 'Novus Green',
    category: 'Solar EPC Partner',
    logo: '/assets/logos/clients/novus_green.png',
  },
  {
    name: 'Shakti Pumps',
    category: 'Agri Solar Irrigation',
    logo: '/assets/logos/clients/shakti.png',
  },
  {
    name: 'Canara Bank',
    category: 'Green Energy Finance',
    logo: '/assets/logos/clients/canara_bank.png',
  },
  {
    name: 'KEC International',
    category: 'Power Transmission',
    logo: '/assets/logos/clients/kec.png',
  },
  {
    name: 'Rayzon Solar',
    category: 'Tier-1 Mono PERC',
    logo: '/assets/logos/clients/rayzon_solar.png',
  },
  {
    name: 'Bhawani',
    category: 'Commercial EPC',
    logo: '/assets/logos/clients/bhawani.png',
  },
  {
    name: 'Disha Interio',
    category: 'MSME Rooftop Solar',
    logo: '/assets/logos/clients/disha_interio.png',
  },
  {
    name: 'CVRU',
    category: 'Institutional Campus',
    logo: '/assets/logos/clients/cvru.png',
  },
  {
    name: 'Monte Carlo',
    category: 'Infrastructure Group',
    logo: '/assets/logos/clients/monte_carlo.png',
  },
  {
    name: 'AU Small Finance Bank',
    category: 'Rooftop Solar Finance',
    logo: '/assets/logos/clients/au_bank.png',
  },
];

const projects = [
  {
    id: 'nawada',
    img: '/assets/jhiganpur.png',
    alt: 'Nawada 2 MW Solar Project',
    mw: '2 MW',
    loc: 'Nawada',
    locHi: 'नवादा',
    state: 'Commissioned & Grid-Tied',
    type: 'Ground-Mounted EPC',
    voltage: '33 kV Evacuation',
    modules: 'Tier-1 Mono PERC',
  },
  {
    id: 'rajgir',
    img: '/assets/khurai.png',
    alt: 'Rajgir 2 MW Solar Project',
    mw: '2 MW',
    loc: 'Rajgir',
    locHi: 'राजगीर',
    state: 'Commissioned & Active',
    type: 'Utility Ground Mount',
    voltage: '33 kV Substation Link',
    modules: 'High-Yield Bi-Facial',
  },
  {
    id: 'patna',
    img: '/assets/raisen.png',
    alt: 'Patna 2 MW Solar Project',
    mw: '2 MW',
    loc: 'Patna',
    locHi: 'पटना',
    state: 'Commissioned & Synchronized',
    type: 'Industrial Solar EPC',
    voltage: '11 kV Feeder Link',
    modules: 'Smart String Inverters',
  },
  {
    id: 'bhagalpur',
    img: '/assets/guna.png',
    alt: 'Bhagalpur 6 MW Solar Project',
    mw: '6 MW',
    loc: 'Bhagalpur',
    locHi: 'भागलपुर',
    state: 'Commissioned & Operating',
    type: 'Open Access Solar Park',
    voltage: '33 kV Evacuation Line',
    modules: 'SCADA Telemetry System',
  },
];

export const TrackRecordSection: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Duplicate for seamless infinite marquee loop
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="track-record-section">
      <div className="wrap">
        <div className="section-head text-center" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
          <div className="sec-num" style={{ justifyContent: 'center' }}>
            <span className="sec-num-text">
              {language === 'en' ? 'PROVEN TRACK RECORD' : 'प्रमाणित ट्रैक रिकॉर्ड'}
            </span>
          </div>
          <h2 className="sec-heading">
            {language === 'en' ? 'Trusted by 200+ Clients & Power Projects' : '200+ ग्राहकों एवं सौर परियोजनाओं द्वारा विश्वसनीय'}
          </h2>
          <p style={{ maxWidth: '780px', margin: '0 auto' }}>
            {language === 'en'
              ? 'Our engineering leadership brings extensive on-ground execution experience across utility-scale ground mount solar farms, commercial industrial rooftops, and community installations.'
              : 'हमारा तकनीकी नेतृत्व उपयोगिता-स्तरीय ग्राउंड माउंट सोलर फार्म, वाणिज्यिक औद्योगिक रूफटॉप एवं सामुदायिक संयंत्रों में गहन जमीनी अनुभव प्रस्तुत करता है।'}
          </p>
        </div>

        {/* Live Impact Counters Ticker */}
        <div className="impact-metrics-bar reveal">
          <div className="impact-col">
            <div className="impact-val">12+ <span className="impact-unit">MWp</span></div>
            <div className="impact-lbl">
              {language === 'en' ? 'EPC Engineering Pipeline' : 'ईपीसी इंजीनियरिंग क्षमता'}
            </div>
          </div>
          <div className="impact-divider"></div>
          <div className="impact-col">
            <div className="impact-val">250+ <span className="impact-unit">Sites</span></div>
            <div className="impact-lbl">
              {language === 'en' ? 'Rooftop Feasibility Surveys' : 'रूफटॉप निरीक्षण एवं सर्वे'}
            </div>
          </div>
          <div className="impact-divider"></div>
          <div className="impact-col">
            <div className="impact-val">99.2% <span className="impact-unit">Uptime</span></div>
            <div className="impact-lbl">
              {language === 'en' ? 'Grid Synchronization Reliability' : 'ग्रिड समकालन विश्वसनीयता'}
            </div>
          </div>
          <div className="impact-divider"></div>
          <div className="impact-col">
            <div className="impact-val">30 <span className="impact-unit">Days</span></div>
            <div className="impact-lbl">
              {language === 'en' ? 'Turnkey Rooftop Handover' : 'टर्नकी रूफटॉप कमीशनिंग'}
            </div>
          </div>
        </div>

        {/* Continuous Animated Partner & Banking Logo Marquee */}
        <div className="marquee-wrapper reveal">
          <div className="marquee-header">
            <span className="marquee-tag">
              ★ {language === 'en' ? 'COMMERCIAL CLIENTS, TIER-1 MODULES & BANKING PARTNERS' : 'वाणिज्यिक ग्राहक, टियर-1 मॉड्यूल एवं बैंकिंग साझेदार'}
            </span>
            <span className="marquee-hint">
              {language === 'en' ? '(Hover to pause)' : '(रोकने के लिए कर्सर रखें)'}
            </span>
          </div>
          <div className="marquee-track-container">
            <div className="marquee-track">
              {marqueeClients.map((c, i) => (
                <div key={i} className="client-logo-card">
                  <div className="client-logo-frame">
                    <img src={c.logo} alt={c.name} className="client-logo-img" loading="lazy" />
                  </div>
                  <div className="client-meta">
                    <span className="client-name">{c.name}</span>
                    <span className="client-category">{c.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Commissioned Projects Showcase */}
        <div className="projects-showcase-wrap reveal" style={{ marginTop: '48px' }}>
          <div className="projects-header-row">
            <div>
              <span className="sub-badge">
                {language === 'en' ? 'COMMISSIONED INSTALLATIONS' : 'स्थापित परियोजनाएं'}
              </span>
              <h3 className="projects-title">
                {language === 'en' ? 'Featured Utility & Commercial Solar Plants' : 'प्रमुख उपयोगिता एवं वाणिज्यिक सौर संयंत्र'}
              </h3>
            </div>
            <span className="inspect-hint">
              🔍 {language === 'en' ? 'Click card to view technical specifications' : 'तकनीकी विवरण देखने के लिए कार्ड पर क्लिक करें'}
            </span>
          </div>

          <div className="proj-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className="proj-card proj-card-photo"
                onClick={() => setSelectedProject(p)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${p.alt}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(p);
                  }
                }}
              >
                <img src={p.img} alt={p.alt} className="proj-photo" />
                <div className="proj-badge-top">
                  <span className="live-status-dot"></span>
                  <span>{p.state}</span>
                </div>
                <div className="proj-overlay">
                  <div className="pc-mw">{p.mw}</div>
                  <div className="pc-loc">📍 {language === 'en' ? p.loc : p.locHi}</div>
                  <div className="pc-tag">{p.type}</div>
                  <div className="pc-action">
                    <span>{language === 'en' ? 'View Technical Specs →' : 'तकनीकी विवरण देखें →'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Specs Inspection Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="modal-img-wrap">
              <img src={selectedProject.img} alt={selectedProject.alt} />
              <div className="modal-img-tag">
                <span className="live-status-dot"></span>
                <span>{selectedProject.state}</span>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-mw-badge">{selectedProject.mw} Grid-Connected</div>
              <h3 className="modal-title">{selectedProject.alt}</h3>
              <p className="modal-loc">📍 {language === 'en' ? `Location: ${selectedProject.loc}` : `स्थान: ${selectedProject.locHi}`}</p>

              <div className="modal-specs-grid">
                <div className="modal-spec-item">
                  <span className="msi-lbl">Project Type</span>
                  <span className="msi-val">{selectedProject.type}</span>
                </div>
                <div className="modal-spec-item">
                  <span className="msi-lbl">Grid Interconnection</span>
                  <span className="msi-val">{selectedProject.voltage}</span>
                </div>
                <div className="modal-spec-item">
                  <span className="msi-lbl">Technology Standard</span>
                  <span className="msi-val">{selectedProject.modules}</span>
                </div>
                <div className="modal-spec-item">
                  <span className="msi-lbl">Turnkey Execution</span>
                  <span className="msi-val">DEVSON EPC Engineering</span>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="modal-btn-close"
                  onClick={() => setSelectedProject(null)}
                >
                  {language === 'en' ? 'Close Specifications' : 'बंद करें'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
