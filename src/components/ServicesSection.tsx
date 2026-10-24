import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-text">OUR SERVICES</span>
          </div>
          <h2 className="sec-heading">DEVSON Is Driving Growth And Adoption In The Renewable Energy Sector.</h2>
          <p>
            From rooftop solar modules and turnkey EPC to solar water pumps, energy storage, and industrial solar plants.
          </p>
        </div>

        <div className="services-img-wrap reveal">
          {/* Screen-only: service.png (hidden in PDF print) */}
          <img
            src="/assets/service.png"
            alt="DEVSON Renewable Energy Services — Solar Module, EPC Service, Rooftop Solar, Floating Solar, Grid/Off-Grid Inverters, Water Pumps, Energy Storage"
            className="services-full-img screen-only"
          />
          {/* PDF-only: services-pdf.png (hidden on screen) */}
          <img
            src="/assets/services-pdf.png"
            alt="DEVSON Renewable Energy Services"
            className="services-full-img print-only"
          />
        </div>
      </div>
    </section>
  );
};
