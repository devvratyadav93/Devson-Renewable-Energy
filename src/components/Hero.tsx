import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero-video-wrap screen-only reveal">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/dfj3pc8qy/video/upload/q_auto/sbtpuv8x8mltwxf3xlw0.jpg"
          className="hero-video-player"
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
        <div className="hero-video-overlay"></div>
      </div>
      <div className="hero-inner">
        <span className="eyebrow">Open Access · KUSUM Solar Proposal</span>
        <h1>
          12,500 KWp DC Grid-Connected Ground Mount <em>Turnkey Solar Project</em>
        </h1>
        <p className="hero-sub">
          A techno-commercial offer prepared for D K Builders — Bawadiya Kala, Bhopal, MP, built on nine years of solar EPC delivery and a Waaree Energy partnership.
        </p>
        <div className="hero-meta">
          <div>
            <div className="hm-label">Prepared For</div>
            <div className="hm-value">D K Builders</div>
          </div>
          <div>
            <div className="hm-label">Site Location</div>
            <div className="hm-value">Bawadiya Kala, Bhopal, MP</div>
          </div>
          <div>
            <div className="hm-label">Offer Date</div>
            <div className="hm-value">06 April 2027</div>
          </div>
          <div>
            <div className="hm-label">Project Scheme</div>
            <div className="hm-value">PM-KUSUM Component A / Open Access</div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hstat">
            <div className="num">12,500 KWp</div>
            <div className="lbl">DC System Capacity</div>
          </div>
          <div className="hstat">
            <div className="num">10,000 KW</div>
            <div className="lbl">Grid Export AC Capacity</div>
          </div>
          <div className="hstat">
            <div className="num">120 Days</div>
            <div className="lbl">Start to Handover & COD</div>
          </div>
          <div className="hstat">
            <div className="num">₹31.18 Cr</div>
            <div className="lbl">Total Turnkey Value (incl. GST)</div>
          </div>
        </div>
      </div>
    </header>
  );
};
