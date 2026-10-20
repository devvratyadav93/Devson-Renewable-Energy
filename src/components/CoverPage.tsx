import React from 'react';

export const CoverPage: React.FC = () => {
  return (
    <div className="cover-page">
      <div className="cv-top">
        <img
          src="/assets/logos/asa-epc-logo.png"
          alt="ASA EPC Pvt. Ltd."
          className="cv-logo"
        />
        <div className="cv-top-right">
          <div className="cv-company-name">ASA EPC Pvt. Ltd.</div>
          <div className="cv-credentials">
            DPIIT Recognised &nbsp;·&nbsp; Waaree Energy Franchise Partner &nbsp;·&nbsp; 9 Years of Solar Excellence
          </div>
        </div>
      </div>
      <div className="cv-main">
        <div className="cv-eyebrow">Open Access · KUSUM Solar Proposal</div>
        <h1 className="cv-title">12,500 KWp DC Grid-Connected Ground Mount Turnkey Solar Project</h1>
        <div className="cv-divider"></div>
        <p className="cv-subtitle">
          A techno-commercial offer prepared for D K Builders — Bawadiya Kala, Bhopal, MP, built on nine years of solar EPC delivery and a Waaree Energy partnership.
        </p>
      </div>
      <div className="cv-bottom">
        <div className="cv-meta-grid">
          <div className="cv-meta-item">
            <div className="cv-meta-label">Prepared For</div>
            <div className="cv-meta-value">D K Builders</div>
          </div>
          <div className="cv-meta-item">
            <div className="cv-meta-label">Site Location</div>
            <div className="cv-meta-value">Bawadiya Kala, Bhopal, MP</div>
          </div>
          <div className="cv-meta-item">
            <div className="cv-meta-label">Offer Date</div>
            <div className="cv-meta-value">06 April 2027</div>
          </div>
          <div className="cv-meta-item">
            <div className="cv-meta-label">Project Scheme</div>
            <div className="cv-meta-value">PM-KUSUM</div>
          </div>
        </div>
        <div className="cv-stats-strip">
          <div className="cv-stat-item">
            <span className="cv-stat-num">9 yrs</span>
            <span className="cv-stat-lbl">Industry experience</span>
          </div>
          <div className="cv-stat-item">
            <span className="cv-stat-num">100+ MW</span>
            <span className="cv-stat-lbl">EPC projects commissioned</span>
          </div>
          <div className="cv-stat-item">
            <span className="cv-stat-num">200+</span>
            <span className="cv-stat-lbl">Projects in pipeline</span>
          </div>
          <div className="cv-stat-item">
            <span className="cv-stat-num">2</span>
            <span className="cv-stat-lbl">Country presence</span>
          </div>
        </div>
      </div>
    </div>
  );
};
