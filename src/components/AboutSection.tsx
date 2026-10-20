import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-text">ABOUT ASA EPC</span>
          </div>
          <h2 className="sec-heading">Concept to commissioning, under one roof.</h2>
          <p>
            Nine years of proven solar delivery, backed by a premier Waaree Energy franchise partnership.
          </p>
        </div>

        <div className="info-grid">
          <div>
            <p className="lede">
              <strong>ASA EPC Pvt. Ltd.</strong> is a premier solar energy company driving growth and adoption across India and overseas. With over 100+ MW commissioned and a 200+ MW pipeline, we engineer and construct high-performance utility and industrial solar assets.
            </p>
            <div className="pillar-list">
              <div className="pillar">
                <div className="ic">01</div>
                <div>
                  <strong>Concept to Commissioning:</strong> Feasibility, regulatory approvals, turnkey engineering, procurement, construction, and power evacuation.
                </div>
              </div>
              <div className="pillar">
                <div className="ic">02</div>
                <div>
                  <strong>Waaree Strategic Partner:</strong> Direct OEM supply chains ensuring Tier-1 pricing, authentic Tier-1 warranty backing, and prioritized module delivery.
                </div>
              </div>
              <div className="pillar">
                <div className="ic">03</div>
                <div>
                  <strong>Pan-India &amp; Global Footprint:</strong> Operating across Madhya Pradesh, Maharashtra, Rajasthan, and expanding to international renewable corridors.
                </div>
              </div>
              <div className="pillar">
                <div className="ic">04</div>
                <div>
                  <strong>End-to-End Ownership:</strong> Single-window accountability for civil, electrical, structural, evacuation line, and regulatory liaisoning.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="summary-card">
              <div className="summary-card-head">Company Credentials</div>
              <div className="summary-row">
                <span className="k">Corporate Identity</span>
                <span className="v">ASA EPC Pvt. Ltd.</span>
              </div>
              <div className="summary-row">
                <span className="k">DPIIT Recognition</span>
                <span className="v">DIPP19520</span>
              </div>
              <div className="summary-row">
                <span className="k">Corporate CIN</span>
                <span className="v">U31905MP2018PTC04527</span>
              </div>
              <div className="summary-row">
                <span className="k">Franchise Partnership</span>
                <span className="v">Waaree Energies Ltd.</span>
              </div>
              <div className="summary-row">
                <span className="k">Industry Experience</span>
                <span className="v">9+ Years</span>
              </div>
              <div className="summary-row">
                <span className="k">EPC Commissioned</span>
                <span className="v">100+ MW</span>
              </div>
              <div className="summary-row">
                <span className="k">Pipeline Capacity</span>
                <span className="v">200+ MW</span>
              </div>
              <div className="summary-row">
                <span className="k">Offices &amp; Facilities</span>
                <span className="v">Bhopal (HQ) · Mumbai · Dubai</span>
              </div>
            </div>
          </div>
        </div>

        {/* Waaree Callout */}
        <div className="waaree-callout reveal">
          <div className="waaree-callout-icon">⚡</div>
          <div>
            <div className="waaree-callout-title">Authorised Waaree Energy Franchise Partner</div>
            <div className="waaree-callout-sub">
              Leveraging India&apos;s largest solar PV module manufacturer. Guaranteed Tier-1 Bill of Materials, factory-direct warranty enforcement, and priority cell &amp; module allocations for utility-scale ground mount projects.
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="vm-grid reveal">
          <div className="vm-card vision">
            <div className="vm-card-label">Strategic Vision</div>
            <div className="vm-card-head">Pioneering Sustainable Energy</div>
            <p className="vm-card-text">
              To be the benchmark in turnkey renewable engineering across Asia, delivering clean, reliable, and cost-effective solar power systems that empower commercial growth while accelerating decarbonization.
            </p>
          </div>
          <div className="vm-card mission">
            <div className="vm-card-label">Corporate Mission</div>
            <div className="vm-card-head">Engineering Without Compromise</div>
            <p className="vm-card-text">
              Deliver highest-yield solar power infrastructure through world-class components, precision civil-electrical engineering, meticulous project execution, and enduring client partnerships.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values-wrap reveal">
          <div className="cv-strip-label">Our Core Values</div>
          <div className="cv-strip">
            <div className="cv-value"><span className="cv-value-name">Innovation</span></div>
            <div className="cv-value"><span className="cv-value-name">Quality</span></div>
            <div className="cv-value"><span className="cv-value-name">Sustainability</span></div>
            <div className="cv-value"><span className="cv-value-name">Customer First</span></div>
            <div className="cv-value"><span className="cv-value-name">Integrity</span></div>
          </div>
        </div>

        {/* About Video Player */}
        <div className="about-video-wrap screen-only reveal">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://res.cloudinary.com/dfj3pc8qy/video/upload/q_auto/sbtpuv8x8mltwxf3xlw0.jpg"
            className="about-video-player"
          >
            <source
              src="https://res.cloudinary.com/dfj3pc8qy/video/upload/q_auto,f_mp4/sbtpuv8x8mltwxf3xlw0.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/dfj3pc8qy/video/upload/q_auto,f_webm/sbtpuv8x8mltwxf3xlw0.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </section>
  );
};
