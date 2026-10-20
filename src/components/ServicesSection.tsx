import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="asa-services" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">09 —</span>{' '}
            <span className="sec-num-text">OUR SERVICES</span>
          </div>
          <h2 className="sec-heading">ASA Is Driving Growth And Adoption In The Renewable Energy Sector.</h2>
          <p>
            From solar modules and EPC services to hydrogen energy and financial solutions — a complete renewable energy ecosystem.
          </p>
        </div>

        <div className="services-img-wrap reveal">
          {/* Screen-only: service.png (hidden in PDF print) */}
          <img
            src="/assets/service.png"
            alt="ASA EPC Services — Solar Module, EPC Service, Rooftop Solar, Floating Solar, Grid/Off-Grid Inverters, Water Pumps, Energy Storage, Thermal Solar Power Plant, Hydrogen Energy, Solar Cables, Solar Partners, Financial Services"
            className="services-full-img screen-only"
          />
          {/* PDF-only: services-pdf.png (hidden on screen) */}
          <img
            src="/assets/services-pdf.png"
            alt="ASA EPC Services"
            className="services-full-img print-only"
          />
        </div>
      </div>
    </section>
  );
};
