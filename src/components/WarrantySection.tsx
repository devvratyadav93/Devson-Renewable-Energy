import React from 'react';

export const WarrantySection: React.FC = () => {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">06 —</span>{' '}
            <span className="sec-num-text">WARRANTY</span>
          </div>
          <h2 className="sec-heading">Backed long after handover.</h2>
          <p>Manufacturing defect and performance warranty by component.</p>
        </div>
        <div className="warranty-grid reveal">
          <div className="warranty-card">
            <div className="wc-top">
              <h4>Solar Modules</h4>
              <span className="wc-years">30 yrs</span>
            </div>
            <p>
              Product warranty against manufacturing defect and poor workmanship. Performance warranty: 90% rated output at year 10, 80% at year 30.
            </p>
          </div>
          <div className="warranty-card">
            <div className="wc-top">
              <h4>Inverter</h4>
              <span className="wc-years">5 + 25 yrs</span>
            </div>
            <p>Standard 5-year manufacturer warranty, extendable up to 25 years.</p>
          </div>
          <div className="warranty-card">
            <div className="wc-top">
              <h4>Mounting Structure</h4>
              <span className="wc-years">25 yrs</span>
            </div>
            <p>Structural warranty covering the full module mounting system.</p>
          </div>
          <div className="warranty-card">
            <div className="wc-top">
              <h4>Other BOS</h4>
              <span className="wc-years">As per OEM</span>
            </div>
            <p>Balance-of-system components covered as per original equipment manufacturer terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
