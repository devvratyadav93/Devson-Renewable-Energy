import React from 'react';

export const ProjectSummarySection: React.FC = () => {
  return (
    <section id="summary" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">01 —</span>{' '}
            <span className="sec-num-text">PROJECT SUMMARY</span>
          </div>
          <h2 className="sec-heading">The plant, at a glance.</h2>
          <p>Key technical parameters for the proposed on-grid, ground-mounted system.</p>
        </div>
        <div className="info-grid">
          <div className="summary-card">
            <div className="summary-card-head">Site &amp; System</div>
            <div className="summary-row">
              <span className="k">Location</span>
              <span className="v">Bawadiya Kala, Bhopal, MP</span>
            </div>
            <div className="summary-row">
              <span className="k">Plant capacity</span>
              <span className="v">12.50 MWp</span>
            </div>
            <div className="summary-row">
              <span className="k">Module technology</span>
              <span className="v">TOPCon 625 Wp</span>
            </div>
            <div className="summary-row">
              <span className="k">Area required</span>
              <span className="v">30 acres</span>
            </div>
            <div className="summary-row">
              <span className="k">Mounting structure</span>
              <span className="v">Seasonal tilt</span>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-card-head">Scheme &amp; Contact</div>
            <div className="summary-row">
              <span className="k">Project scheme</span>
              <span className="v">PM-KUSUM</span>
            </div>
            <div className="summary-row">
              <span className="k">Finance options</span>
              <span className="v">SBI Agri · SBI MSME · Canara · AU</span>
            </div>
            <div className="summary-row">
              <span className="k">Developer contact</span>
              <span className="v">Ashutosh Pandey</span>
            </div>
            <div className="summary-row">
              <span className="k">Offer date</span>
              <span className="v">06 April 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
