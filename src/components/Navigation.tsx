'use client';

import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <img
            src="/assets/logos/asa-epc-logo.png"
            alt="ASA EPC Pvt. Ltd."
            className="nav-logo"
          />
        </div>
        <div className={`nav-links ${menuOpen ? 'show' : ''}`} id="nav-links">
          <a href="#summary" onClick={closeMenu}>Summary</a>
          <a href="#specification" onClick={closeMenu}>Specification</a>
          <a href="#scope" onClick={closeMenu}>Scope</a>
          <a href="#schedule" onClick={closeMenu}>Schedule</a>
          <a href="#commercial" onClick={closeMenu}>Commercial</a>
        </div>
        <div className="nav-actions">
          <a className="nav-cta desktop-only" href="#commercial">View Pricing</a>
          <button
            className={`hamburger mobile-only ${menuOpen ? 'active' : ''}`}
            id="hamburger-btn"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
